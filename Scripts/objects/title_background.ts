module objects {
    export class TitleBackground extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager.getResult("title_background"));

            this.Start();
        }
        // Functions 
        // Initializing our variables with default values
        public Start():void {
            this.scaleX = 2.3;
            this.scaleY = 2.3;
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            this.Move();
            this.CheckBound();
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