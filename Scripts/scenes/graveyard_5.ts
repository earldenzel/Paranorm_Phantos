module scenes {

    export class Graveyard_5 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(true, true, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.obstacles[0] = new objects.Barriers("background_barrierTest", new math.Vec2(200, 500));
            this.obstacles[1] = new objects.Gap("background_barrierTest", new math.Vec2(400, 500));
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