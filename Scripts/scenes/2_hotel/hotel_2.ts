module scenes {

    export class Hotel_2 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, false, true,config.Design.HOTEL);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.Bat(5, 200);
            this.enemies[0].SetPosition(new math.Vec2(280, 200));
            this.enemies[1] = new objects.Bat(5, 250);
            this.enemies[1].SetPosition(new math.Vec2(280, 650));
            this.enemies[2] = new objects.Bat(10, 300);
            this.enemies[2].SetPosition(new math.Vec2(0, 0));
            this.enemies[3] = new objects.Bat(11, 270);
            this.enemies[3].SetPosition(new math.Vec2(700, 0));
            this.enemies[4] = new objects.Bat(8, 200);
            this.enemies[4].SetPosition(new math.Vec2(0, 700));
            this.enemies[5] = new objects.Bat(14, 250);
            this.enemies[5].SetPosition(new math.Vec2(700, 900));

            this.obstacles[0] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[0].SetPosition(new math.Vec2(180, 300));
            this.obstacles[1] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[1].SetPosition(new math.Vec2(380, 300));
            this.obstacles[2] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[2].SetPosition(new math.Vec2(180, 550));
            this.obstacles[3] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[3].SetPosition(new math.Vec2(380, 550));

            managers.Game.player.sceneOnRight = config.Scene.HOTEL_1;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,18);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}