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
    var Mansion_17 = /** @class */ (function (_super) {
        __extends(Mansion_17, _super);
        // Constructor
        function Mansion_17() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, true, false) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_17.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderRight(new math.Vec2(440, 630), 400);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.Bat(2.5, 100);
            this.enemies[1].SetPosition(new math.Vec2(430, 200));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(430, 650));
            this.enemies[3] = new objects.ShootingFLower(new math.Vec2(285, 420));
            this.enemies[3].attackPower = 1;
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 230));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 230));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 640));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 640));
            this.obstacles[5] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 290));
            this.obstacles[6] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 290));
            this.obstacles[7] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 350));
            this.obstacles[8] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 350));
            this.obstacles[9] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 580));
            this.obstacles[10] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 580));
            this.obstacles[11] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 520));
            this.obstacles[12] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(380, 520));
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_16;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_13;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Mansion_17.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_17.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_17;
    }(scenes.PlayScene));
    scenes.Mansion_17 = Mansion_17;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_17.js.map