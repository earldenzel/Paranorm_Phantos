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
    var GiantWorm = /** @class */ (function (_super) {
        __extends(GiantWorm, _super);
        // Constructor
        function GiantWorm() {
            var _this = _super.call(this, managers.Game.bosses_TextureAtlas, "Boss2_Worm_Alpha") || this;
            _this.Start();
            _this.hp = 100;
            _this.attackPower = 2;
            _this.moveSpeed = 0;
            _this.knockback = 0;
            _this.eatTimer = 0;
            _this.canBeEaten = false;
            _this.bounty = 200;
            _this.isFlying = false;
            _this.rateOfFire = 100;
            _this.explosion = new objects.Explosion(objects.ExplodeTypes.MAGGOT, _this.GetPosition(), 2);
            _this.explosions = [
                new objects.Explosion(objects.ExplodeTypes.MAGGOT, _this.GetPosition(), 3),
                new objects.Explosion(objects.ExplodeTypes.MAGGOT, _this.GetPosition(), 3),
                new objects.Explosion(objects.ExplodeTypes.MAGGOT, _this.GetPosition(), 3),
                new objects.Explosion(objects.ExplodeTypes.MAGGOT, _this.GetPosition(), 3)
            ];
            return _this;
        }
        // Methods
        GiantWorm.prototype.Start = function () {
            // Change the position.
            this.SetPosition(new math.Vec2(282, 662));
        };
        GiantWorm.prototype.Update = function () {
            var ticker = createjs.Ticker.getTicks();
            if (!this.isDead) {
                if (ticker % 90 == 0 && this.currentAnimation == "Boss2_Worm_Alpha") {
                    this.SwitchAnimation("Boss2_Worm");
                }
            }
            else {
                for (var i = 0; i < this.explosions.length; i++) {
                    var e = this.explosions[i];
                    switch (i) {
                        case 0:
                            e.x = (this.x - this.halfW) + 100;
                            e.y = (this.y - this.halfH);
                            break;
                        case 1:
                            e.x = (this.x - this.halfW) - 100;
                            e.y = (this.y - this.halfH);
                            break;
                        case 2:
                            e.x = (this.x - this.halfW) + 200;
                            e.y = (this.y - this.halfH) - 50;
                            break;
                        case 3:
                            e.x = (this.x - this.halfW) - 200;
                            e.y = (this.y - this.halfH) - 50;
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
                if (ticker % 90 == 0) {
                    managers.Game.stage.addChild(this.explosions[3]);
                }
                if (this.currentAnimation == "Boss2_Worm") {
                    this.SwitchAnimation("Boss2_Worm_Alpha");
                }
                if (ticker % 90 == 0 && this.currentAnimation == "Boss2_Worm_Alpha") {
                    managers.Game.stage.removeChild(this);
                    this.visible = false;
                }
            }
            console.log(this.hp);
            _super.prototype.Update.call(this);
        };
        GiantWorm.prototype.Reset = function () { };
        GiantWorm.prototype.Move = function () {
            // Not necessarily move but its method path.
            var ticker = createjs.Ticker.getTicks();
            if (ticker % 60 == 0) {
                if (this.currentAnimation == "Boss2_Worm") {
                    var command = Math.floor(Math.random() * Math.floor(4)); // Between 0 to 3
                    var pos = void 0;
                    pos = new math.Vec2(this.x + 18, this.y + 34);
                    this.BulletFire(pos);
                    switch (command) {
                        case 0:
                            pos = new math.Vec2(this.x - 106, this.y - 54);
                            this.SpawnCreateAndActivate(pos);
                            break;
                        case 1:
                            pos = new math.Vec2(this.x - 68, this.y + 26);
                            this.BulletFire(pos);
                            break;
                        case 2:
                            pos = new math.Vec2(this.x + 77, this.y - 17);
                            this.SpawnCreateAndActivate(pos);
                            break;
                        case 3:
                            pos = new math.Vec2(this.x + 109, this.y - 70);
                            this.BulletFire(pos);
                            break;
                    }
                }
            }
        };
        GiantWorm.prototype.CheckBound = function () {
            _super.prototype.CheckBound.call(this);
        };
        GiantWorm.prototype.SpawnCreateAndActivate = function (spawnHolePosition) {
            var spawnSpeed = Math.floor(Math.random() * Math.floor(3)) + 1; // Between 1 to 3
            var spawnDown = false;
            var spawnRight = (spawnHolePosition.x <= this.x + 115);
            // Create the spawn
            this.spawn = new objects.MaggotSmall(spawnSpeed, spawnRight, spawnDown);
            // Activate the spawn
            this.spawn.SetPosition(spawnHolePosition);
            managers.Game.currentStage.AddEnemyToScene(this.spawn);
        };
        GiantWorm.prototype.BulletFire = function (spawnHolePosition) {
            var ticker = createjs.Ticker.getTicks();
            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = spawnHolePosition;
                    var playerPosition = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
                    var currentBullet = managers.Game.bulletManager.CurrentBullet;
                    var bullet = managers.Game.bulletManager.giantWormBullets[currentBullet];
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
        return GiantWorm;
    }(objects.Enemy));
    objects.GiantWorm = GiantWorm;
})(objects || (objects = {}));
//# sourceMappingURL=giantworm.js.map