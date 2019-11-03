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
    var Graveyard_4 = /** @class */ (function (_super) {
        __extends(Graveyard_4, _super);
        //this scene is right of graveyard 1
        // Constructor
        function Graveyard_4(assetManager) {
            var _this = _super.call(this, assetManager, false, false, true, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_4.prototype.Start = function () {
            this.enemies[0] = new objects.TestEnemy(this.assetManager, 5, true, true);
            this.enemies[1] = new objects.TestEnemy(this.assetManager, 3, false, false);
            this.enemies[2] = new objects.TestEnemy(this.assetManager, 2, false, true);
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_1;
            _super.prototype.Start.call(this);
        };
        Graveyard_4.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_4.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_4;
    }(scenes.PlayScene));
    scenes.Graveyard_4 = Graveyard_4;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_4.js.map