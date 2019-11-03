module scenes {

    export class Graveyard_4 extends scenes.PlayScene {
        //this scene is right of graveyard 1
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, false, false, true, false);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.TestEnemy(this.assetManager, 5, true, true);
            this.enemies[1] = new objects.TestEnemy(this.assetManager, 3, false, false);
            this.enemies[2] = new objects.TestEnemy(this.assetManager, 2, false, true);
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_1;
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