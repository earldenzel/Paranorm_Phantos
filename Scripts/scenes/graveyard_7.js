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
    var Graveyard_7 = /** @class */ (function (_super) {
        __extends(Graveyard_7, _super);
        // Constructor
        function Graveyard_7(assetManager) {
            var _this = _super.call(this, assetManager, false, false, true, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_7.prototype.Start = function () {
            this.enemies = new Array();
            objects.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_5;
            _super.prototype.Start.call(this);
        };
        Graveyard_7.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_7.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_7;
    }(scenes.PlayScene));
    scenes.Graveyard_7 = Graveyard_7;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_7.js.map