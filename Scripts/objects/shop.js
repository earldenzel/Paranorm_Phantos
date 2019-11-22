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
            this.canChoose = true;
            this.shopKeeper = new objects.ShopKeeper;
            this.shopKeeper.SetPosition(new math.Vec2(285, 285));
            this.chooseYes = new objects.Label("YES", "16px", "'Press Start 2P'", "#FFFF00", 185, 285, true);
            this.chooseNo = new objects.Label("NO", "16px", "'Press Start 2P'", "#FFFF00", 385, 285, true);
            this.chooseYes.addEventListener("click", this.buyItem.bind(this), false);
            this.chooseNo.addEventListener("click", this.cancelBuy.bind(this), false);
            this.Reset();
            this.Main();
        };
        Shop.prototype.Update = function () {
            var _this = this;
            this.shopKeeper.Update();
            this.hasItemSelected = false;
            this.shopItems.forEach(function (e) {
                if (!e.available) {
                    e.visible = false;
                    e.priceTag.visible = false;
                }
                _this.hasItemSelected = _this.hasItemSelected || managers.Collision.Check(managers.Game.player, e);
                if (managers.Collision.Check(managers.Game.player, e)) {
                    _this.selected = e;
                }
            });
            if (this.hasItemSelected) {
                if (this.canChoose) {
                    managers.Game.keyboardManager.ControlReset();
                    this.shopKeeper.TellItemInformation(this.selected);
                    this.chooseYes.visible = true;
                    this.chooseNo.visible = true;
                }
                else {
                    managers.Game.keyboardManager.enabled = true;
                    this.Reset();
                }
            }
            else {
                this.canChoose = true;
                managers.Game.keyboardManager.enabled = true;
                this.Reset();
            }
        };
        Shop.prototype.Reset = function () {
            this.chooseYes.visible = false;
            this.chooseNo.visible = false;
        };
        Shop.prototype.Move = function () { };
        Shop.prototype.CheckBound = function () { };
        Shop.prototype.Main = function () {
            var _this = this;
            this.addChild(this.shopKeeper);
            this.addChild(this.shopKeeper.dialog);
            this.addChild(this.chooseYes);
            this.addChild(this.chooseNo);
            this.shopItems.forEach(function (e) {
                _this.addChild(e);
                e.Reset();
                _this.addChild(e.priceTag);
            });
        };
        Shop.prototype.buyItem = function () {
            if (this.selected != null) {
                if (managers.Game.player.money > this.selected.price) {
                    this.selected.TriggerShopEffect();
                    this.shopKeeper.dialog.text = "Thanks for doing business";
                    managers.Game.player.GainDollars(-this.selected.price);
                    this.selected.priceTag.text = "a";
                    this.selected.priceTag.Recenter();
                    this.selected.available = false;
                }
                else {
                    this.shopKeeper.dialog.text = "You don't have enough";
                }
            }
            this.shopKeeper.dialog.Recenter();
            this.canChoose = false;
        };
        Shop.prototype.cancelBuy = function () {
            this.canChoose = false;
            this.shopKeeper.dialog.text = "Okay then!";
            this.shopKeeper.dialog.Recenter();
        };
        return Shop;
    }(createjs.Container));
    objects.Shop = Shop;
})(objects || (objects = {}));
//# sourceMappingURL=shop.js.map