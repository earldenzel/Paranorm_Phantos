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
    var SpiderBullet = /** @class */ (function (_super) {
        __extends(SpiderBullet, _super);
        // Variables
        // Constructor
        function SpiderBullet() {
            var _this = _super.call(this, managers.Game.spider_TextureAtlas, "spiderBullet") || this;
            _this.Start();
            return _this;
        }
        // Methods
        SpiderBullet.prototype.Start = function () {
            this.speedX = 0;
            this.speedY = 5;
            this.Reset();
        };
        SpiderBullet.prototype.Update = function () {
            this.Move();
        };
        SpiderBullet.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        SpiderBullet.prototype.Move = function () {
            this.y += this.speedY;
        };
        SpiderBullet.prototype.Main = function () { };
        SpiderBullet.prototype.CheckBounds = function () { };
        return SpiderBullet;
    }(objects.GameObject));
    objects.SpiderBullet = SpiderBullet;
})(objects || (objects = {}));
//# sourceMappingURL=spiderbullet.js.map