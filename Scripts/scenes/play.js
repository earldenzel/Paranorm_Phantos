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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            // Initialize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.testEnemy = new objects.TestEnemy(this.assetManager);
            objects.Game.player = this.player;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this.background.Update();
            this.player.Update();
            this.testEnemy.Update();
            //this.enemy.Update();
            // this.enemies.forEach(e => {
            //     e.Update();
            //     managers.Collision.Check(this.player, e);
            // });
            if (managers.Collision.Check(this.player, this.testEnemy)) {
                this.player.GetDamage(this.testEnemy);
            }
            else {
                this.player.isTakingDamage = false;
            }
            if (managers.Collision.Check(this.player.weapon, this.testEnemy) && !managers.Collision.Check(this.player, this.testEnemy)) {
                this.testEnemy.GetDamage(this.player);
            }
            else {
                this.testEnemy.isTakingDamage = false;
            }
            if (!this.player.visible && this.player.hp <= 0) {
                objects.Game.currentScene = config.Scene.OVER;
            }
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.player.weapon);
            this.addChild(this.player);
            this.addChild(this.testEnemy);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map