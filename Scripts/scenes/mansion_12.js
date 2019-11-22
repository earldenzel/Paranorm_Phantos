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
    var Mansion_12 = /** @class */ (function (_super) {
        __extends(Mansion_12, _super);
        // Constructor
        function Mansion_12() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, true, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_12.prototype.Start = function () {
            this.enemies[0] = new objects.Bat(2.5, 100);
            this.enemies[0].SetPosition(new math.Vec2(180, 200));
            this.enemies[1] = new objects.Bat(3, 100);
            this.enemies[1].SetPosition(new math.Vec2(380, 200));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(280, 550));
            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(115, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(450, 225));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(115, 650));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(450, 650));
            this.obstacles[4] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Plant_ng");
            this.obstacles[4].SetPosition(new math.Vec2(200, 420));
            this.obstacles[5] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Plant_ng");
            this.obstacles[5].SetPosition(new math.Vec2(350, 420));
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_11;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_8;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_16;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 50);
        };
        Mansion_12.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_12.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_12;
    }(scenes.PlayScene));
    scenes.Mansion_12 = Mansion_12;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_12.js.map