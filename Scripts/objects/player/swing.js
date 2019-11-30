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
var objects;
(function (objects) {
    var Swing = /** @class */ (function (_super) {
        __extends(Swing, _super);
        // Constructor
        function Swing() {
            var _this = _super.call(this, managers.Game.phoebe_TextureAtlas, "PhoebeSoul_Attack_Back") || this;
            _this.images = ["PhoebeSoul_Attack_Back", "PhoebeSoul_Attack_Front", "PhoebeSoul_Attack_Left", "PhoebeSoul_Attack_Right"];
            _this.Start();
            _this.alpha = 0.3;
            _this.regX = 59;
            _this.regY = 58;
            return _this;
        }
        // Methods
        // Initializing our variables with default values
        Swing.prototype.Start = function () {
        };
        // Updated 60 times per second (60FPS)
        Swing.prototype.Update = function () {
            this.visible = managers.Game.player.weapon.visible;
            this.x = managers.Game.player.x;
            this.y = managers.Game.player.y;
            if (this.currentAnimation != this.images[managers.Game.player.weapon.direction]) {
                this.gotoAndPlay(this.images[managers.Game.player.weapon.direction]);
            }
        };
        // Resets the position of the object
        Swing.prototype.Reset = function () {
        };
        // Collision Detection 
        Swing.prototype.CheckBound = function () {
        };
        return Swing;
    }(objects.GameObject));
    objects.Swing = Swing;
})(objects || (objects = {}));
//# sourceMappingURL=swing.js.map