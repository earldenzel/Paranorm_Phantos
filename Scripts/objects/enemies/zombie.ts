module objects {
    export class Zombie extends objects.Enemy {
        // Variables
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
            this.eatTimer = 300;
            this.isFlying = false;
            this.halfSpeed = moveSpeed / 2;
            this.canBeEaten = true;
            this.attackingMode = false;


            // Animations
            this.walk = ["Zombie_WalkBack", "Zombie_WalkFront", "Zombie_WalkLeft", "Zombie_WalkLeft"];
            this.attack = ["Zombie_AttackBack", "Zombie_AttackFront", "Zombie_AttackLeft", "Zombie_AttackLeft"];

            this.direction = config.Direction.UP;
        }

        // Methods
        public Start(): void {
            // set the initial position
            this.y = 300;
            this.x = 350;
        }
        public Update(): void {
            
            if(!this.isStunned && !this.isDead){
                if (this.attackingMode) {
                    this.SwitchAnimation(this.attack[this.direction as number]);
                } else {
                    this.SwitchAnimation(this.walk[this.direction as number]);
                }
            }
            else if (this.isStunned && !this.isDead){
                this.SwitchAnimation("Zombie_Stun");
            }
            else{
                if(managers.Game.player.biteSequence != 0){
                    if (this.currentAnimation == "Zombie_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("Zombie_Explode");
                }
            }
            super.Update();
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
                this.scaleX = 1;
                this.direction = config.Direction.LEFT;
            }
            if (newPos.x > this.x) {
                this.scaleX = -1;
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
        public RemoveFromPlay(bounty: number): void {
            this.isDead = true;
            
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        }
    }
}