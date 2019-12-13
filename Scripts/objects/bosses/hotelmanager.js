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
    // To Be Tested
    var HotelManager = /** @class */ (function (_super) {
        __extends(HotelManager, _super);
        // Constructor
        function HotelManager(moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.bosses_TextureAtlas, "Boss2_Idle") || this;
            _this.Start();
            _this.hp = 40;
            _this.attackPower = 2;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 0.55;
            _this.eatTimer = 3000;
            _this.isFlying = true;
            _this.bounty = 1;
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.GHOSTSHADOW, _this.GetPosition(), 2);
            return _this;
        }
        // Methods
        HotelManager.prototype.Start = function () {
            // Set the initial position
            this.y = 400;
            this.x = 320;
        };
        HotelManager.prototype.Update = function () {
            if (!this.isStunned && !this.isDead) {
                if (this.hp > 20) {
                    this.currentSpeed = this.moveSpeed;
                    this.SwitchAnimation("Boss2_Idle");
                }
                else if (this.hp <= 20) {
                    this.currentSpeed = this.moveSpeed / 2;
                    this.SwitchAnimation("Boss2_IdleB");
                    if (this.spawn == null) {
                        this.SpawnCreateAndActivate();
                        this.canBeAttacked = false;
                    }
                    if (this.spawn.isDead) {
                        this.canBeAttacked = true;
                        this.hp = 0;
                    }
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("Boss2_Stun");
                if (managers.Game.player.biteSequence == 0 && this.currentAnimation == "Boss2_Stun") {
                    this.isDead = true;
                }
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "GhostShadow_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.spriteSheet = managers.Game.enemies_TextureAtlas;
                    this.SwitchAnimation("GhostShadow_Explode");
                }
            }
            _super.prototype.Update.call(this);
        };
        HotelManager.prototype.Reset = function () { };
        HotelManager.prototype.Move = function () {
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
        HotelManager.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        HotelManager.prototype.SpawnCreateAndActivate = function () {
            // Create the spawn
            this.spawn = new objects.GiantWorm();
            // Activate the spawn
            managers.Game.currentStage.AddEnemyToScene(this.spawn);
        };
        HotelManager.prototype.DevourEffect = function () {
            managers.Game.player.GainSwingSpeed(100);
        };
        return HotelManager;
    }(objects.Enemy));
    objects.HotelManager = HotelManager;
})(objects || (objects = {}));
//# sourceMappingURL=hotelmanager.js.map