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
    var Indicator = /** @class */ (function (_super) {
        __extends(Indicator, _super);
        // Constructor
        function Indicator(assetManager, imageString) {
            var _this = _super.call(this, assetManager, imageString) || this;
            _this.name = imageString;
            return _this;
        }
        Indicator.prototype.Start = function () {
            this.visible = false;
        };
        Indicator.prototype.Update = function () { };
        Indicator.prototype.Reset = function () { };
        Indicator.prototype.Move = function () { };
        Indicator.prototype.CheckBound = function () { };
        return Indicator;
    }(objects.GameObject));
    objects.Indicator = Indicator;
})(objects || (objects = {}));
//# sourceMappingURL=indicator.js.map