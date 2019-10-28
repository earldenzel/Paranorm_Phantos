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
    var Barriers = /** @class */ (function (_super) {
        __extends(Barriers, _super);
        // Variables
        // Constructor
        function Barriers(assetManager, imageString) {
            var _this = _super.call(this, assetManager, imageString) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Barriers.prototype.Start = function () {
            this.x = 200;
            this.y = 200;
            this.regX = objects.Game.player.halfW;
            this.regY = objects.Game.player.halfH;
        };
        Barriers.prototype.Update = function () { };
        Barriers.prototype.Reset = function () { };
        Barriers.prototype.Move = function () { };
        Barriers.prototype.CheckBound = function () { };
        return Barriers;
    }(objects.GameObject));
    objects.Barriers = Barriers;
})(objects || (objects = {}));
//# sourceMappingURL=barriers.js.map