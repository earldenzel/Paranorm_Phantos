module objects {
    export enum HandAttackMode {
        CHASE,
        QUAKE,
        SLAP
    }
    export class ConjuringHand extends objects.Enemy {
        // Variables
        private leftNotRight: boolean;
        private attackingMode: HandAttackMode;
        private currentAttackPower: number;
        private quakingCounter: number;

        private bulletSpawn: math.Vec2;
        private rateOfFire: number;

        // Constructor
        constructor(leftNotRight: boolean, startPosition: math.Vec2) {
            super(managers.Game.bosses_TextureAtlas, "Boss3_OpenHand");
            this.leftNotRight = leftNotRight;
            this.startPosition = startPosition;
            this.Start();

            this.hp = 10;
            this.attackPower = 2;
            this.moveSpeed = 2;
            this.knockback = 0.25;
            this.eatTimer = 1000;
            this.bounty = 50;
            this.isFlying = true;
            this.currentAttackPower = this.attackPower;
            this.rateOfFire = 150;
            this.attackingMode = HandAttackMode.CHASE;
            this.quakingCounter = 0;
        }

        // Methods
        public Start(): void {
            this.SetPosition(this.startPosition);
            if (!this.leftNotRight) {
                this.scaleX = -1;
            }
        }
        public Update(): void {
            if (this.attackingMode != HandAttackMode.QUAKE) {
                if (this.leftNotRight) {
                    this.scaleX = 1;
                }
                else {
                    this.scaleX = -1;
                }
            }
            switch (this.attackingMode) {
                case HandAttackMode.CHASE:
                    this.SwitchAnimation("Boss3_OpenHand");
                    break;
                case HandAttackMode.SLAP:
                    if (this.currentAnimation == "Boss3_Slap" && this.currentAnimationFrame > 3) {
                        this.SwitchAnimation("Boss3_OpenHandSide");
                    }
                    this.SwitchAnimation("Boss3_Slap");
                    break;
                case HandAttackMode.QUAKE:
                    if (this.leftNotRight) {
                        this.scaleX = -1;
                    }
                    else {
                        this.scaleX = 1;
                    }
                    this.SwitchAnimation("Boss3_ClosedHand");
                    break;
            }
            super.Update();
            if (this.quakingCounter > 2) {
                this.BulletFire();
            }
        }
        public Reset(): void { }
        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 120) {
                this.attackingMode = HandAttackMode.SLAP;
                this.currentAttackPower = this.attackingMode + 1;
            }
            else if (distanceToPlayer > 400) {
                this.attackingMode = HandAttackMode.QUAKE;
                this.currentAttackPower = this.attackingMode + 1;
            }
            else {
                this.attackingMode = HandAttackMode.CHASE;
                this.currentAttackPower = this.attackingMode;
            }
            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));

            if (this.attackingMode == HandAttackMode.CHASE) {
                this.x = newPos.x;
                this.y = newPos.y;
            }
            else if (this.attackingMode == HandAttackMode.QUAKE && this.quakingCounter <= 3) {
                this.y -= 1;
                this.quakingCounter += 1;
            }


        }
        public CheckBound(): void {
            super.CheckBound();
        }
        public BulletFire(): void {
            let ticker: number = createjs.Ticker.getTicks();

            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = this.GetPosition();

                    for (let i = 0; i < 8; i++) {
                        let currentBullet = managers.Game.bulletManager.CurrentBullet;
                        let bullet = managers.Game.bulletManager.quakeEffects[currentBullet];
                        
                        bullet.SetupEffect(i as config.Direction);
                        bullet.x = this.bulletSpawn.x;
                        bullet.y = this.bulletSpawn.y;

                        managers.Game.bulletManager.CurrentBullet++;
                        if (managers.Game.bulletManager.CurrentBullet > 49) {
                            managers.Game.bulletManager.CurrentBullet = 0;
                        }
                    }
                }
                this.quakingCounter = 0;
            } else {
                this.bulletSpawn = new math.Vec2(-5000, -5000);
            }
        }
    }
}