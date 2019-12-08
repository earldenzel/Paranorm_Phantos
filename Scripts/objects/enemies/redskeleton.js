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
    var RedSkeleton = /** @class */ (function (_super) {
        __extends(RedSkeleton, _super);
        // Constructor
        function RedSkeleton(position, moveSpeed, rightDirection, downDirection) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "RedSkeleton_WalkFront", position) || this;
            _this.Start();
            _this.hp = 3;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.knockback = 0.85;
            _this.eatTimer = 0;
            _this.canBeEaten = false;
            _this.bounty = 0;
            _this.isFlying = false;
            _this.halfSpeed = moveSpeed / 2;
            _this.rateOfFire = 50;
            _this.walk = ["RedSkeleton_WalkBack", "RedSkeleton_WalkFront", "RedSkeleton_WalkRight", "RedSkeleton_WalkRight"];
            _this.direction = config.Direction.DOWN;
            return _this;
        }
        // Methods
        RedSkeleton.prototype.Start = function () {
            this.SetPosition(this.startPosition);
        };
        RedSkeleton.prototype.Update = function () {
            if (!this.isStunned && !this.isDead) {
                this.SwitchAnimation(this.walk[this.direction]);
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("RedSkeleton_Stun");
            }
            else {
                this.SwitchAnimation("RedSkeleton_Dead");
                var ticker = createjs.Ticker.getTicks();
                if (ticker % 150 == 0) {
                    this.isDead = false;
                    this.isStunned = false;
                    this.hp = 3;
                    ticker = 1;
                }
            }
            _super.prototype.Update.call(this);
            this.BulletFire();
        };
        RedSkeleton.prototype.Reset = function () {
            _super.prototype.CheckBound.call(this);
        };
        RedSkeleton.prototype.Move = function () {
            var ticker = createjs.Ticker.getTicks();
            if (ticker % 300 > 150) {
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                if (this.rightDirection) {
                    this.scaleX = 1;
                    this.direction = config.Direction.RIGHT;
                }
                else {
                    this.scaleX = -1;
                    this.direction = config.Direction.LEFT;
                }
            }
            else {
                this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;
                if (this.downDirection) {
                    this.direction = config.Direction.DOWN;
                }
                else {
                    this.direction = config.Direction.UP;
                }
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
        };
        RedSkeleton.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        RedSkeleton.prototype.BulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            // If Shooting Flower alive, shoots the bullet
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x, this.y);
                    var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
                    var currentBullet = managers.Game.bulletManager.CurrentBullet;
                    var bullet = managers.Game.bulletManager.redBones[currentBullet];
                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    managers.Game.SFX = createjs.Sound.play("bullet");
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
        RedSkeleton.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
        };
        return RedSkeleton;
    }(objects.Enemy));
    objects.RedSkeleton = RedSkeleton;
})(objects || (objects = {}));
//# sourceMappingURL=redskeleton.js.map