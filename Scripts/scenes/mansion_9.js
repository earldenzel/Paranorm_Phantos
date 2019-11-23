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
    var Mansion_9 = /** @class */ (function (_super) {
        __extends(Mansion_9, _super);
        // Constructor
        function Mansion_9() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, true, false, config.Design.MANSION) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_9.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderRight(new math.Vec2(450, 400), 170);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderRight(new math.Vec2(450, 630), 170);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.Zombie(1.5);
            this.enemies[2].SetPosition(new math.Vec2(280, 400));
            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 285));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 345));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 650));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 590));
            this.obstacles[5] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 530));
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_8;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_4;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(128, 34);
        };
        Mansion_9.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_9.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_9;
    }(scenes.PlayScene));
    scenes.Mansion_9 = Mansion_9;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_9.js.map