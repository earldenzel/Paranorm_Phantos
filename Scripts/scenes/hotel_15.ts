module scenes {

    export class Hotel_15 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, false, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_13;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,82);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}