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
    var Mansion_15 = /** @class */ (function (_super) {
        __extends(Mansion_15, _super);
        // Constructor
        function Mansion_15() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, true, false, config.Design.MANSION) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_15.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderRight(new math.Vec2(440, 630), 400);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.Bat(2.5, 100);
            this.enemies[1].SetPosition(new math.Vec2(180, 200));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(380, 650));
            this.enemies[3] = new objects.Bat(2, 100);
            this.enemies[3].SetPosition(new math.Vec2(285, 440));
            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(260, 420));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(260, 480));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(310, 420));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(310, 480));
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_14;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_11;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 66);
        };
        Mansion_15.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_15.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_15;
    }(scenes.PlayScene));
    scenes.Mansion_15 = Mansion_15;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_15.js.map