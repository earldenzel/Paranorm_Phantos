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
    var Graveyard_4 = /** @class */ (function (_super) {
        __extends(Graveyard_4, _super);
        //this scene is right of graveyard 1
        // Constructor
        function Graveyard_4() {
            var _this = _super.call(this, false, false, true, false, config.Design.GRAVEYARD) || this;
            //this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_4.prototype.Start = function () {
            //this.enemies[0] = new objects.RedSkeleton(new math.Vec2(400, 360),3,false,true);
            this.enemies[0] = new objects.Maggot(1, false, true, 4);
            this.enemies[1] = new objects.TestEnemy(3, false, false);
            this.enemies[2] = new objects.TestEnemy(2, false, true);
            this.enemies[3] = new objects.Zombie(1);
            this.obstacles[0] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[0].SetPosition(new math.Vec2(200, 360));
            this.obstacles[1] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[1].SetPosition(new math.Vec2(360, 360));
            this.obstacles[2] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[2].SetPosition(new math.Vec2(200, 510));
            this.obstacles[3] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[3].SetPosition(new math.Vec2(360, 510));
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_1;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(128, 34); // 46,12
        };
        Graveyard_4.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_4.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_4;
    }(scenes.PlayScene));
    scenes.Graveyard_4 = Graveyard_4;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_4.js.map