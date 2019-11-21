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
    var Mansion_14 = /** @class */ (function (_super) {
        __extends(Mansion_14, _super);
        // Constructor
        function Mansion_14() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, false, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_14.prototype.Start = function () {
            managers.Game.player.sceneOnRight = config.Scene.MANSION_15;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_10;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Mansion_14.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_14.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_14;
    }(scenes.PlayScene));
    scenes.Mansion_14 = Mansion_14;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_14.js.map