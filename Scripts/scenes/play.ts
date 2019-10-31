module scenes {

    export abstract class PlayScene extends objects.Scene {
        // Variables
        private player:objects.Player;
        protected enemies: Array<objects.Enemy> = new Array<objects.Enemy>();
        protected barriers: Array<objects.Barriers> = new Array<objects.Barriers>();

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

        private doorTop: objects.Background;        
        private doorBot: objects.Background;
        private doorLeft: objects.Background;
        private doorRight: objects.Background;
        private doorTopFrame: objects.Background;        
        private doorBotFrame: objects.Background;
        private doorLeftFrame: objects.Background;
        private doorRightFrame: objects.Background;

        protected playerStatus: objects.Label;
        protected messageStatus: objects.Label;
        protected controllerHelp: objects.Label;

        private playerInfo: managers.PlayerInfo_UI;

        // Constructor
        constructor(assetManager:createjs.LoadQueue, 
            hasDoorTop: boolean,
            hasDoorBot: boolean,
            hasDoorLeft: boolean,
            hasDoorRight: boolean) {
                super(assetManager);
                this.hasDoorTop = hasDoorTop;
                this.hasDoorBot = hasDoorBot;
                this.hasDoorLeft = hasDoorLeft;
                this.hasDoorRight = hasDoorRight;
                this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.player = objects.Game.player;

            this.ceilingAndWall = new objects.Background(this.assetManager,"background_c_w_all");

            this.ceilingAndWall.y = 110;
            //this.ceilingHorizontal =new objects.Background(this.assetManager,"background_c_hori");
            //this.ceilingVertical =new objects.Background(this.assetManager,"background_c_vert");
            this.floor = new objects.Background(this.assetManager,"background_f_all");
            this.floor.y = 110;
            //this.wallHorizontal = new objects.Background(this.assetManager,"background_w_hori");
            //this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");
            
            this.player.canTraverseTop = false;
            this.player.canTraverseBot = false;
            this.player.canTraverseLeft = false;
            this.player.canTraverseRight = false;

            if (this.hasDoorTop){                
                this.doorTop = new objects.Background(this.assetManager, "background_d_vert");
                this.doorTopFrame = new objects.Background(this.assetManager, "background_d_vertT");
                this.doorTop.y = 110;
                this.doorTopFrame.y = 110;
                this.player.canTraverseTop = true;
            }
            if (this.hasDoorBot){
                this.doorBot = new objects.Background(this.assetManager, "background_d_vert");
                this.doorBotFrame = new objects.Background(this.assetManager, "background_d_vertT");
                this.doorBot.y = 110;
                this.doorBotFrame.y = 110;
                this.doorBot.Flip();
                this.doorBotFrame.Flip();
                this.player.canTraverseBot = true;
            }
            if (this.hasDoorLeft){
                this.doorLeft = new objects.Background(this.assetManager, "background_d_hori");
                this.doorLeftFrame = new objects.Background(this.assetManager,"background_d_horiT");
                this.doorLeft.y = 110;
                this.doorLeftFrame.y = 110;
                this.player.canTraverseLeft = true;
            }
            if (this.hasDoorRight){
                this.doorRight = new objects.Background(this.assetManager, "background_d_hori");
                this.doorRightFrame = new objects.Background(this.assetManager,"background_d_horiT");
                this.doorRight.y = 110;
                this.doorRightFrame.y = 110;
                this.doorRight.Flip();
                this.doorRightFrame.Flip();
                this.player.canTraverseRight = true;
            }

            this.playerStatus = new objects.Label("PLAYER ", "16px", "'Press Start 2P'", "#FFFFFF", 20, 670, false);
            this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#FFFFFF", 20, 690, false);
            this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR \nW-A-S-D + J", "16px", "'Press Start 2P'", "#FFFFFF", 20, 710, false);
            
            this.playerStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            this.messageStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            this.controllerHelp.shadow = new createjs.Shadow("#000000",0,0,10);

            objects.Game.messageStatus = this.messageStatus;

            this.playerInfo = new managers.PlayerInfo_UI(this.assetManager);
            //this.playerInfo.x = 38;

            this.Main();
        }        

        public Update(): void {

            this.player.Update();
            let collectiveCollision: boolean = false;
            this.enemies.forEach(e => {
                e.Update();
                collectiveCollision = collectiveCollision || managers.Collision.Check(objects.Game.player,e);
            });
            if (objects.Game.player.isTakingDamage && !collectiveCollision){
                objects.Game.player.isTakingDamage = false;
            }
            this.barriers.forEach(e =>{
                e.CheckBound();
                this.enemies.forEach(f => {
                    if (f instanceof objects.TestZombie){
                        e.TestZombieCheckBarrierCollision(f);
                    }
                });
            });


            this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
            // Sets the Player Health
            this.playerInfo.PlayerHealth = this.player.hp;

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
            if (this.hasDoorTop){
                this.addChild(this.doorTop);
            }
            if (this.hasDoorBot){
                this.addChild(this.doorBot);
            }
            if (this.hasDoorLeft){
                this.addChild(this.doorLeft);
            }
            if (this.hasDoorRight){
                this.addChild(this.doorRight);
            }

            //ceiling
            //this.addChild(this.ceilingHorizontal);
            //this.addChild(this.ceilingVertical);

            // ITEM PLACEMENT - barriers
            this.barriers.forEach(e => {
                this.addChild(e);
            });

            // ENEMY PLACEMENT
            this.enemies.forEach(e => {
                this.addChild(e);
            });

            // PLAYER PLACEMENT
            this.addChild(this.player.weapon);
            this.addChild(this.player);
            
            //door frames
            if (this.hasDoorTop){
                this.addChild(this.doorTopFrame);
            }
            if (this.hasDoorBot){
                this.addChild(this.doorBotFrame);
            }
            if (this.hasDoorLeft){
                this.addChild(this.doorLeftFrame);
            }
            if (this.hasDoorRight){
                this.addChild(this.doorRightFrame);
            }
            
            //UI PLACEMENT
            this.addChild(this.playerStatus);
            this.addChild(this.messageStatus);
            this.addChild(this.controllerHelp);
            this.addChild(this.playerInfo);
        }
    }
}