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
            this.buildLaserPool();
            this.CurrentSpiderBullet = 0;
        };
        Bullet.prototype.Update = function () {
            this.spiderBullets.forEach(function (bullet) {
                bullet.Update();
            });
        };
        // Functions
        Bullet.prototype.buildLaserPool = function () {
            for (var i = 0; i < this.bulletCount; i++) {
                this.spiderBullets[i] = new objects.SpiderBullet();
            }
        };
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map