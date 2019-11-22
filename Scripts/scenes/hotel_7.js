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
    var Hotel_7 = /** @class */ (function (_super) {
        __extends(Hotel_7, _super);
        // Constructor
        function Hotel_7() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, true, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_7.prototype.Start = function () {
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_6;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 34);
        };
        Hotel_7.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Hotel_7.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_7;
    }(scenes.PlayScene));
    scenes.Hotel_7 = Hotel_7;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_7.js.map