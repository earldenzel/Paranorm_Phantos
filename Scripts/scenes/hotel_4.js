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
    var Hotel_4 = /** @class */ (function (_super) {
        __extends(Hotel_4, _super);
        // Constructor
        function Hotel_4() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, true, false) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_4.prototype.Start = function () {
            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(280, 200));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderRight(new math.Vec2(430, 550), 240);
            this.enemies[1].attackPower = 1;
            this.obstacles[0] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(115, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(450, 225));
            this.obstacles[2] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(115, 650));
            this.obstacles[3] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(450, 650));
            this.obstacles[4] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[4].SetPosition(new math.Vec2(200, 420));
            this.obstacles[5] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[5].SetPosition(new math.Vec2(350, 420));
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_3;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Hotel_4.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Hotel_4.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_4;
    }(scenes.PlayScene));
    scenes.Hotel_4 = Hotel_4;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_4.js.map