module objects {
    export class Player extends objects.GameObject {
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }

        // Methods
        public Start(): void {
            // set the initial position
            this.y = 700;
            this.x = 320;
            
        }
        public Update(): void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset(): void { }
        public Move(): void {
            console.log("Move()");
            // We reference the stage object and get mouse position
            this.x = objects.Game.stage.mouseX;
            // this is evetually replaced with keyboard input
            // Maybe xbox controller
        }
        public CheckBound(): void {
            // right bound
            if (this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }
            // left bound
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
        }
    }
}