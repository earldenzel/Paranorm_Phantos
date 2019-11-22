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
    var Mansion_2 = /** @class */ (function (_super) {
        __extends(Mansion_2, _super);
        // Constructor
        function Mansion_2() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_2.prototype.Start = function () {
            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(170, 300));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.ShootingFLower(new math.Vec2(370, 200));
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.ShootingFLower(new math.Vec2(170, 520));
            this.enemies[2].attackPower = 1;
            this.enemies[3] = new objects.ShootingFLower(new math.Vec2(370, 420));
            this.enemies[3].attackPower = 1;
            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[0].SetPosition(new math.Vec2(180, 380));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[1].SetPosition(new math.Vec2(380, 280));
            this.obstacles[2] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[2].SetPosition(new math.Vec2(180, 600));
            this.obstacles[3] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Desk_s_ontal");
            this.obstacles[3].SetPosition(new math.Vec2(380, 500));
            managers.Game.player.sceneOnBot = config.Scene.MANSION_6;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(80, 18);
        };
        Mansion_2.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_2.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_2;
    }(scenes.PlayScene));
    scenes.Mansion_2 = Mansion_2;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_2.js.map