module scenes {

    export class Hotel_13 extends scenes.PlayScene { 

        // Variables
        private bulletManager: managers.Bullet;

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(275, 440));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.TestZombie(2);
            this.enemies[1].SetPosition(new math.Vec2(100, 200));
            this.enemies[2] = new objects.TestZombie(2);
            this.enemies[2].SetPosition(new math.Vec2(440, 650));

            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_12;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_14;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_15;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_9;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,66);
        }        

        public Update(): void {
            super.Update();

            this.bulletManager.Update();

            // check if shootingFlowerBullets collides with player
            this.bulletManager.shootingFLowerBullets.forEach(bullet => {
                if(managers.Collision.Check(managers.Game.player, bullet)){
                    let ticker: number = createjs.Ticker.getTicks();
                    
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 20 == 0)
                    managers.Game.player.hp -= 1;
                }
            });
        }

        public Main(): void {
            super.Main();

            this.bulletManager.shootingFLowerBullets.forEach(bullet => {
                this.addChild(bullet);
            });
        }
    }
}