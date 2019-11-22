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
    var Mansion_14 = /** @class */ (function (_super) {
        __extends(Mansion_14, _super);
        // Constructor
        function Mansion_14() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, false, true) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_14.prototype.Start = function () {
            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(120, 230));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.ShootingFLower(new math.Vec2(120, 630));
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.SpiderLeft(new math.Vec2(120, 310), 220);
            this.enemies[2].attackPower = 1;
            this.enemies[3] = new objects.TestZombie(1);
            this.enemies[3].SetPosition(new math.Vec2(420, 230));
            this.enemies[4] = new objects.TestZombie(1);
            this.enemies[4].SetPosition(new math.Vec2(420, 640));
            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 320));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 380));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 440));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 500));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 560));
            this.obstacles[5] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Plant_ng");
            this.obstacles[5].SetPosition(new math.Vec2(275, 430));
            managers.Game.player.sceneOnRight = config.Scene.MANSION_15;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_10;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(80, 66);
        };
        Mansion_14.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_14.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_14;
    }(scenes.PlayScene));
    scenes.Mansion_14 = Mansion_14;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_14.js.map