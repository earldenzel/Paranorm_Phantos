module objects {
    export class Weapon extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue, player:objects.GameObject) {
            super(assetManager, "weapon");
            this.Start();
        }
        // Methods
        // Initializing our variables with default values
        public Start():void {
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
        }
        // Resets the position of the object
        public Reset():void {
        }
        // Move the object
        public Move():void {          
        }
        // Collision Detection 
        public CheckBound():void {
        }
    }
}