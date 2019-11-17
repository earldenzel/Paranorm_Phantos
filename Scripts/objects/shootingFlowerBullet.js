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
        // Constructor
        function ShootingFlowerBullet() {
            var _this = _super.call(this, managers.Game.shootingFlower_TextureAtlas, "shootingFlowerBullet") || this;
            _this.Start();
            return _this;
        }
        // Methods
        ShootingFlowerBullet.prototype.Start = function () {
            this.Reset();
        };
        ShootingFlowerBullet.prototype.Update = function () {
            if (this.farPointPosition) {
                this.Move();
            }
        };
        ShootingFlowerBullet.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        ShootingFlowerBullet.prototype.Move = function () {
            var bulletPosition = new math.Vec2(this.x, this.y);
            var dirToFarPoint = math.Vec2.Subtract(bulletPosition, this.farPointPosition);
            var distanceToFarPoint = math.Vec2.Distance(bulletPosition, this.farPointPosition);
            var newPos = math.Vec2.Add(bulletPosition, math.Vec2.NormalizeMultiplySpeed(dirToFarPoint, distanceToFarPoint, 2));
            this.x = newPos.x;
            this.y = newPos.y;
        };
        ShootingFlowerBullet.prototype.Main = function () { };
        ShootingFlowerBullet.prototype.CheckBounds = function () { };
        return ShootingFlowerBullet;
    }(objects.GameObject));
    objects.ShootingFlowerBullet = ShootingFlowerBullet;
})(objects || (objects = {}));
//# sourceMappingURL=shootingFlowerBullet.js.map