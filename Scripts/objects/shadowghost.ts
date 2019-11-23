module objects {
    export class ShadowGhost extends objects.Enemy {
        // Variables
        private moveSpeed: number;
        private rightDirection: boolean;
        private downDirection: boolean;

        private isTransparent: boolean;
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
            this.powerUp = powerUp.SHADOW;
        }
        // Methods
        public Start(): void {
            // set the initial position
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            if (!this.isStunned) {
                if (this.isTransparent) {
                    this.isTakingDamage = false;
                    this.SwitchAnimation("GhostShadow_Transparent");
                }
                else {
                    this.SwitchAnimation("GhostShadow_Opaque");
                }
            }
            else {
                this.SwitchAnimation("GhostShadow_Stun");
            }
            super.Update();
            this.Attacking();
        }
        public Reset(): void { }
        public Move(): void {
            let ticker: number = createjs.Ticker.getTicks();

            if (ticker % 20 == 0) {
                this.isTransparent = !this.isTransparent;
            }

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
        public CheckBound(): void {
            super.CheckBound();
        }
        // FIX THE ATTACKING
        public Attacking(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 100) {
                this.isTransparent = false;
                let ticker: number = createjs.Ticker.getTicks();
                if (ticker % 30 == 0) {
                    this.SwitchAnimation("GhostShadow_Attack");
                }
            }

        }
        public DevourEffect(): void {
            let random: number = Math.random() * 100;
            if (random > 90) {
                managers.Game.player.GainAttack(1);
            }
            else {
                managers.Game.player.GainHealth(2);
            }
            managers.Game.player.powerUp = powerUp.SHADOW;
        }
        public SwitchAnimation(newAnimation: string) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        }
    }
}