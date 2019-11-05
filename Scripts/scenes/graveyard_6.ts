module scenes {

    export class Graveyard_6 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(true, true, false, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_8;
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