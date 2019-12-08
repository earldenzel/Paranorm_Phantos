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
    var Mansion_18 = /** @class */ (function (_super) {
        __extends(Mansion_18, _super);
        // Constructor
        function Mansion_18() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, false, false, config.Design.MANSION) || this;
            _this.victoryDanced = false;
            _this.onlyTheBossIsLeft = false;
            _this.hasProjectileShooters = true;
            _this.isBossRoom = true;
            _this.Start();
            return _this;
        }
        // Methods
        Mansion_18.prototype.Start = function () {
            if (managers.Game.player.stageFinished <= 2) {
                this.enemies[0] = new objects.LittleGirl(2, true, false);
            }
            this.cosmetics[0] = new objects.Stairs(config.Scene.CONGRATULATIONS, true);
            this.cosmetics[0].SetPosition(new math.Vec2(285, 420));
            managers.Game.player.sceneOnTop = config.Scene.MANSION_16;
            this.isDoorTopLocked = (managers.Game.player.stageFinished == 2);
            this.cosmetics[0].visible = (managers.Game.player.stageFinished > 2);
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(112, 82);
        };
        Mansion_18.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (managers.Game.player.stageFinished <= 2) {
                if (this.enemies[0].isStunned && !this.onlyTheBossIsLeft) {
                    this.DestroyOthers(this.enemies[0]);
                    this.onlyTheBossIsLeft = true;
                }
                if (this.AllEnemiesAreDead()) {
                    this.isDoorTopLocked = false;
                    managers.Game.player.stageFinished = 3;
                    if (!this.victoryDanced) {
                        managers.Game.player.VictoryDance();
                        this.victoryDanced = true;
                    }
                    this.cosmetics[0].visible = true;
                }
            }
        };
        Mansion_18.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Mansion_18;
    }(scenes.PlayScene));
    scenes.Mansion_18 = Mansion_18;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion_18.js.map