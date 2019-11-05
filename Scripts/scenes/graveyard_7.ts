module scenes {

    export class Graveyard_7 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(false, false, true, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_5;
            super.Start();
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}