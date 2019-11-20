module scenes {

    export class Hotel_3 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.TestEnemy(2.5, true, true);
            this.enemies[0].SetPosition(new math.Vec2(100, 200));
            this.enemies[1] = new objects.TestZombie(2);
            this.enemies[1].SetPosition(new math.Vec2(400, 200));
            this.enemies[2] = new objects.TestEnemy(3, true, true);
            this.enemies[2].SetPosition(new math.Vec2(400, 650));
            this.enemies[3] = new objects.TestZombie(2.5);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));

            this.obstacles[0] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[0].SetPosition(new math.Vec2(180, 300));
            this.obstacles[1] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[1].SetPosition(new math.Vec2(380, 300));
            this.obstacles[2] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[2].SetPosition(new math.Vec2(180, 550));
            this.obstacles[3] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[3].SetPosition(new math.Vec2(380, 550));

            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_1;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_4;
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