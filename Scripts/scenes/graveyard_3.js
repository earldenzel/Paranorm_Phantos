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
    var Graveyard_3 = /** @class */ (function (_super) {
        __extends(Graveyard_3, _super);
        //this scene is left of graveyard 1
        // Constructor
        function Graveyard_3(assetManager) {
            var _this = _super.call(this, assetManager, false, false, true, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_3.prototype.Start = function () {
            this.enemies = new Array();
            objects.Game.player.sceneOnRight = config.Scene.GRAVEYARD_1;
            objects.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_2;
            _super.prototype.Start.call(this);
        };
        Graveyard_3.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_3.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_3;
    }(scenes.PlayScene));
    scenes.Graveyard_3 = Graveyard_3;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_3.js.map