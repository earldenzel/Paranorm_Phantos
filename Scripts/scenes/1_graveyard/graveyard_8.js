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
            var _this = _super.call(this, true, false, false, false, config.Design.GRAVEYARD) || this;
            _this.victoryDanced = false;
            _this.onlyTheBossIsLeft = false;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_8.prototype.Start = function () {
            if (managers.Game.player.stageFinished <= 0) {
                this.enemies[0] = new objects.Undertaker(0.5);
                this.enemies[0].SetPosition(new math.Vec2(300, 530));
                this.enemies[1] = new objects.Zombie(1.5);
                this.enemies[1].SetPosition(new math.Vec2(375, 500));
                this.enemies[2] = new objects.Zombie(1.5);
                this.enemies[2].SetPosition(new math.Vec2(225, 500));
                this.enemies[3] = new objects.Bat(10, 400);
                this.enemies[3].SetPosition(new math.Vec2(500, 500));
                this.enemies[4] = new objects.Bat(10, 400);
                this.enemies[4].SetPosition(new math.Vec2(0, 500));
                this.enemies[5] = new objects.Zombie(1.5);
                this.enemies[5].visible = false;
                this.enemies[6] = new objects.Zombie(1.5);
                this.enemies[6].visible = false;
                this.cosmetics[1] = new objects.Indicator("attackIndicator");
                this.cosmetics[1].SetPosition(new math.Vec2(150, 150));
                this.cosmetics[2] = new objects.Indicator("stunIndicator");
                this.cosmetics[2].SetPosition(new math.Vec2(180, 150));
            }
            this.cosmetics[0] = new objects.Stairs(config.Scene.HOTEL_1, false);
            this.cosmetics[0].SetPosition(new math.Vec2(285, 420));
            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_6;
            this.isDoorTopLocked = (managers.Game.player.stageFinished == 0);
            this.cosmetics[0].visible = (managers.Game.player.stageFinished > 0);
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 82); // 30,60
        };
        Graveyard_8.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (managers.Game.player.stageFinished <= 0) {
                this.cosmetics[1].visible = (!managers.Game.player.activateSoul && managers.Game.player.soulCounter > 0);
                this.cosmetics[2].visible = (!managers.Game.player.activateSoul && managers.Game.player.soulCounter > 0);
                if (this.enemies[1].hp <= 0 && this.enemies[2].hp <= 0 && this.enemies[5].hp > 0 && this.enemies[6].hp > 0) {
                    this.enemies[5].SetPosition(new math.Vec2(500, 600));
                    this.enemies[5].visible = true;
                    this.enemies[5].SetPosition(new math.Vec2(100, 600));
                    this.enemies[6].visible = true;
                }
                if (this.enemies[0].isStunned && !this.onlyTheBossIsLeft) {
                    this.DestroyOthers(this.enemies[0]);
                    this.onlyTheBossIsLeft = true;
                }
                if (this.AllEnemiesAreDead()) {
                    this.isDoorTopLocked = false;
                    this.cosmetics[1].visible = false;
                    this.cosmetics[2].visible = false;
                    managers.Game.player.stageFinished = 1;
                    if (!this.victoryDanced) {
                        managers.Game.player.VictoryDance();
                        this.victoryDanced = true;
                    }
                    this.cosmetics[0].visible = true;
                }
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