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
    var DetachedGhost = /** @class */ (function (_super) {
        __extends(DetachedGhost, _super);
        // constructors
        function DetachedGhost(moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Ghost_Idle") || this;
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
            _this.expGain = 2;
            return _this;
        }
        // methods
        DetachedGhost.prototype.Start = function () {
            // set the initial position
            this.y = 400;
            this.x = 320;
        };
        DetachedGhost.prototype.Update = function () {
            if (!this.isStunned && !this.isDead) {
                this.SwitchAnimation("Ghost_Idle");
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("Ghost_Stun");
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
        DetachedGhost.prototype.Reset = function () { };
        DetachedGhost.prototype.Move = function () {
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
        DetachedGhost.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        DetachedGhost.prototype.DevourEffect = function () {
            var random = Math.random() * 100;
            if (random > 90) {
                managers.Game.player.GainAttack(1);
            }
            else {
                managers.Game.player.GainHealth(2);
            }
        };
        return DetachedGhost;
    }(objects.Enemy));
    objects.DetachedGhost = DetachedGhost;
})(objects || (objects = {}));
//# sourceMappingURL=detachedghost.js.map