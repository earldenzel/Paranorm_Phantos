module scenes {

    export class Mansion_1 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false);
            console.log("Mansion1");
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnBot = config.Scene.MANSION_7;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,18);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}