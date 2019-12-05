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
    var Hotel_10 = /** @class */ (function (_super) {
        __extends(Hotel_10, _super);
        // Constructor
        function Hotel_10() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, true, true, config.Design.HOTEL) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_10.prototype.Start = function () {
            this.enemies[0] = new objects.Zombie(2);
            this.enemies[0].SetPosition(new math.Vec2(100, 200));
            this.enemies[1] = new objects.Bat(2, 100);
            this.enemies[1].SetPosition(new math.Vec2(280, 650));
            this.enemies[2] = new objects.GhostThin(3, true, true);
            this.enemies[2].SetPosition(new math.Vec2(300, 200));
            this.obstacles[0] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[0].SetPosition(new math.Vec2(200, 225));
            this.obstacles[1] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[1].SetPosition(new math.Vec2(200, 285));
            this.obstacles[2] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[2].SetPosition(new math.Vec2(200, 345));
            this.obstacles[3] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[3].SetPosition(new math.Vec2(200, 405));
            this.obstacles[4] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[4].SetPosition(new math.Vec2(200, 465));
            this.obstacles[5] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[5].SetPosition(new math.Vec2(200, 525));
            this.obstacles[6] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[6].SetPosition(new math.Vec2(360, 650));
            this.obstacles[7] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[7].SetPosition(new math.Vec2(360, 590));
            this.obstacles[8] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[8].SetPosition(new math.Vec2(360, 530));
            this.obstacles[9] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[9].SetPosition(new math.Vec2(360, 470));
            this.obstacles[10] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[10].SetPosition(new math.Vec2(360, 410));
            this.obstacles[11] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[11].SetPosition(new math.Vec2(360, 350));
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_9;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_11;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 50);
        };
        Hotel_10.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Hotel_10.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_10;
    }(scenes.PlayScene));
    scenes.Hotel_10 = Hotel_10;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_10.js.map