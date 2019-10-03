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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        StartScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager, "title_background");
            //this.welcomeLabel = new objects.Label(
            //    "PARANORM //// PHANTOS", "40px", "Consolas", "#FFFFFF", 320, 240, true);
            this.title = new objects.TitleUI(this.assetManager, 90, 240);
            //this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 500);
            this.pressEnterLabel = new objects.Label("PRESS ENTER", "16px", "'Press Start 2P'", "#000000", 320, 500, true);
            this.pressEnterLabel.color = "#FFFFFF";
            this.enterVisibility = true;
            this.Main();
        };
        StartScene.prototype.Update = function () {
            var _this = this;
            document.addEventListener('keydown', function (e) {
                if (e.key === "Enter") {
                    _this.startButtonClick();
                }
            });
        };
        StartScene.prototype.startButtonClick = function () {
            // Change our game state from START to GAME
            objects.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.Main = function () {
            // Add items to our scene
            this.addChild(this.background);
            this.addChild(this.title);
            this.addChild(this.pressEnterLabel);
            //this.addChild(this.startButton);
            //this.startButton.on("click", this.startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map