var managers;
(function (managers) {
    var Bullet = /** @class */ (function () {
        // Constructor
        function Bullet() {
        }
        // Methods
        Bullet.prototype.Start = function () {
            this.bulletCount = 50;
            this.spiderBullets = new Array();
            this.spiderBulletsLeft = new Array();
            this.spiderBulletsRight = new Array();
            this.shootingFLowerBullets = new Array();
            this.bones = new Array();
            this.redBones = new Array();
            this.buildBulletPool();
            this.CurrentBullet = 0;
        };
        Bullet.prototype.Update = function () {
            this.spiderBullets.forEach(function (bullet) {
                bullet.Update();
            });
            this.spiderBulletsLeft.forEach(function (bullet) {
                bullet.Update();
            });
            this.spiderBulletsRight.forEach(function (bullet) {
                bullet.Update();
            });
            this.shootingFLowerBullets.forEach(function (bullet) {
                bullet.Update();
            });
            this.bones.forEach(function (bullet) {
                bullet.Update();
            });
            this.redBones.forEach(function (bullet) {
                bullet.Update();
            });
        };
        // Functions
        Bullet.prototype.buildBulletPool = function () {
            for (var i = 0; i < this.bulletCount; i++) {
                this.spiderBullets[i] = new objects.SpiderBullet();
                this.spiderBulletsLeft[i] = new objects.SpiderBulletLeft();
                this.spiderBulletsRight[i] = new objects.SpiderBulletRight();
                this.shootingFLowerBullets[i] = new objects.ShootingFlowerBullet();
                this.bones[i] = new objects.Bone();
                this.redBones[i] = new objects.RedBone();
            }
        };
        Bullet.prototype.Reset = function () {
            this.spiderBullets.forEach(function (bullet) {
                bullet.Reset();
            });
            this.spiderBulletsLeft.forEach(function (bullet) {
                bullet.Reset();
            });
            this.spiderBulletsRight.forEach(function (bullet) {
                bullet.Reset();
            });
            this.shootingFLowerBullets.forEach(function (bullet) {
                bullet.Reset();
            });
            this.bones.forEach(function (bullet) {
                bullet.Reset();
            });
            this.redBones.forEach(function (bullet) {
                bullet.Reset();
            });
        };
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map