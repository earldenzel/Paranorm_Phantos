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
    var Hotel_8 = /** @class */ (function (_super) {
        __extends(Hotel_8, _super);
        // Constructor
        function Hotel_8() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, false, true, config.Design.HOTEL) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_8.prototype.Start = function () {
            this.enemies[0] = new objects.GhostThin(1.5, true, false);
            this.enemies[0].SetPosition(new math.Vec2(100, 650));
            this.enemies[1] = new objects.GhostThin(1.5, false, true);
            this.enemies[1].SetPosition(new math.Vec2(400, 200));
            this.enemies[2] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[2].attackPower = 1;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_9;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(80, 50);
        };
        Hotel_8.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Hotel_8.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_8;
    }(scenes.PlayScene));
    scenes.Hotel_8 = Hotel_8;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_8.js.map