module scenes {

    export class Hotel_8 extends scenes.PlayScene {

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, false, true);
            this.hasProjectileShooters = true;
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

            managers.Game.player.sceneOnRight = config.Scene.HOTEL_9;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,50);
        }

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}