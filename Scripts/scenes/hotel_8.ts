module scenes {

    export class Hotel_8 extends scenes.PlayScene {

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

            this.enemies[0] = new objects.TestEnemy(1.5, true, false);
            this.enemies[0].SetPosition(new math.Vec2(100, 650));
            this.enemies[1] = new objects.TestEnemy(1.5, false, true);
            this.enemies[1].SetPosition(new math.Vec2(400, 200));
            this.enemies[2] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[2].attackPower = 1;

            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;

            managers.Game.player.sceneOnRight = config.Scene.HOTEL_9;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,50);
        }

        public Update(): void {
            super.Update();

            this.bulletManager.Update();

            // check if spiderBulletsLeft collides with player
            this.bulletManager.spiderBulletsLeft.forEach(bullet => {
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

            this.bulletManager.spiderBulletsLeft.forEach(bullet => {
                this.addChild(bullet);
            });
        }
    }
}