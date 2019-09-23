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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Variables
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            _this.weapon = new objects.Weapon(assetManager, _this);
            _this.Start();
            return _this;
        }
        // Methods
        // Initializing our variables with default values
        Player.prototype.Start = function () {
            this.speedX = 0;
            this.speedY = 0;
            this.Reset();
        };
        // Updated 60 times per second (60FPS)
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        // Resets the position of the object
        Player.prototype.Reset = function () {
            this.x = 320;
            this.y = 450;
            this.weapon.x = this.x;
            this.weapon.y = this.y - 15;
        };
        // Move the object
        Player.prototype.Move = function () {
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
        };
        // Collision Detection 
        Player.prototype.CheckBound = function () {
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map