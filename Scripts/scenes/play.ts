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
            
            objects.Game.player = this.player;
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

            if(managers.Collision.Check(this.player,this.testEnemy)){
                this.player.GetDamage(this.testEnemy);
            }
            else{
                this.player.isTakingDamage = false;
            }

            if(managers.Collision.Check(this.player.weapon,this.testEnemy) && !managers.Collision.Check(this.player,this.testEnemy)){
                this.testEnemy.GetDamage(this.player);
            }
            else{
                this.testEnemy.isTakingDamage = false;
            }
            
            //this.removeChild(this.testEnemy);
            //this.testEnemy.visible = false;
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player.weapon);
            this.addChild(this.player);
            this.addChild(this.testEnemy);
        }
    }
}