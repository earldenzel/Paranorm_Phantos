module managers {
    export class Bullet {
        // Variables
        public spiderBullets: objects.SpiderBullet[];
        public spiderBulletsLeft: objects.SpiderBulletLeft[];
        public CurrentSpiderBullet: number;

        private bulletCount: number;

        // Constructor
        constructor() {
            this.Start();
        }

        // Methods
        public Start(): void {
            this.bulletCount = 50;
            this.spiderBullets = new Array<objects.SpiderBullet>();
            this.spiderBulletsLeft = new Array<objects.SpiderBulletLeft>();

            this.buildBulletPool();
            this.CurrentSpiderBullet = 0;
        }

        public Update(): void {
            this.spiderBullets.forEach(bullet => {
                bullet.Update();
            });

            this.spiderBulletsLeft.forEach(bullet => {
                bullet.Update();
            });
        }

        // Functions
        private buildBulletPool(): void {
            for (let i = 0; i < this.bulletCount; i++) {
                this.spiderBullets[i] = new objects.SpiderBullet();
                this.spiderBulletsLeft[i] = new objects.SpiderBulletLeft();
            }
        }
    }
}