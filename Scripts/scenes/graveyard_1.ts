module scenes {

    export class Graveyard_1 extends scenes.PlayScene {
        // Variables
        private bulletManager: managers.Bullet;
        // Constructor
        constructor() {
            super(false, true, true, true);
            this.isDoorLeftLocked = managers.GraveyardLocks.graveyard_1_lockLeft;
            this.isDoorRightLocked = managers.GraveyardLocks.graveyard_1_lockRight;
            this.isDoorBotLocked = managers.GraveyardLocks.graveyard_1_lockBot;
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.TestEnemy(0, true, true);
            this.enemies[0].attackPower = 0; // you will never die from starter enemy

            let x : number = (config.Bounds.LEFT_BOUND + config.Bounds.RIGHT_BOUND)/2;
            let y : number = (config.Bounds.TOP_BOUND + config.Bounds.BOTTOM_BOUND)/2 + 150;
            
            this.cosmetics[0] = new objects.Indicator("upIndicator");
            this.cosmetics[1] = new objects.Indicator("downIndicator");
            this.cosmetics[2] = new objects.Indicator("leftIndicator");
            this.cosmetics[3] = new objects.Indicator("rightIndicator");
            this.cosmetics[4] = new objects.Indicator("attackIndicator");
            this.cosmetics[0].SetPosition(new math.Vec2(x,y-this.cosmetics[0].height));
            this.cosmetics[1].SetPosition(new math.Vec2(x,y+this.cosmetics[1].height));
            this.cosmetics[2].SetPosition(new math.Vec2(x-this.cosmetics[2].width,y));
            this.cosmetics[3].SetPosition(new math.Vec2(x+this.cosmetics[3].width,y));
            this.cosmetics[4].SetPosition(new math.Vec2(this.enemies[0].x,this.enemies[0].y - 100));
            this.cosmetics[5] = new objects.Stairs( config.Scene.HOTEL_1);
            this.cosmetics[6] = new objects.Stairs( config.Scene.MANSION_1);
            this.cosmetics[5].SetPosition(new math.Vec2(400, 400));
            this.cosmetics[6].SetPosition(new math.Vec2(400, 500));

            

            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_3;
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_4;
            super.Start();
        }

        public Update(): void {
            //if(!this.enemies[0].visible && this.cosmetics[0].visible){
            if(!this.enemies[0].visible){
                setTimeout(() => {
                    this.cosmetics.forEach(cosmetic =>{
                        cosmetic.visible = false;
                        managers.GraveyardLocks.graveyard_1_lockRight = false;
                        this.isDoorRightLocked = false;
                        managers.GraveyardLocks.graveyard_1_lockBot = false;
                        this.isDoorBotLocked = false;
                    });
                }, 1500);
            }
            if(!this.isDoorLeftLocked){
                managers.GraveyardLocks.graveyard_1_lockLeft = false;
            }
            super.Update();

            this.bulletManager.Update();

            // check if spiderBullets collides with player
            this.bulletManager.spiderBullets.forEach(bullet => {
                if(managers.Collision.Check(managers.Game.player, bullet)){
                    let ticker: number = createjs.Ticker.getTicks();

                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                    managers.Game.player.hp -= 1;
                }
            });

             // check if spiderBulletsLeft collides with player
            this.bulletManager.spiderBulletsLeft.forEach(bullet => {
                if(managers.Collision.Check(managers.Game.player, bullet)){
                    let ticker: number = createjs.Ticker.getTicks();

                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                    managers.Game.player.hp -= 1;
                }
            });

             // check if spiderBulletsRight collides with player
             this.bulletManager.spiderBulletsRight.forEach(bullet => {
                if(managers.Collision.Check(managers.Game.player, bullet)){
                    let ticker: number = createjs.Ticker.getTicks();

                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                    managers.Game.player.hp -= 1;
                }
            });

            // check if shootingFlowerBullets collides with player
            this.bulletManager.shootingFLowerBullets.forEach(bullet => {
                if(managers.Collision.Check(managers.Game.player, bullet)){
                    let ticker: number = createjs.Ticker.getTicks();

                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                    managers.Game.player.hp -= 1;
                }
            });
        }

        public Main(): void {
            this.playerInfo.PlayerLocation = new math.Vec2(30,12);
            super.Main();

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
        }
    }
}