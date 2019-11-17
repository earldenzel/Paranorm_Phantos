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
    var SpiderBulletRight = /** @class */ (function (_super) {
        __extends(SpiderBulletRight, _super);
        // Variables
        // Constructor
        function SpiderBulletRight() {
            var _this = _super.call(this, managers.Game.spider_TextureAtlas, "spiderBullet") || this;
            _this.Start();
            return _this;
        }
        // Methods
        SpiderBulletRight.prototype.Start = function () {
            this.speedX = 5;
            this.speedY = 0;
            this.Reset();
        };
        SpiderBulletRight.prototype.Update = function () {
            this.Move();
        };
        SpiderBulletRight.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        SpiderBulletRight.prototype.Move = function () {
            this.x -= this.speedX;
        };
        SpiderBulletRight.prototype.Main = function () { };
        SpiderBulletRight.prototype.CheckBounds = function () { };
        return SpiderBulletRight;
    }(objects.GameObject));
    objects.SpiderBulletRight = SpiderBulletRight;
})(objects || (objects = {}));
//# sourceMappingURL=spiderBulletRight.js.map