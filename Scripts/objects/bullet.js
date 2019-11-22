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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // Constructor
        function Bullet(textureAtlas, imageString, attackPower) {
            var _this = _super.call(this, textureAtlas, imageString) || this;
            _this.projectileTickerTime = 10;
            _this.name = imageString;
            _this.attackPower = attackPower;
            return _this;
        }
        // Methods
        Bullet.prototype.Start = function () {
        };
        Bullet.prototype.Update = function () {
            if (managers.Collision.Check(managers.Game.player, this)) {
                var ticker = createjs.Ticker.getTicks();
                // use ticker to restrict 1 bullet only hurts 1 hp
                if (ticker % this.projectileTickerTime == 0) {
                    managers.Game.player.GetDamage(this);
                    this.Reset();
                }
            }
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map