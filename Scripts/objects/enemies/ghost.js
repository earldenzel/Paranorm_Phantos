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
    var Ghost = /** @class */ (function (_super) {
        __extends(Ghost, _super);
        // Variable
        // Constructors
        function Ghost(moveSpeed) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Ghost_Idle") || this;
            _this.Start();
            _this.hp = 3;
            _this.attackPower = 2;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            _this.eatTimer = 300;
            _this.bounty = 5;
            _this.isFlying = true;
            _this.expGain = 3;
            return _this;
        }
        // Methods
        Ghost.prototype.Start = function () {
            this.y = 400;
            this.x = 320;
        };
        Ghost.prototype.Update = function () {
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
        Ghost.prototype.Reset = function () { };
        Ghost.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            var newPos = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));
            this.x = newPos.x;
            this.y = newPos.y;
        };
        Ghost.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        };
        return Ghost;
    }(objects.Enemy));
    objects.Ghost = Ghost;
})(objects || (objects = {}));
//# sourceMappingURL=ghost.js.map