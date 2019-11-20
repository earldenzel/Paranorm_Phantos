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
    var Hotel_5 = /** @class */ (function (_super) {
        __extends(Hotel_5, _super);
        // Constructor
        function Hotel_5() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, false, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_5.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderLeft(new math.Vec2(120, 250), 150);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderLeft(new math.Vec2(120, 480), 150);
            this.enemies[1].attackPower = 1;
            this.obstacles[0] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(200, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(200, 285));
            this.obstacles[2] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(200, 345));
            this.obstacles[3] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(200, 650));
            this.obstacles[4] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(200, 590));
            this.obstacles[5] = new objects.Gap(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile_Hole", new math.Vec2(200, 530));
            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_6;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Hotel_5.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.bulletManager.Update();
            // check if spiderBulletsLeft collides with player
            this.bulletManager.spiderBulletsLeft.forEach(function (bullet) {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    var ticker = createjs.Ticker.getTicks();
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
        };
        Hotel_5.prototype.Main = function () {
            var _this = this;
            _super.prototype.Main.call(this);
            this.bulletManager.spiderBulletsLeft.forEach(function (bullet) {
                _this.addChild(bullet);
            });
        };
        return Hotel_5;
    }(scenes.PlayScene));
    scenes.Hotel_5 = Hotel_5;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_5.js.map