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
    var SpiderBulletLeft = /** @class */ (function (_super) {
        __extends(SpiderBulletLeft, _super);
        // Variables
        // Constructor
        function SpiderBulletLeft() {
            var _this = _super.call(this, managers.Game.spider_TextureAtlas, "spiderBullet") || this;
            _this.Start();
            return _this;
        }
        // Methods
        SpiderBulletLeft.prototype.Start = function () {
            this.speedX = 5;
            this.speedY = 0;
            this.Reset();
        };
        SpiderBulletLeft.prototype.Update = function () {
            this.Move();
        };
        SpiderBulletLeft.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        SpiderBulletLeft.prototype.Move = function () {
            this.x += this.speedX;
        };
        SpiderBulletLeft.prototype.Main = function () { };
        SpiderBulletLeft.prototype.CheckBounds = function () { };
        return SpiderBulletLeft;
    }(objects.GameObject));
    objects.SpiderBulletLeft = SpiderBulletLeft;
})(objects || (objects = {}));
//# sourceMappingURL=spiderBulletLeft.js.map