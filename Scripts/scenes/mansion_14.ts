module scenes {

    export class Mansion_14 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnRight = config.Scene.MANSION_15;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_10;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,66);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}