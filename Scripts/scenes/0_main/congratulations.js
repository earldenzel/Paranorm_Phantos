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
    var CongratulationScene = /** @class */ (function (_super) {
        __extends(CongratulationScene, _super);
        // Constructor
        function CongratulationScene() {
            var _this = _super.call(this) || this;
            _this.counter = 0;
            _this.messageTimeout = 0;
            _this.Start();
            return _this;
        }
        // Methods
        CongratulationScene.prototype.Start = function () {
            this.background = new objects.Background("background");
            this.congratulation = new objects.Background("congratulation_ui");
            this.congratulation.x = 10;
            this.congratulation.y = 60;
            this.creditScroll = new managers.CreditScroll();
            this.creditScroll.y = 700;
            managers.Game.keyboardManager.playMode = false;
            // Play Music
            managers.Game.music = createjs.Sound.play("music_credits");
            managers.Game.music.loop = 0;
            managers.Game.music.volume = 0.1;
            this.Main();
        };
        CongratulationScene.prototype.Update = function () {
            var _this = this;
            if (this.counter < (315 * 30)) {
                this.creditScroll.y -= 0.5;
                managers.Game.keyboardManager.enabled = false;
            }
            else {
                managers.Game.keyboardManager.enabled = true;
                if (managers.Game.keyboardManager.confirming) {
                    if (this.messageTimeout == 0) {
                        this.messageTimeout = setTimeout(function () {
                            _this.startButtonClick();
                        }, 50);
                    }
                }
            }
            this.counter++;
        };
        CongratulationScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.creditScroll);
            this.addChild(this.congratulation);
        };
        CongratulationScene.prototype.startButtonClick = function () {
            createjs.Sound.stop();
            managers.Game.currentScene = config.Scene.START;
        };
        return CongratulationScene;
    }(objects.Scene));
    scenes.CongratulationScene = CongratulationScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=congratulations.js.map