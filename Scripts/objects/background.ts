module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        private speedY:number;  // Speed of background scrolling on Y-axis
        // Constructor
        constructor(imageString:string) {
            super(managers.Game.assetManager.getResult(imageString));
            this.name = imageString;

            //this.Start();
        }
        // Functions 
        // Initializing our variables with default values
        public Start():void {
            //this.speedY = 0.5;
            //this.Reset();
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            //this.Move();
            //this.CheckBound();
        }
        // Resets the position of the object
        public Reset():void {
            //this.y = -124;
        }
        // Move the object
        public Move():void {
            //this.y += this.speedY;
        }
        // Collision Detection 
        public CheckBound():void {
            //if(this.y >= 0) {
            //    this.Reset();
            //}
        }

        public Flip(): void{            
            this.regX = this.getBounds().width;
            this.regY = this.getBounds().height;
            this.rotation = 180;
        }
    }
}