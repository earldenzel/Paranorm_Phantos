module scenes {

    export class Mansion_11 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnRight = config.Scene.MANSION_12;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_7;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_15;
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