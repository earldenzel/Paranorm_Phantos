module objects {
    export class Zombie extends objects.Enemy {
        // Variables
        private moveSpeed: number;
        private currentSpeed: number;
        private attackingMode: boolean;
        // Animation Variables
        private walk: Array<any>;
        private attack: Array<any>;
        public direction: config.Direction;

        // Constructors
        constructor(moveSpeed: number) {
            super(managers.Game.enemies_TextureAtlas, "Zombie_WalkBack");
            this.Start();

            this.hp = 3;
            this.attackPower = 1;
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 10;
            this.isFlying = false;
            this.canBeEaten = false;
            this.attackingMode = false;


            // Animations
            this.walk = ["Zombie_WalkBack", "Zombie_WalkFront", "Zombie_WalkLeft", "Zombie_WalkLeft"];
            console.log(this.walk);
            this.attack = ["Zombie_AttackBack", "Zombie_AttackFront", "Zombie_AttackLeft", "Zombie_AttackLeft"];

            this.direction = config.Direction.UP;
            console.log(this.direction);
        }

        // Methods
        public Start(): void {
            // set the initial position
            this.y = 300;
            this.x = 350;
        }
        public Update(): void {
            super.Update();
            if (this.isStunned) {
                this.SwitchAnimation("Zombie_Stun");
            } else if(this.isDead){
                this.SwitchAnimation("Zombie_Explode");
            } else {
                if (this.attackingMode) {
                    this.SwitchAnimation(this.attack[this.direction as number]);
                } else {
                    this.SwitchAnimation(this.walk[this.direction as number]);
                }
            }


        }
        public Reset(): void { }

        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 100) {
                this.attackingMode = true;
                this.currentSpeed = this.moveSpeed * 2;
            } else {
                this.attackingMode = false;
                this.currentSpeed = this.moveSpeed;
            }

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.currentSpeed));
            if (newPos.x < this.x) {
                this.direction = config.Direction.LEFT;
            }
            if (newPos.x > this.x) {
                // To be flipped, requires the change in sprite
                this.direction = config.Direction.RIGHT;
            }
            if (newPos.y > this.y) {
                this.direction = config.Direction.DOWN;
            }
            if (newPos.y < this.y) {
                this.direction = config.Direction.UP;
            }

            this.x = newPos.x;
            this.y = newPos.y;
        }
        public CheckBound(): void {
            super.CheckBound();
        }

        public GetObjectSpeed(): number {
            return this.currentSpeed;
        }

        public DevourEffect(): void {
            let random: number = Math.random() * 100;
            if (random > 98) {
                managers.Game.player.GainSpeed(1);
            }
            else {
                managers.Game.player.GainHealth(3);
            }
        }

        public SwitchAnimation(newAnimation: string) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        }
    }
}