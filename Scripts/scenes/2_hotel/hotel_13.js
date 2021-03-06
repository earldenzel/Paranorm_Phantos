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
    var Hotel_13 = /** @class */ (function (_super) {
        __extends(Hotel_13, _super);
        // Constructor
        function Hotel_13() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, true, true, config.Design.HOTEL) || this;
            _this.isDoorLeftLocked = managers.HotelLocks.hotel_13_lockLeft;
            _this.isDoorBotLocked = managers.HotelLocks.hotel_13_lockBot;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_13.prototype.Start = function () {
            this.enemies[0] = new objects.Skeleton(new math.Vec2(450, 450), 1, true, true);
            this.enemies[1] = new objects.Zombie(2);
            this.enemies[1].SetPosition(new math.Vec2(400, 500));
            this.enemies[2] = new objects.Zombie(2);
            this.enemies[2].SetPosition(new math.Vec2(440, 650));
            this.enemies[3] = new objects.RedSkeleton(new math.Vec2(300, 500), 1, true, true);
            this.enemies[4] = new objects.Skeleton(new math.Vec2(600, 600), 1, true, true);
            this.enemies[5] = new objects.Skeleton(new math.Vec2(150, 650), 1, true, true);
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_12;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_14;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_15;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_9;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 66);
        };
        Hotel_13.prototype.Update = function () {
            if (!this.isDoorLeftLocked) {
                managers.HotelLocks.hotel_13_lockLeft = false;
            }
            if (!this.isDoorBotLocked) {
                managers.HotelLocks.hotel_13_lockBot = false;
            }
            _super.prototype.Update.call(this);
        };
        Hotel_13.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_13;
    }(scenes.PlayScene));
    scenes.Hotel_13 = Hotel_13;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_13.js.map