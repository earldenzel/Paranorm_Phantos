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
    var QuakeEffect = /** @class */ (function (_super) {
        __extends(QuakeEffect, _super);
        // Constructor
        function QuakeEffect() {
            var _this = _super.call(this, managers.Game.bosses_TextureAtlas, "Boss3_QuakeStraight", 2) || this;
            _this.Start();
            _this.activation = false;
            return _this;
        }
        // Methods
        QuakeEffect.prototype.Start = function () {
            this.Reset();
        };
        QuakeEffect.prototype.Update = function () {
            if (this.activation) {
                this.Move();
            }
            _super.prototype.Update.call(this);
        };
        QuakeEffect.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        QuakeEffect.prototype.Move = function () {
            this.x += this.speedX;
            this.y += this.speedY;
        };
        QuakeEffect.prototype.Main = function () { };
        QuakeEffect.prototype.CheckBounds = function () { };
        QuakeEffect.prototype.SetupEffect = function (direction) {
            this.direction = direction;
            switch (this.direction) {
                case config.Direction.UP:
                    this.scaleY = -1;
                    this.speedX = 0;
                    this.speedY = -3;
                    break;
                case config.Direction.DOWN:
                    this.speedX = 0;
                    this.speedY = 3;
                    break;
                case config.Direction.LEFT:
                    this.rotation += 90;
                    this.speedX = -3;
                    this.speedY = 0;
                    break;
                case config.Direction.RIGHT:
                    this.rotation -= 90;
                    this.speedX = 3;
                    this.speedY = 0;
                    break;
                case config.Direction.UP_LEFT:
                    this.gotoAndPlay("Boss3_QuakeDiagonal");
                    this.scaleY = -1;
                    this.speedX = -3;
                    this.speedY = -3;
                    break;
                case config.Direction.UP_RIGHT:
                    this.gotoAndPlay("Boss3_QuakeDiagonal");
                    this.scaleY = -1;
                    this.scaleX = -1;
                    this.speedX = 3;
                    this.speedY = -3;
                    break;
                case config.Direction.DOWN_LEFT:
                    this.gotoAndPlay("Boss3_QuakeDiagonal");
                    this.speedX = -3;
                    this.speedY = 3;
                    break;
                case config.Direction.DOWN_RIGHT:
                    this.gotoAndPlay("Boss3_QuakeDiagonal");
                    this.scaleX = -1;
                    this.speedX = 3;
                    this.speedY = 3;
                    break;
            }
        };
        return QuakeEffect;
    }(objects.Bullet));
    objects.QuakeEffect = QuakeEffect;
})(objects || (objects = {}));
//# sourceMappingURL=quakeeffect.js.map