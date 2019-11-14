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
    var Undertaker = /** @class */ (function (_super) {
        __extends(Undertaker, _super);
        // constructors
        function Undertaker(moveSpeed) {
            var _this = _super.call(this, managers.Game.bat_TextureAtlas, "bat") || this;
            _this.scaleX = 2;
            _this.scaleY = 2;
            _this.Start();
            _this.hp = 20;
            _this.attackPower = 2;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            _this.eatTimer = 5000;
            _this.bounty = 100;
            _this.isFlying = false;
            return _this;
        }
        // methods
        Undertaker.prototype.Start = function () {
            // set the initial position
            this.y = 300;
            this.x = 350;
        };
        Undertaker.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Undertaker.prototype.Reset = function () { };
        Undertaker.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
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
        Undertaker.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        Undertaker.prototype.GetObjectSpeed = function () {
            return this.currentSpeed;
        };
        Undertaker.prototype.DevourEffect = function () {
            managers.Game.player.GainAttack(10);
        };
        return Undertaker;
    }(objects.Enemy));
    objects.Undertaker = Undertaker;
})(objects || (objects = {}));
//# sourceMappingURL=undertaker.js.map