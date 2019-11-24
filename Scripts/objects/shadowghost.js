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
    var ShadowGhost = /** @class */ (function (_super) {
        __extends(ShadowGhost, _super);
        // Constructors
        function ShadowGhost(moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostShadow_Transparent") || this;
            _this.Start();
            _this.hp = 3;
            _this.attackPower = 2;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 0.75;
            _this.eatTimer = 600;
            _this.bounty = 20;
            _this.isFlying = true;
            _this.isTransparent = true;
            _this.powerUp = config.PowerUp.SHADOW;
            return _this;
        }
        // Methods
        ShadowGhost.prototype.Start = function () {
            // set the initial position
            this.y = 400;
            this.x = 320;
        };
        ShadowGhost.prototype.Update = function () {
            if (!this.isStunned) {
                if (this.isTransparent) {
                    this.canBeAttacked = false;
                    this.SwitchAnimation("GhostShadow_Transparent");
                }
                else if (this.isAttacking) {
                    if (this.currentAnimation == "GhostShadow_Attack" && this.currentAnimationFrame > 2) {
                        this.currentAnimationFrame = 3;
                    }
                    this.SwitchAnimation("GhostShadow_Attack");
                }
                else {
                    this.canBeAttacked = true;
                    this.SwitchAnimation("GhostShadow_Opaque");
                }
            }
            else {
                this.SwitchAnimation("GhostShadow_Stun");
            }
            _super.prototype.Update.call(this);
        };
        ShadowGhost.prototype.Reset = function () { };
        ShadowGhost.prototype.Move = function () {
            var ticker = createjs.Ticker.getTicks();
            if (ticker % 90 == 1) {
                this.isTransparent = !this.isTransparent;
            }
            this.Attacking();
            if (!this.isAttacking) {
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
            }
        };
        ShadowGhost.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        // FIX THE ATTACKING
        ShadowGhost.prototype.Attacking = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 125) {
                this.isTransparent = false;
                this.isAttacking = true;
                this.canBeAttacked = false;
            }
            else {
                this.isAttacking = false;
            }
        };
        ShadowGhost.prototype.DevourEffect = function () {
            var random = Math.random() * 100;
            if (random > 90) {
                managers.Game.player.GainAttack(1);
            }
            else {
                managers.Game.player.GainHealth(2);
            }
            managers.Game.player.powerUp = config.PowerUp.SHADOW;
        };
        ShadowGhost.prototype.SwitchAnimation = function (newAnimation) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        };
        return ShadowGhost;
    }(objects.Enemy));
    objects.ShadowGhost = ShadowGhost;
})(objects || (objects = {}));
//# sourceMappingURL=shadowghost.js.map