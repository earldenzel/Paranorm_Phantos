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
    var Hotel_15 = /** @class */ (function (_super) {
        __extends(Hotel_15, _super);
        // Constructor
        function Hotel_15() {
            var _this = 
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            _super.call(this, true, false, false, false, config.Design.HOTEL) || this;
            _this.victoryDanced = false;
            _this.onlyTheBossIsLeft = false;
            _this.Start();
            return _this;
        }
        // Methods
        Hotel_15.prototype.Start = function () {
            if (managers.Game.player.stageFinished <= 1) {
                this.enemies[0] = new objects.HotelManager(2, false, false);
            }
            this.cosmetics[0] = new objects.Stairs(config.Scene.MANSION_1, true);
            this.cosmetics[0].SetPosition(new math.Vec2(285, 420));
            managers.Game.player.sceneOnTop = config.Scene.HOTEL_13;
            this.isDoorTopLocked = (managers.Game.player.stageFinished == 1);
            this.cosmetics[0].visible = (managers.Game.player.stageFinished > 1);
            _super.prototype.Start.call(this);
            this.playerInfo.PlayerLocation = new math.Vec2(96, 82);
        };
        Hotel_15.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (managers.Game.player.stageFinished <= 1) {
                if (this.enemies[0].isStunned && !this.onlyTheBossIsLeft) {
                    this.DestroyOthers(this.enemies[0]);
                    this.onlyTheBossIsLeft = true;
                }
                if (this.AllEnemiesAreDead()) {
                    this.isDoorTopLocked = false;
                    managers.Game.player.stageFinished = 2;
                    if (!this.victoryDanced) {
                        managers.Game.player.VictoryDance();
                        this.victoryDanced = true;
                    }
                    this.cosmetics[0].visible = true;
                }
            }
        };
        Hotel_15.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Hotel_15;
    }(scenes.PlayScene));
    scenes.Hotel_15 = Hotel_15;
})(scenes || (scenes = {}));
//# sourceMappingURL=hotel_15.js.map