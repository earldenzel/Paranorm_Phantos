module scenes {

    export class Hotel_9 extends scenes.PlayScene {

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
            this.enemies[1] = new objects.Bat(2.5, 100);
            this.enemies[1].SetPosition(new math.Vec2(100, 200));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(440, 650));

            this.obstacles[0] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(280, 350));
            this.obstacles[1] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(280, 550));
            this.obstacles[2] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(200, 450));
            this.obstacles[3] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(350, 450));

            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_8;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_10;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_13;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
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