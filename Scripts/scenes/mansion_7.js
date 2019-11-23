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
    var Mansion_7 = /** @class */ (function (_super) {
        __extends(Mansion_7, _super);
        // Constructor
        function Mansion_7() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, true, true, true, config.Design.MANSION) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_7.prototype.Start = function () {
            this.enemies[0] = new objects.Zombie(1.5);
            this.enemies[0].SetPosition(new math.Vec2(280, 350));
            this.enemies[1] = new objects.Zombie(1);
            this.enemies[1].SetPosition(new math.Vec2(280, 550));
            this.enemies[2] = new objects.Zombie(1.5);
            this.enemies[2].SetPosition(new math.Vec2(200, 450));
            this.enemies[3] = new objects.Zombie(1);
            this.enemies[3].SetPosition(new math.Vec2(350, 450));
            this.obstacles[0] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Bookshelf_B");
            this.obstacles[0].SetPosition(new math.Vec2(90, 175));
            this.obstacles[1] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Bookshelf_B");
            this.obstacles[1].SetPosition(new math.Vec2(425, 175));
            this.obstacles[2] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "PotPlant");
            this.obstacles[2].SetPosition(new math.Vec2(90, 640));
            this.obstacles[3] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "PotPlant");
            this.obstacles[3].SetPosition(new math.Vec2(450, 640));
            managers.Game.player.sceneOnLeft = config.Scene.MANSION_6;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_8;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_1;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_11;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 34);
        };
        Mansion_7.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Mansion_7.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_7;
    }(scenes.PlayScene));
    scenes.Mansion_7 = Mansion_7;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_7.js.map