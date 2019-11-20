module scenes {

    export class Hotel_12 extends scenes.PlayScene { 

        // Variables
        private bulletManager: managers.Bullet;

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.SpiderUp(new math.Vec2(140, 220), 300);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.TestZombie(2);
            this.enemies[1].SetPosition(new math.Vec2(100, 450));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(280, 650));

            this.obstacles[0] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile");
            this.obstacles[0].SetPosition(new math.Vec2(285, 440));

            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            managers.Game.player.sceneOnRight = config.Scene.HOTEL_13;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(46,28);
        }        

        public Update(): void {
            super.Update();

            this.bulletManager.Update();

            // check if spiderBullets collides with player
            this.bulletManager.spiderBullets.forEach(bullet => {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    let ticker: number = createjs.Ticker.getTicks();

                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
        }

        public Main(): void {
            super.Main();

            this.bulletManager.spiderBullets.forEach(bullet => {
                this.addChild(bullet);
            });
        }
    }
}