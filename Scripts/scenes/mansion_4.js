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
    var Mansion_4 = /** @class */ (function (_super) {
        __extends(Mansion_4, _super);
        // Constructor
        function Mansion_4() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_4.prototype.Start = function () {
            managers.Game.player.sceneOnBot = config.Scene.MANSION_9;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(128, 18);
        };
        Mansion_4.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_4.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_4;
    }(scenes.PlayScene));
    scenes.Mansion_4 = Mansion_4;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_4.js.map