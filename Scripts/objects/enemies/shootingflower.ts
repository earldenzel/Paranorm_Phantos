module objects {
    export class ShootingFLower extends objects.Enemy {
        // variables
        private bulletSpawn: math.Vec2;
        private rateOfFire: number;

        // constructor
        constructor(position: math.Vec2) {
            super(managers.Game.shootingFlower_TextureAtlas, "shootingFlower", position);

            this.hp = 10;
            this.attackPower = 1;
            this.knockback = 0;
            this.eatTimer = 500;
            this.bounty = 5;
            this.isFlying = false;
            this.rateOfFire = 50;
            this.expGain = 3;
            this.explosion = new objects.Explosion(ExplodeTypes.MAGGOT,this.GetPosition(),0,false);
        }

        // methods
        public Start(): void {
            // set the initial position
            this.SetPosition(this.startPosition);
        }

        public Update(): void {
            super.Update();
            this.bulletFire();
        }

        public Reset(): void {
            super.CheckBound();
        }

        public Move(): void {

        }

        public CheckBound(): void {
            super.CheckBound();
        }

        public DevourEffect(): void {
            managers.Game.player.GainHealth(2);
        }

        public bulletFire(): void {
            let ticker: number = createjs.Ticker.getTicks();

            // If Shooting Flower alive, shoots the bullet
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x + 5, this.y - 20);

                    let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);

                    let currentBullet = managers.Game.bulletManager.CurrentBullet;
                    let bullet = managers.Game.bulletManager.shootingFLowerBullets[currentBullet];

                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    managers.Game.SFX = createjs.Sound.play("bullet");
                    managers.Game.SFX.volume = 0.4;

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
    }
}