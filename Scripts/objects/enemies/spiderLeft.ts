module objects {
    export class SpiderLeft extends objects.Enemy {
        // variables
        private distance: number;
        private isToDown: Boolean = true;
        private rateOfFire: number;

        private bulletSpawn: math.Vec2;

        // constructor
        constructor(startPosition: math.Vec2, distance: number) {
            super(managers.Game.spider_TextureAtlas, "spiderLeft", startPosition);

            this.distance = distance;

            this.hp = 10;
            this.moveSpeed = 1;
            this.attackPower = 1;
            this.knockback = 0;
            this.eatTimer = 500;
            this.bounty = 4;
            this.isFlying = false;
            this.halfSpeed = this.moveSpeed / 2;
            this.rateOfFire = 70;
            this.expGain = 3;
            this.explosion = new objects.Explosion(ExplodeTypes.GHOSTSHADOW,this.GetPosition(),0);
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

            if (this.isToDown && !(this.y == this.startPosition.y + this.distance)) {
                this.y += this.moveSpeed;
            } else if (this.isToDown && (this.y == this.startPosition.y + this.distance)) {
                this.isToDown = false;
            } else if (!this.isToDown && !(this.y == this.startPosition.y)) {
                this.y -= this.moveSpeed;
            } else if (!this.isToDown && (this.y == this.startPosition.y)) {
                this.isToDown = true;
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
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x + this.halfW, this.y);

                    let currentBullet = managers.Game.bulletManager.CurrentBullet;
                    let bullet = managers.Game.bulletManager.spiderBulletsLeft[currentBullet];

                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    managers.Game.SFX = createjs.Sound.play("bullet");
                    managers.Game.SFX.volume = 0.4;

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