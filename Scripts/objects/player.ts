module objects {
    export class Player extends objects.GameObject {
        public weapon : GameObject;

        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.weapon = new objects.Weapon(assetManager, this);            
            this.Start();
        }
        // Methods
        // Initializing our variables with default values
        public Start():void {
            this.speedX = 0;
            this.speedY = 0;
            this.Reset();
        }
        // Updated 60 times per second (60FPS)
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        // Resets the position of the object
        public Reset():void {
            this.x = 320;
            this.y = 450;
            
            this.weapon.x = this.x;
            this.weapon.y = this.y - 15;
        }
        // Move the object
        public Move():void {            
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
                    
        }
        // Collision Detection 
        public CheckBound():void {
        }

    }
}