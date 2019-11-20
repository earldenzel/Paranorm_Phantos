module scenes {

    export class Hotel_2 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.Bat(2.5, 100);
            this.enemies[0].SetPosition(new math.Vec2(280, 200));
            this.enemies[1] = new objects.Bat(2, 100);
            this.enemies[1].SetPosition(new math.Vec2(280, 650));

            this.obstacles[0] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile");
            this.obstacles[0].SetPosition(new math.Vec2(180, 300));
            this.obstacles[1] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile");
            this.obstacles[1].SetPosition(new math.Vec2(380, 300));
            this.obstacles[2] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile");
            this.obstacles[2].SetPosition(new math.Vec2(180, 550));
            this.obstacles[3] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile");
            this.obstacles[3].SetPosition(new math.Vec2(380, 550));

            managers.Game.player.sceneOnRight = config.Scene.HOTEL_1;
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