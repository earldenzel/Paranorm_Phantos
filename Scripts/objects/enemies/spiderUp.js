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
    var SpiderUp = /** @class */ (function (_super) {
        __extends(SpiderUp, _super);
        // constructor
        function SpiderUp(startPosition, distance) {
            var _this = _super.call(this, managers.Game.spider_TextureAtlas, "spiderUp", startPosition) || this;
            _this.isToRight = true;
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
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.GHOSTSHADOW, _this.GetPosition(), 0, false);
            return _this;
        }
        // methods
        SpiderUp.prototype.Start = function () {
            // set the initial position
            this.SetPosition(this.startPosition);
        };
        SpiderUp.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.bulletFire();
        };
        SpiderUp.prototype.Reset = function () {
            _super.prototype.CheckBound.call(this);
        };
        SpiderUp.prototype.Move = function () {
            if (this.isToRight && !(this.x == this.startPosition.x + this.distance)) {
                this.x += this.moveSpeed;
            }
            else if (this.isToRight && (this.x == this.startPosition.x + this.distance)) {
                this.isToRight = false;
            }
            else if (!this.isToRight && !(this.x == this.startPosition.x)) {
                this.x -= this.moveSpeed;
            }
            else if (!this.isToRight && (this.x == this.startPosition.x)) {
                this.isToRight = true;
            }
        };
        SpiderUp.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        SpiderUp.prototype.DevourEffect = function () {
            managers.Game.player.GainHealth(2);
        };
        SpiderUp.prototype.bulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            // If Spider alive, shoots the bullet
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x, this.y + this.halfH);
                    var currentBullet = managers.Game.bulletManager.CurrentBullet;
                    var bullet = managers.Game.bulletManager.spiderBullets[currentBullet];
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
        return SpiderUp;
    }(objects.Enemy));
    objects.SpiderUp = SpiderUp;
})(objects || (objects = {}));
//# sourceMappingURL=spiderUp.js.map