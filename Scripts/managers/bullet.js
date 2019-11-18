var managers;
(function (managers) {
    var Bullet = /** @class */ (function () {
        // Constructor
        function Bullet() {
            this.Start();
        }
        // Methods
        Bullet.prototype.Start = function () {
            this.bulletCount = 50;
            this.spiderBullets = new Array();
            this.spiderBulletsLeft = new Array();
            this.spiderBulletsRight = new Array();
            this.shootingFLowerBullets = new Array();
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
        };
        // Functions
        Bullet.prototype.buildBulletPool = function () {
            for (var i = 0; i < this.bulletCount; i++) {
                this.spiderBullets[i] = new objects.SpiderBullet();
                this.spiderBulletsLeft[i] = new objects.SpiderBulletLeft();
                this.spiderBulletsRight[i] = new objects.SpiderBulletRight();
                this.shootingFLowerBullets[i] = new objects.ShootingFlowerBullet();
            }
        };
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map