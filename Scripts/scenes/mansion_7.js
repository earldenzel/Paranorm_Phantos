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
    var Mansion_7 = /** @class */ (function (_super) {
        __extends(Mansion_7, _super);
        // Constructor
        function Mansion_7() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, true, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_7.prototype.Start = function () {
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_6;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_8;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_1;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_11;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 34);
        };
        Mansion_7.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_7.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_7;
    }(scenes.PlayScene));
    scenes.Mansion_7 = Mansion_7;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_7.js.map