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
    var Mansion_4 = /** @class */ (function (_super) {
        __extends(Mansion_4, _super);
        // Constructor
        function Mansion_4() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false, config.Design.MANSION) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_4.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderUp(new math.Vec2(140, 220), 300);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[2].attackPower = 1;
            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(285, 440));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 300));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 300));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 550));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 550));
            managers.Game.player.sceneOnBot = config.Scene.MANSION_9;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(128, 18);
        };
        Mansion_4.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_4.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_4;
    }(scenes.PlayScene));
    scenes.Mansion_4 = Mansion_4;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_4.js.map