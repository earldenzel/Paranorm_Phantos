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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.messageTimeout = 0;
            _this.Start();
            return _this;
        }
        // Method
        GameOverScene.prototype.Start = function () {
            this.background = new objects.Background("title_background");
            this.gameOver = new objects.TitleUI("GameOver", 90, 240);
            //this.gameOverLabel = new objects.Label(
            //    "Game Over!", "40px", "Consolas", "#000000", 320, 240, true);
            //
            this.spotlight = new createjs.Bitmap(managers.Game.assetManager.getResult("gameover_spotlight"));
            this.spotlight.x = 148;
            this.phoebe = new createjs.Bitmap(managers.Game.assetManager.getResult("player_p_walk7"));
            this.phoebe.x = 260;
            this.phoebe.y = 500;
            this.pressEnterLabel = new objects.Label("PRESS ENTER TO CONTINUE", "16px", "'Press Start 2P'", "#000000", 300, 700, true);
            this.pressEnterLabel.color = "#FFFFFF";
            managers.Game.keyboardManager.playMode = false;
            // Play Music
            managers.Game.music = createjs.Sound.play("music_gameOver");
            managers.Game.music.loop = 0;
            managers.Game.music.volume = 0.1;
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
            var _this = this;
            if (managers.Game.keyboardManager.attacking) {
                if (this.messageTimeout == 0) {
                    this.messageTimeout = setTimeout(function () {
                        _this.backButtonClick();
                    }, 1000);
                }
            }
            else {
                if (this.messageTimeout > 0) {
                    this.messageTimeout = 0;
                    clearTimeout(this.messageTimeout);
                }
            }
        };
        GameOverScene.prototype.backButtonClick = function () {
            createjs.Sound.stop();
            managers.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.spotlight);
            this.addChild(this.phoebe);
            this.addChild(this.pressEnterLabel);
            this.addChild(this.gameOver);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map