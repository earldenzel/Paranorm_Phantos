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
    var Mansion_18 = /** @class */ (function (_super) {
        __extends(Mansion_18, _super);
        // Constructor
        function Mansion_18() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, false, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_18.prototype.Start = function () {
            managers.Game.player.sceneOnTop = config.Scene.MANSION_16;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 82);
        };
        Mansion_18.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_18.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_18;
    }(scenes.PlayScene));
    scenes.Mansion_18 = Mansion_18;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_18.js.map