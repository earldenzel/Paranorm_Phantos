module scenes {

    export class Graveyard_4 extends scenes.PlayScene {
        //this scene is right of graveyard 1
        // Constructor
        constructor() {
            super(false, false, true, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.TestEnemy(5, true, true);
            this.enemies[1] = new objects.TestEnemy(3, false, false);
            this.enemies[2] = new objects.TestEnemy(2, false, true);

            this.obstacles[0] = new objects.Barriers("background_barrierTest");
            this.obstacles[0].SetPosition(new math.Vec2(200, 360));
            this.obstacles[1] = new objects.Barriers("background_barrierTest");
            this.obstacles[1].SetPosition(new math.Vec2(360, 360));
            this.obstacles[2] = new objects.Barriers("background_barrierTest");
            this.obstacles[2].SetPosition(new math.Vec2(200, 510));
            this.obstacles[3] = new objects.Barriers("background_barrierTest");
            this.obstacles[3].SetPosition(new math.Vec2(360, 510));

            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_1;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(46,12);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}