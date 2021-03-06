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
    var MaggotSmall = /** @class */ (function (_super) {
        __extends(MaggotSmall, _super);
        // Constructor
        function MaggotSmall(moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Maggot_SmallWalkForward") || this;
            console.log("Created");
            _this.Start();
            _this.hp = 2;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 1;
            _this.eatTimer = 100;
            _this.bounty = 5;
            _this.isFlying = false;
            _this.expGain = 1;
            _this.halfSpeed = moveSpeed / 2;
            _this.walk = ["Maggot_SmallWalkForward", "Maggot_SmallWalkForward", "Maggot_SmallWalkSide", "Maggot_SmallWalkSide"];
            _this.direction = config.Direction.DOWN;
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.MAGGOT, _this.GetPosition(), 0, false);
            return _this;
        }
        // Methods
        MaggotSmall.prototype.Start = function () {
            this.y = 400;
            this.x = 320;
        };
        MaggotSmall.prototype.Update = function () {
            if (!this.isDead) {
                this.SwitchAnimation(this.walk[this.direction]);
            }
            else {
                this.SwitchAnimation("Maggot_Explode");
            }
            if (this.currentAnimation == "Maggot_Explode" && this.currentAnimationFrame > 3) {
                managers.Game.stage.removeChild(this);
                this.visible = false;
            }
            _super.prototype.Update.call(this);
        };
        MaggotSmall.prototype.Reset = function () { };
        MaggotSmall.prototype.Move = function () {
            var ticker = createjs.Ticker.getTicks();
            if (ticker % 150 > 75) {
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                this.direction = config.Direction.LEFT;
            }
            else {
                this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;
                this.direction = config.Direction.DOWN;
            }
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
            this.CheckBound();
        };
        MaggotSmall.prototype.DevourEffect = function () {
            managers.Game.player.GainHealth(1);
        };
        return MaggotSmall;
    }(objects.Enemy));
    objects.MaggotSmall = MaggotSmall;
})(objects || (objects = {}));
//# sourceMappingURL=maggotsmall.js.map