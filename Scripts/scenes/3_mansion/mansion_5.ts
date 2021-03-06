module scenes {

    export class Mansion_5 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, false, true,config.Design.MANSION);
            this.hasShop = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnRight = config.Scene.MANSION_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(64,34);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}