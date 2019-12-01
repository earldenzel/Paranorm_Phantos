module objects {
    export class GhostTeeth extends objects.Enemy {
        // Variable
        private currentSpeed: number;

        private isAttacking: boolean;
        private attack: Array<any>;
        public direction: config.Direction;

        // Constructor
        constructor(moveSpeed: number) {
            super(managers.Game.enemies_TextureAtlas, "GhostTeeth_Idle");
            this.Start();
            this.hp = 3;
            this.attackPower = 2;

            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 600;
            this.bounty = 30;
            this.isFlying = true;
            this.powerUp = config.PowerUp.BITE;

            this.attack = ["GhostTeeth_AttackBack", "GhostTeeth_AttackFront", "GhostTeeth_AttackRight", "GhostTeeth_AttackRight"];
            this.direction = config.Direction.UP;
        }

        // Methods
        public Start(): void {
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            if (!this.isStunned && !this.isDead) {
                if (this.isAttacking) {
                    this.SwitchAnimation(this.attack[this.direction as number]);
                }
                else {
                    this.SwitchAnimation("GhostTeeth_Idle");
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostTeeth_Stun");
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "Ghost_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("Ghost_Explode");
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

            this.isAttacking = (distanceToPlayer < 200);

            if (this.isAttacking) {
                this.currentSpeed = this.moveSpeed * 3;
                if (dirToPlayer.y < 60 && dirToPlayer.y > -60) {
                    if (dirToPlayer.x < 0) {
                        console.log("Charge LEFT");
                        this.scaleX = -1;
                        this.direction = config.Direction.LEFT;
                        this.x -= this.currentSpeed;
                    }
                    else if (dirToPlayer.x > 0) {
                        console.log("Charge RIGHT");
                        this.scaleX = 1;
                        this.direction = config.Direction.RIGHT;
                        this.x += this.currentSpeed;
                    }
                }
                else if (dirToPlayer.x < 40 && dirToPlayer.x > -40) {
                    if (dirToPlayer.y < 0) {
                        console.log("Charge UP");
                        this.direction = config.Direction.UP;
                        this.y -= this.currentSpeed;
                    }
                    else if (dirToPlayer.y > 0) {
                        console.log("Charge DOWN");
                        this.direction = config.Direction.DOWN;
                        this.y += this.currentSpeed;
                    }
                }
            }
        }
        public DevourEffect(): void {
            managers.Game.player.powerUp = config.PowerUp.BITE;
            super.DevourEffect();
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