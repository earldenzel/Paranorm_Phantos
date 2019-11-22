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
    var Zombie = /** @class */ (function (_super) {
        __extends(Zombie, _super);
        // Constructors
        function Zombie(moveSpeed) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Zombie_Walk_Back") || this;
            _this.Start();
            _this.hp = 3;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            _this.eatTimer = 10;
            _this.isFlying = false;
            _this.canBeEaten = false;
            _this.attackingMode = false;
            // Animations
            _this.walk = ["Zombie_Walk_Back", "Zombie_Walk_Front", "Zombie_Walk_Left", "Zombie_Walk_Left"];
            console.log(_this.walk);
            _this.attack = ["Zombie_Attack_Back", "Zombie_Attack_Front", "Zombie_Attack_Left", "Zombie_Walk_Left"];
            _this.direction = config.Direction.UP;
            console.log(_this.direction);
            return _this;
        }
        // Methods
        Zombie.prototype.Start = function () {
            // set the initial position
            this.y = 300;
            this.x = 350;
        };
        Zombie.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (this.isStunned) {
                this.SwitchAnimation("Zombie_Stun");
            }
            else if (this.isDead) {
                this.SwitchAnimation("Zombie_Explode");
            }
            else {
                if (this.attackingMode) {
                    this.SwitchAnimation(this.attack[this.direction]);
                }
                else {
                    this.SwitchAnimation(this.walk[this.direction]);
                }
            }
        };
        Zombie.prototype.Reset = function () { };
        Zombie.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 100) {
                this.attackingMode = true;
                this.currentSpeed = this.moveSpeed * 2;
            }
            else {
                this.attackingMode = false;
                this.currentSpeed = this.moveSpeed;
            }
            var newPos = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.currentSpeed));
            if (newPos.x < this.x) {
                this.direction = config.Direction.LEFT;
            }
            if (newPos.x > this.x) {
                // To be flipped, requires the change in sprite
                this.direction = config.Direction.RIGHT;
            }
            if (newPos.y > this.y) {
                this.direction = config.Direction.DOWN;
            }
            if (newPos.y < this.y) {
                this.direction = config.Direction.UP;
            }
            this.x = newPos.x;
            this.y = newPos.y;
        };
        Zombie.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        Zombie.prototype.GetObjectSpeed = function () {
            return this.currentSpeed;
        };
        Zombie.prototype.DevourEffect = function () {
            var random = Math.random() * 100;
            if (random > 98) {
                managers.Game.player.GainSpeed(1);
            }
            else {
                managers.Game.player.GainHealth(3);
            }
        };
        Zombie.prototype.SwitchAnimation = function (newAnimation) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        };
        return Zombie;
    }(objects.Enemy));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map