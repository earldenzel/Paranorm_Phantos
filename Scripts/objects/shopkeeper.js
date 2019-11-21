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
    var ShopKeeper = /** @class */ (function (_super) {
        __extends(ShopKeeper, _super);
        // Variables
        // Constructor
        function ShopKeeper() {
            var _this = _super.call(this, managers.Game.item_TextureAtlas, "FortuneTeller") || this;
            _this.Start();
            return _this;
        }
        // Methods
        ShopKeeper.prototype.Start = function () { };
        ShopKeeper.prototype.Update = function () { };
        ShopKeeper.prototype.Reset = function () { };
        ShopKeeper.prototype.Move = function () { };
        ShopKeeper.prototype.CheckBound = function () { };
        return ShopKeeper;
    }(objects.GameObject));
    objects.ShopKeeper = ShopKeeper;
})(objects || (objects = {}));
//# sourceMappingURL=shopkeeper.js.map