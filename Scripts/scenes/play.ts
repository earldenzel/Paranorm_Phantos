module scenes {

    export abstract class PlayScene extends objects.Scene {
        // Variables
        protected player: objects.Player;
        protected enemies: Array<objects.Enemy> = new Array<objects.Enemy>();
        protected obstacles: Array<objects.GameObject> = new Array<objects.GameObject>();
        protected cosmetics: Array<objects.GameObject> = new Array<objects.GameObject>();
        protected key: objects.Key;

        //ceilings, doors and floors
        //private ceilingVertical:objects.Background;
        //private ceilingHorizontal:objects.Background;
        private floor: objects.Background;
        //private wallVertical: objects.Background;
        //private wallHorizontal: objects.Background;

        private ceilingAndWall: objects.Background;

        protected hasDoorTop: boolean;
        protected hasDoorBot: boolean;
        protected hasDoorLeft: boolean;
        protected hasDoorRight: boolean;

        protected isDoorTopLocked: boolean;
        protected isDoorBotLocked: boolean;
        protected isDoorLeftLocked: boolean;
        protected isDoorRightLocked: boolean;

        private doorTop: objects.Background;
        private doorBot: objects.Background;
        private doorLeft: objects.Background;
        private doorRight: objects.Background;
        private doorTopFrame: objects.Background;
        private doorBotFrame: objects.Background;
        private doorLeftFrame: objects.Background;
        private doorRightFrame: objects.Background;

        //protected playerStatus: objects.Label;
        //protected messageStatus: objects.Label;
        //protected controllerHelp: objects.Label;

        protected playerInfo: managers.PlayerInfo_UI;

        // Constructor
        constructor(
            hasDoorTop: boolean,
            hasDoorBot: boolean,
            hasDoorLeft: boolean,
            hasDoorRight: boolean) {
            super();
            this.hasDoorTop = hasDoorTop;
            this.hasDoorBot = hasDoorBot;
            this.hasDoorLeft = hasDoorLeft;
            this.hasDoorRight = hasDoorRight;
            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.player = managers.Game.player;

            this.ceilingAndWall = new objects.Background("background_c_w_all");

            this.ceilingAndWall.y = 110;
            //this.ceilingHorizontal =new objects.Background(this.assetManager,"background_c_hori");
            //this.ceilingVertical =new objects.Background(this.assetManager,"background_c_vert");
            this.floor = new objects.Background("background_f_all");
            this.floor.y = 110;
            //this.wallHorizontal = new objects.Background(this.assetManager,"background_w_hori");
            //this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");

            this.player.canTraverseTop = false;
            this.player.canTraverseBot = false;
            this.player.canTraverseLeft = false;
            this.player.canTraverseRight = false;

            if (this.hasDoorTop) {
                if (this.isDoorTopLocked) {
                    this.doorTop = new objects.Background("background_d_vertC");
                }
                else {
                    this.doorTop = new objects.Background("background_d_vert");
                }
                this.doorTopFrame = new objects.Background("background_d_vertT");
                this.doorTop.y = 110;
                this.doorTopFrame.y = 110;
                this.player.canTraverseTop = !this.isDoorTopLocked;
            }
            if (this.hasDoorBot) {
                if (this.isDoorBotLocked) {
                    this.doorBot = new objects.Background("background_d_vertC");
                }
                else {
                    this.doorBot = new objects.Background("background_d_vert");
                }
                this.doorBotFrame = new objects.Background("background_d_vertT");
                this.doorBot.y = 110;
                this.doorBotFrame.y = 110;
                this.doorBot.Flip();
                this.doorBotFrame.Flip();
                this.player.canTraverseBot = !this.isDoorBotLocked;
            }
            if (this.hasDoorLeft) {
                if (this.isDoorLeftLocked) {
                    this.doorLeft = new objects.Background("background_d_horiC");
                }
                else {
                    this.doorLeft = new objects.Background("background_d_hori");
                }
                this.doorLeftFrame = new objects.Background("background_d_horiT");
                this.doorLeft.y = 110;
                this.doorLeftFrame.y = 110;
                this.player.canTraverseLeft = !this.isDoorLeftLocked;
            }
            if (this.hasDoorRight) {
                if (this.isDoorRightLocked) {
                    this.doorRight = new objects.Background("background_d_horiC");
                }
                else {
                    this.doorRight = new objects.Background("background_d_hori");
                }
                this.doorRightFrame = new objects.Background("background_d_horiT");
                this.doorRight.y = 110;
                this.doorRightFrame.y = 110;
                this.doorRight.Flip();
                this.doorRightFrame.Flip();
                this.player.canTraverseRight = !this.isDoorRightLocked;
            }

            //this.playerStatus = new objects.Label("PLAYER ", "16px", "'Press Start 2P'", "#FFFFFF", 20, 670, false);
            //this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#FFFFFF", 20, 690, false);
            //this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR \nW-A-S-D + J", "16px", "'Press Start 2P'", "#FFFFFF", 20, 710, false);

            //this.playerStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            //this.messageStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            //this.controllerHelp.shadow = new createjs.Shadow("#000000",0,0,10);

            //managers.Game.messageStatus = this.messageStatus;

            this.playerInfo = new managers.PlayerInfo_UI();
            this.playerInfo.PlayerLocation = new math.Vec2(30, 12);
            //this.playerInfo.x = 38;
            this.player.playerStatus.visible = false;

            managers.Game.keyboardManager.playMode = true;

            this.Main();
        }

        public Update(): void {

            this.player.Update();
            let collectiveCollision: boolean = false;
            this.enemies.forEach(e => {
                e.Update();
                //collectiveCollision = collectiveCollision || managers.Collision.Check(managers.Game.player,e);
                collectiveCollision = collectiveCollision ||
                    managers.Collision.CheckWithOffset(managers.Game.player,
                        e,
                        0,
                        -config.Bounds.ENEMY_COLLISION_OFFSET,
                        -config.Bounds.ENEMY_COLLISION_OFFSET,
                        -config.Bounds.ENEMY_COLLISION_OFFSET);
            });
            if (managers.Game.player.isTakingDamage && !collectiveCollision) {
                managers.Game.player.isTakingDamage = false;
            }
            this.obstacles.forEach(e => {
                e.CheckBound();
                this.enemies.forEach(f => {
                    //if enemy is stunned and knocked back on a gap, then enemy dies
                    if (f.isStunned && e instanceof objects.Gap && managers.Collision.Check(e, f)) {
                        f.RemoveFromPlay(f.CalculateBounty());
                    }
                    //if enemy is
                    if (f instanceof objects.TestZombie && e instanceof objects.Barriers) {
                        e.TestZombieCheckBarrierCollision(f);
                    }

                    if (!f.isFlying && e instanceof objects.Gap) {
                        e.CheckGapDamage(f);
                    }
                });
                if (e instanceof objects.Gap) {
                    e.CheckGapDamage(this.player);
                }
            });

            // KEY AND LOCKED DOORS
            if(this.getChildByName("Items_Key") && managers.Collision.Check(this.player,this.key) && this.key.visible){
                this.player.key += 1;
                this.key.RemoveFromPlay();
            }
            // TO BE FIXED AND OPTIMIZED.
            //  The position of Phoebe is accordance to the door is off. 
            //  Thus in the beta version there should be a platform that Phoebe collides when a door is locked.
            //  One pressed with a key, it unlocks.
            //  - Kris Campbell
            if(this.player.y < config.Bounds.DOOR_EASING_TOP || this.player.y > config.Bounds.DOOR_EASING_BOTTOM){
                if(this.player.x == config.Bounds.LEFT_BOUND + this.player.halfW){
                    if(this.hasDoorLeft && this.isDoorLeftLocked && this.player.key > 0){
                        this.isDoorLeftLocked = false;
                        this.player.key -= 1;
                    }
                }
                if(this.player.x == config.Bounds.RIGHT_BOUND - this.player.halfW){
                    if(this.hasDoorRight && this.isDoorRightLocked && this.player.key > 0){
                        this.isDoorRightLocked = false;
                        this.player.key -= 1;
                    }
                }
            }
            if(this.player.x < config.Bounds.DOOR_EASING_LEFT || this.player.x > config.Bounds.DOOR_EASING_RIGHT){
                if(this.player.y == config.Bounds.BOTTOM_BOUND - this.player.halfH){
                    if(this.hasDoorBot && this.isDoorBotLocked && this.player.key > 0){
                        this.isDoorBotLocked = false;
                        this.player.key -= 1;
                    }
                }
                if(this.player.y == this.player.halfH + config.Bounds.TOP_BOUND ){
                    if(this.hasDoorTop && this.isDoorTopLocked && this.player.key > 0){
                        this.isDoorTopLocked = false;
                        this.player.key -= 1;
                    }
                }
            }
            if (this.hasDoorLeft && !this.isDoorLeftLocked && this.doorLeft.name == "background_d_horiC") {
                this.removeChild(this.doorLeft);
                this.doorLeft = new objects.Background("background_d_hori");
                this.doorLeft.y = 110;
                this.player.canTraverseLeft = !this.isDoorLeftLocked;
                this.addChild(this.doorLeft);
                this.setChildIndex(this.doorLeft, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorRight && !this.isDoorRightLocked && this.doorRight.name == "background_d_horiC") {
                this.removeChild(this.doorRight);
                this.doorRight = new objects.Background("background_d_hori");
                this.doorRight.y = 110;
                this.doorRight.Flip();
                this.player.canTraverseRight = !this.isDoorRightLocked;
                this.addChild(this.doorRight);
                this.setChildIndex(this.doorRight, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorTop && !this.isDoorTopLocked && this.doorTop.name == "background_d_vertC") {
                this.removeChild(this.doorTop);
                this.doorTop = new objects.Background("background_d_vert");
                this.doorTop.y = 110;
                this.player.canTraverseTop = !this.isDoorTopLocked;
                this.addChild(this.doorTop);
                this.setChildIndex(this.doorTop, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorBot && !this.isDoorBotLocked && this.doorBot.name == "background_d_vertC") {
                this.removeChild(this.doorBot);
                this.doorBot = new objects.Background("background_d_vert");
                this.doorBot.y = 110;
                this.doorBot.Flip();
                this.player.canTraverseBot = !this.isDoorBotLocked;
                this.addChild(this.doorBot);
                this.setChildIndex(this.doorBot, this.getChildIndex(this.player) - 1);
            }
            //this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
            // Sets the Player Health
            this.playerInfo.PlayerHealth = this.player.hp;
            this.playerInfo.Money = this.player.money;
            this.playerInfo.Key = this.player.key;

            this.playerInfo.PlayerEcto = this.player.ecto;

        }

        public Main(): void {
            // BACKGROUND PLACEMENT

            //floor and walls
            this.addChild(this.floor);
            this.addChild(this.ceilingAndWall);
            //this.addChild(this.wallHorizontal);
            //this.addChild(this.wallVertical);

            //door holes
            if (this.hasDoorTop) {
                this.addChild(this.doorTop);
            }
            if (this.hasDoorBot) {
                this.addChild(this.doorBot);
            }
            if (this.hasDoorLeft) {
                this.addChild(this.doorLeft);
            }
            if (this.hasDoorRight) {
                this.addChild(this.doorRight);
            }

            //ceiling
            //this.addChild(this.ceilingHorizontal);
            //this.addChild(this.ceilingVertical);

            // ITEM PLACEMENT - barriers
            this.obstacles.forEach(e => {
                this.addChild(e);
            });

            // COSMETICS PLACEMENT
            this.cosmetics.forEach(e => {
                this.addChild(e);
            });
            
            // PLAYER PLACEMENT
            this.addChild(this.player);
            this.addChild(this.player.weapon);
            this.player.deadPlayer.forEach(e => {
                this.addChild(e);
            });

            // ENEMY PLACEMENT
            this.enemies.forEach(e => {
                this.addChild(e);
                this.addChild(e.stunIndicator);
            });            

            //door frames
            if (this.hasDoorTop) {
                this.addChild(this.doorTopFrame);
            }
            if (this.hasDoorBot) {
                this.addChild(this.doorBotFrame);
            }
            if (this.hasDoorLeft) {
                this.addChild(this.doorLeftFrame);
            }
            if (this.hasDoorRight) {
                this.addChild(this.doorRightFrame);
            }

            //UI PLACEMENT
            this.addChild(this.player.playerStatus);
            //this.addChild(this.messageStatus);
            //this.addChild(this.controllerHelp);
            this.addChild(this.playerInfo);
        }
    }
}