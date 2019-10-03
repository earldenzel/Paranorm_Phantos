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
    var TestEnemy = /** @class */ (function (_super) {
        __extends(TestEnemy, _super);
        // constructors
        function TestEnemy(assetManager, moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, assetManager, "enemy_test") || this;
            _this.Start();
            _this.hp = 2;
            _this.attackPower = 2;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            return _this;
        }
        // methods
        TestEnemy.prototype.Start = function () {
            // set the initial position
            this.y = 400;
            this.x = 320;
        };
        TestEnemy.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        TestEnemy.prototype.Reset = function () { };
        TestEnemy.prototype.Move = function () {
            this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
            this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;
            if (this.x > objects.Game.gameWidth && this.rightDirection) {
                this.rightDirection = false;
            }
            else if (this.x < 0 && !this.rightDirection) {
                this.rightDirection = true;
            }
            if (this.y > objects.Game.gameHeight && this.downDirection) {
                this.downDirection = false;
            }
            else if (this.y < 0 && !this.downDirection) {
                this.downDirection = true;
            }
        };
        TestEnemy.prototype.CheckBound = function () { };
        return TestEnemy;
    }(objects.Enemy));
    objects.TestEnemy = TestEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=testenemy.js.map