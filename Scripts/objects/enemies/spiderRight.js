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
    var SpiderRight = /** @class */ (function (_super) {
        __extends(SpiderRight, _super);
        // constructor
        function SpiderRight(startPosition, distance) {
            var _this = _super.call(this, managers.Game.spider_TextureAtlas, "spiderRight", startPosition) || this;
            _this.isToUp = true;
            _this.distance = distance;
            _this.hp = 10;
            _this.moveSpeed = 1;
            _this.attackPower = 1;
            _this.knockback = 0;
            _this.eatTimer = 500;
            _this.bounty = 4;
            _this.isFlying = false;
            _this.halfSpeed = _this.moveSpeed / 2;
            _this.rateOfFire = 70;
            _this.expGain = 3;
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.GHOSTSHADOW, _this.GetPosition(), 0);
            return _this;
        }
        // methods
        SpiderRight.prototype.Start = function () {
            // set the initial position
            this.SetPosition(this.startPosition);
        };
        SpiderRight.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.bulletFire();
        };
        SpiderRight.prototype.Reset = function () {
            _super.prototype.CheckBound.call(this);
        };
        SpiderRight.prototype.Move = function () {
            if (this.isToUp && !(this.y == this.startPosition.y - this.distance)) {
                this.y -= this.moveSpeed;
            }
            else if (this.isToUp && (this.y == this.startPosition.y - this.distance)) {
                this.isToUp = false;
            }
            else if (!this.isToUp && !(this.y == this.startPosition.y)) {
                this.y += this.moveSpeed;
            }
            else if (!this.isToUp && (this.y == this.startPosition.y)) {
                this.isToUp = true;
            }
        };
        SpiderRight.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        SpiderRight.prototype.DevourEffect = function () {
            managers.Game.player.GainHealth(2);
        };
        SpiderRight.prototype.bulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            // If Spider alive, shoots the bullet
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x - this.halfW, this.y);
                    var currentBullet = managers.Game.bulletManager.CurrentBullet;
                    var bullet = managers.Game.bulletManager.spiderBulletsRight[currentBullet];
                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    managers.Game.SFX = createjs.Sound.play("bullet");
                    managers.Game.SFX.volume = 0.4;
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
        return SpiderRight;
    }(objects.Enemy));
    objects.SpiderRight = SpiderRight;
})(objects || (objects = {}));
//# sourceMappingURL=spiderRight.js.map