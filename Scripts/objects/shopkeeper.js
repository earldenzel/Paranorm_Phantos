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
        // Constructor
        function ShopKeeper() {
            var _this = _super.call(this, managers.Game.item_TextureAtlas, "FortuneTeller") || this;
            _this.currentDisplay = 0;
            _this.Start();
            return _this;
        }
        // Methods
        ShopKeeper.prototype.Start = function () {
            this.dialogMessages = [
                "Hello!",
                "Welcome to the secret shop.",
                "You choose what you want...",
                "and you pay me in dollars.",
                "Simple, right?",
                ""
            ];
            this.dialog = new objects.Label(this.dialogMessages[this.currentDisplay], "16px", "'Press Start 2P'", "#FFFF00", this.x, this.y, true);
        };
        ShopKeeper.prototype.Update = function () {
            this.dialog.x = this.x;
            this.dialog.y = this.y - this.halfH - config.Bounds.TEXT_OFFSET;
            var ticker = createjs.Ticker.getTicks();
            if (ticker % 100 == 0) {
                if (this.interrupted && managers.Game.keyboardManager.enabled) {
                    var random = Math.random() * 100;
                    if (random > 15) {
                        this.dialog.text = "";
                    }
                    else if (random > 10) {
                        this.dialog.text = "Buy something, will ya?";
                    }
                    else if (random > 5) {
                        this.dialog.text = "You know you need these!";
                    }
                    else {
                        this.dialog.text = "These wares are da bomb.";
                    }
                }
                else {
                    if (this.currentDisplay++ < this.dialogMessages.length) {
                        this.dialog.text = this.dialogMessages[this.currentDisplay];
                    }
                    else {
                        this.interrupted = true;
                    }
                }
                this.dialog.Recenter();
            }
        };
        ShopKeeper.prototype.Reset = function () { };
        ShopKeeper.prototype.Move = function () { };
        ShopKeeper.prototype.CheckBound = function () { };
        ShopKeeper.prototype.TellItemInformation = function (shopItem) {
            this.dialog.text = shopItem.description;
            this.dialog.Recenter();
            this.interrupted = true;
        };
        return ShopKeeper;
    }(objects.GameObject));
    objects.ShopKeeper = ShopKeeper;
})(objects || (objects = {}));
//# sourceMappingURL=shopkeeper.js.map