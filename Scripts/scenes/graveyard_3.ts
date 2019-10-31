module scenes {

    export class Graveyard_3 extends scenes.PlayScene {
        //this scene is left of graveyard 1
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, false, false, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            objects.Game.player.sceneOnRight = config.Scene.GRAVEYARD_1;
            objects.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_2;
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