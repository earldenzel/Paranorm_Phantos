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
    var Hotel_14 = /** @class */ (function (_super) {
        __extends(Hotel_14, _super);
        // Constructor
        function Hotel_14() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, true, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_14.prototype.Start = function () {
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_13;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 66);
        };
        Hotel_14.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Hotel_14.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_14;
    }(scenes.PlayScene));
    scenes.Hotel_14 = Hotel_14;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_14.js.map