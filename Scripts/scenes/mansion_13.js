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
    var Mansion_13 = /** @class */ (function (_super) {
        __extends(Mansion_13, _super);
        // Constructor
        function Mansion_13() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_13.prototype.Start = function () {
            managers.Game.player.sceneOnBot = config.Scene.MANSION_17;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Mansion_13.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_13.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_13;
    }(scenes.PlayScene));
    scenes.Mansion_13 = Mansion_13;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_13.js.map