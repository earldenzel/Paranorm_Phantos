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
    var GhostSlimeState;
    (function (GhostSlimeState) {
        GhostSlimeState[GhostSlimeState["IDLE"] = 0] = "IDLE";
        GhostSlimeState[GhostSlimeState["TELEPORT"] = 1] = "TELEPORT";
    })(GhostSlimeState = objects.GhostSlimeState || (objects.GhostSlimeState = {}));
    var GhostSlime = /** @class */ (function (_super) {
        __extends(GhostSlime, _super);
        // Constructor
        function GhostSlime() {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostSlime_Travel") || this;
            _this.Start();
            _this.hp = 40;
            _this.attackPower = 1;
            _this.knockback = 0;
            _this.eatTimer = 700;
            _this.bounty = 20;
            _this.isFlying = true;
            _this.state = GhostSlimeState.IDLE;
            _this.rateOfFire = 35;
            _this.puddleCount = managers.Game.slimePuddles.length;
            _this.powerUp = config.PowerUp.SLIME;
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.GHOSTSLIME, _this.GetPosition(), 2);
            return _this;
        }
        // Methods
        GhostSlime.prototype.Start = function () {
            var slimeX = managers.Game.slimePuddles[0].position.x;
            var slimeY = managers.Game.slimePuddles[0].position.y;
            this.SetPosition(new math.Vec2(slimeX, slimeY));
        };
        GhostSlime.prototype.Update = function () {
            if (!this.isStunned && !this.isDead) {
                var ticker = createjs.Ticker.getTicks();
                if (this.currentAnimation == "GhostSlime_Hide" && this.currentAnimationFrame > 3) {
                    this.visible = false;
                    this.canBeAttacked = false;
                    this.SlimeTeleportation();
                }
                if (this.currentAnimation == "GhostSlime_Emerge" && this.currentAnimationFrame > 2) {
                    this.canBeAttacked = true;
                    this.state = GhostSlimeState.IDLE;
                }
                if (ticker % 90 == 1 && this.canBeAttacked) {
                    this.state = this.ChangeState();
                    switch (this.state) {
                        case GhostSlimeState.IDLE:
                            this.SwitchAnimation("GhostSlime_Idle");
                            break;
                        case GhostSlimeState.TELEPORT:
                            this.SwitchAnimation("GhostSlime_Hide");
                            break;
                        default:
                            break;
                    }
                    console.log(this.state);
                }
                else if (ticker % 60 == 1 && !this.canBeAttacked) {
                    this.visible = true;
                    this.SwitchAnimation("GhostSlime_Emerge");
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostSlime_Stun");
                if (managers.Game.player.biteSequence == 0) {
                    this.isDead = true;
                }
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "GhostSlime_Explosion") {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("GhostSlime_Explosion");
                }
            }
            _super.prototype.Update.call(this);
            if (this.state != GhostSlimeState.TELEPORT) {
                this.BulletFire();
            }
        };
        GhostSlime.prototype.Reset = function () {
            _super.prototype.CheckBound.call(this);
        };
        GhostSlime.prototype.Move = function () { };
        GhostSlime.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        GhostSlime.prototype.ChangeState = function () {
            var stateRand = Math.floor(Math.random() * Math.floor(3));
            if (stateRand == GhostSlimeState.IDLE && this.state == GhostSlimeState.IDLE) {
                stateRand = (Math.floor(Math.random() * Math.floor(2))) + 1;
            }
            return stateRand;
        };
        GhostSlime.prototype.SlimeTeleportation = function () {
            var teleportRand = Math.floor(Math.random() * Math.floor(this.puddleCount));
            var slimeX = managers.Game.slimePuddles[teleportRand].position.x;
            var slimeY = managers.Game.slimePuddles[teleportRand].position.y;
            this.SetPosition(new math.Vec2(slimeX, slimeY));
        };
        GhostSlime.prototype.BulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x, this.y);
                    var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
                    var currentBullet = managers.Game.bulletManager.CurrentBullet;
                    var bullet = managers.Game.bulletManager.slimeBalls[currentBullet];
                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    managers.Game.SFX = createjs.Sound.play("slimeball");
                    managers.Game.SFX.volume = 0.4;
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
        GhostSlime.prototype.DevourEffect = function () {
            if (managers.Game.player.powerUp == this.powerUp) {
                managers.Game.player.GainHealth(3);
            }
            else {
                managers.Game.player.powerUp = this.powerUp;
                managers.Game.SFX = createjs.Sound.play("phoebeTransform");
                managers.Game.SFX.volume = 0.6;
            }
        };
        return GhostSlime;
    }(objects.Enemy));
    objects.GhostSlime = GhostSlime;
})(objects || (objects = {}));
//# sourceMappingURL=ghostslime.js.map