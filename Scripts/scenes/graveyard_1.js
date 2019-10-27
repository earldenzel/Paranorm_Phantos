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
        // Constructor
        function Graveyard_1(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.playerMoveSpeed = 4;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_1.prototype.Start = function () {
            // Initialize our variables
            this.changingScenes = false;
            this.player = new objects.Player(this.assetManager);
            this.enemies = new Array();
            this.enemies[0] = new objects.TestEnemy(this.assetManager, 1, true, true);
            this.enemies[1] = new objects.TestZombie(this.assetManager, 0.5);
            this.enemies[2] = new objects.Bat(this.assetManager, 1);
            this.ceilingHorizontal = new objects.Background(this.assetManager, "background_c_hori");
            this.ceilingVertical = new objects.Background(this.assetManager, "background_c_vert");
            this.floor = new objects.Background(this.assetManager, "background_f_all");
            this.wallHorizontal = new objects.Background(this.assetManager, "background_w_hori");
            this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");
            this.doorVertical = new objects.Background(this.assetManager, "background_d_vert");
            this.barrierTest = new objects.Barriers(this.assetManager, "background_barrierTest");
            this.playerStatus = new objects.Label("PLAYER STATUSES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 800, false);
            this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 820, false);
            this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR W-A-S-D + J", "16px", "'Press Start 2P'", "#000000", 0, 840, false);
            objects.Game.player = this.player;
            objects.Game.messageStatus = this.messageStatus;
            this.Main();
        };
        Graveyard_1.prototype.Update = function () {
            this.player.Update();
            this.Checkbounds();
            var collectiveCollision = false;
            this.enemies.forEach(function (e) {
                e.Update();
                collectiveCollision = collectiveCollision || managers.Collision.Check(objects.Game.player, e);
            });
            //this.portalNorth.Update();
            if (objects.Game.player.isTakingDamage && !collectiveCollision) {
                objects.Game.player.isTakingDamage = false;
            }
            this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
            this.PlayerCheckBarrierCollision();
            this.TestZombieCheckBarrierCollision();
        };
        Graveyard_1.prototype.Main = function () {
            var _this = this;
            // BACKGROUND PLACEMENT
            this.addChild(this.floor);
            this.addChild(this.wallHorizontal);
            this.addChild(this.wallVertical);
            this.addChild(this.doorVertical);
            this.addChild(this.ceilingHorizontal);
            this.addChild(this.ceilingVertical);
            // ITEM PLACEMENT
            this.addChild(this.barrierTest);
            // ENEMY PLACEMENT
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            // PLAYER PLACEMENT
            this.addChild(this.player.weapon);
            this.addChild(this.player);
            //UI PLACEMENT
            this.addChild(this.playerStatus);
            this.addChild(this.messageStatus);
            this.addChild(this.controllerHelp);
        };
        Graveyard_1.prototype.PlayerCheckBarrierCollision = function () {
            if (managers.Collision.Check(this.barrierTest, objects.Game.player)) {
                if (objects.Game.keyboardManager.moveLeft) {
                    this.player.x += this.playerMoveSpeed;
                }
                if (objects.Game.keyboardManager.moveRight) {
                    this.player.x -= this.playerMoveSpeed;
                }
                if (objects.Game.keyboardManager.moveUp) {
                    this.player.y += this.playerMoveSpeed;
                }
                if (objects.Game.keyboardManager.moveDown) {
                    this.player.y -= this.playerMoveSpeed;
                }
            }
        };
        Graveyard_1.prototype.TestZombieCheckBarrierCollision = function () {
            var playerPosition = new math.Vec2(this.player.x, this.player.y);
            var enemyPosition = new math.Vec2(this.enemies[1].x, this.enemies[1].y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (managers.Collision.Check(this.barrierTest, this.enemies[1])) {
                this.enemies[1].x -= math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.enemies[1].GetObjectSpeed()).x;
                this.enemies[1].y -= math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.enemies[1].GetObjectSpeed()).y;
            }
        };
        Graveyard_1.prototype.Checkbounds = function () {
            var player = objects.Game.player;
            // right bound
            if (player.x >= 565 - player.halfW) {
                player.x = 565 - player.halfW;
            }
            // left bound
            if (player.x <= player.halfW + 80) {
                console.log(player.y);
                player.x = player.halfW + 80;
            }
            // bottom bound
            if (player.y >= 765 - player.halfH) {
                player.y = 765 - player.halfH;
            }
            // top bound
            if (player.y <= player.halfH + 40) {
                console.log(player.x);
                if (player.x < 276 || player.x > 372) {
                    player.y = player.halfH + 40;
                }
                if (player.y <= player.halfH && !this.changingScenes) {
                    console.log("Moving to next scene...");
                    this.changingScenes = true;
                    objects.Game.currentScene = config.Scene.GRAVEYARD_2;
                    objects.Game.player.SetPosition(new math.Vec2(player.x, 765 - player.halfH));
                }
            }
        };
        return Graveyard_1;
    }(objects.Scene));
    scenes.Graveyard_1 = Graveyard_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_1.js.map