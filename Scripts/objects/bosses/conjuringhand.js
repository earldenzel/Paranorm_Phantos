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
    var HandAttackMode;
    (function (HandAttackMode) {
        HandAttackMode[HandAttackMode["CHASE"] = 0] = "CHASE";
        HandAttackMode[HandAttackMode["QUAKE"] = 1] = "QUAKE";
        HandAttackMode[HandAttackMode["SLAP"] = 2] = "SLAP";
    })(HandAttackMode = objects.HandAttackMode || (objects.HandAttackMode = {}));
    var ConjuringHand = /** @class */ (function (_super) {
        __extends(ConjuringHand, _super);
        // Constructor
        function ConjuringHand(leftNotRight) {
            var _this = _super.call(this, managers.Game.bosses_TextureAtlas, "Boss3_OpenHand") || this;
            _this.leftNotRight = leftNotRight;
            _this.Start();
            _this.hp = 10;
            _this.attackPower = 2;
            _this.moveSpeed = 2;
            _this.knockback = 0.25;
            _this.eatTimer = 1000;
            _this.bounty = 50;
            _this.isFlying = true;
            _this.currentAttackPower = _this.attackPower;
            _this.rateOfFire = 5;
            _this.attackingMode = HandAttackMode.CHASE;
            _this.quakingCounter = 0;
            return _this;
        }
        // Methods
        ConjuringHand.prototype.Start = function () {
            this.y = 400;
            this.x = 320;
            if (!this.leftNotRight) {
                this.scaleX = -1;
            }
        };
        ConjuringHand.prototype.Update = function () {
            if (this.attackingMode != HandAttackMode.QUAKE) {
                if (this.leftNotRight) {
                    this.scaleX = 1;
                }
                else {
                    this.scaleX = -1;
                }
            }
            switch (this.attackingMode) {
                case HandAttackMode.CHASE:
                    this.SwitchAnimation("Boss3_OpenHand");
                    break;
                case HandAttackMode.SLAP:
                    if (this.currentAnimation == "Boss3_Slap" && this.currentAnimationFrame > 3) {
                        this.SwitchAnimation("Boss3_OpenHandSide");
                    }
                    this.SwitchAnimation("Boss3_Slap");
                    break;
                case HandAttackMode.QUAKE:
                    if (this.leftNotRight) {
                        this.scaleX = -1;
                    }
                    else {
                        this.scaleX = 1;
                    }
                    this.SwitchAnimation("Boss3_ClosedHand");
                    this.quakingCounter++;
                    if (this.quakingCounter > 30) {
                        this.BulletFire();
                    }
                    break;
            }
            _super.prototype.Update.call(this);
            console.log("Quake Counter: ", this.quakingCounter);
        };
        ConjuringHand.prototype.Reset = function () { };
        ConjuringHand.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 120) {
                this.attackingMode = HandAttackMode.SLAP;
                this.currentAttackPower = this.attackingMode + 1;
            }
            else if (distanceToPlayer > 200) {
                this.attackingMode = HandAttackMode.QUAKE;
                this.currentAttackPower = this.attackingMode + 1;
            }
            else {
                this.attackingMode = HandAttackMode.CHASE;
                this.currentAttackPower = this.attackingMode;
            }
            var newPos = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));
            if (this.attackingMode == HandAttackMode.CHASE) {
                this.x = newPos.x;
                this.y = newPos.y;
            }
        };
        ConjuringHand.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        ConjuringHand.prototype.BulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = this.GetPosition();
                    for (var i = 0; i < 8; i++) {
                        var currentBullet = managers.Game.bulletManager.CurrentBullet;
                        var bullet = managers.Game.bulletManager.quakeEffects[currentBullet];
                        bullet.SetupEffect(i);
                        bullet.x = this.bulletSpawn.x;
                        bullet.y = this.bulletSpawn.y;
                        bullet.activation = true;
                        managers.Game.bulletManager.CurrentBullet++;
                        if (managers.Game.bulletManager.CurrentBullet > 49) {
                            managers.Game.bulletManager.CurrentBullet = 0;
                        }
                    }
                }
                this.quakingCounter = 0;
            }
            else {
                this.bulletSpawn = new math.Vec2(-5000, -5000);
            }
        };
        return ConjuringHand;
    }(objects.Enemy));
    objects.ConjuringHand = ConjuringHand;
})(objects || (objects = {}));
//# sourceMappingURL=conjuringhand.js.map