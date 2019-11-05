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
    var Barriers = /** @class */ (function (_super) {
        __extends(Barriers, _super);
        // Variables
        // Constructor
        function Barriers(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Barriers.prototype.Start = function () {
            this.x = 200;
            this.y = 200;
            this.regX = managers.Game.player.halfW;
            this.regY = managers.Game.player.halfH;
        };
        Barriers.prototype.Update = function () { };
        Barriers.prototype.Reset = function () { };
        Barriers.prototype.Move = function () { };
        Barriers.prototype.CheckBound = function () {
            //Yizhi's movement cancellation function upon barrier contact          
            if (managers.Collision.Check(this, managers.Game.player)) {
                if (managers.Game.keyboardManager.moveLeft) {
                    managers.Game.player.x += managers.Game.player.playerMoveSpeed;
                }
                if (managers.Game.keyboardManager.moveRight) {
                    managers.Game.player.x -= managers.Game.player.playerMoveSpeed;
                }
                if (managers.Game.keyboardManager.moveUp) {
                    managers.Game.player.y += managers.Game.player.playerMoveSpeed;
                }
                if (managers.Game.keyboardManager.moveDown) {
                    managers.Game.player.y -= managers.Game.player.playerMoveSpeed;
                }
            }
        };
        Barriers.prototype.TestZombieCheckBarrierCollision = function (zombie) {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(zombie.x, zombie.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (managers.Collision.Check(this, zombie)) {
                zombie.x -= math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, zombie.GetObjectSpeed()).x;
                zombie.y -= math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, zombie.GetObjectSpeed()).y;
            }
        };
        return Barriers;
    }(objects.GameObject));
    objects.Barriers = Barriers;
})(objects || (objects = {}));
//# sourceMappingURL=barriers.js.map