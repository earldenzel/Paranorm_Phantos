module objects {
    export class Undertaker extends objects.Enemy {
        // variables
        private currentSpeed: number;

        // constructors

        constructor(moveSpeed: number) {
            super(managers.Game.bat_TextureAtlas, "bat");
            this.scaleX = 2;
            this.scaleY = 2;
            this.Start();

            this.hp = 20;
            this.attackPower = 2;
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 5000;            
            this.bounty = 100;
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
            managers.Game.player.GainAttack(10);            
        }
    }
}