module scenes {

    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        private testEnemy:objects.TestEnemy;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.testEnemy=new objects.TestEnemy(this.assetManager);
            this.Main();
        }

        

        public Update(): void {

            this.background.Update();
            this.player.Update();
            this.testEnemy.Update();
            //this.enemy.Update();
            // this.enemies.forEach(e => {
            //     e.Update();
            //     managers.Collision.Check(this.player, e);
            // });
        }

        public Main(): void {
            this.addChild(this.background);
            //this.addChild(this.player.weapon);
            this.addChild(this.player);
            this.addChild(this.testEnemy);
        }
    }
}