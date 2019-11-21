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
    var Shop = /** @class */ (function (_super) {
        __extends(Shop, _super);
        // Constructor
        function Shop(shopItems) {
            var _this = _super.call(this) || this;
            _this.shopItems = shopItems;
            _this.Start();
            return _this;
        }
        // Methods
        Shop.prototype.Start = function () {
            this.shopKeeper = new objects.ShopKeeper;
            this.shopKeeper.SetPosition(new math.Vec2(285, 285));
            this.shopItems[0].SetPosition(new math.Vec2(185, 400));
            this.shopItems[1].SetPosition(new math.Vec2(285, 400));
            this.shopItems[2].SetPosition(new math.Vec2(385, 400));
            this.Main();
        };
        Shop.prototype.Update = function () {
            var _this = this;
            this.shopKeeper.Update();
            this.shopItems.forEach(function (e) {
                console.log(e.x + " " + e.y);
                if (managers.Collision.Check(managers.Game.player, e)) {
                    _this.shopKeeper.TellItemInformation(e);
                }
            });
        };
        Shop.prototype.Reset = function () { };
        Shop.prototype.Move = function () { };
        Shop.prototype.CheckBound = function () { };
        Shop.prototype.Main = function () {
            var _this = this;
            this.addChild(this.shopKeeper);
            this.addChild(this.shopKeeper.dialog);
            this.shopItems.forEach(function (e) {
                _this.addChild(e);
                e.Reset();
                _this.addChild(e.priceTag);
            });
        };
        return Shop;
    }(createjs.Container));
    objects.Shop = Shop;
})(objects || (objects = {}));
//# sourceMappingURL=shop.js.map