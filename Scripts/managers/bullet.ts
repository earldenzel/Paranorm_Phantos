module managers {
    export class Bullet {
        // Variables
        public spiderBullets: objects.SpiderBullet[];
        public spiderBulletsLeft: objects.SpiderBulletLeft[];
        public spiderBulletsRight: objects.SpiderBulletRight[];
        public shootingFLowerBullets: objects.ShootingFlowerBullet[];

        public CurrentBullet: number;
        private bulletCount: number;

        // Constructor
        constructor() {
        }

        // Methods
        public Start(): void {
            this.bulletCount = 50;
            this.spiderBullets = new Array<objects.SpiderBullet>();
            this.spiderBulletsLeft = new Array<objects.SpiderBulletLeft>();
            this.spiderBulletsRight = new Array<objects.SpiderBulletRight>();
            this.shootingFLowerBullets = new Array<objects.ShootingFlowerBullet>();

            this.buildBulletPool();
            this.CurrentBullet = 0;
        }

        public Update(): void {
            this.spiderBullets.forEach(bullet => {
                bullet.Update();
            });

            this.spiderBulletsLeft.forEach(bullet => {
                bullet.Update();
            });

            this.spiderBulletsRight.forEach(bullet => {
                bullet.Update();
            });

            this.shootingFLowerBullets.forEach(bullet => {
                bullet.Update();
            });
        }

        // Functions
        private buildBulletPool(): void {
            for (let i = 0; i < this.bulletCount; i++) {
                this.spiderBullets[i] = new objects.SpiderBullet();
                this.spiderBulletsLeft[i] = new objects.SpiderBulletLeft();
                this.spiderBulletsRight[i] = new objects.SpiderBulletRight();
                this.shootingFLowerBullets[i] = new objects.ShootingFlowerBullet();
            }
        }

        public Reset(): void{
            this.spiderBullets.forEach(bullet => {
                bullet.Reset();
            });

            this.spiderBulletsLeft.forEach(bullet => {
                bullet.Reset();
            });

            this.spiderBulletsRight.forEach(bullet => {
                bullet.Reset();
            });

            this.shootingFLowerBullets.forEach(bullet => {
                bullet.Reset();
            });
        }
    }
}