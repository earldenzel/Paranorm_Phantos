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
    var GhostWoman = /** @class */ (function (_super) {
        __extends(GhostWoman, _super);
        // Constructor
        function GhostWoman(moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostWoman_IdleFront") || this;
            _this.Start();
            _this.hp = 5;
            _this.attackPower = 1;
            _this.rateOfFire = 200;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 0.75;
            _this.eatTimer = 400;
            _this.isFlying = true;
            _this.canBeEaten = true;
            _this.bounty = 60;
            _this.defenseMode = false;
            _this.powerUp = config.PowerUp.ICE;
            _this.walk = ["GhostWoman_IdleBack", "GhostWoman_IdleFront", "GhostWoman_IdleLeft", "GhostWoman_IdleLeft"];
            _this.direction = config.Direction.DOWN;
            return _this;
        }
        // Methods
        GhostWoman.prototype.Start = function () {
            this.y = 400;
            this.x = 320;
        };
        GhostWoman.prototype.Update = function () {
            if (this.iceShield == null) {
                this.IceShieldCreation();
            }
            this.iceShield.Update();
            if (!this.isStunned && !this.isDead) {
                if (this.defenseMode) {
                    this.SwitchAnimation("GhostWoman_Attack");
                    managers.Game.SFX = createjs.Sound.play("iceShield");
                    managers.Game.SFX.volume = 0.1;
                }
                else {
                    this.SwitchAnimation(this.walk[this.direction]);
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostWoman_Stun");
                if (managers.Game.player.biteSequence == 0) {
                    this.isDead = true;
                }
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "GhostWoman_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("GhostWoman_Explode");
                }
            }
            _super.prototype.Update.call(this);
            this.iceShield.isActivated = this.defenseMode;
        };
        GhostWoman.prototype.Reset = function () { };
        GhostWoman.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 115) {
                this.canBeAttacked = false;
                this.defenseMode = true;
            }
            else {
                this.canBeAttacked = true;
                this.defenseMode = false;
            }
            if (!this.defenseMode) {
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;
                if (this.x > managers.Game.gameWidth && this.rightDirection) {
                    this.scaleX = 1;
                    this.rightDirection = false;
                }
                else if (this.x < 0 && !this.rightDirection) {
                    this.scaleX = -1;
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
        GhostWoman.prototype.IceShieldCreation = function () {
            this.iceShield = new objects.IceShield(this);
            managers.Game.currentStage.AddIceShieldToScene(this.iceShield);
        };
        GhostWoman.prototype.DevourEffect = function () {
            managers.Game.player.powerUp = this.powerUp;
            managers.Game.SFX = createjs.Sound.play("phoebeTransform");
            managers.Game.SFX.volume = 0.6;
            _super.prototype.DevourEffect.call(this);
        };
        GhostWoman.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        };
        return GhostWoman;
    }(objects.Enemy));
    objects.GhostWoman = GhostWoman;
})(objects || (objects = {}));
//# sourceMappingURL=ghostwoman.js.map