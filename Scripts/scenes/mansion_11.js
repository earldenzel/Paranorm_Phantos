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
    var Mansion_11 = /** @class */ (function (_super) {
        __extends(Mansion_11, _super);
        // Constructor
        function Mansion_11() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, false, true) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_11.prototype.Start = function () {
            this.enemies[0] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.ShootingFLower(new math.Vec2(275, 440));
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.TestZombie(1);
            this.enemies[2].SetPosition(new math.Vec2(400, 200));
            this.enemies[3] = new objects.TestZombie(1.5);
            this.enemies[3].SetPosition(new math.Vec2(400, 650));
            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(280, 350));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(280, 550));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(200, 450));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(350, 450));
            managers.Game.player.sceneOnRight = config.Scene.MANSION_12;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_7;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_15;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(46, 28);
        };
        Mansion_11.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_11.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_11;
    }(scenes.PlayScene));
    scenes.Mansion_11 = Mansion_11;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_11.js.map