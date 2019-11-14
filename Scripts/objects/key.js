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
    var Key = /** @class */ (function (_super) {
        __extends(Key, _super);
        // Variables
        // Constructor
        function Key() {
            var _this = _super.call(this, managers.Game.item_TextureAtlas, "Items_Key") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Key.prototype.Start = function () { };
        Key.prototype.Update = function () { };
        Key.prototype.Reset = function () { };
        Key.prototype.Move = function () { };
        Key.prototype.CheckBound = function () { };
        Key.prototype.RemoveFromPlay = function () {
            this.visible = false;
            managers.Game.stage.removeChild(this);
        };
        return Key;
    }(objects.GameObject));
    objects.Key = Key;
})(objects || (objects = {}));
//# sourceMappingURL=key.js.map