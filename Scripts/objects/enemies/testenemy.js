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
        function TestEnemy(moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.bat_TextureAtlas, "bat") || this;
            _this.Start();
            _this.hp = 2;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 0.75;
            _this.eatTimer = 600;
            _this.bounty = 5;
            _this.isFlying = true;
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
            if (this.x > managers.Game.gameWidth && this.rightDirection) {
                this.rightDirection = false;
            }
            else if (this.x < 0 && !this.rightDirection) {
                this.rightDirection = true;
            }
            if (this.y > managers.Game.gameHeight && this.downDirection) {
                this.downDirection = false;
            }
            else if (this.y < 0 && !this.downDirection) {
                this.downDirection = true;
            }
        };
        TestEnemy.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        TestEnemy.prototype.DevourEffect = function () {
            var random = Math.random() * 100;
            if (random > 90) {
                managers.Game.player.GainAttack(1);
            }
            else {
                managers.Game.player.GainHealth(2);
            }
        };
        return TestEnemy;
    }(objects.Enemy));
    objects.TestEnemy = TestEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=testenemy.js.map