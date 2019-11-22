module scenes {

    export class Mansion_7 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_6;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_8;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_1;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_11;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,34);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}