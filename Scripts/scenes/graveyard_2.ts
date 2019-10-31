module scenes {

    export class Graveyard_2 extends scenes.PlayScene {
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, false, false, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.TestEnemy(this.assetManager, 1, true, true);
            this.enemies[1] = new objects.TestZombie(this.assetManager, 0.5);
            this.enemies[2] = new objects.Bat(this.assetManager, 2.5);

            this.barriers[0] = new objects.Barriers(this.assetManager, "background_barrierTest");

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