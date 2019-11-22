module scenes {

    export class Hotel_7 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, true, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(112,34);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}