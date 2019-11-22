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
    var Hotel_12 = /** @class */ (function (_super) {
        __extends(Hotel_12, _super);
        // Constructor
        function Hotel_12() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, false, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_12.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderUp(new math.Vec2(140, 220), 300);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.TestZombie(2);
            this.enemies[1].SetPosition(new math.Vec2(100, 450));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(280, 650));
            this.obstacles[0] = new objects.Barriers(managers.Game.hotel_TextureAtlas, "Hotel_CarpetTile");
            this.obstacles[0].SetPosition(new math.Vec2(285, 440));
            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_13;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(80, 66);
        };
        Hotel_12.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.bulletManager.Update();
            // check if spiderBullets collides with player
            this.bulletManager.spiderBullets.forEach(function (bullet) {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    var ticker = createjs.Ticker.getTicks();
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
        };
        Hotel_12.prototype.Main = function () {
            var _this = this;
            _super.prototype.Main.call(this);
            this.bulletManager.spiderBullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
        };
        return Hotel_12;
    }(scenes.PlayScene));
    scenes.Hotel_12 = Hotel_12;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_12.js.map