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
    var GiantWormBullet = /** @class */ (function (_super) {
        __extends(GiantWormBullet, _super);
        // Constructor
        function GiantWormBullet() {
            var _this = _super.call(this, managers.Game.bosses_TextureAtlas, "Boss2_Bullet", 1) || this;
            _this.Start();
            return _this;
        }
        // Methods
        GiantWormBullet.prototype.Start = function () {
            this.Reset();
        };
        GiantWormBullet.prototype.Update = function () {
            if (this.farPointPosition) {
                this.Move();
            }
            _super.prototype.Update.call(this);
        };
        GiantWormBullet.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        GiantWormBullet.prototype.Move = function () {
            var bonePosition = new math.Vec2(this.x, this.y);
            var dirToFarPoint = math.Vec2.Subtract(bonePosition, this.farPointPosition);
            var distanceToFarPoint = math.Vec2.Distance(bonePosition, this.farPointPosition);
            var newPos = math.Vec2.Add(bonePosition, math.Vec2.NormalizeMultiplySpeed(dirToFarPoint, distanceToFarPoint, 2));
            this.x = newPos.x;
            this.y = newPos.y;
        };
        GiantWormBullet.prototype.Main = function () { };
        GiantWormBullet.prototype.CheckBounds = function () { };
        return GiantWormBullet;
    }(objects.Bullet));
    objects.GiantWormBullet = GiantWormBullet;
})(objects || (objects = {}));
//# sourceMappingURL=giantwormbullet.js.map