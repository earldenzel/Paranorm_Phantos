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
    var Bat = /** @class */ (function (_super) {
        __extends(Bat, _super);
        // constructors
        function Bat(assetManager, moveSpeed) {
            var _this = _super.call(this, assetManager, "enemy_bat") || this;
            _this.Start();
            _this.hp = 3;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            return _this;
        }
        // methods
        Bat.prototype.Start = function () {
            // set the initial position
            this.y = 200;
            this.x = 320;
        };
        Bat.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Bat.prototype.Reset = function () { };
        Bat.prototype.Move = function () {
            var playerPosition = new math.Vec2(objects.Game.player.x, objects.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            var newPos = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));
            this.x = newPos.x;
            this.y = newPos.y;
        };
        Bat.prototype.CheckBound = function () { };
        return Bat;
    }(objects.Enemy));
    objects.Bat = Bat;
})(objects || (objects = {}));
//# sourceMappingURL=bat.js.map