module scenes {

    export class Graveyard_6 extends scenes.PlayScene {
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, true, true, false, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies = new Array<objects.Enemy>();
            objects.Game.player.sceneOnTop = config.Scene.GRAVEYARD_5;
            objects.Game.player.sceneOnBot = config.Scene.GRAVEYARD_8;
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