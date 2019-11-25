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
    var OpeningScene = /** @class */ (function (_super) {
        __extends(OpeningScene, _super);
        // Constructor
        function OpeningScene() {
            var _this = _super.call(this) || this;
            _this.messageTimeout = 0;
            _this.Start();
            return _this;
        }
        OpeningScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.currentMessage = 0;
            this.background = new objects.Background("background");
            this.pressEnterLabel = new objects.Label("", "16px", "'Press Start 2P'", "#000000", 10, 200, true);
            this.pressEnterLabel.color = "#FFFFFF";
            console.log(managers.Game.player.deathCount + "times");
            if (managers.Game.player.deathCount == 0) {
                this.cutSceneMessages = [
                    "",
                    "Hello, welcome... stranger",
                    "Before we begin, please note you \nmay escape cutscenes via the ESC \nkey.\nThat is, if you already know what \nto do.",
                    "In this game, you play the role of \nPhoebe, who is a paranormal bounty\nhunter.",
                    "This time, her case involves \ninvestigating a graveyard. Eerie \nvoices were reported during the \nwee hours",
                    "Missing persons reports state that \nthe gravekeeper seems to be \nmissing for a month now ",
                    "Graves seem to have been freshly \ntrampled upon, and headstones... \nlet's just say these weren't on \nthe right place.",
                    "Phoebe already knows what it is -\na ghoulish existence that gained a\nfollowing. A spirit horde...",
                    "And she has three objectives:\n\tsolve this case,\n\tearn sweet, sweet dough,\n\tand devour the rest.",
                    "Let's jump right in..."
                ];
            }
            else {
                this.cutSceneMessages = [
                    "",
                    "Welcome back.",
                    "I see you wanna try again!",
                    "You died " + managers.Game.player.deathCount + " times."
                ];
            }
            managers.Game.keyboardManager.playMode = false;
            this.Main();
        };
        OpeningScene.prototype.Update = function () {
            var _this = this;
            this.pressEnterLabel.text = this.cutSceneMessages[this.currentMessage];
            if (managers.Game.keyboardManager.biting) {
                setTimeout(function () {
                    _this.startButtonClick();
                }, 200);
            }
            //press attack button to show next message
            if (managers.Game.keyboardManager.attacking) {
                if (this.messageTimeout == 0) {
                    this.messageTimeout = setTimeout(function () {
                        _this.nextMessage();
                    }, 50);
                }
            }
            else {
                if (this.messageTimeout > 0) {
                    this.messageTimeout = 0;
                    clearTimeout(this.messageTimeout);
                }
            }
        };
        OpeningScene.prototype.startButtonClick = function () {
            // Change our game state to GAME
            switch (managers.Game.player.stageFinished) {
                case 0:
                    managers.Game.currentScene = config.Scene.GRAVEYARD_1;
                    break;
                case 1:
                    managers.Game.currentScene = config.Scene.HOTEL_1;
                    break;
                case 2:
                    managers.Game.currentScene = config.Scene.MANSION_1;
            }
        };
        OpeningScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.pressEnterLabel);
        };
        OpeningScene.prototype.nextMessage = function () {
            this.currentMessage++;
            if (this.currentMessage >= this.cutSceneMessages.length) {
                this.startButtonClick();
            }
        };
        return OpeningScene;
    }(objects.Scene));
    scenes.OpeningScene = OpeningScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=opening_scene.js.map