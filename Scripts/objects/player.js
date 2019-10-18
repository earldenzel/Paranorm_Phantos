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
            _this.attackSequence = 0;
            _this.playerMoveSpeed = 2;
            _this.attackTimer = 0;
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
            //movement implementation
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
            //if player presses the attack button
            if (objects.Game.keyboardManager.attacking) {
                //and the attack sequence is not defined... then define attack sequence
                if (this.attackSequence == 0) {
                    console.log("Attack initiated");
                    this.weapon.visible = true;
                    this.attackSequence = setInterval(function () {
                        _this.weapon.y -= 20;
                        _this.weapon.x = _this.x;
                    }, 50);
                }
                //and the attack sequence is defined, then increase timer for attack (button held down)
                else {
                    this.attackTimer++;
                }
                //if button is held down too long, then weapon visibility is lost. 
                if (this.attackTimer > 50) {
                    console.log("Attack disabled");
                    this.weapon.visible = false;
                }
            }
            //if player does not press the attack button
            else {
                //attack sequence is defined and the button was held down sparingly, then turn off attack
                if (this.attackSequence > 0 && this.attackTimer <= 50) {
                    console.log("Attack sequence cancelled");
                    this.attackTimer = 0;
                    clearInterval(this.attackSequence);
                    this.weapon.visible = false;
                    this.attackSequence = 0;
                }
                //if weapon is disabled, and button is let go, then reset timer
                //introduce a 300ms disable of the weapon
                if (this.attackTimer > 50 && !this.weapon.visible) {
                    this.attackTimer = 0;
                    objects.Game.keyboardManager.attackEnabled = false;
                    setTimeout(function () {
                        console.log("Attack re-enabled");
                        objects.Game.keyboardManager.attackEnabled = true;
                    }, 300);
                }
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