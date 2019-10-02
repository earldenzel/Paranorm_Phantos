module objects {
    export class Weapon extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "item_p_front2");
            this.Start();
        }
        // Methods
        // Initializing our variables with default values
        public Start():void {
            this.rotation = 180;
            this.visible = false;
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            if (!objects.Game.player.playerController.Z){                
                //phoebe looking up right now only
                this.x = objects.Game.player.x;
                this.y = objects.Game.player.y - objects.Game.player.halfH;
            }
            this.CheckBound();
        }
        // Resets the position of the object
        public Reset():void {
        }
        // Collision Detection 
        public CheckBound():void {
            // top bound - TODO: directions            
            if (this.y <= objects.Game.player.y - objects.Game.player.height + objects.Game.player.halfH) {
                this.y = objects.Game.player.y - objects.Game.player.height + objects.Game.player.halfH;
            }
            
        }
    }
}