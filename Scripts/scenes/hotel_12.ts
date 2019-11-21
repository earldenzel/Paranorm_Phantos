module scenes {

    export class Hotel_12 extends scenes.PlayScene { 

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, false, true);
            this.hasProjectileShooters = true;
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

            managers.Game.player.sceneOnRight = config.Scene.HOTEL_13;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(46,28);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}