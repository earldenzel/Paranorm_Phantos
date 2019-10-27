module scenes {

    export class Graveyard_1 extends objects.Scene {
        // Variables
        private player:objects.Player;

        private ceilingVertical:objects.Background;
        private ceilingHorizontal:objects.Background;
        private floor: objects.Background;
        private wallVertical: objects.Background;
        private wallHorizontal: objects.Background;
        private doorVertical: objects.Background;
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
            this.player = objects.Game.player;

            this.ceilingHorizontal =new objects.Background(this.assetManager,"background_c_hori");
            this.ceilingVertical =new objects.Background(this.assetManager,"background_c_vert");
            this.floor = new objects.Background(this.assetManager,"background_f_all");

            this.wallHorizontal = new objects.Background(this.assetManager,"background_w_hori");
            this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");

            this.doorVertical = new objects.Background(this.assetManager, "background_d_vert");

            this.playerStatus = new objects.Label("PLAYER STATUSES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 800, false);
            this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 820, false);
            this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR W-A-S-D + J", "16px", "'Press Start 2P'", "#000000", 0, 840, false);
            
            
            objects.Game.messageStatus = this.messageStatus;

            this.player.canTraverseTop = true;
            this.player.canTraverseBot = false;
            this.player.sceneOnTop = config.Scene.GRAVEYARD_2;
            this.Main();
        }        

        public Update(): void {

            this.player.Update();
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
            
            // PLAYER PLACEMENT
            this.addChild(this.player.weapon);
            this.addChild(this.player);
            
            //UI PLACEMENT
            this.addChild(this.playerStatus);
            this.addChild(this.messageStatus);
            this.addChild(this.controllerHelp);
        }
    }
}