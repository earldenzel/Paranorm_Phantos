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
    var Mansion_10 = /** @class */ (function (_super) {
        __extends(Mansion_10, _super);
        // Constructor
        function Mansion_10() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false, config.Design.MANSION) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_10.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.GhostThin(2.5, false, true);
            this.enemies[2].SetPosition(new math.Vec2(400, 200));
            this.enemies[3] = new objects.GhostThin(2.5, true, false);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));
            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 285));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 345));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 650));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 590));
            this.obstacles[5] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 530));
            this.obstacles[6] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 225));
            this.obstacles[7] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 285));
            this.obstacles[8] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 345));
            this.obstacles[9] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 650));
            this.obstacles[10] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 590));
            this.obstacles[11] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 530));
            this.obstacles[12] = new objects.SlimePuddle(1, new math.Vec2(165, 520));
            this.obstacles[13] = new objects.SlimePuddle(3, new math.Vec2(455, 320));
            this.obstacles[14] = new objects.SlimePuddle(0, new math.Vec2(326, 600));
            this.obstacles[15] = new objects.SlimePuddle(2, new math.Vec2(320, 200));
            this.obstacles[16] = new objects.SlimePuddle(0, new math.Vec2(220, 480));
            this.obstacles[17] = new objects.SlimePuddle(3, new math.Vec2(350, 630));
            managers.Game.slimePuddles = [
                this.obstacles[12],
                this.obstacles[13],
                this.obstacles[14],
                this.obstacles[15],
                this.obstacles[16],
                this.obstacles[17]
            ];
            this.enemies[4] = new objects.GhostSlime();
            this.enemies[5] = new objects.GhostSlime();
            managers.Game.player.sceneOnBot = config.Scene.MANSION_14;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(80, 50);
        };
        Mansion_10.prototype.Update = function () {
            this.player.AlterSpeed(managers.SlimePuddles.CheckEntitySlowdown(this.player));
            this.enemies.forEach(function (e) {
                if (!e.isFlying) {
                    e.AlterSpeed(managers.SlimePuddles.CheckEntitySlowdown(e));
                }
            });
            _super.prototype.Update.call(this);
        };
        Mansion_10.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_10;
    }(scenes.PlayScene));
    scenes.Mansion_10 = Mansion_10;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_10.js.map