module scenes {

    export class Graveyard_5 extends scenes.PlayScene {
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, true, true, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_1;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_6;
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_7;
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