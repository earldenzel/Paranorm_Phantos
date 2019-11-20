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
    var Hotel_11 = /** @class */ (function (_super) {
        __extends(Hotel_11, _super);
        // Constructor
        function Hotel_11() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, false, true, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_11.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderUp(new math.Vec2(140, 220), 300);
            this.enemies[1].attackPower = 1;
            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_10;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Hotel_11.prototype.Update = function () {
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
            // check if spiderBulletsRight collides with player
            this.bulletManager.spiderBulletsRight.forEach(function (bullet) {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    var ticker = createjs.Ticker.getTicks();
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 10 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
        };
        Hotel_11.prototype.Main = function () {
            var _this = this;
            _super.prototype.Main.call(this);
            this.bulletManager.spiderBullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.bulletManager.spiderBulletsRight.forEach(function (bullet) {
                _this.addChild(bullet);
            });
        };
        return Hotel_11;
    }(scenes.PlayScene));
    scenes.Hotel_11 = Hotel_11;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_11.js.map