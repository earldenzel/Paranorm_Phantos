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
    var Undertaker = /** @class */ (function (_super) {
        __extends(Undertaker, _super);
        // constructors
        function Undertaker(moveSpeed) {
            var _this = _super.call(this, managers.Game.bosses_TextureAtlas, "Boss1_WalkFront") || this;
            //super(managers.Game.bat_TextureAtlas, "bat");
            //this.scaleX = 2;
            //this.scaleY = 2;
            _this.Start();
            //
            _this.hp = 40;
            _this.maxHp = _this.hp;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0;
            _this.eatTimer = 3000;
            _this.bounty = 100;
            _this.isFlying = false;
            _this.attackingMode = false;
            _this.walk = ["Boss1_WalkBack", "Boss1_WalkFront", "Boss1_WalkRight", "Boss1_WalkRight"];
            _this.attack = ["Boss1_AttackBack", "Boss1_AttackFront", "Boss1_AttackRight", "Boss1_AttackRight"];
            _this.direction = config.Direction.DOWN;
            _this.expGain = 20;
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.UNDERTAKER, _this.GetPosition(), 2);
            _this.explosions = [
                new objects.Explosion(objects.ExplodeTypes.UNDERTAKER, _this.GetPosition(), 3),
                new objects.Explosion(objects.ExplodeTypes.UNDERTAKER, _this.GetPosition(), 3),
                new objects.Explosion(objects.ExplodeTypes.UNDERTAKER, _this.GetPosition(), 3)
            ];
            return _this;
        }
        // methods
        Undertaker.prototype.Start = function () {
            // set the initial position
            this.y = 300;
            this.x = 350;
        };
        Undertaker.prototype.Update = function () {
            var ticker = createjs.Ticker.getTicks();
            if (this.isDead) {
                this.SwitchAnimation("Boss1_Explode");
            }
            else {
                if (this.isStunned) {
                    this.attackingMode = false;
                    if (this.currentAnimation != "Boss1_Stun") {
                        this.SwitchAnimation("Boss1_Destroy");
                        for (var i = 0; i < this.explosions.length; i++) {
                            var e = this.explosions[i];
                            switch (i) {
                                case 0:
                                    e.x = (this.x - this.halfW) + 250;
                                    e.y = (this.y - this.halfH);
                                    break;
                                case 1:
                                    e.x = (this.x - this.halfW) + 100;
                                    e.y = (this.y - this.halfH);
                                    break;
                                case 2:
                                    e.x = (this.x - this.halfW) + 150;
                                    e.y = (this.y - this.halfH) + 250;
                                    break;
                            }
                        }
                        managers.Game.stage.addChild(this.explosions[0]);
                        if (ticker % 30 == 0) {
                            managers.Game.stage.addChild(this.explosions[1]);
                        }
                        if (ticker % 60 == 0) {
                            managers.Game.stage.addChild(this.explosions[2]);
                        }
                    }
                    if (this.currentAnimation == "Boss1_Destroy" && this.currentAnimationFrame > 10) {
                        this.SwitchAnimation("Boss1_Stun");
                    }
                }
                else {
                    if (this.attackingMode) {
                        if (this.hp > (this.maxHp / 2)) {
                            this.SwitchAnimation(this.attack[this.direction]);
                        }
                        else {
                            var ticker_1 = createjs.Ticker.getTicks();
                            if (this.currentAnimation == "Boss1_Idle") {
                                switch (ticker_1 % 3) {
                                    case 0:
                                        this.SwitchAnimation("Boss1_ShovelAttack");
                                        break;
                                    case 1:
                                        this.SwitchAnimation("Boss1_CrossAttack");
                                        break;
                                    default:
                                        this.SwitchAnimation("Boss1_BothAttack");
                                        break;
                                }
                                this.height = 384;
                            }
                        }
                    }
                    else {
                        if (this.hp > (this.maxHp / 2)) {
                            this.SwitchAnimation(this.walk[this.direction]);
                        }
                        else {
                            if ((this.currentAnimation == "Boss1_BothAttack" || this.currentAnimation == "Boss1_ShovelAttack" || this.currentAnimation == "Boss1_CrossAttack")
                                && this.currentAnimationFrame > 2.8) {
                                this.SwitchAnimation("Boss1_Idle");
                                this.height = 280;
                            }
                            if (this.currentAnimation == "Boss1_Explode" && this.currentAnimationFrame > 2.8) {
                                this.SwitchAnimation("Boss1_Idle");
                                this.width = 326;
                                this.height = 280;
                                this.attackPower = 1;
                                this.scaleX = 1;
                            }
                            if (this.currentAnimation == this.attack[this.direction] || this.currentAnimation == this.walk[this.direction]) {
                                this.SwitchAnimation("Boss1_Explode");
                                this.attackPower = 0;
                            }
                        }
                    }
                }
            }
            if (this.currentAnimation == "Boss1_Explode" && this.currentAnimationFrame > 3) {
                managers.Game.stage.removeChild(this);
                this.visible = false;
            }
            _super.prototype.Update.call(this);
        };
        Undertaker.prototype.Reset = function () { };
        Undertaker.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (this.hp > (this.maxHp / 2)) {
                if (distanceToPlayer < 120) {
                    this.attackingMode = true;
                    this.attackPower = 2;
                }
                else {
                    this.attackingMode = false;
                    this.attackPower = 1;
                }
                this.currentSpeed = this.moveSpeed;
            }
            else {
                if (distanceToPlayer < 140) {
                    this.attackingMode = true;
                    this.attackPower = 3;
                }
                else {
                    this.attackingMode = false;
                    this.attackPower = 2;
                }
                this.currentSpeed = this.moveSpeed / 2;
                this.isFlying = true;
            }
            var newPos = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.currentSpeed));
            if (!this.attackingMode) {
                if (newPos.x < this.x) {
                    if (this.hp > (this.maxHp / 2)) {
                        this.scaleX = -1;
                    }
                    this.direction = config.Direction.LEFT;
                }
                if (newPos.x > this.x) {
                    if (this.hp > (this.maxHp / 2)) {
                        this.scaleX = 1;
                    }
                    this.direction = config.Direction.RIGHT;
                }
                if (newPos.y > this.y) {
                    this.direction = config.Direction.DOWN;
                }
                if (newPos.y < this.y) {
                    this.direction = config.Direction.UP;
                }
                if (this.currentAnimation != "Boss1_Explode") {
                    this.x = newPos.x;
                    this.y = newPos.y;
                }
            }
        };
        Undertaker.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        Undertaker.prototype.GetObjectSpeed = function () {
            return this.currentSpeed;
        };
        Undertaker.prototype.DevourEffect = function () {
            managers.Game.player.GainAttack(5);
        };
        return Undertaker;
    }(objects.Enemy));
    objects.Undertaker = Undertaker;
})(objects || (objects = {}));
//# sourceMappingURL=undertaker.js.map