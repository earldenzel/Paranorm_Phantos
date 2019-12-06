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
    var LittleGirl = /** @class */ (function (_super) {
        __extends(LittleGirl, _super);
        // Constructor
        function LittleGirl(moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.bosses_TextureAtlas, "Boss3_Idle") || this;
            _this.Start();
            _this.hp = 30;
            _this.maxHp = _this.hp;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.currentSpeed = _this.moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 0.75;
            _this.eatTimer = 5000;
            _this.isFlying = true;
            _this.isTeleporting = false;
            _this.teleportLimit = 0;
            _this.spawnCount = 0;
            _this.spawnLimit = 1;
            return _this;
        }
        // Methods
        LittleGirl.prototype.Start = function () {
            // Set the initial position
            this.y = 400;
            this.x = 320;
        };
        LittleGirl.prototype.Update = function () {
            if (this.isStunned) {
                this.visible = true;
                this.SwitchAnimation("Boss3_Stun");
            }
            else if (this.isTeleporting) {
                this.SwitchAnimation("Boss3_Disappear");
                this.visible = false;
                var ticker = createjs.Ticker.getTicks();
                if (ticker % 90 == 0) {
                    this.isTeleporting = false;
                    this.teleportLimit = 60;
                }
            }
            else {
                this.visible = true;
                this.SwitchAnimation("Boss3_Idle");
                if (managers.Game.currentStage.getChildIndex(this.spawn) == null) {
                    this.spawnCount = 0;
                }
                // If 2/3rds of its life is gone
                if (this.hp < this.maxHp &&
                    this.hp >= (this.maxHp * (2 / 3))) {
                    if (this.spawnCount != this.spawnLimit) {
                        this.ConjureHandAndActivate(true, new math.Vec2(this.x + 10, this.y));
                    }
                }
                // If 1/3rds of its life is gone
                else if (this.hp < (this.maxHp * (2 / 3)) &&
                    this.hp >= (this.maxHp * (1 / 3))) {
                    this.spawnLimit = 2;
                    if (this.spawnCount != this.spawnLimit) {
                        switch (this.spawnCount) {
                            case 0:
                                this.ConjureHandAndActivate(true, new math.Vec2(this.x + 10, this.y));
                                break;
                            case 1:
                                this.ConjureHandAndActivate(false, new math.Vec2(this.x - 10, this.y));
                                break;
                        }
                    }
                }
            }
            if (this.teleportLimit > 0) {
                this.teleportLimit--;
            }
            else {
                this.teleportLimit = 0;
            }
            _super.prototype.Update.call(this);
        };
        LittleGirl.prototype.Reset = function () { };
        LittleGirl.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 130 && !this.isTeleporting && this.teleportLimit == 0) {
                this.isTeleporting = true;
                this.currentSpeed = this.moveSpeed * 4;
            }
            else {
                this.isTeleporting = false;
                this.currentSpeed = this.moveSpeed;
            }
            this.x += this.rightDirection ? this.currentSpeed : -this.currentSpeed;
            this.y += this.downDirection ? this.currentSpeed : -this.currentSpeed;
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
        LittleGirl.prototype.ConjureHandAndActivate = function (leftNotRight, position) {
            this.spawn = new objects.ConjuringHand(leftNotRight, position);
            managers.Game.currentStage.AddEnemyToScene(this.spawn);
            this.spawnCount += 1;
        };
        return LittleGirl;
    }(objects.Enemy));
    objects.LittleGirl = LittleGirl;
})(objects || (objects = {}));
//# sourceMappingURL=littlegirl.js.map