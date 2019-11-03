module objects{
    export class TestEnemy extends objects.Enemy{
        // variables
        private rightDirection: boolean;
        private downDirection : boolean;
        private moveSpeed: number;

        // constructors
        
        constructor(assetManager:createjs.LoadQueue, moveSpeed:number, rightDirection:boolean, downDirection:boolean){
            super(assetManager,"enemy_test");
            this.Start();
            this.hp = 2;
            this.attackPower = 2;
            
            this.moveSpeed = moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.knockback = 0.75;
            this.eatTimer = 600;
            this.bounty = 5;
        }
        // methods

        public Start(): void {
            // set the initial position
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            super.Update();
        }
        public Reset(): void {}
        public Move(): void {            
            this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
            this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;
    
            if (this.x > managers.Game.gameWidth && this.rightDirection){
                this.rightDirection = false;
            }
            else if (this.x < 0 && !this.rightDirection){
                this.rightDirection = true;
            }
            if (this.y > managers.Game.gameHeight && this.downDirection){
                this.downDirection = false;
            }
            else if (this.y < 0 && !this.downDirection){
                this.downDirection = true;
            }
        }
        public CheckBound(): void {
            super.CheckBound();
        }

        public DevourEffect(): void{
            managers.Game.player.attackPower += 1;
            managers.Game.player.hp += 1;
        }
    }
}