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
    var Graveyard_8 = /** @class */ (function (_super) {
        __extends(Graveyard_8, _super);
        // Constructor
        function Graveyard_8() {
            var _this = _super.call(this, true, false, false, false) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_8.prototype.Start = function () {
            this.enemies[0] = new objects.Undertaker(0.5);
            this.enemies[0].SetPosition(new math.Vec2(300, 530));
            this.enemies[1] = new objects.TestZombie(1.5);
            this.enemies[1].SetPosition(new math.Vec2(375, 500));
            this.enemies[2] = new objects.TestZombie(1.5);
            this.enemies[2].SetPosition(new math.Vec2(225, 500));
            this.enemies[3] = new objects.Bat(4.5, 100);
            this.enemies[3].SetPosition(new math.Vec2(500, 500));
            this.enemies[4] = new objects.Bat(4.5, 100);
            this.enemies[4].SetPosition(new math.Vec2(0, 500));
            this.enemies[5] = new objects.TestZombie(1.5);
            this.enemies[5].visible = false;
            this.enemies[6] = new objects.TestZombie(1.5);
            this.enemies[6].visible = false;
            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_6;
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 82); // 30,60
        };
        Graveyard_8.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (this.enemies[1].hp <= 0 && this.enemies[2].hp <= 0 && this.enemies[5].hp > 0 && this.enemies[6].hp > 0) {
                this.enemies[5].SetPosition(new math.Vec2(500, 600));
                this.enemies[5].visible = true;
                this.enemies[5].SetPosition(new math.Vec2(100, 600));
                this.enemies[6].visible = true;
            }
        };
        Graveyard_8.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_8;
    }(scenes.PlayScene));
    scenes.Graveyard_8 = Graveyard_8;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_8.js.map