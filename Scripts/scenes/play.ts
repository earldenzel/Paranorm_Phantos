module scenes {

    export class PlayScene extends objects.Scene {
        // Variables
        private player:objects.Player;
        private enemies: Array<objects.Enemy>;

        private ceilingVertical:objects.Background;
        private ceilingHorizontal:objects.Background;
        private floor: objects.Background;
        private wallVertical: objects.Background;
        private wallHorizontal: objects.Background;
        private doorVertical: objects.Background;
        private doorVerticalTop: objects.Background;
        private playerStatus: objects.Label;
        private messageStatus: objects.Label;
        private controllerHelp: objects.Label;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.player = new objects.Player(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemies[0] = new objects.TestEnemy(this.assetManager, 5, true, true);
            this.enemies[1] = new objects.TestEnemy(this.assetManager, 3, false, false);
            this.enemies[2] = new objects.TestEnemy(this.assetManager, 2, false, true);

            this.ceilingHorizontal =new objects.Background(this.assetManager,"background_c_hori");
            this.ceilingVertical =new objects.Background(this.assetManager,"background_c_vert");
            this.floor = new objects.Background(this.assetManager,"background_f_all");

            this.wallHorizontal = new objects.Background(this.assetManager,"background_w_hori");
            this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");

            this.doorVertical = new objects.Background(this.assetManager, "background_d_vert");
            this.doorVerticalTop = new objects.Background(this.assetManager, "background_d_vertT");

            this.playerStatus = new objects.Label("PLAYER STATUSES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 800, false);
            this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 820, false);
            this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR W-A-S-D + J", "16px", "'Press Start 2P'", "#000000", 0, 840, false);
            
            objects.Game.player = this.player;
            objects.Game.messageStatus = this.messageStatus;
            this.Main();
        }        

        public Update(): void {

            this.player.Update();
            let collectiveCollision: boolean = false;
            this.enemies.forEach(e => {
                e.Update();
                collectiveCollision = collectiveCollision || managers.Collision.Check(objects.Game.player,e);
            });
            if (objects.Game.player.isTakingDamage && !collectiveCollision){
                objects.Game.player.isTakingDamage = false;
            }
            this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
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
            this.enemies.forEach(e => {
                this.addChild(e);
            });

            // PLAYER PLACEMENT
            this.addChild(this.player.weapon);
            this.addChild(this.player);

            this.addChild(this.doorVerticalTop);
            
            //UI PLACEMENT
            this.addChild(this.playerStatus);
            this.addChild(this.messageStatus);
            this.addChild(this.controllerHelp);
        }
    }
}