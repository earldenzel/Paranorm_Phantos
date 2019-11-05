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
    var Graveyard_3 = /** @class */ (function (_super) {
        __extends(Graveyard_3, _super);
        //this scene is left of graveyard 1
        // Constructor
        function Graveyard_3() {
            var _this = _super.call(this, false, false, true, true) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_3.prototype.Start = function () {
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_1;
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_2;
            this.enemies[0] = new objects.Bat(5, 150);
            this.enemies[0].SetPosition(new math.Vec2(config.Bounds.RIGHT_BOUND, config.Bounds.TOP_BOUND));
            this.enemies[1] = new objects.Bat(7, 175);
            this.enemies[1].SetPosition(new math.Vec2(config.Bounds.LEFT_BOUND, config.Bounds.TOP_BOUND));
            this.enemies[2] = new objects.Bat(4, 100);
            this.enemies[2].SetPosition(new math.Vec2(config.Bounds.RIGHT_BOUND, config.Bounds.BOTTOM_BOUND));
            this.enemies[3] = new objects.Bat(2, 50);
            this.enemies[3].SetPosition(new math.Vec2(config.Bounds.LEFT_BOUND, config.Bounds.BOTTOM_BOUND));
            _super.prototype.Start.call(this);
        };
        Graveyard_3.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Graveyard_3.prototype.Main = function () {
            _super.prototype.Main.call(this);
        };
        return Graveyard_3;
    }(scenes.PlayScene));
    scenes.Graveyard_3 = Graveyard_3;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_3.js.map