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
    var Mansion_11 = /** @class */ (function (_super) {
        __extends(Mansion_11, _super);
        // Constructor
        function Mansion_11() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, false, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_11.prototype.Start = function () {
            managers.Game.player.sceneOnRight = config.Scene.MANSION_12;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_7;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_15;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 50);
        };
        Mansion_11.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_11.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_11;
    }(scenes.PlayScene));
    scenes.Mansion_11 = Mansion_11;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_11.js.map