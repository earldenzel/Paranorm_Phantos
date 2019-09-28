module objects{
    export class TestEnemy extends objects.GameObject{
        // variables
        // constructors
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"testEnemy");
            this.Start();
        }
        // methods

        public Start(): void {
            // set the initial position
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset(): void {}
        public Move(): void {}
        public CheckBound(): void {}
    }
}