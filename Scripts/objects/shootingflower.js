var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var ShootingFLower = /** @class */ (function (_super) {
        __extends(ShootingFLower, _super);
        // constructor
        function ShootingFLower(position) {
            var _this = _super.call(this, managers.Game.shootingFlower_TextureAtlas, "shootingFlower", position) || this;
            _this.hp = 1;
            _this.attackPower = 1;
            _this.knockback = 0;
            _this.eatTimer = 500;
            _this.bounty = 3;
            _this.isFlying = false;
            return _this;
        }
        // methods
        ShootingFLower.prototype.Start = function () {
            // set the initial position
            this.SetPosition(this.startPosition);
        };
        ShootingFLower.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.bulletFire();
        };
        ShootingFLower.prototype.Reset = function () {
            _super.prototype.CheckBound.call(this);
        };
        ShootingFLower.prototype.Move = function () {
        };
        ShootingFLower.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        ShootingFLower.prototype.DevourEffect = function () {
            managers.Game.player.GainHealth(2);
        };
        ShootingFLower.prototype.bulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            // If Spider alive, shoots the bullet
            if (this.hp > 0) {
                if (ticker % 70 == 0) {
                    this.bulletSpawn = new math.Vec2(this.x + 5, this.y - 20);
                    var currentBullet = managers.Game.bulletManager.CurrentBullet;
                    var bullet = managers.Game.bulletManager.shootingFLowerBullets[currentBullet];
                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    managers.Game.bulletManager.CurrentBullet++;
                    if (managers.Game.bulletManager.CurrentBullet > 49) {
                        managers.Game.bulletManager.CurrentBullet = 0;
                    }
                }
            }
            else {
                this.bulletSpawn = new math.Vec2(-5000, -5000);
            }
        };
        return ShootingFLower;
    }(objects.Enemy));
    objects.ShootingFLower = ShootingFLower;
})(objects || (objects = {}));
//# sourceMappingURL=shootingflower.js.map