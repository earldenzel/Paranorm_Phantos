module managers {
    export class Bullet {
        // Variables
        public spiderBullets: objects.SpiderBullet[];
        public spiderBulletsLeft: objects.SpiderBulletLeft[];
        public spiderBulletsRight: objects.SpiderBulletRight[];
        public shootingFLowerBullets: objects.ShootingFlowerBullet[];
        public bones: objects.Bone[];
        public redBones: objects.RedBone[];
        public slimeBalls: objects.SlimeBall[];
        public fireBalls: objects.FireBall[];
        public giantWormBullets: objects.GiantWormBullet[];
        public quakeEffects: objects.QuakeEffect[];

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
            this.bones = new Array<objects.Bone>();
            this.redBones = new Array<objects.RedBone>();
            this.slimeBalls = new Array<objects.SlimeBall>();
            this.fireBalls = new Array<objects.FireBall>();
            this.giantWormBullets = new Array<objects.GiantWormBullet>();
            this.quakeEffects = new Array<objects.QuakeEffect>();

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
            this.bones.forEach(bullet => {
                bullet.Update();
            });
            this.redBones.forEach(bullet => {
                bullet.Update();
            });
            this.slimeBalls.forEach(bullet => {
                bullet.Update();
            });
            this.fireBalls.forEach(bullet => {
                bullet.Update();
            });
            this.giantWormBullets.forEach(bullet => {
                bullet.Update();
            });
            this.quakeEffects.forEach(bullet => {
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
                this.bones[i] = new objects.Bone();
                this.redBones[i] = new objects.RedBone();
                this.slimeBalls[i] = new objects.SlimeBall();
                this.fireBalls[i] = new objects.FireBall();
                this.giantWormBullets[i] = new objects.GiantWormBullet();
                this.quakeEffects[i] = new objects.QuakeEffect();
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
            this.bones.forEach(bullet=>{
                bullet.Reset();
            });
            this.redBones.forEach(bullet=>{
                bullet.Reset();
            });
            this.slimeBalls.forEach(bullet=>{
                bullet.Reset();
            });
            this.fireBalls.forEach(bullet=>{
                bullet.Reset();
            });
            this.giantWormBullets.forEach(bullet=>{
                bullet.Reset();
            });
            this.quakeEffects.forEach(bullet=>{
                bullet.Reset();
            });
        }
    }
}