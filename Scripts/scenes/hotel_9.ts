module scenes {

    export class Hotel_9 extends scenes.PlayScene {

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true,config.Design.HOTEL);
            this.hasProjectileShooters = true;
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

            this.obstacles[0] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(280, 350));
            this.obstacles[1] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(280, 550));
            this.obstacles[2] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(200, 450));
            this.obstacles[3] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(350, 450));

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_8;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_10;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_13;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,50);
        }

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}