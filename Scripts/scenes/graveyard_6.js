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
    var Graveyard_6 = /** @class */ (function (_super) {
        __extends(Graveyard_6, _super);
        // Constructor
        function Graveyard_6() {
            var _this = _super.call(this, true, true, false, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_6.prototype.Start = function () {
            this.enemies[0] = new objects.TestZombie(1);
            this.enemies[0].SetPosition(new math.Vec2(430, 240));
            this.enemies[1] = new objects.TestZombie(1);
            this.enemies[1].SetPosition(new math.Vec2(230, 600));
            this.enemies[2] = new objects.TestEnemy(2, true, true);
            this.enemies[2].SetPosition(new math.Vec2(100, 240));
            this.enemies[3] = new objects.Bat(2, 100);
            this.enemies[3].SetPosition(new math.Vec2(100, 600));
            this.obstacles[0] = new objects.Barriers("background_barrierTest");
            this.obstacles[0].SetPosition(new math.Vec2(165, 220));
            this.obstacles[1] = new objects.Barriers("background_barrierTest");
            this.obstacles[1].SetPosition(new math.Vec2(165, 270));
            this.obstacles[2] = new objects.Barriers("background_barrierTest");
            this.obstacles[2].SetPosition(new math.Vec2(165, 320));
            this.obstacles[3] = new objects.Barriers("background_barrierTest");
            this.obstacles[3].SetPosition(new math.Vec2(165, 370));
            this.obstacles[4] = new objects.Barriers("background_barrierTest");
            this.obstacles[4].SetPosition(new math.Vec2(165, 505));
            this.obstacles[5] = new objects.Barriers("background_barrierTest");
            this.obstacles[5].SetPosition(new math.Vec2(165, 555));
            this.obstacles[6] = new objects.Barriers("background_barrierTest");
            this.obstacles[6].SetPosition(new math.Vec2(165, 605));
            this.obstacles[7] = new objects.Barriers("background_barrierTest");
            this.obstacles[7].SetPosition(new math.Vec2(165, 655));
            this.obstacles[8] = new objects.Barriers("background_barrierTest");
            this.obstacles[8].SetPosition(new math.Vec2(215, 320));
            this.obstacles[9] = new objects.Barriers("background_barrierTest");
            this.obstacles[9].SetPosition(new math.Vec2(265, 320));
            this.obstacles[10] = new objects.Barriers("background_barrierTest");
            this.obstacles[10].SetPosition(new math.Vec2(315, 320));
            this.obstacles[11] = new objects.Barriers("background_barrierTest");
            this.obstacles[11].SetPosition(new math.Vec2(450, 320));
            this.obstacles[12] = new objects.Gap("background_gapTest", new math.Vec2(400, 505));
            this.obstacles[13] = new objects.Gap("background_gapTest", new math.Vec2(350, 505));
            this.obstacles[14] = new objects.Gap("background_gapTest", new math.Vec2(300, 505));
            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_8;
            _super.prototype.Start.call(this);
        };
        Graveyard_6.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_6.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_6;
    }(scenes.PlayScene));
    scenes.Graveyard_6 = Graveyard_6;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_6.js.map