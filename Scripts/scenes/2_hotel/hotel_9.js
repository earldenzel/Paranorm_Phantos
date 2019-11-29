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
    var Hotel_9 = /** @class */ (function (_super) {
        __extends(Hotel_9, _super);
        // Constructor
        function Hotel_9() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, true, true, config.Design.HOTEL) || this;
            _this.isDoorLeftLocked = managers.HotelLocks.hotel_9_lockLeft;
            _this.isDoorRightLocked = managers.HotelLocks.hotel_9_lockRight;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_9.prototype.Start = function () {
            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(275, 440));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.Bat(2.5, 100);
            this.enemies[1].SetPosition(new math.Vec2(100, 200));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(440, 650));
            this.obstacles[0] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(280, 350));
            this.obstacles[1] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(280, 550));
            this.obstacles[2] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(200, 450));
            this.obstacles[3] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hole", new math.Vec2(350, 450));
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_8;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_10;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_13;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_6;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 50);
        };
        Hotel_9.prototype.Update = function () {
            if (!this.isDoorLeftLocked) {
                managers.HotelLocks.hotel_9_lockLeft = false;
            }
            if (!this.isDoorRightLocked) {
                managers.HotelLocks.hotel_9_lockRight = false;
            }
            _super.prototype.Update.call(this);
        };
        Hotel_9.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_9;
    }(scenes.PlayScene));
    scenes.Hotel_9 = Hotel_9;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_9.js.map