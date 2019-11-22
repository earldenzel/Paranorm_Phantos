module scenes {

    export class Mansion_10 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnBot = config.Scene.MANSION_14;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,50);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}