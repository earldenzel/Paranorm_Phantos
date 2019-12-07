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
    var Hotel_1 = /** @class */ (function (_super) {
        __extends(Hotel_1, _super);
        // Constructor
        function Hotel_1() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, true, true, config.Design.HOTEL) || this;
            _this.isDoorLeftLocked = managers.HotelLocks.hotel_1_lockLeft;
            console.log("Hotel 1");
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_1.prototype.Start = function () {
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_2;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_3;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_6;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 18);
            this.cosmetics[0] = new objects.Stairs(config.Scene.GRAVEYARD_1, false);
            this.cosmetics[0].SetPosition(new math.Vec2(450, 235));
        };
        Hotel_1.prototype.Update = function () {
            if (!this.isDoorLeftLocked) {
                managers.HotelLocks.hotel_1_lockLeft = false;
            }
            _super.prototype.Update.call(this);
        };
        Hotel_1.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_1;
    }(scenes.PlayScene));
    scenes.Hotel_1 = Hotel_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_1.js.map