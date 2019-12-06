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
    var Graveyard_5 = /** @class */ (function (_super) {
        __extends(Graveyard_5, _super);
        // Constructor
        function Graveyard_5() {
            var _this = _super.call(this, true, true, false, true, config.Design.GRAVEYARD) || this;
            _this.isDoorBotLocked = managers.GraveyardLocks.graveyard_5_lockBot;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_5.prototype.Start = function () {
            this.enemies[0] = new objects.GhostThin(1, true, true);
            this.enemies[0].SetPosition(new math.Vec2(450, 600));
            this.enemies[1] = new objects.GhostThin(1, true, false);
            this.enemies[1].SetPosition(new math.Vec2(450, 300));
            this.enemies[2] = new objects.Bat(1, 100);
            this.enemies[2].SetPosition(new math.Vec2(100, 550));
            this.enemies[3] = new objects.Bat(1, 100);
            this.enemies[3].SetPosition(new math.Vec2(100, 300));
            this.obstacles[0] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[0].SetPosition(new math.Vec2(400, 655));
            this.obstacles[1] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[1].SetPosition(new math.Vec2(400, 605));
            this.obstacles[2] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[2].SetPosition(new math.Vec2(400, 555));
            this.obstacles[3] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[3].SetPosition(new math.Vec2(400, 505));
            this.obstacles[4] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[4].SetPosition(new math.Vec2(400, 220));
            this.obstacles[5] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[5].SetPosition(new math.Vec2(400, 270));
            this.obstacles[6] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[6].SetPosition(new math.Vec2(400, 320));
            this.obstacles[7] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[7].SetPosition(new math.Vec2(400, 370));
            this.obstacles[8] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Hole", new math.Vec2(165, 220));
            this.obstacles[9] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Hole", new math.Vec2(165, 270));
            this.obstacles[10] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Hole", new math.Vec2(165, 320));
            this.obstacles[11] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Hole", new math.Vec2(165, 370));
            this.obstacles[14] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Hole", new math.Vec2(165, 505));
            this.obstacles[15] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Hole", new math.Vec2(165, 555));
            this.obstacles[16] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Hole", new math.Vec2(165, 605));
            this.obstacles[17] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Hole", new math.Vec2(165, 655));
            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_1;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_6;
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_7;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 50); // 30,28
        };
        Graveyard_5.prototype.Update = function () {
            if (!this.isDoorBotLocked) {
                managers.GraveyardLocks.graveyard_5_lockBot = false;
            }
            _super.prototype.Update.call(this);
        };
        Graveyard_5.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_5;
    }(scenes.PlayScene));
    scenes.Graveyard_5 = Graveyard_5;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_5.js.map