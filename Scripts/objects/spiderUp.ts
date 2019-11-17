module objects {
    export class SpiderUp extends objects.Enemy {
        // variables
        private distance: number;
        private speed: number = 1;
        private isToRight: Boolean = true;

        private bulletSpawn: math.Vec2;

        // constructor
        constructor(startPosition: math.Vec2, distance: number) {
            super(managers.Game.spider_TextureAtlas, "spiderUp", startPosition);

            this.distance = distance;

            this.hp = 1;
            this.attackPower = 1;
            this.knockback = 0.75;
            this.eatTimer = 500;
            this.bounty = 4;
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

            if (this.isToRight && !(this.x == this.startPosition.x + this.distance)) {
                this.x += this.speed;
            } else if (this.isToRight && (this.x == this.startPosition.x + this.distance)) {
                this.isToRight = false;
            } else if (!this.isToRight && !(this.x == this.startPosition.x)) {
                this.x -= this.speed;
            } else if (!this.isToRight && (this.x == this.startPosition.x)) {
                this.isToRight = true;
            }
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
                    this.bulletSpawn = new math.Vec2(this.x, this.y + this.halfH);

                    let currentBullet = managers.Game.bulletManager.CurrentSpiderBullet;
                    let bullet = managers.Game.bulletManager.spiderBullets[currentBullet];

                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;

                    managers.Game.bulletManager.CurrentSpiderBullet++;

                    if (managers.Game.bulletManager.CurrentSpiderBullet > 49) {
                        managers.Game.bulletManager.CurrentSpiderBullet = 0;
                    }
                }
            }else{
                this.bulletSpawn = new math.Vec2(-5000, -5000);
            }

        }
    }
}