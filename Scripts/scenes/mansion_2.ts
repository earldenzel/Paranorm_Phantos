module scenes {

    export class Mansion_2 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnBot = config.Scene.MANSION_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,18);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}