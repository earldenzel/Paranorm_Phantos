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
    var GhostThin = /** @class */ (function (_super) {
        __extends(GhostThin, _super);
        // Constructor
        function GhostThin(moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostThin_Idle") || this;
            _this.Start();
            _this.hp = 2;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 0.75;
            _this.eatTimer = 300;
            _this.bounty = 5;
            _this.isFlying = true;
            return _this;
        }
        // Methods
        GhostThin.prototype.Start = function () {
            this.y = 400;
            this.x = 320;
        };
        GhostThin.prototype.Update = function () {
            if (!this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostThin_Idle");
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostThin_Stun");
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
        GhostThin.prototype.Reset = function () { };
        GhostThin.prototype.Move = function () {
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
        GhostThin.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        };
        return GhostThin;
    }(objects.Enemy));
    objects.GhostThin = GhostThin;
})(objects || (objects = {}));
//# sourceMappingURL=ghostthin.js.map