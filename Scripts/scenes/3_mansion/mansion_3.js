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
    var Mansion_3 = /** @class */ (function (_super) {
        __extends(Mansion_3, _super);
        // Constructor
        function Mansion_3() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false, config.Design.MANSION) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_3.prototype.Start = function () {
            this.enemies[0] = new objects.GhostThin(2.5, true, true);
            this.enemies[0].SetPosition(new math.Vec2(260, 200));
            this.enemies[1] = new objects.Bat(2.5, 100);
            this.enemies[1].SetPosition(new math.Vec2(100, 200));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(450, 200));
            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Desk_4Tiles_Horizontal");
            this.obstacles[0].SetPosition(new math.Vec2(180, 300));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Desk_4Tiles_Horizontal");
            this.obstacles[1].SetPosition(new math.Vec2(380, 300));
            this.obstacles[2] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Desk_4Tiles_Horizontal");
            this.obstacles[2].SetPosition(new math.Vec2(180, 550));
            this.obstacles[3] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Desk_4Tiles_Horizontal");
            this.obstacles[3].SetPosition(new math.Vec2(380, 550));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(285, 440));
            managers.Game.player.sceneOnBot = config.Scene.MANSION_8;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 18);
        };
        Mansion_3.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_3.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_3;
    }(scenes.PlayScene));
    scenes.Mansion_3 = Mansion_3;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_3.js.map