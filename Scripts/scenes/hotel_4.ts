module scenes {

    export class Hotel_4 extends scenes.PlayScene {
        // Variables
        private bulletManager: managers.Bullet;

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, true, false);
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(280, 200));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderRight(new math.Vec2(430, 550), 240);
            this.enemies[1].attackPower = 1;

            this.obstacles[0] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(115, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(450, 225));
            this.obstacles[2] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(115, 650));
            this.obstacles[3] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(450, 650));
            this.obstacles[4] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[4].SetPosition(new math.Vec2(200, 420));
            this.obstacles[5] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[5].SetPosition(new math.Vec2(350, 420));

            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_3;
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

            // check if spiderBulletsRight collides with player
            this.bulletManager.spiderBulletsRight.forEach(bullet => {
                if(managers.Collision.Check(managers.Game.player, bullet)){
                    let ticker: number = createjs.Ticker.getTicks();

                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                    managers.Game.player.hp -= 1;
                }
            });
        }

        public Main(): void {
            super.Main();

            this.bulletManager.shootingFLowerBullets.forEach(bullet => {
                this.addChild(bullet);
            });

            this.bulletManager.spiderBulletsRight.forEach(bullet => {
                this.addChild(bullet);
            });
        }
    }
}