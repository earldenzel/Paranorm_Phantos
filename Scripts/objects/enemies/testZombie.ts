module objects {
    export class TestZombie extends objects.Enemy {
        // variables
        private moveSpeed: number;
        private currentSpeed: number;

        // constructors

        constructor(moveSpeed: number) {
            super(managers.Game.bat_TextureAtlas, "bat");
            this.Start();

            this.hp = 3;
            this.attackPower = 1;
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 1000;            
            this.bounty = 10;
            this.isFlying = false;
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
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
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

        public CheckBound(): void {
            super.CheckBound();
        }

        public GetObjectSpeed(): number {
            return this.currentSpeed;
        }

        public DevourEffect(): void{
            let random: number = Math.random() * 100;
            if (random > 98){
                managers.Game.player.GainSpeed(1);
            }
            else{
                managers.Game.player.GainHealth(3);
            }
        }
    }
}