module scenes {

    export class Graveyard_5 extends scenes.PlayScene {
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, true, true, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies = new Array<objects.Enemy>();
            objects.Game.player.sceneOnTop = config.Scene.GRAVEYARD_1;
            objects.Game.player.sceneOnBot = config.Scene.GRAVEYARD_6;
            objects.Game.player.sceneOnRight = config.Scene.GRAVEYARD_7;
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