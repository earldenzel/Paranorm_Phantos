module objects {
    export class TestZombie extends objects.Enemy {
        // variables
        private moveSpeed: number;
        private currentSpeed: number;

        // constructors

        constructor(assetManager: createjs.LoadQueue, moveSpeed: number) {
            super(assetManager, "enemy_zombieTest");
            this.Start();

            this.hp = 3;
            this.attackPower = 1;
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
        }
        // methods

        public Start(): void {
            // set the initial position
            this.y = 300;
            this.x = 350;
        }
        public Update(): void {
            super.Update();
        }
        public Reset(): void { }

        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(objects.Game.player.x, objects.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 200) {
                this.currentSpeed = this.moveSpeed * 2;
            } else {
                this.currentSpeed = this.moveSpeed;
            }

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.currentSpeed));
            this.x = newPos.x;
            this.y = newPos.y;
        }

        public CheckBound(): void { }

        public GetObjectSpeed(): number {
            return this.currentSpeed;
        }
    }
}