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
var scenes;
(function (scenes) {
    var Graveyard_8 = /** @class */ (function (_super) {
        __extends(Graveyard_8, _super);
        // Constructor
        function Graveyard_8(assetManager) {
            var _this = _super.call(this, assetManager, true, false, false, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_8.prototype.Start = function () {
            this.enemies = new Array();
            objects.Game.player.sceneOnTop = config.Scene.GRAVEYARD_6;
            _super.prototype.Start.call(this);
        };
        Graveyard_8.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_8.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_8;
    }(scenes.PlayScene));
    scenes.Graveyard_8 = Graveyard_8;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_8.js.map