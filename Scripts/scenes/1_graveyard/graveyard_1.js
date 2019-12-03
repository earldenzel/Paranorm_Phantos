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
    var Graveyard_1 = /** @class */ (function (_super) {
        __extends(Graveyard_1, _super);
        // Variables
        // Constructor
        function Graveyard_1() {
            var _this = _super.call(this, false, true, true, true, config.Design.GRAVEYARD) || this;
            _this.isDoorLeftLocked = managers.GraveyardLocks.graveyard_1_lockLeft;
            _this.isDoorRightLocked = managers.GraveyardLocks.graveyard_1_lockRight;
            _this.isDoorBotLocked = managers.GraveyardLocks.graveyard_1_lockBot;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_1.prototype.Start = function () {
            if (managers.Game.player.stageFinished == 0) {
                this.enemies[0] = new objects.Ghost(0);
                this.enemies[0].attackPower = 0; // you will never die from starter enemy
                var x = (config.Bounds.LEFT_BOUND + config.Bounds.RIGHT_BOUND) / 2;
                var y = (config.Bounds.TOP_BOUND + config.Bounds.BOTTOM_BOUND) / 2 + 150;
                this.cosmetics[0] = new objects.Indicator("upIndicator");
                this.cosmetics[1] = new objects.Indicator("downIndicator");
                this.cosmetics[2] = new objects.Indicator("leftIndicator");
                this.cosmetics[3] = new objects.Indicator("rightIndicator");
                this.cosmetics[4] = new objects.Indicator("attackIndicator");
                this.cosmetics[7] = new objects.Indicator("runIndicator");
                this.cosmetics[8] = new objects.Indicator("powersIndicator");
                this.cosmetics[0].SetPosition(new math.Vec2(x, y - this.cosmetics[0].height));
                this.cosmetics[1].SetPosition(new math.Vec2(x, y + this.cosmetics[1].height));
                this.cosmetics[2].SetPosition(new math.Vec2(x - this.cosmetics[2].width, y));
                this.cosmetics[3].SetPosition(new math.Vec2(x + this.cosmetics[3].width, y));
                this.cosmetics[4].SetPosition(new math.Vec2(this.enemies[0].x, this.enemies[0].y - 100));
                this.cosmetics[7].SetPosition(new math.Vec2(x, y));
                this.cosmetics[8].SetPosition(new math.Vec2(110, 670));
            }
            this.cosmetics[5] = new objects.Stairs(config.Scene.HOTEL_1, false);
            this.cosmetics[6] = new objects.Stairs(config.Scene.MANSION_1, true);
            this.cosmetics[5].SetPosition(new math.Vec2(500, 550));
            this.cosmetics[6].SetPosition(new math.Vec2(500, 650));
            this.cosmetics[5].visible = (managers.Game.player.stageFinished > 0);
            this.cosmetics[6].visible = false;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_3;
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_4;
            _super.prototype.Start.call(this);
        };
        Graveyard_1.prototype.Update = function () {
            //god mode to unlock all stages and temporarily make phoebe strong
            if (managers.Game.keyboardManager.powers &&
                managers.Game.keyboardManager.running &&
                managers.Game.keyboardManager.biting &&
                managers.Game.keyboardManager.attacking &&
                !managers.Game.player.godMode) {
                managers.Game.player.playerAttackDelay = 0;
                managers.Game.player.money = 99999;
                managers.Game.player.godMode = true;
                managers.Game.player.key = 99;
            }
            if (managers.Game.player.godMode) {
                this.cosmetics[5].visible = true;
                this.cosmetics[6].visible = true;
            }
            if (managers.Game.player.stageFinished == 0) {
                if (this.enemies[0].isStunned) {
                    this.cosmetics[4].visible = false;
                }
            }
            if (this.AllEnemiesAreDead()) {
                managers.GraveyardLocks.graveyard_1_lockRight = false;
                this.isDoorRightLocked = false;
                managers.GraveyardLocks.graveyard_1_lockBot = false;
                this.isDoorBotLocked = false;
            }
            if (!this.isDoorLeftLocked) {
                managers.GraveyardLocks.graveyard_1_lockLeft = false;
            }
            _super.prototype.Update.call(this);
        };
        Graveyard_1.prototype.Main = function () {
            this.playerInfo.PlayerLocation = new math.Vec2(112, 34); // 30,12
            _super.prototype.Main.call(this);
        };
        return Graveyard_1;
    }(scenes.PlayScene));
    scenes.Graveyard_1 = Graveyard_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_1.js.map