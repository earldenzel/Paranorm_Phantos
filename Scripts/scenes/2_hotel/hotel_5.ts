module scenes {

    export class Hotel_5 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, false, true,config.Design.HOTEL);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.SpiderLeft(new math.Vec2(120, 250), 150);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderLeft(new math.Vec2(120, 480), 150);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.Maggot(0,true,false,3);
            this.enemies[2].SetPosition(new math.Vec2(420,250));
            this.enemies[3] = new objects.Maggot(0,false,true,3);
            this.enemies[3].SetPosition(new math.Vec2(420,630));
            this.enemies[4] = new objects.SpiderLeft(new math.Vec2(120, 365), 150);
            this.enemies[4].attackPower = 1;

            this.obstacles[0] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(200, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(200, 285));
            this.obstacles[2] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(200, 345));

            this.obstacles[3] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(200, 650));
            this.obstacles[4] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(200, 590));
            this.obstacles[5] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(200, 530));

            managers.Game.player.sceneOnRight = config.Scene.HOTEL_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,34);
        }

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}