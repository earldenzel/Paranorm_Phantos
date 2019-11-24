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
    var GhostTeeth = /** @class */ (function (_super) {
        __extends(GhostTeeth, _super);
        // Constructor
        function GhostTeeth(moveSpeed) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostTeeth_Idle") || this;
            _this.Start();
            _this.hp = 3;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            _this.eatTimer = 600;
            _this.bounty = 30;
            _this.isFlying = true;
            _this.powerUp = config.PowerUp.BITE;
            _this.attack = ["GhostTeeth_AttackBack", "GhostTeeth_AttackFront", "GhostTeeth_AttackRight", "GhostTeeth_AttackRight"];
            _this.direction = config.Direction.UP;
            return _this;
        }
        // Methods
        GhostTeeth.prototype.Start = function () {
            this.y = 400;
            this.x = 320;
        };
        GhostTeeth.prototype.Update = function () {
            if (!this.isStunned && !this.isDead) {
                if (this.isAttacking) {
                    this.SwitchAnimation(this.attack[this.direction]);
                }
                else {
                    this.SwitchAnimation("GhostTeeth_Idle");
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostTeeth_Stun");
            }
            else {
                if (this.currentAnimation == "Ghost_Explode" && this.currentAnimationFrame > 3) {
                    managers.Game.stage.removeChild(this);
                    this.visible = false;
                }
                this.SwitchAnimation("Ghost_Explode");
            }
            _super.prototype.Update.call(this);
        };
        GhostTeeth.prototype.Reset = function () { };
        GhostTeeth.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 150) {
                this.currentSpeed = this.moveSpeed * 3;
                this.isAttacking = true;
            }
            else {
                this.currentSpeed = this.moveSpeed;
                this.isAttacking = false;
            }
            var newPos = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.currentSpeed));
            if (!this.isAttacking) {
                this.x = newPos.x;
                this.y = newPos.y;
            }
            else {
            }
        };
        GhostTeeth.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        };
        return GhostTeeth;
    }(objects.Enemy));
    objects.GhostTeeth = GhostTeeth;
})(objects || (objects = {}));
//# sourceMappingURL=ghostteeth.js.map