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
            _this.Start();
            return _this;
        }
        // Methods
        Graveyard_1.prototype.Start = function () {
            // Initialize our variables
            this.player = objects.Game.player;
            this.ceilingHorizontal = new objects.Background(this.assetManager, "background_c_hori");
            this.ceilingVertical = new objects.Background(this.assetManager, "background_c_vert");
            this.floor = new objects.Background(this.assetManager, "background_f_all");
            this.wallHorizontal = new objects.Background(this.assetManager, "background_w_hori");
            this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");
            this.doorVertical = new objects.Background(this.assetManager, "background_d_vert");
            this.playerStatus = new objects.Label("PLAYER STATUSES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 800, false);
            this.messageStatus = new objects.Label("MESSAGES GO HERE", "16px", "'Press Start 2P'", "#000000", 0, 820, false);
            this.controllerHelp = new objects.Label("UP-DOWN-LEFT-RIGHT + Z OR W-A-S-D + J", "16px", "'Press Start 2P'", "#000000", 0, 840, false);
            objects.Game.messageStatus = this.messageStatus;
            this.player.canTraverseTop = true;
            this.player.canTraverseBot = false;
            this.player.sceneOnTop = config.Scene.GRAVEYARD_2;
            this.Main();
        };
        Graveyard_1.prototype.Update = function () {
            this.player.Update();
            this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
        };
        Graveyard_1.prototype.Main = function () {
            // BACKGROUND PLACEMENT
            this.addChild(this.floor);
            this.addChild(this.wallHorizontal);
            this.addChild(this.wallVertical);
            this.addChild(this.doorVertical);
            this.addChild(this.ceilingHorizontal);
            this.addChild(this.ceilingVertical);
            // ITEM PLACEMENT
            // ENEMY PLACEMENT
            // PLAYER PLACEMENT
            this.addChild(this.player.weapon);
            this.addChild(this.player);
            //UI PLACEMENT
            this.addChild(this.playerStatus);
            this.addChild(this.messageStatus);
            this.addChild(this.controllerHelp);
        };
        return Graveyard_1;
    }(objects.Scene));
    scenes.Graveyard_1 = Graveyard_1;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard_1.js.map