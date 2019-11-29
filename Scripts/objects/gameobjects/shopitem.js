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
        function ShopItem(item, price, effect, appearingScene) {
            var _this = _super.call(this, managers.Game.item_TextureAtlas, item) || this;
            _this.available = true;
            _this.price = price;
            _this.effect = effect;
            _this.appearingScene = appearingScene;
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
        ShopItem.prototype.TriggerShopEffect = function () {
            switch (this.effect) {
                case config.Effects.INCREASE_MAX_HP:
                    managers.Game.player.GainMaxHealth(5);
                    break;
                case config.Effects.INCREASE_KEY_COUNT:
                    managers.Game.player.key++;
                    break;
                case config.Effects.INCREASE_ATK:
                    managers.Game.player.GainAttack(10);
                    break;
                case config.Effects.INCREASE_SPEED:
                    managers.Game.player.GainSpeed(1);
                    break;
                case config.Effects.FRESHEN_UP:
                    managers.Game.player.GainHealth(99);
                    managers.Game.player.GainEcto(5);
                    break;
            }
        };
        return ShopItem;
    }(objects.GameObject));
    objects.ShopItem = ShopItem;
})(objects || (objects = {}));
//# sourceMappingURL=shopitem.js.map