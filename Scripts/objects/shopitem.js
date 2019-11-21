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
    var ShopItem = /** @class */ (function (_super) {
        __extends(ShopItem, _super);
        // Constructor
        function ShopItem(item, price) {
            var _this = _super.call(this, managers.Game.item_TextureAtlas, item) || this;
            _this.price = price;
            _this.Start();
            return _this;
        }
        // Methods
        ShopItem.prototype.Start = function () {
            this.priceTag = new objects.Label("$" + this.price, "16px", "'Press Start 2P'", "#FFFF00", this.x, this.y, true);
        };
        ShopItem.prototype.Update = function () {
        };
        ShopItem.prototype.Reset = function () {
            this.priceTag.x = this.x;
            this.priceTag.y = this.y - this.halfH - config.Bounds.TEXT_OFFSET;
        };
        ShopItem.prototype.Move = function () { };
        ShopItem.prototype.CheckBound = function () { };
        return ShopItem;
    }(objects.GameObject));
    objects.ShopItem = ShopItem;
})(objects || (objects = {}));
//# sourceMappingURL=shopitem.js.map