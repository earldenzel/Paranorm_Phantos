module objects{
    export class Bat extends objects.Enemy{
        // variables
        private moveSpeed: number;
        private updateTime: number;
        private currentTime: number;
        private trajectory: math.Vec2;

        // constructors
        
        constructor(assetManager:createjs.LoadQueue, moveSpeed:number, updateTime: number){
            super(assetManager,"enemy_bat");
            this.Start();

            this.hp = 3;
            this.attackPower = 1;         
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 100;
            this.updateTime = updateTime;
            this.currentTime = updateTime;
        }
        // methods

        public Start(): void {
            // set the initial position
            this.y = 200;
            this.x = 320;
            this.trajectory = new math.Vec2(0,0);
        }
        public Update(): void {
            super.Update();
        }
        public Reset(): void {}

        public Move(): void {
            this.currentTime -= 1;
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (this.currentTime == 0){
                this.trajectory = math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed);
                this.currentTime = this.updateTime;
            }

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, this.trajectory);
            
            this.x = newPos.x;
            this.y = newPos.y;
        }

        public CheckBound(): void {}        

        public DevourEffect(): void{
            managers.Game.player.hp += 2;
        }
    }
}