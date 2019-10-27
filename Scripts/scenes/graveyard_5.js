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
    var Graveyard_5 = /** @class */ (function (_super) {
        __extends(Graveyard_5, _super);
        // Constructor
        function Graveyard_5(assetManager) {
            var _this = _super.call(this, assetManager, true, true, false, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_5.prototype.Start = function () {
            this.enemies = new Array();
            objects.Game.player.sceneOnTop = config.Scene.GRAVEYARD_1;
            objects.Game.player.sceneOnBot = config.Scene.GRAVEYARD_6;
            objects.Game.player.sceneOnRight = config.Scene.GRAVEYARD_7;
            _super.prototype.Start.call(this);
        };
        Graveyard_5.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_5.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_5;
    }(scenes.PlayScene));
    scenes.Graveyard_5 = Graveyard_5;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_5.js.map