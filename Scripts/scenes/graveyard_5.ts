module scenes {

    export class Graveyard_5 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(true, true, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            
            this.enemies[0] = new objects.TestEnemy(1, true, true);
            this.enemies[0].SetPosition(new math.Vec2(450, 600));
            this.enemies[1] = new objects.TestEnemy(1, true, false);
            this.enemies[1].SetPosition(new math.Vec2(450, 300));
            this.enemies[2] = new objects.Bat(1, 100);
            this.enemies[2].SetPosition(new math.Vec2(100, 550));
            this.enemies[3] = new objects.Bat(1, 100);
            this.enemies[3].SetPosition(new math.Vec2(100, 300));


            this.obstacles[0] = new objects.Barriers("background_barrierTest");
            this.obstacles[0].SetPosition(new math.Vec2(400, 655));
            this.obstacles[1] = new objects.Barriers("background_barrierTest");
            this.obstacles[1].SetPosition(new math.Vec2(400, 605));
            this.obstacles[2] = new objects.Barriers("background_barrierTest");
            this.obstacles[2].SetPosition(new math.Vec2(400, 555));
            this.obstacles[3] = new objects.Barriers("background_barrierTest");
            this.obstacles[3].SetPosition(new math.Vec2(400, 505));
            this.obstacles[4] = new objects.Barriers("background_barrierTest");
            this.obstacles[4].SetPosition(new math.Vec2(400, 220));
            this.obstacles[5] = new objects.Barriers("background_barrierTest");
            this.obstacles[5].SetPosition(new math.Vec2(400, 270));
            this.obstacles[6] = new objects.Barriers("background_barrierTest");
            this.obstacles[6].SetPosition(new math.Vec2(400, 320));
            this.obstacles[7] = new objects.Barriers("background_barrierTest");
            this.obstacles[7].SetPosition(new math.Vec2(400, 370));
            this.obstacles[8] = new objects.Gap("background_gapTest", new math.Vec2(165, 220));
            this.obstacles[9] = new objects.Gap("background_gapTest", new math.Vec2(165, 270));
            this.obstacles[10] = new objects.Gap("background_gapTest", new math.Vec2(165, 320));
            this.obstacles[11] = new objects.Gap("background_gapTest", new math.Vec2(165, 370));
            this.obstacles[14] = new objects.Gap("background_gapTest", new math.Vec2(165, 505));
            this.obstacles[15] = new objects.Gap("background_gapTest", new math.Vec2(165, 555));
            this.obstacles[16] = new objects.Gap("background_gapTest", new math.Vec2(165, 605));
            this.obstacles[17] = new objects.Gap("background_gapTest", new math.Vec2(165, 655));


            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_1;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_6;
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_7;
            super.Start();
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}