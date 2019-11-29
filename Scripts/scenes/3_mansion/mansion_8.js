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
    var Mansion_8 = /** @class */ (function (_super) {
        __extends(Mansion_8, _super);
        // Constructor
        function Mansion_8() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, true, true, config.Design.MANSION) || this;
            _this.isDoorRightLocked = managers.MansionLocks.mansion_8_lockRight;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_8.prototype.Start = function () {
            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(275, 440));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.Bat(2.5, 100);
            this.enemies[1].SetPosition(new math.Vec2(100, 200));
            this.enemies[2] = new objects.Bat(2.5, 100);
            this.enemies[2].SetPosition(new math.Vec2(450, 200));
            this.enemies[3] = new objects.Bat(2.5, 100);
            this.enemies[3].SetPosition(new math.Vec2(450, 650));
            this.enemies[4] = new objects.Bat(2.5, 100);
            this.enemies[4].SetPosition(new math.Vec2(100, 650));
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_7;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_9;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_3;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_12;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 34);
        };
        Mansion_8.prototype.Update = function () {
            if (!this.isDoorRightLocked) {
                managers.MansionLocks.mansion_8_lockRight = false;
            }
            _super.prototype.Update.call(this);
        };
        Mansion_8.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_8;
    }(scenes.PlayScene));
    scenes.Mansion_8 = Mansion_8;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_8.js.map