module scenes {

    export class Mansion_17 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, true, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_16;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_13;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,66);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}