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
    var Mansion_16 = /** @class */ (function (_super) {
        __extends(Mansion_16, _super);
        // Constructor
        function Mansion_16() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, false, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_16.prototype.Start = function () {
            this.enemies[0] = new objects.TestZombie(2);
            this.enemies[0].SetPosition(new math.Vec2(100, 200));
            this.enemies[1] = new objects.TestZombie(1);
            this.enemies[1].SetPosition(new math.Vec2(450, 200));
            this.enemies[2] = new objects.TestZombie(2);
            this.enemies[2].SetPosition(new math.Vec2(450, 650));
            this.enemies[3] = new objects.TestZombie(1);
            this.enemies[3].SetPosition(new math.Vec2(100, 650));
            this.enemies[4] = new objects.Bat(2.5, 100);
            this.enemies[4].SetPosition(new math.Vec2(285, 420));
            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[0].SetPosition(new math.Vec2(285, 440));
            managers.Game.player.sceneOnRight = config.Scene.MANSION_17;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_12;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_18;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 66);
        };
        Mansion_16.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_16.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_16;
    }(scenes.PlayScene));
    scenes.Mansion_16 = Mansion_16;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_16.js.map