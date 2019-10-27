module objects{
    export class Bat extends objects.Enemy{
        // variables
        private rightDirection: boolean;
        private downDirection : boolean;
        private moveSpeed: number;

        // constructors
        
        constructor(assetManager:createjs.LoadQueue, moveSpeed:number){
            super(assetManager,"enemy_bat");
            this.Start();

            this.hp = 3;
            this.attackPower = 1;         
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
        }
        // methods

        public Start(): void {
            // set the initial position
            this.y = 200;
            this.x = 320;
        }
        public Update(): void {
            super.Update();
        }
        public Reset(): void {}

        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(objects.Game.player.x, objects.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));
            
            this.x = newPos.x;
            this.y = newPos.y;
        }

        public CheckBound(): void {}
    }
}