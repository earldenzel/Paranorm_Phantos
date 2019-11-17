module managers {
    export class Bullet {
        // Variables
        public spiderBullets: objects.SpiderBullet[];
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

            this.buildLaserPool();
            this.CurrentSpiderBullet = 0;
        }

        public Update(): void {
            this.spiderBullets.forEach(bullet => {
                bullet.Update();
            })
        }

        // Functions
        private buildLaserPool(): void {
            for (let i = 0; i < this.bulletCount; i++) {
                this.spiderBullets[i] = new objects.SpiderBullet();
            }
        }
    }
}