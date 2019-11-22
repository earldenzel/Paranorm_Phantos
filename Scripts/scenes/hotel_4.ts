module scenes {

    export class Hotel_4 extends scenes.PlayScene {

        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, true, false);
            this.hasProjectileShooters = true;
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

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_3;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,18);
        }

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}