module objects {
    export class RedSkeleton extends objects.Enemy {
        // Variables
        private bulletSpawn: math.Vec2;
        private rateOfFire: number;

        private moveSpeed: number;
        private rightDirection: boolean;
        private downDirection: boolean;
        private walk: Array<any>;
        public direction: config.Direction;

        // Constructor
        constructor(position: math.Vec2, moveSpeed: number, rightDirection: boolean, downDirection: boolean) {
            super(managers.Game.enemies_TextureAtlas, "RedSkeleton_WalkFront", position);
            this.Start();
            this.hp = 3;
            this.attackPower = 1;
            this.moveSpeed = moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.knockback = 0.85;
            this.eatTimer = 0;
            this.canBeEaten = false;
            this.bounty = 0;
            this.isFlying = false;
            this.rateOfFire = 50;

            this.walk = ["RedSkeleton_WalkBack", "RedSkeleton_WalkFront", "RedSkeleton_WalkRight", "RedSkeleton_WalkRight"];
            this.direction = config.Direction.DOWN;
        }

        // Methods
        public Start(): void {
            this.SetPosition(this.startPosition);
        }
        public Update(): void {
            if (!this.isStunned && !this.isDead) {
                this.SwitchAnimation(this.walk[this.direction as number]);
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("RedSkeleton_Stun");
            }
            else {
                this.SwitchAnimation("RedSkeleton_Dead");
                let ticker: number = createjs.Ticker.getTicks();

                if (ticker % 150 == 0) {
                    this.isDead = false;
                    this.isStunned = false;
                    this.hp = 3;
                    ticker = 1;
                }
            }
            super.Update();
            this.BulletFire();
        }
        public Reset(): void {
            super.CheckBound();
        }
        public Move(): void {
            let ticker = createjs.Ticker.getTicks();

            if (ticker % 300 > 150) {
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                if (this.rightDirection) {
                    this.scaleX = 1;
                    this.direction = config.Direction.RIGHT;
                }
                else {
                    this.scaleX = -1;
                    this.direction = config.Direction.LEFT;
                }
            }
            else {
                this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;
                if (this.downDirection) {
                    this.direction = config.Direction.DOWN;
                }
                else {
                    this.direction = config.Direction.UP;
                }
            }
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

        public BulletFire(): void {
            let ticker: number = createjs.Ticker.getTicks();

            // If Shooting Flower alive, shoots the bullet
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x, this.y);

                    let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);

                    let currentBullet = managers.Game.bulletManager.CurrentBullet;
                    let bullet = managers.Game.bulletManager.redBones[currentBullet];

                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    console.log(bullet);

                    // get the direction when the bullet shoots
                    let bulletPosition: math.Vec2 = new math.Vec2(bullet.x, bullet.y);
                    let dirToPlayer: math.Vec2 = math.Vec2.Subtract(bulletPosition, playerPosition);
                    let distanceToPlayer: number = math.Vec2.Distance(bulletPosition, playerPosition);
                    let farPointPosition: math.Vec2 = math.Vec2.Add(playerPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, 1000));

                    bullet.farPointPosition = farPointPosition;

                    managers.Game.bulletManager.CurrentBullet++;

                    if (managers.Game.bulletManager.CurrentBullet > 49) {
                        managers.Game.bulletManager.CurrentBullet = 0;
                    }
                }
            } else {
                this.bulletSpawn = new math.Vec2(-5000, -5000);
            }

        }

        public RemoveFromPlay(bounty: number): void {
            this.isDead = true;

        }
    }
}