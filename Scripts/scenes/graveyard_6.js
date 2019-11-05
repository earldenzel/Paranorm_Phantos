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
    var Graveyard_6 = /** @class */ (function (_super) {
        __extends(Graveyard_6, _super);
        // Constructor
        function Graveyard_6() {
            var _this = _super.call(this, true, true, false, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_6.prototype.Start = function () {
            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_8;
            _super.prototype.Start.call(this);
        };
        Graveyard_6.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_6.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_6;
    }(scenes.PlayScene));
    scenes.Graveyard_6 = Graveyard_6;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_6.js.map