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
    var Hotel_2 = /** @class */ (function (_super) {
        __extends(Hotel_2, _super);
        // Constructor
        function Hotel_2() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, false, true, config.Design.HOTEL) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_2.prototype.Start = function () {
            this.enemies[0] = new objects.Bat(5, 200);
            this.enemies[0].SetPosition(new math.Vec2(280, 200));
            this.enemies[1] = new objects.Bat(5, 250);
            this.enemies[1].SetPosition(new math.Vec2(280, 650));
            this.enemies[2] = new objects.Bat(10, 300);
            this.enemies[2].SetPosition(new math.Vec2(0, 0));
            this.enemies[3] = new objects.Bat(11, 270);
            this.enemies[3].SetPosition(new math.Vec2(700, 0));
            this.enemies[4] = new objects.Bat(8, 200);
            this.enemies[4].SetPosition(new math.Vec2(0, 700));
            this.enemies[5] = new objects.Bat(14, 250);
            this.enemies[5].SetPosition(new math.Vec2(700, 900));
            this.obstacles[0] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[0].SetPosition(new math.Vec2(180, 300));
            this.obstacles[1] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[1].SetPosition(new math.Vec2(380, 300));
            this.obstacles[2] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[2].SetPosition(new math.Vec2(180, 550));
            this.obstacles[3] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Desk");
            this.obstacles[3].SetPosition(new math.Vec2(380, 550));
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_1;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(80, 18);
        };
        Hotel_2.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Hotel_2.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_2;
    }(scenes.PlayScene));
    scenes.Hotel_2 = Hotel_2;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_2.js.map