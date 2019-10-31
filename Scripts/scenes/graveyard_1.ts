module scenes {

    export class Graveyard_1 extends scenes.PlayScene {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, false, true, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            objects.Game.player.sceneOnBot = config.Scene.GRAVEYARD_5;
            objects.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_3;
            objects.Game.player.sceneOnRight = config.Scene.GRAVEYARD_4;
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