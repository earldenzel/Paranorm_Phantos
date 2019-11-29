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
    var Mansion_6 = /** @class */ (function (_super) {
        __extends(Mansion_6, _super);
        // Constructor
        function Mansion_6() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, true, true, config.Design.MANSION) || this;
            _this.isDoorTopLocked = managers.MansionLocks.mansion_6_lockTop;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_6.prototype.Start = function () {
            this.enemies[0] = new objects.DetachedGhost(2.5, true, true);
            this.enemies[0].SetPosition(new math.Vec2(100, 200));
            this.enemies[1] = new objects.DetachedGhost(2.5, false, true);
            this.enemies[1].SetPosition(new math.Vec2(400, 200));
            this.enemies[2] = new objects.DetachedGhost(2.5, false, false);
            this.enemies[2].SetPosition(new math.Vec2(400, 650));
            this.enemies[3] = new objects.DetachedGhost(2.5, true, false);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));
            this.enemies[4] = new objects.DetachedGhost(2.5, true, true);
            this.enemies[4].SetPosition(new math.Vec2(280, 380));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 230));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 230));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 640));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 640));
            this.obstacles[5] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 440));
            this.obstacles[6] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 440));
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_5;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_7;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_2;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(80, 34);
        };
        Mansion_6.prototype.Update = function () {
            if (!this.isDoorTopLocked) {
                managers.MansionLocks.mansion_6_lockTop = false;
            }
            _super.prototype.Update.call(this);
        };
        Mansion_6.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_6;
    }(scenes.PlayScene));
    scenes.Mansion_6 = Mansion_6;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_6.js.map