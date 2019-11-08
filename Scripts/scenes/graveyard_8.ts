module scenes {

    export class Graveyard_8 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(true, false, false, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(30,60);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}