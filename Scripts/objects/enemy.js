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
            _this.stunIndicator = new objects.Indicator(assetManager, "xKeyIndicator");
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
                //TODO: ensure that enemy is inside stage when stunned
            }
            //if it is stunned
            if (this.isStunned) {
                //determine whether it is currently in contact with player and whether the biting button is pressed
                //disable attack button during eating phase
                if (managers.Game.keyboardManager.biting && managers.Collision.Check(managers.Game.player, this)) {
                    managers.Game.messageStatus.text = "Phoebe started eating " + this.name;
                    this.eatTimer -= 1;
                    managers.Game.keyboardManager.attackEnabled = false;
                    //if the enemy eat timer is less than zero, then phoebe is finished eating                    
                    if (this.eatTimer <= 0) {
                        managers.Game.messageStatus.text = "Phoebe finished eating " + this.name;
                        this.DevourEffect();
                        this.RemoveFromPlay();
                    }
                }
                //re-enable attacking since Phoebe is not eating 
                else {
                    managers.Game.keyboardManager.attackEnabled = true;
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
                managers.Game.messageStatus.text = attacker.name + " ended " + this.name + "'s life.";
                this.RemoveFromPlay();
            }
            else {
                //introduce a knockback
                var awayVector = this.GetPosition().AwayFrom(managers.Game.player.GetPosition()).Multiply(this.knockback);
                var newPosition = math.Vec2.Add(this.GetPosition(), awayVector);
                this.SetPosition(newPosition);
                _super.prototype.GetDamage.call(this, attacker);
                //if hp < 0, show player that it can be eaten via the X key
                if (this.hp <= 0) {
                    managers.Game.messageStatus.text = this.name + " is stunned!";
                    this.stunIndicator.x = this.x;
                    this.stunIndicator.y = this.y - this.stunIndicator.height;
                    this.stunIndicator.visible = true;
                    managers.Game.stage.addChild(this.stunIndicator);
                }
            }
        };
        Enemy.prototype.GetObjectSpeed = function () {
            return 0;
        };
        Enemy.prototype.RemoveFromPlay = function () {
            managers.Game.stage.removeChild(this);
            this.visible = false;
            this.stunIndicator.visible = false;
        };
        Enemy.prototype.DevourEffect = function () {
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map