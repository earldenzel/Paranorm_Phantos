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
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Zombie_WalkBack") || this;
            _this.Start();
            _this.hp = 3;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            _this.eatTimer = 300;
            _this.isFlying = false;
            _this.halfSpeed = moveSpeed / 2;
            _this.canBeEaten = true;
            _this.attackingMode = false;
            // Animations
            _this.walk = ["Zombie_WalkBack", "Zombie_WalkFront", "Zombie_WalkLeft", "Zombie_WalkLeft"];
            _this.attack = ["Zombie_AttackBack", "Zombie_AttackFront", "Zombie_AttackLeft", "Zombie_AttackLeft"];
            _this.direction = config.Direction.UP;
            return _this;
        }
        // Methods
        Zombie.prototype.Start = function () {
            // set the initial position
            this.y = 300;
            this.x = 350;
        };
        Zombie.prototype.Update = function () {
            if (!this.isStunned && !this.isDead) {
                if (this.attackingMode) {
                    this.SwitchAnimation(this.attack[this.direction]);
                }
                else {
                    this.SwitchAnimation(this.walk[this.direction]);
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("Zombie_Stun");
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "Zombie_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("Zombie_Explode");
                }
            }
            _super.prototype.Update.call(this);
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
                this.scaleX = 1;
                this.direction = config.Direction.LEFT;
            }
            if (newPos.x > this.x) {
                this.scaleX = -1;
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
        Zombie.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        };
        return Zombie;
    }(objects.Enemy));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map