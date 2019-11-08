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
        function PlayScene(hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight) {
            var _this = _super.call(this) || this;
            _this.enemies = new Array();
            _this.obstacles = new Array();
            _this.cosmetics = new Array();
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
            this.player = managers.Game.player;
            this.ceilingAndWall = new objects.Background("background_c_w_all");
            this.ceilingAndWall.y = 110;
            //this.ceilingHorizontal =new objects.Background(this.assetManager,"background_c_hori");
            //this.ceilingVertical =new objects.Background(this.assetManager,"background_c_vert");
            this.floor = new objects.Background("background_f_all");
            this.floor.y = 110;
            //this.wallHorizontal = new objects.Background(this.assetManager,"background_w_hori");
            //this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");
            this.player.canTraverseTop = false;
            this.player.canTraverseBot = false;
            this.player.canTraverseLeft = false;
            this.player.canTraverseRight = false;
            if (this.hasDoorTop) {
                this.doorTop = new objects.Background("background_d_vert");
                this.doorTopFrame = new objects.Background("background_d_vertT");
                this.doorTop.y = 110;
                this.doorTopFrame.y = 110;
                this.player.canTraverseTop = true;
            }
            if (this.hasDoorBot) {
                this.doorBot = new objects.Background("background_d_vert");
                this.doorBotFrame = new objects.Background("background_d_vertT");
                this.doorBot.y = 110;
                this.doorBotFrame.y = 110;
                this.doorBot.Flip();
                this.doorBotFrame.Flip();
                this.player.canTraverseBot = true;
            }
            if (this.hasDoorLeft) {
                this.doorLeft = new objects.Background("background_d_hori");
                this.doorLeftFrame = new objects.Background("background_d_horiT");
                this.doorLeft.y = 110;
                this.doorLeftFrame.y = 110;
                this.player.canTraverseLeft = true;
            }
            if (this.hasDoorRight) {
                this.doorRight = new objects.Background("background_d_hori");
                this.doorRightFrame = new objects.Background("background_d_horiT");
                this.doorRight.y = 110;
                this.doorRightFrame.y = 110;
                this.doorRight.Flip();
                this.doorRightFrame.Flip();
                this.player.canTraverseRight = true;
            }
            //this.playerStatus = new objects.Label("PLAYER ", "16px", "'Press Start 2P'", "#FFFFFF", 20, 670, false);
            //this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#FFFFFF", 20, 690, false);
            //this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR \nW-A-S-D + J", "16px", "'Press Start 2P'", "#FFFFFF", 20, 710, false);
            //this.playerStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            //this.messageStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            //this.controllerHelp.shadow = new createjs.Shadow("#000000",0,0,10);
            //managers.Game.messageStatus = this.messageStatus;
            this.playerInfo = new managers.PlayerInfo_UI();
            //this.playerInfo.x = 38;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.player.Update();
            var collectiveCollision = false;
            this.enemies.forEach(function (e) {
                e.Update();
                //collectiveCollision = collectiveCollision || managers.Collision.Check(managers.Game.player,e);
                collectiveCollision = collectiveCollision ||
                    managers.Collision.CheckWithOffset(managers.Game.player, e, 0, -config.Bounds.ENEMY_COLLISION_OFFSET, -config.Bounds.ENEMY_COLLISION_OFFSET, -config.Bounds.ENEMY_COLLISION_OFFSET);
            });
            if (managers.Game.player.isTakingDamage && !collectiveCollision) {
                managers.Game.player.isTakingDamage = false;
            }
            this.obstacles.forEach(function (e) {
                e.CheckBound();
                _this.enemies.forEach(function (f) {
                    //if enemy is stunned and knocked back on a barrier, then enemy dies
                    if (f.isStunned && managers.Collision.Check(e, f)) {
                        f.RemoveFromPlay(f.CalculateBounty());
                    }
                    //if enemy is
                    if (f instanceof objects.TestZombie && e instanceof objects.Barriers) {
                        e.TestZombieCheckBarrierCollision(f);
                    }
                    if (!f.isFlying && e instanceof objects.Gap) {
                        e.CheckGapDamage(f);
                    }
                });
                if (e instanceof objects.Gap) {
                    e.CheckGapDamage(_this.player);
                }
            });
            //this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
            // Sets the Player Health
            this.playerInfo.PlayerHealth = this.player.hp;
            this.playerInfo.Money = this.player.money;
            this.playerInfo.PlayerEcto = this.player.ecto;
        };
        PlayScene.prototype.Main = function () {
            // BACKGROUND PLACEMENT
            var _this = this;
            //floor and walls
            this.addChild(this.floor);
            this.addChild(this.ceilingAndWall);
            //this.addChild(this.wallHorizontal);
            //this.addChild(this.wallVertical);
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
            //this.addChild(this.ceilingHorizontal);
            //this.addChild(this.ceilingVertical);
            // ITEM PLACEMENT - barriers
            this.obstacles.forEach(function (e) {
                _this.addChild(e);
            });
            // COSMETICS PLACEMENT
            this.cosmetics.forEach(function (e) {
                _this.addChild(e);
            });
            // ENEMY PLACEMENT
            this.enemies.forEach(function (e) {
                _this.addChild(e);
                _this.addChild(e.stunIndicator);
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
            if (this.hasDoorLeft) {
                this.addChild(this.doorLeftFrame);
            }
            if (this.hasDoorRight) {
                this.addChild(this.doorRightFrame);
            }
            //UI PLACEMENT
            //this.addChild(this.playerStatus);
            //this.addChild(this.messageStatus);
            //this.addChild(this.controllerHelp);
            this.addChild(this.playerInfo);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map