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
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 0.75;
            _this.eatTimer = 300;
            _this.isFlying = true;
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.GHOST, _this.GetPosition(), 0, false);
            _this.Start();
            return _this;
        }
        // Methods
        GhostThin.prototype.Start = function () {
            this.y = 400;
            this.x = 320;
            var stageOfSpawn = managers.Game.currentStage.design;
            switch (stageOfSpawn) {
                case config.Design.GRAVEYARD:
                    this.hp = 2;
                    this.attackPower = 1;
                    this.bounty = 5;
                    this.expGain = 2;
                    break;
                case config.Design.HOTEL:
                    this.hp = 8;
                    this.attackPower = 1;
                    this.bounty = 9;
                    this.expGain = 5;
                    break;
                case config.Design.MANSION:
                    this.hp = 25;
                    this.attackPower = 2;
                    this.bounty = 15;
                    this.expGain = 7;
                    break;
            }
        };
        GhostThin.prototype.Update = function () {
            if (this.isDead) {
                this.SwitchAnimation("Ghost_Explode");
            }
            else {
                if (this.isStunned) {
                    this.SwitchAnimation("GhostThin_Stun");
                }
                else {
                    this.SwitchAnimation("GhostThin_Idle");
                }
            }
            if (this.currentAnimation == "Ghost_Explode" && this.currentAnimationFrame > 3) {
                managers.Game.stage.removeChild(this);
                this.visible = false;
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
        GhostThin.prototype.DevourEffect = function () {
            managers.Game.player.GainHealth(2);
        };
        return GhostThin;
    }(objects.Enemy));
    objects.GhostThin = GhostThin;
})(objects || (objects = {}));
//# sourceMappingURL=ghostthin.js.map