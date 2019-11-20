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
    var Hotel_3 = /** @class */ (function (_super) {
        __extends(Hotel_3, _super);
        // Constructor
        function Hotel_3() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, true, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_3.prototype.Start = function () {
            this.enemies[0] = new objects.TestEnemy(2.5, true, true);
            this.enemies[0].SetPosition(new math.Vec2(100, 200));
            this.enemies[1] = new objects.TestZombie(2);
            this.enemies[1].SetPosition(new math.Vec2(400, 200));
            this.enemies[2] = new objects.TestEnemy(3, true, true);
            this.enemies[2].SetPosition(new math.Vec2(400, 650));
            this.enemies[3] = new objects.TestZombie(2.5);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));
            this.obstacles[0] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[0].SetPosition(new math.Vec2(180, 300));
            this.obstacles[1] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[1].SetPosition(new math.Vec2(380, 300));
            this.obstacles[2] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[2].SetPosition(new math.Vec2(180, 550));
            this.obstacles[3] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_Plant_Pot");
            this.obstacles[3].SetPosition(new math.Vec2(380, 550));
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_1;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_4;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Hotel_3.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Hotel_3.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_3;
    }(scenes.PlayScene));
    scenes.Hotel_3 = Hotel_3;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_3.js.map