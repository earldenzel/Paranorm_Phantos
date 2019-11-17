module objects {
    export class ShootingFLower extends objects.Enemy {
        // variables
        private bulletSpawn: math.Vec2;

        // constructor
        constructor(position: math.Vec2) {
            super(managers.Game.shootingFlower_TextureAtlas, "shootingFlower", position);

            this.hp = 1;
            this.attackPower = 1;
            this.knockback = 0;
            this.eatTimer = 500;
            this.bounty = 3;
            this.isFlying = false;
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

            // If Spider alive, shoots the bullet
            if (this.hp > 0) {
                if (ticker % 70 == 0) {
                    this.bulletSpawn = new math.Vec2(this.x + 5, this.y - 20);

                    let currentBullet = managers.Game.bulletManager.CurrentBullet;
                    let bullet = managers.Game.bulletManager.shootingFLowerBullets[currentBullet];

                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;

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