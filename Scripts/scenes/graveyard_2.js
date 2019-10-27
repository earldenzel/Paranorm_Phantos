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
    var Graveyard_2 = /** @class */ (function (_super) {
        __extends(Graveyard_2, _super);
        // Constructor
        function Graveyard_2(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_2.prototype.Start = function () {
            // Initialize our variables
            this.player = objects.Game.player;
            this.enemies = new Array();
            this.enemies[0] = new objects.TestEnemy(this.assetManager, 5, true, true);
            this.enemies[1] = new objects.TestEnemy(this.assetManager, 3, false, false);
            this.enemies[2] = new objects.TestEnemy(this.assetManager, 2, false, true);
            this.ceilingHorizontal = new objects.Background(this.assetManager, "background_c_hori");
            this.ceilingVertical = new objects.Background(this.assetManager, "background_c_vert");
            this.floor = new objects.Background(this.assetManager, "background_f_all");
            this.wallHorizontal = new objects.Background(this.assetManager, "background_w_hori");
            this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");
            this.doorBot = new objects.Background(this.assetManager, "background_d_vert");
            this.doorBot.FlipY();
            this.doorTop = new objects.Background(this.assetManager, "background_d_vert");
            this.playerStatus = new objects.Label("PLAYER STATUSES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 800, false);
            this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 820, false);
            this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR W-A-S-D + J", "16px", "'Press Start 2P'", "#000000", 0, 840, false);
            objects.Game.messageStatus = this.messageStatus;
            this.player.canTraverseTop = false;
            this.player.canTraverseBot = true;
            this.player.sceneOnBot = config.Scene.GRAVEYARD_1;
            this.Main();
        };
        Graveyard_2.prototype.Update = function () {
            this.player.Update();
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
        };
        Graveyard_2.prototype.Main = function () {
            var _this = this;
            // BACKGROUND PLACEMENT
            this.addChild(this.floor);
            this.addChild(this.wallHorizontal);
            this.addChild(this.wallVertical);
            this.addChild(this.doorBot);
            this.addChild(this.doorTop);
            this.addChild(this.ceilingHorizontal);
            this.addChild(this.ceilingVertical);
            // ITEM PLACEMENT
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
        return Graveyard_2;
    }(objects.Scene));
    scenes.Graveyard_2 = Graveyard_2;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_2.js.map