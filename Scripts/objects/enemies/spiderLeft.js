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
    var SpiderLeft = /** @class */ (function (_super) {
        __extends(SpiderLeft, _super);
        // constructor
        function SpiderLeft(startPosition, distance) {
            var _this = _super.call(this, managers.Game.spider_TextureAtlas, "spiderLeft", startPosition) || this;
            _this.isToDown = true;
            _this.distance = distance;
            _this.hp = 1;
            _this.moveSpeed = 1;
            _this.attackPower = 1;
            _this.knockback = 0.75;
            _this.eatTimer = 500;
            _this.bounty = 4;
            _this.isFlying = false;
            _this.halfSpeed = _this.moveSpeed / 2;
            _this.rateOfFire = 70;
            return _this;
        }
        // methods
        SpiderLeft.prototype.Start = function () {
            // set the initial position
            this.SetPosition(this.startPosition);
        };
        SpiderLeft.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.bulletFire();
        };
        SpiderLeft.prototype.Reset = function () {
            _super.prototype.CheckBound.call(this);
        };
        SpiderLeft.prototype.Move = function () {
            if (this.isToDown && !(this.y == this.startPosition.y + this.distance)) {
                this.y += this.moveSpeed;
            }
            else if (this.isToDown && (this.y == this.startPosition.y + this.distance)) {
                this.isToDown = false;
            }
            else if (!this.isToDown && !(this.y == this.startPosition.y)) {
                this.y -= this.moveSpeed;
            }
            else if (!this.isToDown && (this.y == this.startPosition.y)) {
                this.isToDown = true;
            }
        };
        SpiderLeft.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        SpiderLeft.prototype.DevourEffect = function () {
            managers.Game.player.GainHealth(2);
        };
        SpiderLeft.prototype.bulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            // If Spider alive, shoots the bullet
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x + this.halfW, this.y);
                    var currentBullet = managers.Game.bulletManager.CurrentBullet;
                    var bullet = managers.Game.bulletManager.spiderBulletsLeft[currentBullet];
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
        return SpiderLeft;
    }(objects.Enemy));
    objects.SpiderLeft = SpiderLeft;
})(objects || (objects = {}));
//# sourceMappingURL=spiderLeft.js.map