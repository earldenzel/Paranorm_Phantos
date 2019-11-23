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
    var Mansion_13 = /** @class */ (function (_super) {
        __extends(Mansion_13, _super);
        // Constructor
        function Mansion_13() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, false, true, false, false, config.Design.MANSION) || this;
            _this.hasProjectileShooters = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_13.prototype.Start = function () {
            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(275, 180));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[2].attackPower = 1;
            this.enemies[3] = new objects.Bat(2, 100);
            this.enemies[3].SetPosition(new math.Vec2(280, 420));
            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Bookshelf_B");
            this.obstacles[0].SetPosition(new math.Vec2(160, 170));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Bookshelf_B");
            this.obstacles[1].SetPosition(new math.Vec2(350, 170));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(285, 440));
            managers.Game.player.sceneOnBot = config.Scene.MANSION_17;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(128, 50);
        };
        Mansion_13.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_13.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_13;
    }(scenes.PlayScene));
    scenes.Mansion_13 = Mansion_13;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_13.js.map