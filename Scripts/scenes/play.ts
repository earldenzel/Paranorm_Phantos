module scenes {

    export class PlayScene extends objects.Scene {
        // Variables
        private player:objects.Player;
        private testEnemy:objects.TestEnemy;

        private ceilingVertical:objects.Background;
        private ceilingHorizontal:objects.Background;
        private floor: objects.Background;
        private wallVertical: objects.Background;
        private wallHorizontal: objects.Background;
        private doorVertical: objects.Background;
        private doorVerticalTop: objects.Background;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.player = new objects.Player(this.assetManager);
            this.testEnemy=new objects.TestEnemy(this.assetManager);

            this.ceilingHorizontal =new objects.Background(this.assetManager,"background_c_hori");
            this.ceilingVertical =new objects.Background(this.assetManager,"background_c_vert");
            this.floor = new objects.Background(this.assetManager,"background_f_all");

            this.wallHorizontal = new objects.Background(this.assetManager,"background_w_hori");
            this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");

            this.doorVertical = new objects.Background(this.assetManager, "background_d_vert");
            this.doorVerticalTop = new objects.Background(this.assetManager, "background_d_vertT")
            
            objects.Game.player = this.player;
            this.Main();
        }        

        public Update(): void {

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

            if(!this.player.visible && this.player.hp <= 0){
                objects.Game.currentScene = config.Scene.OVER;
            }
        }

        public Main(): void {
            // BACKGROUND PLACEMENT
            this.addChild(this.floor);
            this.addChild(this.wallHorizontal);
            this.addChild(this.wallVertical);
            this.addChild(this.doorVertical);
            this.addChild(this.ceilingHorizontal);
            this.addChild(this.ceilingVertical);
            // ITEM PLACEMENT
            // ENEMY PLACEMENT
            this.addChild(this.testEnemy);

            // PLAYER PLACEMENT
            this.addChild(this.player.weapon);
            this.addChild(this.player);

            this.addChild(this.doorVerticalTop);
        }
    }
}