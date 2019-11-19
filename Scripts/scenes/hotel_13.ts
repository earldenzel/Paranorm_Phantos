module scenes {

    export class Hotel_13 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_12;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_14;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_15;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_9;
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