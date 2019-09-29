module objects {
    export class Weapon extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "weapon");
            this.Start();
        }
        // Methods
        // Initializing our variables with default values
        public Start():void {
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            if (!objects.Game.player.playerController.Z){
                this.x = objects.Game.player.x;            
                this.y = objects.Game.player.y;
            }
            this.CheckBound();
        }
        // Resets the position of the object
        public Reset():void {
        }
        // Collision Detection 
        public CheckBound():void {
            // top bound - TODO: directions            
            if (this.y <= objects.Game.player.y - this.halfH) {
                this.y = objects.Game.player.y - this.halfH;
            }
            
        }
    }
}