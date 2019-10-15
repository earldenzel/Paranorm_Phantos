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
    ;
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player_p_walk7") || this;
            _this.playerMoveSpeed = 2;
            _this.weapon = new objects.Weapon(assetManager);
            _this.Start();
            _this.Move();
            _this.hp = 5;
            _this.attackPower = 1;
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            // set the initial position
            this.y = 700;
            this.x = 320;
            this.playerController = { "W": false, "A": false, "S": false, "D": false, "Z": false };
        };
        Player.prototype.Update = function () {
            this.Move();
            this.weapon.Update();
            this.CheckBound(); // <-- Check collisions           
            if (!this.visible && this.hp <= 0) {
                objects.Game.currentScene = config.Scene.OVER;
            }
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            var _this = this;
            //current keyboard implementation - will likely change later
            //this.AddEventListeners();
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= this.playerMoveSpeed;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += this.playerMoveSpeed;
            }
            if (objects.Game.keyboardManager.moveUp) {
                this.y -= this.playerMoveSpeed;
            }
            if (objects.Game.keyboardManager.moveDown) {
                this.y += this.playerMoveSpeed;
            }
            if (objects.Game.keyboardManager.attacking) {
                var attackTimer_1 = 0;
                console.log("Attack initiated");
                this.weapon.visible = true;
                this.attackSequence = setInterval(function () {
                    attackTimer_1++;
                    console.log(attackTimer_1);
                    _this.weapon.y -= 20;
                    _this.weapon.x = _this.x;
                    if (attackTimer_1 > 15) {
                        clearInterval(_this.attackSequence);
                        _this.weapon.visible = false;
                    }
                }, 50);
            }
            else {
                clearInterval(this.attackSequence);
                this.weapon.visible = false;
            }
        };
        Player.prototype.CheckBound = function () {
            // right bound
            if (this.x >= 565 - this.halfW) {
                this.x = 565 - this.halfW;
            }
            // left bound
            if (this.x <= this.halfW + 80) {
                console.log(this.y);
                this.x = this.halfW + 80;
            }
            // bottom bound
            if (this.y >= 765 - this.halfH) {
                this.y = 765 - this.halfH;
            }
            // top bound
            if (this.y <= this.halfH + 40) {
                console.log(this.x);
                if (this.x < 276 || this.x > 372) {
                    this.y = this.halfH + 40;
                }
            }
        };
        Player.prototype.GetDamage = function (attacker) {
            _super.prototype.GetDamage.call(this, attacker);
            if (this.hp < 0) {
                console.log(attacker.name + " erased " + this.name + "'s existence from this world.");
                objects.Game.stage.removeChild(this.weapon);
                objects.Game.stage.removeChild(this);
                this.weapon.visible = false;
                this.visible = false;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map