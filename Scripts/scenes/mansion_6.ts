module scenes {

    export class Mansion_6 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_5;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_7;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_2;
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