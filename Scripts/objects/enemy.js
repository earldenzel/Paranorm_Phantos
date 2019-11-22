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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        function Enemy(textureAtlas, enemyName, startPosition) {
            if (startPosition === void 0) { startPosition = null; }
            var _this = _super.call(this, textureAtlas, enemyName) || this;
            _this.startPosition = startPosition;
            // Some enemies can be eaten, some enemies cannot.
            // They will start off as able to be eaten.
            _this.canBeEaten = true;
            _this.Start();
            _this.stunIndicator = new objects.Indicator("stunIndicator");
            _this.Move();
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.isStunned = false;
        };
        Enemy.prototype.Update = function () {
            var _this = this;
            //if current hp  of enemy = 0, then it is stunned           
            if (this.hp <= 0) {
                this.isStunned = true;
                this.CheckBound();
            }
            //if it is stunned
            if (this.isStunned) {
                //determine whether a bit is currently happening 
                if (managers.Game.player.biteSequence == 0) {
                    //if it is currently in contact with player and whether the biting button is pressed, then disable movement
                    if (managers.Game.keyboardManager.biting && managers.Collision.Check(managers.Game.player, this) && this.canBeEaten) {
                        managers.Game.player.SetBitePositionDirection(this.GetPosition());
                        managers.Game.player.EatMessage();
                        this.scaleX = managers.Game.player.halfH / this.height;
                        this.scaleY = this.scaleX;
                        managers.Game.keyboardManager.moveLeft = false;
                        managers.Game.keyboardManager.moveRight = false;
                        managers.Game.keyboardManager.moveUp = false;
                        managers.Game.keyboardManager.moveDown = false;
                        managers.Game.keyboardManager.enabled = false;
                        managers.Game.keyboardManager.attacking = false;
                        managers.Game.keyboardManager.biting = false;
                        //after eat timer is done, enable keyboard and reset sequence
                        managers.Game.player.biteSequence = setTimeout(function () {
                            _this.DevourEffect();
                            _this.RemoveFromPlay(0);
                            managers.Game.player.biteSequence = 0;
                            managers.Game.keyboardManager.enabled = true;
                            // Sound Effect
                            managers.Game.SFX = createjs.Sound.play("phoebeEat");
                            managers.Game.SFX.volume = 0.2;
                        }, this.eatTimer);
                    }
                    //else, no contact and therefore, movement enabled
                    else {
                        managers.Game.keyboardManager.enabled = true;
                    }
                }
                //bite is currently happening, so keyboard is off
                else {
                    managers.Game.keyboardManager.enabled = false;
                }
            }
            //else, the player is not stunned and can move
            else {
                this.Move();
            }
            //if the player is not taking damage -- check player collision with this (as long as it is not stunned)
            if (!managers.Game.player.isTakingDamage) {
                if (managers.Collision.Check(managers.Game.player, this) && !this.isStunned) {
                    managers.Game.player.isTakingDamage = true;
                    managers.Game.SFX = createjs.Sound.play("phoebeHit");
                    managers.Game.SFX.volume = 0.5;
                    managers.Game.player.GetDamage(this);
                }
            }
            //the else for this condition is under play.ts - this is because the player might have other collisions with other enemies
            //if enemy is not taking damage -- check collision with weapon
            if (!this.isTakingDamage) {
                if (managers.Collision.Check(managers.Game.player.weapon, this)) {
                    this.isTakingDamage = true;
                    this.GetDamage(managers.Game.player);
                }
            }
            //else, only remove the flag for taking damage when collision with weapon has ended
            else {
                if (!managers.Collision.Check(managers.Game.player.weapon, this)) {
                    this.isTakingDamage = false;
                }
            }
            if (this.isStunned && !this.isDead && managers.Game.player.biteSequence == 0) {
                this.stunIndicator.SetPosition(math.Vec2.Add(this.GetPosition(), new math.Vec2(0, -this.height)));
                this.stunIndicator.visible = true;
            }
            else {
                this.stunIndicator.visible = false;
            }
        };
        Enemy.prototype.Reset = function () {
        };
        Enemy.prototype.Move = function () {
        };
        Enemy.prototype.CheckBound = function () {
            // right bound
            if (this.x >= config.Bounds.RIGHT_BOUND - this.halfW) {
                this.x = config.Bounds.RIGHT_BOUND - this.halfW;
            }
            // left bound
            if (this.x <= this.halfW + config.Bounds.LEFT_BOUND) {
                this.x = this.halfW + config.Bounds.LEFT_BOUND;
            }
            // bottom bound
            if (this.y >= config.Bounds.BOTTOM_BOUND - this.halfH) {
                this.y = config.Bounds.BOTTOM_BOUND - this.halfH;
            }
            // top bound
            if (this.y <= this.halfH + config.Bounds.TOP_BOUND) {
                this.y = this.halfH + config.Bounds.TOP_BOUND;
            }
        };
        Enemy.prototype.GetDamage = function (attacker) {
            //enemy state = stunned
            if (this.isStunned) {
                //managers.Game.messageStatus.text = attacker.name + " ended " + this.name + "'s life.";
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                this.RemoveFromPlay(this.bounty);
            }
            else {
                //introduce a knockback
                managers.Game.SFX = createjs.Sound.play("enemiesHit");
                managers.Game.SFX.volume = 0.2;
                var awayVector = this.GetPosition().AwayFrom(managers.Game.player.GetPosition()).Multiply(this.knockback);
                var newPosition = math.Vec2.Add(this.GetPosition(), awayVector);
                this.SetPosition(newPosition);
                _super.prototype.GetDamage.call(this, attacker);
            }
        };
        Enemy.prototype.GetObjectSpeed = function () {
            return 0;
        };
        Enemy.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
            managers.Game.stage.removeChild(this);
            this.visible = false;
        };
        //this function governs what happens when Phoebe eats enemy
        Enemy.prototype.DevourEffect = function () {
        };
        //function governs how much Phoebe earns
        Enemy.prototype.CalculateBounty = function () {
            return this.bounty;
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map