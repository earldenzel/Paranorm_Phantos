module scenes {

    export class Graveyard_7 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, true, false);
            this.hasShop = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_5;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,50); // 46,28
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();            
        }
    }
}