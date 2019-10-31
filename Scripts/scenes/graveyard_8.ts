module scenes {

    export class Graveyard_8 extends scenes.PlayScene {
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, true, false, false, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            objects.Game.player.sceneOnTop = config.Scene.GRAVEYARD_6;
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