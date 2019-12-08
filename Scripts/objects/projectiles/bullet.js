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
            _this.name = imageString;
            _this.attackPower = attackPower;
            return _this;
        }
        // Methods
        Bullet.prototype.Start = function () {
        };
        Bullet.prototype.Update = function () {
            //intentional change: please do not set this to weapon swing
            if (managers.Collision.Check(managers.Game.player.weapon, this)) {
                this.Reset();
            }
            if (managers.Collision.Check(managers.Game.player, this)) {
                var ticker = createjs.Ticker.getTicks();
                // use ticker to restrict 1 bullet every 10 frames for damage
                if (ticker % 10 == 0) {
                    managers.Game.player.isTakingProjectileDamage = true;
                    managers.Game.player.GetDamage(this);
                    this.Reset();
                }
            }
            this.CheckBound();
        };
        Bullet.prototype.CheckBound = function () {
            // right bound
            if (this.x >= config.Bounds.RIGHT_BOUND - this.halfW
                || this.x <= this.halfW + config.Bounds.LEFT_BOUND
                || this.y >= config.Bounds.BOTTOM_BOUND - this.halfH
                || this.y <= this.halfH + config.Bounds.TOP_BOUND) {
                this.Reset();
            }
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map