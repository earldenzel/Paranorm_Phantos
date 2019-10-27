module scenes {

    export class Graveyard_2 extends scenes.PlayScene {
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, false, false, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies = new Array<objects.Enemy>();
            objects.Game.player.sceneOnRight = config.Scene.GRAVEYARD_3;
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