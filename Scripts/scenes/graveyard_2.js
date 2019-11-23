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
    var Graveyard_2 = /** @class */ (function (_super) {
        __extends(Graveyard_2, _super);
        // Constructor
        function Graveyard_2() {
            var _this = _super.call(this, false, false, false, true, config.Design.GRAVEYARD) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_2.prototype.Start = function () {
            this.enemies[0] = new objects.TestEnemy(1, true, true);
            this.enemies[0].SetPosition(new math.Vec2(275, 430));
            this.enemies[1] = new objects.Zombie(0.5);
            this.enemies[1].SetPosition(new math.Vec2(275, 200));
            this.enemies[2] = new objects.Zombie(0.5);
            this.enemies[2].SetPosition(new math.Vec2(275, 600));
            this.enemies[3] = new objects.Bat(2.5, 100);
            this.enemies[3].SetPosition(new math.Vec2(100, 430));
            this.obstacles[0] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[0].SetPosition(new math.Vec2(150, 360));
            this.obstacles[1] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[1].SetPosition(new math.Vec2(150, 410));
            this.obstacles[2] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[2].SetPosition(new math.Vec2(150, 460));
            this.obstacles[3] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[3].SetPosition(new math.Vec2(150, 510));
            this.obstacles[4] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[4].SetPosition(new math.Vec2(400, 360));
            this.obstacles[5] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[5].SetPosition(new math.Vec2(400, 410));
            this.obstacles[6] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[6].SetPosition(new math.Vec2(400, 460));
            this.obstacles[7] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[7].SetPosition(new math.Vec2(400, 510));
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_3;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(80, 34); //-2,12
        };
        Graveyard_2.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_2.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_2;
    }(scenes.PlayScene));
    scenes.Graveyard_2 = Graveyard_2;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_2.js.map