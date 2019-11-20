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
    var Hotel_6 = /** @class */ (function (_super) {
        __extends(Hotel_6, _super);
        // Constructor
        function Hotel_6() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, true, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_6.prototype.Start = function () {
            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(120, 200));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.ShootingFLower(new math.Vec2(420, 630));
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.TestEnemy(3, false, false);
            this.enemies[2].SetPosition(new math.Vec2(280, 380));
            // Initialize bulletManager
            this.bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this.bulletManager;
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_5;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_7;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_9;
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_1;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Hotel_6.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.bulletManager.Update();
            // check if shootingFlowerBullets collides with player
            this.bulletManager.shootingFLowerBullets.forEach(function (bullet) {
                if (managers.Collision.Check(managers.Game.player, bullet)) {
                    var ticker = createjs.Ticker.getTicks();
                    // use ticker to restrict 1 bullet only hurts 1 hp
                    if (ticker % 20 == 0)
                        managers.Game.player.hp -= 1;
                }
            });
        };
        Hotel_6.prototype.Main = function () {
            var _this = this;
            _super.prototype.Main.call(this);
            this.bulletManager.shootingFLowerBullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
        };
        return Hotel_6;
    }(scenes.PlayScene));
    scenes.Hotel_6 = Hotel_6;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_6.js.map