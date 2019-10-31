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
    var Graveyard_1 = /** @class */ (function (_super) {
        __extends(Graveyard_1, _super);
        // Variables
        // Constructor
        function Graveyard_1(assetManager) {
            var _this = _super.call(this, assetManager, false, true, true, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_1.prototype.Start = function () {
            objects.Game.player.sceneOnBot = config.Scene.GRAVEYARD_5;
            objects.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_3;
            objects.Game.player.sceneOnRight = config.Scene.GRAVEYARD_4;
            _super.prototype.Start.call(this);
        };
        Graveyard_1.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_1.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_1;
    }(scenes.PlayScene));
    scenes.Graveyard_1 = Graveyard_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_1.js.map