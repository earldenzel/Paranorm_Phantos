module scenes {

    export class Hotel_11 extends scenes.PlayScene {

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

            this.enemies[0] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderUp(new math.Vec2(140, 220), 300);
            this.enemies[1].attackPower = 1;

            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_10;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,50);
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

            // check if spiderBulletsRight collides with player
            this.bulletManager.spiderBulletsRight.forEach(bullet => {
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

            this.bulletManager.spiderBulletsRight.forEach(bullet => {
                this.addChild(bullet);
            });
        }
    }
}