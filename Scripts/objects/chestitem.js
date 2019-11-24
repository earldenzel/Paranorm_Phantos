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
    var ChestItem = /** @class */ (function (_super) {
        __extends(ChestItem, _super);
        // Constructor
        function ChestItem(imageString, effect, appearingScene, initiallyShown) {
            if (initiallyShown === void 0) { initiallyShown = true; }
            var _this = _super.call(this, managers.Game.chest_TextureAtlas, imageString) || this;
            _this.available = true;
            _this.locked = false;
            _this.effect = effect;
            _this.appearingScene = appearingScene;
            _this.Start();
            _this.visible = initiallyShown;
            return _this;
        }
        // Methods
        ChestItem.prototype.Start = function () {
        };
        ChestItem.prototype.Update = function () {
            if (!this.available) {
                this.visible = true;
                this.gotoAndStop("openedChest");
            }
        };
        ChestItem.prototype.Reset = function () {
        };
        ChestItem.prototype.Move = function () { };
        ChestItem.prototype.CheckBound = function () { };
        ChestItem.prototype.TriggerChestEffect = function () {
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
                case config.Effects.INCREASE_GOLD:
                    managers.Game.player.GainDollars(10);
                    break;
                case config.Effects.INCREASE_GOLD_50:
                    managers.Game.player.GainDollars(50);
                    break;
            }
            this.available = false;
            this.Update();
        };
        return ChestItem;
    }(objects.GameObject));
    objects.ChestItem = ChestItem;
})(objects || (objects = {}));
//# sourceMappingURL=chestitem.js.map