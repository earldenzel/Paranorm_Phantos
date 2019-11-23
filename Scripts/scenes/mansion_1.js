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
    var Mansion_1 = /** @class */ (function (_super) {
        __extends(Mansion_1, _super);
        // Constructor
        function Mansion_1() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false, config.Design.MANSION) || this;
            console.log("Mansion1");
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_1.prototype.Start = function () {
            managers.Game.player.sceneOnBot = config.Scene.MANSION_7;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 18);
        };
        Mansion_1.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_1.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_1;
    }(scenes.PlayScene));
    scenes.Mansion_1 = Mansion_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_1.js.map