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
        function PlayScene(assetManager, hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight) {
            var _this = _super.call(this, assetManager) || this;
            _this.enemies = new Array();
            _this.barriers = new Array();
            _this.hasDoorTop = hasDoorTop;
            _this.hasDoorBot = hasDoorBot;
            _this.hasDoorLeft = hasDoorLeft;
            _this.hasDoorRight = hasDoorRight;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            // Initialize our variables
            this.player = objects.Game.player;
            this.ceilingHorizontal = new objects.Background(this.assetManager, "background_c_hori");
            this.ceilingVertical = new objects.Background(this.assetManager, "background_c_vert");
            this.floor = new objects.Background(this.assetManager, "background_f_all");
            this.wallHorizontal = new objects.Background(this.assetManager, "background_w_hori");
            this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");
            this.player.canTraverseTop = false;
            this.player.canTraverseBot = false;
            this.player.canTraverseLeft = false;
            this.player.canTraverseRight = false;
            if (this.hasDoorTop) {
                this.doorTop = new objects.Background(this.assetManager, "background_d_vert");
                this.doorTopFrame = new objects.Background(this.assetManager, "background_d_vertT");
                this.player.canTraverseTop = true;
            }
            if (this.hasDoorBot) {
                this.doorBot = new objects.Background(this.assetManager, "background_d_vert");
                this.doorBotFrame = new objects.Background(this.assetManager, "background_d_vertT");
                this.doorBot.Flip();
                this.doorBotFrame.Flip();
                this.player.canTraverseBot = true;
            }
            if (this.hasDoorLeft) {
                this.doorLeft = new objects.Background(this.assetManager, "background_d_hori");
                this.player.canTraverseLeft = true;
            }
            if (this.hasDoorRight) {
                this.doorRight = new objects.Background(this.assetManager, "background_d_hori");
                this.doorRight.Flip();
                this.player.canTraverseRight = true;
            }
            this.playerStatus = new objects.Label("PLAYER STATUSES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 800, false);
            this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 820, false);
            this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR W-A-S-D + J", "16px", "'Press Start 2P'", "#000000", 0, 840, false);
            objects.Game.messageStatus = this.messageStatus;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.player.Update();
            var collectiveCollision = false;
            this.enemies.forEach(function (e) {
                e.Update();
                collectiveCollision = collectiveCollision || managers.Collision.Check(objects.Game.player, e);
            });
            if (objects.Game.player.isTakingDamage && !collectiveCollision) {
                objects.Game.player.isTakingDamage = false;
            }
            this.barriers.forEach(function (e) {
                e.CheckBound();
                _this.enemies.forEach(function (f) {
                    if (f instanceof objects.TestZombie) {
                        e.TestZombieCheckBarrierCollision(f);
                    }
                });
            });
            this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
        };
        PlayScene.prototype.Main = function () {
            // BACKGROUND PLACEMENT
            var _this = this;
            //floor and walls
            this.addChild(this.floor);
            this.addChild(this.wallHorizontal);
            this.addChild(this.wallVertical);
            //door holes
            if (this.hasDoorTop) {
                this.addChild(this.doorTop);
            }
            if (this.hasDoorBot) {
                this.addChild(this.doorBot);
            }
            if (this.hasDoorLeft) {
                this.addChild(this.doorLeft);
            }
            if (this.hasDoorRight) {
                this.addChild(this.doorRight);
            }
            //ceiling
            this.addChild(this.ceilingHorizontal);
            this.addChild(this.ceilingVertical);
            // ITEM PLACEMENT - barriers
            this.barriers.forEach(function (e) {
                _this.addChild(e);
            });
            // ENEMY PLACEMENT
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            // PLAYER PLACEMENT
            this.addChild(this.player.weapon);
            this.addChild(this.player);
            //door frames
            if (this.hasDoorTop) {
                this.addChild(this.doorTopFrame);
            }
            if (this.hasDoorBot) {
                this.addChild(this.doorBotFrame);
            }
            //UI PLACEMENT
            this.addChild(this.playerStatus);
            this.addChild(this.messageStatus);
            this.addChild(this.controllerHelp);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map