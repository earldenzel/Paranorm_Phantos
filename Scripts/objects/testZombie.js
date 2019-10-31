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
    var TestZombie = /** @class */ (function (_super) {
        __extends(TestZombie, _super);
        // constructors
        function TestZombie(assetManager, moveSpeed) {
            var _this = _super.call(this, assetManager, "enemy_zombieTest") || this;
            _this.Start();
            _this.hp = 3;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            return _this;
        }
        // methods
        TestZombie.prototype.Start = function () {
            // set the initial position
            this.y = 300;
            this.x = 350;
        };
        TestZombie.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        TestZombie.prototype.Reset = function () { };
        TestZombie.prototype.Move = function () {
            var playerPosition = new math.Vec2(objects.Game.player.x, objects.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 200) {
                this.currentSpeed = this.moveSpeed * 2;
            }
            else {
                this.currentSpeed = this.moveSpeed;
            }
            var newPos = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.currentSpeed));
            this.x = newPos.x;
            this.y = newPos.y;
        };
        TestZombie.prototype.CheckBound = function () { };
        TestZombie.prototype.GetObjectSpeed = function () {
            return this.currentSpeed;
        };
        return TestZombie;
    }(objects.Enemy));
    objects.TestZombie = TestZombie;
})(objects || (objects = {}));
//# sourceMappingURL=testZombie.js.map