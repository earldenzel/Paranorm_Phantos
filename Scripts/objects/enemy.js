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
        function Enemy(assetManager, enemyName) {
            var _this = _super.call(this, assetManager, enemyName) || this;
            _this.Start();
            _this.Move();
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.isStunned = false;
        };
        Enemy.prototype.Update = function () {
            //if current hp  of enemy = 0, then it is stunned           
            if (this.hp <= 0) {
                this.isStunned = true;
                if (this.visible) {
                    objects.Game.messageStatus.text = this.name + " is stunned!";
                }
                //TODO: ensure that enemy is inside stage when stunned
            }
            //if it is not stunned, it can move
            if (!this.isStunned) {
                this.Move();
            }
            //if the player is not taking damage -- check player collision with this (as long as it is not stunned)
            if (!objects.Game.player.isTakingDamage) {
                if (managers.Collision.Check(objects.Game.player, this) && !this.isStunned) {
                    objects.Game.player.isTakingDamage = true;
                    objects.Game.player.GetDamage(this);
                }
            }
            //the else for this condition is under play.ts - this is because the player might have other collisions with other enemies
            //if enemy is not taking damage -- check collision with weapon
            if (!this.isTakingDamage) {
                if (managers.Collision.Check(objects.Game.player.weapon, this)) {
                    this.isTakingDamage = true;
                    this.GetDamage(objects.Game.player);
                }
            }
            //else, only remove the flag for taking damage when collision with weapon has ended
            else {
                if (!managers.Collision.Check(objects.Game.player.weapon, this)) {
                    this.isTakingDamage = false;
                }
            }
        };
        Enemy.prototype.Reset = function () {
        };
        Enemy.prototype.Move = function () {
        };
        Enemy.prototype.CheckBound = function () {
        };
        Enemy.prototype.GetDamage = function (attacker) {
            //enemy state = stunned
            if (this.isStunned) {
                objects.Game.messageStatus.text = attacker.name + " ended " + this.name + "'s life.";
                objects.Game.stage.removeChild(attacker);
                this.visible = false;
            }
            else {
                //introduce a knockback
                var awayVector = this.GetPosition().AwayFrom(objects.Game.player.GetPosition()).Multiply(this.knockback);
                var newPosition = math.Vec2.Add(this.GetPosition(), awayVector);
                this.SetPosition(newPosition);
                _super.prototype.GetDamage.call(this, attacker);
            }
        };
        Enemy.prototype.GetObjectSpeed = function () {
            return 0;
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map