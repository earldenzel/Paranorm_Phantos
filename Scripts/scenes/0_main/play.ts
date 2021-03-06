module scenes {

    export abstract class PlayScene extends objects.Scene {
        // Variables
        protected player: objects.Player;
        protected enemies: Array<objects.Enemy> = new Array<objects.Enemy>();
        protected obstacles: Array<objects.GameObject> = new Array<objects.GameObject>();
        protected cosmetics: Array<objects.GameObject> = new Array<objects.GameObject>();
        protected extraLabels: Array<objects.Label> = new Array<objects.Label>();
        protected floatingDamages: Array<objects.Label> = new Array<objects.Label>();
        protected key: objects.Key;
        public design: config.Design;
        private bulletManager: managers.Bullet;
        private shopManager: managers.Shop;
        private chestManager: managers.Chest;
        public hasProjectileShooters: boolean = false;
        protected hasShop: boolean = false;
        protected isBossRoom: boolean = false;

        protected spriteSheet: createjs.SpriteSheet;

        //ceilings, doors and floors
        //private ceilingVertical:objects.Background;
        //private ceilingHorizontal:objects.Background;
        private floor: createjs.Sprite;
        //private wallVertical: objects.Background;
        //private wallHorizontal: objects.Background;

        private ceilingAndWall: createjs.Sprite;

        protected hasDoorTop: boolean;
        protected hasDoorBot: boolean;
        protected hasDoorLeft: boolean;
        protected hasDoorRight: boolean;

        protected isDoorTopLocked: boolean;
        protected isDoorBotLocked: boolean;
        protected isDoorLeftLocked: boolean;
        protected isDoorRightLocked: boolean;

        private doorTop: createjs.Sprite;
        private doorBot: createjs.Sprite;
        private doorLeft: createjs.Sprite;
        private doorRight: createjs.Sprite;
        private doorTopFrame: createjs.Sprite;
        private doorBotFrame: createjs.Sprite;
        private doorLeftFrame: createjs.Sprite;
        private doorRightFrame: createjs.Sprite;

        //protected playerStatus: objects.Label;
        //protected messageStatus: objects.Label;
        //protected controllerHelp: objects.Label;

        protected playerInfo: managers.PlayerInfo_UI;

        // Constructor
        constructor(
            hasDoorTop: boolean,
            hasDoorBot: boolean,
            hasDoorLeft: boolean,
            hasDoorRight: boolean,
            design: config.Design) {
            super();
            this.hasDoorTop = hasDoorTop;
            this.hasDoorBot = hasDoorBot;
            this.hasDoorLeft = hasDoorLeft;
            this.hasDoorRight = hasDoorRight;
            this.design = design;

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.player = managers.Game.player;
            managers.Game.bulletManager.Reset();

            switch (this.design) {
                case config.Design.GRAVEYARD:
                    this.spriteSheet = managers.Game.graveyard_TextureAtlas;
                    break;
                case config.Design.HOTEL:
                    this.spriteSheet = managers.Game.hotel_TextureAtlas;
                    break;
                case config.Design.MANSION:
                    this.spriteSheet = managers.Game.mansion_TextureAtlas;
                    break;
            }

            this.ceilingAndWall = new createjs.Sprite(this.spriteSheet, "CeilingAndWall");
            this.ceilingAndWall.y = 110;

            //this.ceilingHorizontal =new objects.Background(this.assetManager,"background_c_hori");
            //this.ceilingVertical =new objects.Background(this.assetManager,"background_c_vert");
            this.floor = new createjs.Sprite(this.spriteSheet, "Floor");
            if (this.design != config.Design.GRAVEYARD) {
                this.floor.x = 90;
                this.floor.y = 198;
            }
            else {
                this.floor.y = 110;
            }

            //this.wallHorizontal = new objects.Background(this.assetManager,"background_w_hori");
            //this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");

            this.player.canTraverseTop = false;
            this.player.canTraverseBot = false;
            this.player.canTraverseLeft = false;
            this.player.canTraverseRight = false;

            if (this.hasDoorTop) {
                if (this.isDoorTopLocked) {
                    this.doorTop = new createjs.Sprite(this.spriteSheet, "DoorTopLocked");
                    this.doorTop.name = "DoorTopLocked";
                }
                else {
                    this.doorTop = new createjs.Sprite(this.spriteSheet, "DoorTop");
                    this.doorTop.name = "DoorTop";
                }
                if (this.design != config.Design.GRAVEYARD) {
                    this.doorTopFrame = new createjs.Sprite(this.spriteSheet, "DoorTopCeiling");
                    this.doorTopFrame.y = 110;
                    this.doorTopFrame.x = 182;
                }
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorTop.x = 238;
                }
                else {
                    this.doorTop.x = 224;
                }
                this.doorTop.y = 126;

                this.player.canTraverseTop = !this.isDoorTopLocked;
            }
            if (this.hasDoorBot) {
                if (this.isDoorBotLocked) {
                    this.doorBot = new createjs.Sprite(this.spriteSheet, "DoorBottomLocked");
                    this.doorBot.name = "DoorBottomLocked";
                }
                else {
                    this.doorBot = new createjs.Sprite(this.spriteSheet, "DoorBottom");
                    this.doorBot.name = "DoorBottom";
                }
                if (this.design != config.Design.GRAVEYARD) {
                    this.doorBotFrame = new createjs.Sprite(this.spriteSheet, "DoorBottomCeiling");
                    this.doorBotFrame.x = 183;
                    this.doorBotFrame.y = 745;
                }
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorBot.x = 238;
                }
                else {
                    this.doorBot.x = 224;
                }
                this.doorBot.y = 674;

                //this.doorBot.Flip();
                //this.doorBotFrame.Flip();
                this.player.canTraverseBot = !this.isDoorBotLocked;
            }
            if (this.hasDoorLeft) {
                if (this.isDoorLeftLocked) {
                    this.doorLeft = new createjs.Sprite(this.spriteSheet, "DoorLeftLocked");
                    this.doorLeft.name = "DoorLeftLocked";
                }
                else {
                    this.doorLeft = new createjs.Sprite(this.spriteSheet, "DoorLeft");
                    this.doorLeft.name = "DoorLeft";
                }
                if (this.design != config.Design.GRAVEYARD) {
                    this.doorLeftFrame = new createjs.Sprite(this.spriteSheet, "DoorLeftCeiling");
                    this.doorLeftFrame.y = 322;
                }
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorLeft.y = 384;
                }
                else {
                    this.doorLeft.y = 370;
                }
                this.doorLeft.x = 18;

                this.player.canTraverseLeft = !this.isDoorLeftLocked;
            }
            if (this.hasDoorRight) {
                if (this.isDoorRightLocked) {
                    this.doorRight = new createjs.Sprite(this.spriteSheet, "DoorRightLocked");
                    this.doorRight.name = "DoorRightLocked";
                }
                else {
                    this.doorRight = new createjs.Sprite(this.spriteSheet, "DoorRight");
                    this.doorRight.name = "DoorRight";
                }
                if (this.design != config.Design.GRAVEYARD) {
                    this.doorRightFrame = new createjs.Sprite(this.spriteSheet, "DoorRightCeiling");
                    this.doorRightFrame.y = 322;
                    this.doorRightFrame.x = 545;
                }
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorRight.y = 384;
                }
                else {
                    this.doorRight.y = 370;
                }
                this.doorRight.x = 476;

                //this.doorRight.Flip();
                //this.doorRightFrame.Flip();
                this.player.canTraverseRight = !this.isDoorRightLocked;
            }

            if (this.hasShop) {
                this.shopManager = managers.Game.shopManager;
            }
            this.chestManager = managers.Game.chestManager;
            this.chestManager.chestsNotSpawned = true;

            //this.playerStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            //this.messageStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            //this.controllerHelp.shadow = new createjs.Shadow("#000000",0,0,10);

            //managers.Game.messageStatus = this.messageStatus;

            this.playerInfo = new managers.PlayerInfo_UI();
            this.playerInfo.PlayerLocation = new math.Vec2(30, 12);
            //this.playerInfo.x = 38;
            this.player.playerStatus.visible = false;
            if (!managers.Game.keyboardManager.playMode){
                managers.Game.keyboardManager.ControlReset();
                managers.Game.keyboardManager.enabled = true;
                managers.Game.keyboardManager.playMode = true;
            }
            
            // Initialize bulletManager
            if (this.hasProjectileShooters || managers.Game.player.powerUp == config.PowerUp.FIRE || managers.Game.player.powerUp == config.PowerUp.SLIME) {
                this.bulletManager = managers.Game.bulletManager;
            }

            this.Main();
        }

        public Update(): void {
            // Music Check
            switch (managers.Game.currentScene) {
                case config.Scene.GRAVEYARD_1:
                case config.Scene.GRAVEYARD_5:
                case config.Scene.GRAVEYARD_6:
                    if (!managers.Music.graveyardMusicPlaying) {
                        createjs.Sound.stop();
                        managers.Game.music = createjs.Sound.play("music_graveyard");
                        managers.Music.graveyardMusicPlaying = true;
                        managers.Music.hotelMusicPlaying = false;
                        managers.Music.mansionMusicPlaying = false;
                        managers.Music.shopMusicPlaying = false;
                        managers.Music.bossMusicPlaying = false;
                    }
                    break;
                case config.Scene.HOTEL_1:
                case config.Scene.HOTEL_13:
                    if (!managers.Music.hotelMusicPlaying) {
                        createjs.Sound.stop();
                        managers.Game.music = createjs.Sound.play("music_hotel");
                        managers.Music.hotelMusicPlaying = true;
                        managers.Music.graveyardMusicPlaying = false;
                        managers.Music.mansionMusicPlaying = false;
                        managers.Music.shopMusicPlaying = false;
                        managers.Music.bossMusicPlaying = false;
                    }
                    break;
                case config.Scene.MANSION_1:
                case config.Scene.MANSION_13:
                case config.Scene.MANSION_16:
                    if (!managers.Music.mansionMusicPlaying) {
                        createjs.Sound.stop();
                        managers.Game.music = createjs.Sound.play("music_mansion");
                        managers.Music.mansionMusicPlaying = true;
                        managers.Music.graveyardMusicPlaying = false;
                        managers.Music.hotelMusicPlaying = false;
                        managers.Music.shopMusicPlaying = false;
                        managers.Music.bossMusicPlaying = false;
                    }
                    break;
                case config.Scene.GRAVEYARD_7:
                case config.Scene.HOTEL_14:
                case config.Scene.MANSION_5:
                    if(!managers.Music.shopMusicPlaying){
                        createjs.Sound.stop();
                        managers.Game.music = createjs.Sound.play("music_shop");
                        managers.Music.shopMusicPlaying = true;
                        managers.Music.mansionMusicPlaying = false;
                        managers.Music.graveyardMusicPlaying = false;
                        managers.Music.hotelMusicPlaying = false;
                        managers.Music.bossMusicPlaying = false;
                    }
                    break;
                case config.Scene.GRAVEYARD_8:
                case config.Scene.HOTEL_15:
                case config.Scene.MANSION_18:
                    if(!managers.Music.bossMusicPlaying){
                        createjs.Sound.stop();
                        managers.Game.music = createjs.Sound.play("music_boss");
                        managers.Music.bossMusicPlaying = true;
                        managers.Music.shopMusicPlaying = false;
                        managers.Music.mansionMusicPlaying = false;
                        managers.Music.graveyardMusicPlaying = false;
                        managers.Music.hotelMusicPlaying = false;
                    }
                    break;
            }
            managers.Game.music.loop = -1;
            managers.Game.music.volume = 0.1;

            this.player.Update();
            let collectiveCollision: boolean = false;
            this.enemies.forEach(e => {
                e.Update();
                collectiveCollision = collectiveCollision ||
                    managers.Collision.CheckWithOffset(managers.Game.player,
                        e,
                        0,
                        -config.Bounds.ENEMY_COLLISION_OFFSET,
                        -config.Bounds.ENEMY_COLLISION_OFFSET,
                        -config.Bounds.ENEMY_COLLISION_OFFSET);
                if (this.player.powerUp == config.PowerUp.ICE){
                    this.player.iceShield.CheckShieldDamage(e);
                }
            });
            if (managers.Game.player.isTakingDamage && !collectiveCollision) {
                managers.Game.player.isTakingDamage = false;
            }

            this.obstacles.forEach(e => {
                e.CheckBound();
                this.enemies.forEach(f => {
                    if (f instanceof objects.Zombie && e instanceof objects.Barriers) {
                        e.ZombieCheckBarrierCollision(f);
                    }
                    if (e instanceof objects.Gap && managers.Collision.Check(e, f)){
                        if (!f.isStunned && f.isFlying){
                            return;
                        }
                        e.CheckGapDamage(f);
                    }
                });
                if (e instanceof objects.Gap && !this.player.isFlying) {
                    if (this.player.activatePowers && this.player.powerUp == config.PowerUp.BITE){
                        return;
                    }
                    e.CheckGapDamage(this.player);
                }
                //if(e instanceof objects.SlimePuddle){
                //    e.CheckSlowMovement(this.player);
                //}
                if(e instanceof objects.IceShield){
                    e.CheckShieldDamage(this.player);
                }
                
            });

            this.cosmetics.forEach(e => {
                if (e instanceof objects.Stairs && managers.Collision.Check(managers.Game.player, e) && this.player.victorySequence == 0) {
                    this.player.SetTransit(this.player.GetPosition(), e.nextScene, true);
                }
            });

            if (this.hasProjectileShooters) {
                this.bulletManager.Update();
                this.bulletManager.slimeBalls.forEach(bullet => {
                    this.enemies.forEach(e => {
                        if(managers.Collision.Check(bullet,e) && bullet.staticNotPositional){
                            e.GetDamage(bullet);
                        }
                    });
                });
                this.bulletManager.fireBalls.forEach(bullet => {
                    this.enemies.forEach(e => {
                        if(managers.Collision.Check(bullet,e) && bullet.staticNotPositional){
                            e.GetDamage(bullet);
                        }
                    });
                });
            }
            if (this.hasShop) {
                this.shopManager.Update();
            }
            this.chestManager.Update();
            if (this.AllEnemiesAreDead()){
                this.chestManager.ShowHiddenChests(managers.Game.currentScene);
            }

            // KEY AND LOCKED DOORS
            if (this.key != undefined) {
                if (this.getChildByName("Items_Key") && managers.Collision.Check(this.player, this.key) && this.key.visible) {
                    this.player.key += 1;
                    this.key.RemoveFromPlay();
                }
            }
            if (this.player.y > config.Bounds.DOOR_EASING_TOP && this.player.y < config.Bounds.DOOR_EASING_BOTTOM) {
                if (this.player.x == config.Bounds.LEFT_BOUND + this.player.halfW) {
                    if (this.hasDoorLeft && this.isDoorLeftLocked && this.player.key > 0 && !this.isBossRoom) {
                        this.isDoorLeftLocked = false;
                        this.player.key -= 1;
                        managers.Game.SFX = createjs.Sound.play("doorUnlock");
                        managers.Game.SFX.volume = 1.0;
                    }
                }
                if (this.player.x == config.Bounds.RIGHT_BOUND - this.player.halfW) {
                    if (this.hasDoorRight && this.isDoorRightLocked && this.player.key > 0 && !this.isBossRoom) {
                        this.isDoorRightLocked = false;
                        this.player.key -= 1;
                        managers.Game.SFX = createjs.Sound.play("doorUnlock");
                        managers.Game.SFX.volume = 1.0;
                    }
                }
            }
            if (this.player.x > config.Bounds.DOOR_EASING_LEFT && this.player.x < config.Bounds.DOOR_EASING_RIGHT) {
                if (this.player.y == config.Bounds.BOTTOM_BOUND - this.player.halfH) {
                    if (this.hasDoorBot && this.isDoorBotLocked && this.player.key > 0 && !this.isBossRoom) {
                        this.isDoorBotLocked = false;
                        this.player.key -= 1;
                        managers.Game.SFX = createjs.Sound.play("doorUnlock");
                        managers.Game.SFX.volume = 1.0;
                    }
                }
                if (this.player.y == this.player.halfH + config.Bounds.TOP_BOUND) {
                    if (this.hasDoorTop && this.isDoorTopLocked && this.player.key > 0 && !this.isBossRoom) {
                        this.isDoorTopLocked = false;
                        this.player.key -= 1;
                        managers.Game.SFX = createjs.Sound.play("doorUnlock");
                        managers.Game.SFX.volume = 1.0;
                    }
                }
            }
            if (this.hasDoorLeft && !this.isDoorLeftLocked && this.doorLeft.name == "DoorLeftLocked") {
                this.removeChild(this.doorLeft);
                this.doorLeft = new createjs.Sprite(this.spriteSheet, "DoorLeft");
                this.doorLeft.name = "DoorLeft";
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorLeft.y = 384;
                }
                else {
                    this.doorLeft.y = 370;
                }
                this.doorLeft.x = 18;
                this.player.canTraverseLeft = !this.isDoorLeftLocked;
                this.addChild(this.doorLeft);
                this.setChildIndex(this.doorLeft, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorRight && !this.isDoorRightLocked && this.doorRight.name == "DoorRightLocked") {
                this.removeChild(this.doorRight);
                this.doorRight = new createjs.Sprite(this.spriteSheet, "DoorRight");
                this.doorRight.name = "DoorRight";
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorRight.y = 384;
                }
                else {
                    this.doorRight.y = 370;
                }
                this.doorRight.x = 476;
                //this.doorRight.Flip();
                this.player.canTraverseRight = !this.isDoorRightLocked;
                this.addChild(this.doorRight);
                this.setChildIndex(this.doorRight, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorTop && !this.isDoorTopLocked && this.doorTop.name == "DoorTopLocked") {
                this.removeChild(this.doorTop);
                this.doorTop = new createjs.Sprite(this.spriteSheet, "DoorTop");
                this.doorTop.name = "DoorTop";
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorTop.x = 238;
                }
                else {
                    this.doorTop.x = 224;
                }
                this.doorTop.y = 126;
                this.player.canTraverseTop = !this.isDoorTopLocked;
                this.addChild(this.doorTop);
                this.setChildIndex(this.doorTop, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorBot && !this.isDoorBotLocked && this.doorBot.name == "DoorBottomLocked") {
                this.removeChild(this.doorBot);
                this.doorBot = new createjs.Sprite(this.spriteSheet, "DoorBottom");
                this.doorBot.name = "DoorBottom";
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorBot.x = 238;
                }
                else {
                    this.doorBot.x = 224;
                }
                this.doorBot.y = 674;
                this.player.canTraverseBot = !this.isDoorBotLocked;
                this.addChild(this.doorBot);
                this.setChildIndex(this.doorBot, this.getChildIndex(this.player) - 1);
            }
            // Sets the Player Health
            this.playerInfo.PlayerHealth = this.player.hp;
            this.playerInfo.PlayerMaxHealth = this.player.maxHp;
            this.playerInfo.Money = this.player.money;
            this.playerInfo.Key = this.player.key;

            this.playerInfo.PlayerEcto = this.player.ecto;
            this.playerInfo.PlayerPower = this.player.powerUp;
            this.playerInfo.PlayerLevel = this.player.level;

        }

        public Main(): void {
            // BACKGROUND PLACEMENT

            //floor and walls
            this.addChild(this.floor);
            this.addChild(this.ceilingAndWall);

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

            // ITEM PLACEMENT - barriers
            this.obstacles.forEach(e => {
                this.addChild(e);
            });

            // COSMETICS PLACEMENT
            this.cosmetics.forEach(e => {
                this.addChild(e);
            });

            this.extraLabels.forEach(e => {
                this.addChild(e);
            });

            if (this.hasShop) {
                this.addChild(this.shopManager.shopKeeper);
                this.addChild(this.shopManager.shopKeeper.dialog);
                this.addChild(this.shopManager.chooseYes);
                this.addChild(this.shopManager.chooseNo);
                this.addChild(this.shopManager.indicatorYes);
                this.addChild(this.shopManager.indicatorNo);
                this.shopManager.shopItems.forEach(e => {
                    if (managers.Game.currentScene == e.appearingScene){
                        this.addChild(e);
                        e.Reset();
                        this.addChild(e.priceTag);
                    }
                });
            }

            this.chestManager.chestItems.forEach(e => {
                if (managers.Game.currentScene == e.appearingScene){
                    this.addChild(e);
                }
            });
            
            // PLAYER PLACEMENT
            this.addChild(this.player.iceShield);
            this.addChild(this.player.swing);
            this.addChild(this.player);
            this.addChild(this.player.weapon);
            this.player.deadPlayer.forEach(e => {
                this.addChild(e);
            });            

            this.chestManager.chestItems.forEach(e => {
                if (managers.Game.currentScene == e.appearingScene){
                    this.addChild(e.showItem);
                }
            });

            // ENEMY PLACEMENT
            this.enemies.forEach(e => {
                this.addChild(e);
                if (e.canBeEaten){
                  this.addChild(e.stunIndicator);
                }
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

            if (this.hasProjectileShooters || managers.Game.player.powerUp == config.PowerUp.FIRE || managers.Game.player.powerUp == config.PowerUp.SLIME) {
                this.bulletManager.spiderBullets.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.spiderBulletsLeft.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.spiderBulletsRight.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.shootingFLowerBullets.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.bones.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.redBones.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.slimeBalls.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.fireBalls.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.giantWormBullets.forEach(bullet => {
                    this.addChild(bullet);
                });
                this.bulletManager.quakeEffects.forEach(bullet => {
                    this.addChild(bullet);
                });
            }
            
            //UI PLACEMENT
            this.addChild(this.player.playerStatus);
            this.addChild(this.playerInfo);
        }

        public AllEnemiesAreDead(): boolean{
            if (this.enemies.length > 0){
                return this.enemies.every(e => {
                    return e.isDead;
                });
            }
        }
        public AddIceShieldToScene(shield: objects.IceShield):void{
            let length = this.obstacles.length;
            this.obstacles[length] = shield;
            this.addChild(shield);
            this.setChildIndex(shield,this.getChildIndex(shield.Host()) + 2);
        }
        
        public AddEnemyToScene(enemyToAdd: objects.Enemy):void{
            let length = this.enemies.length;
            this.enemies[length] = enemyToAdd;
            this.addChild(enemyToAdd);
            this.setChildIndex(enemyToAdd, this.getChildIndex(this.player) + 1);
        }

        public AddFloatingDamagesToScene(floatingDamageToAdd: objects.Label): void{
            let length = this.floatingDamages.length;
            this.floatingDamages[length] = floatingDamageToAdd;
            this.addChild(floatingDamageToAdd);
            setTimeout(() =>{
                floatingDamageToAdd.visible = false;
                this.removeChild(floatingDamageToAdd);
            }, floatingDamageToAdd.airTime);
        }

        public DestroyOthers(enemyToRemain: objects.Enemy){
            if (this.enemies.length > 0){
                this.enemies.forEach(e => {
                    if (e === enemyToRemain){
                        return;
                    }
                    e.RemoveFromPlay(e.CalculateBounty());
                });
            }

        }        
    }
}