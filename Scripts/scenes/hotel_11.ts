module scenes {

    export class Hotel_11 extends scenes.PlayScene {

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, true, false);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderUp(new math.Vec2(140, 220), 300);
            this.enemies[1].attackPower = 1;
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_10;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,50);
        }

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}