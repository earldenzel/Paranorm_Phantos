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
    var Graveyard = /** @class */ (function (_super) {
        __extends(Graveyard, _super);
        // Constructor
        function Graveyard(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard.prototype.Start = function () {
            // Initialize our variables
            this.player = objects.Game.player;
            this.ceilingHorizontal = new objects.Background(this.assetManager, "background_c_hori");
            this.ceilingVertical = new objects.Background(this.assetManager, "background_c_vert");
            this.floor = new objects.Background(this.assetManager, "background_f_all");
            this.wallHorizontal = new objects.Background(this.assetManager, "background_w_hori");
            this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");
            //UI... will change
            this.playerStatus = new objects.Label("PLAYER STATUSES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 800, false);
            this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 820, false);
            this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR W-A-S-D + J", "16px", "'Press Start 2P'", "#000000", 0, 840, false);
            objects.Game.messageStatus = this.messageStatus;
            this.Main();
        };
        Graveyard.prototype.Update = function () {
            this.player.Update();
            this.Checkbounds();
            var collectiveCollision = false;
            this.enemies.forEach(function (e) {
                e.Update();
                collectiveCollision = collectiveCollision || managers.Collision.Check(objects.Game.player, e);
            });
            if (objects.Game.player.isTakingDamage && !collectiveCollision) {
                objects.Game.player.isTakingDamage = false;
            }
            this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
        };
        Graveyard.prototype.Main = function () {
            var _this = this;
            // BACKGROUND PLACEMENT
            this.addChild(this.floor);
            this.addChild(this.wallHorizontal);
            this.addChild(this.wallVertical);
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
        Graveyard.prototype.Checkbounds = function () {
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
            }
        };
        return Graveyard;
    }(objects.Scene));
    scenes.Graveyard = Graveyard;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard.js.map