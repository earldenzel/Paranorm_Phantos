module objects{
    export class TestEnemy extends objects.Enemy{
        // variables
        // constructors
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"enemy_test");
            this.Start();
            this.hp = 2;
            this.isStunned = false;
            this.attackPower = 2;
        }
        // methods

        public Start(): void {
            // set the initial position
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            super.Update();
            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset(): void {}
        public Move(): void {}
        public CheckBound(): void {}
    }
}