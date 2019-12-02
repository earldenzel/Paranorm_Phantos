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
    var GhostMan = /** @class */ (function (_super) {
        __extends(GhostMan, _super);
        // Constructor
        function GhostMan(moveSpeed) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostMan_IdleFront") || this;
            _this.Start();
            _this.hp = 5;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.knockback = 0.75;
            _this.eatTimer = 400;
            _this.rateOfFire = 45;
            _this.isFlying = true;
            _this.canBeEaten = true;
            _this.bounty = 60;
            _this.attackingMode = false;
            _this.powerUp = config.PowerUp.FIRE;
            _this.walk = ["GhostMan_IdleBack", "GhostMan_IdleFront", "GhostMan_IdleLeft", "GhostMan_IdleLeft"];
            _this.attack = ["GhostMan_AttackBack", "GhostMan_AttackFront", "GhostMan_AttackLeft", "GhostMan_AttackLeft"];
            _this.direction = config.Direction.DOWN;
            return _this;
        }
        // Methods
        GhostMan.prototype.Start = function () {
            // set the initial position
            this.y = 300;
            this.x = 350;
        };
        GhostMan.prototype.Update = function () {
            if (!this.isStunned && !this.isDead) {
                if (this.attackingMode) {
                    this.SwitchAnimation(this.attack[this.direction]);
                }
                else {
                    this.SwitchAnimation(this.walk[this.direction]);
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostMan_Stun");
                if (managers.Game.player.biteSequence == 0) {
                    this.isDead = true;
                }
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "GhostShadow_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("GhostShadow_Explode");
                }
            }
            _super.prototype.Update.call(this);
            if (this.attackingMode) {
                this.BulletFire();
            }
        };
        GhostMan.prototype.Reset = function () { };
        GhostMan.prototype.Move = function () {
            var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            var enemyPosition = new math.Vec2(this.x, this.y);
            var dirToPlayer = math.Vec2.Subtract(enemyPosition, playerPosition);
            var distanceToPlayer = math.Vec2.Distance(enemyPosition, playerPosition);
            if (distanceToPlayer < 200) {
                this.attackingMode = true;
            }
            else {
                this.attackingMode = false;
            }
            var newPos = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));
            if (newPos.x < this.x) {
                this.scaleX = 1;
                this.direction = config.Direction.LEFT;
            }
            if (newPos.x > this.x) {
                this.scaleX = -1;
                this.direction = config.Direction.RIGHT;
            }
            if (newPos.y > this.y) {
                this.direction = config.Direction.DOWN;
            }
            if (newPos.y < this.y) {
                this.direction = config.Direction.UP;
            }
            this.x = newPos.x;
            this.y = newPos.y;
        };
        GhostMan.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        GhostMan.prototype.BulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x, this.y);
                    var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
                    var currentBullet = managers.Game.bulletManager.CurrentBullet;
                    var bullet = managers.Game.bulletManager.fireBalls[currentBullet];
                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    // get the direction when the bullet shoots
                    var bulletPosition = new math.Vec2(bullet.x, bullet.y);
                    var dirToPlayer = math.Vec2.Subtract(bulletPosition, playerPosition);
                    var distanceToPlayer = math.Vec2.Distance(bulletPosition, playerPosition);
                    var farPointPosition = math.Vec2.Add(playerPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, 1000));
                    bullet.farPointPosition = farPointPosition;
                    managers.Game.bulletManager.CurrentBullet++;
                    if (managers.Game.bulletManager.CurrentBullet > 49) {
                        managers.Game.bulletManager.CurrentBullet = 0;
                    }
                }
            }
            else {
                this.bulletSpawn = new math.Vec2(-5000, -5000);
            }
        };
        GhostMan.prototype.DevourEffect = function () {
            managers.Game.player.powerUp = this.powerUp;
            _super.prototype.DevourEffect.call(this);
        };
        GhostMan.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        };
        return GhostMan;
    }(objects.Enemy));
    objects.GhostMan = GhostMan;
})(objects || (objects = {}));
//# sourceMappingURL=ghostman.js.map