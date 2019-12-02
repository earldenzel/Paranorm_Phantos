module objects {
    export class ShadowGhost extends objects.Enemy {
        // Variables
        private rightDirection: boolean;
        private downDirection: boolean;

        private isTransparent: boolean;
        private isAttacking: boolean;
        // Constructors
        constructor(moveSpeed: number, rightDirection: boolean, downDirection: boolean) {
            super(managers.Game.enemies_TextureAtlas, "GhostShadow_Transparent");
            this.Start();
            this.hp = 3;
            this.attackPower = 2;

            this.moveSpeed = moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.knockback = 0.75;
            this.eatTimer = 600;
            this.bounty = 20;
            this.isFlying = true;
            this.isTransparent = true;
            this.powerUp = config.PowerUp.SHADOW;
        }
        // Methods
        public Start(): void {
            // set the initial position
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            if (!this.isStunned && !this.isDead) {
                if (this.isTransparent) {
                    this.canBeAttacked = false;
                    this.SwitchAnimation("GhostShadow_Transparent");
                }
                else if (this.isAttacking) {

                    if (this.currentAnimation == "GhostShadow_Attack" && this.currentAnimationFrame > 2) {
                        this.currentAnimationFrame = 3;
                    }
                    this.SwitchAnimation("GhostShadow_Attack");
                }
                else {
                    this.canBeAttacked = true;
                    this.SwitchAnimation("GhostShadow_Opaque");
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostShadow_Stun");
                if (managers.Game.player.biteSequence == 0) {
                    this.isDead = true;
                }
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "GhostShadow_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("GhostShadow_Explode");
                }
            }
            super.Update();
        }
        public Reset(): void { }
        public Move(): void {
            let ticker: number = createjs.Ticker.getTicks();

            if (ticker % 90 == 1) {
                this.isTransparent = !this.isTransparent;
            }
            this.Attacking();

            if (!this.isAttacking) {
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;

                if (this.x > managers.Game.gameWidth && this.rightDirection) {
                    this.rightDirection = false;
                }
                else if (this.x < 0 && !this.rightDirection) {
                    this.rightDirection = true;
                }
                if (this.y > managers.Game.gameHeight && this.downDirection) {
                    this.downDirection = false;
                }
                else if (this.y < 0 && !this.downDirection) {
                    this.downDirection = true;
                }
            }
        }
        public CheckBound(): void {
            super.CheckBound();
        }

        public Attacking(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 125) {
                this.isTransparent = false;
                this.isAttacking = true;
                this.canBeAttacked = false;
            }
            else {
                this.isAttacking = false;
            }
        }
        public DevourEffect(): void {
            managers.Game.player.powerUp = this.powerUp;
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