module scenes {

    export class Graveyard_2 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(false, false, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.TestEnemy( 1, true, true);
            this.enemies[1] = new objects.TestZombie( 0.5);
            this.enemies[2] = new objects.Bat( 2.5, 100);

            this.barriers[0] = new objects.Barriers("background_barrierTest");

            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_3;
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