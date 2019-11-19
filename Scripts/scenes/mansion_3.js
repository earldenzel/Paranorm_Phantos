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
    var Mansion_3 = /** @class */ (function (_super) {
        __extends(Mansion_3, _super);
        // Constructor
        function Mansion_3() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_3.prototype.Start = function () {
            managers.Game.player.sceneOnBot = config.Scene.MANSION_8;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Mansion_3.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_3.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_3;
    }(scenes.PlayScene));
    scenes.Mansion_3 = Mansion_3;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_3.js.map