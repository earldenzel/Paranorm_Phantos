module scenes {

    export class Hotel_8 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_9;
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