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
    var Mansion_17 = /** @class */ (function (_super) {
        __extends(Mansion_17, _super);
        // Constructor
        function Mansion_17() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, true, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_17.prototype.Start = function () {
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_16;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_13;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Mansion_17.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_17.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_17;
    }(scenes.PlayScene));
    scenes.Mansion_17 = Mansion_17;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_17.js.map