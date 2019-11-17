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
    var ShootingFlowerBullet = /** @class */ (function (_super) {
        __extends(ShootingFlowerBullet, _super);
        // Variables
        // Constructor
        function ShootingFlowerBullet() {
            var _this = _super.call(this, managers.Game.shootingFlower_TextureAtlas, "shootingFlowerBullet") || this;
            _this.Start();
            return _this;
        }
        // Methods
        ShootingFlowerBullet.prototype.Start = function () {
            this.speedX = 0;
            this.speedY = 5;
            this.Reset();
        };
        ShootingFlowerBullet.prototype.Update = function () {
            this.Move();
        };
        ShootingFlowerBullet.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        ShootingFlowerBullet.prototype.Move = function () {
            this.y += this.speedY;
        };
        ShootingFlowerBullet.prototype.Main = function () { };
        ShootingFlowerBullet.prototype.CheckBounds = function () { };
        return ShootingFlowerBullet;
    }(objects.GameObject));
    objects.ShootingFlowerBullet = ShootingFlowerBullet;
})(objects || (objects = {}));
//# sourceMappingURL=shootingFlowerBullet.js.map