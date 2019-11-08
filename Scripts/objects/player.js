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
    //export interface Controller<T> { [key: string]: T };
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //Constructor
        function Player() {
            var _this = _super.call(this, "player_p_walk7") || this;
            //Variables
            //public playerController: Controller<boolean>;
            _this.attackSequence = 0;
            _this.biteSequence = 0;
            _this.fallSequence = 0;
            _this.playerMoveSpeed = 4;
            _this.attackTimer = 0;
            _this.bitingTimer = 0;
            _this.bitingReset = 0;
            _this.canTraverseTop = false;
            _this.canTraverseBot = false;
            _this.canTraverseLeft = false;
            _this.canTraverseRight = false;
            _this.weapon = new objects.Weapon();
            _this.Start();
            _this.hp = 5;
            _this.ecto = 5;
            _this.attackPower = 1;
            _this.images = [
                managers.Game.assetManager.getResult("player_p_walk7"),
                managers.Game.assetManager.getResult("player_p_walk1"),
                managers.Game.assetManager.getResult("player_p_walk3"),
                managers.Game.assetManager.getResult("player_p_walk5")
            ];
            _this.direction = config.Direction.UP;
            _this.money = 0;
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            this.x = 320;
            this.y = 700;
            //this.playerController = { "W": false, "A": false, "S": false, "D": false, "Z": false };
        };
        Player.prototype.Update = function () {
            managers.Game.player = this;
            this.image = this.images[this.direction];
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.Move();
            this.weapon.Update();
            this.CheckBound(); // <-- Check collisions           
            if (this.hp <= 0) {
                managers.Game.currentScene = config.Scene.OVER;
            }
            if (this.bitingTimer == 4) {
                this.bitingReset++;
            }
            if (this.bitingReset == 40) {
                console.log("BITING RESET");
                this.bitingTimer = 0;
                this.bitingReset = 0;
            }
            // SOUND EFFECTS
            if (this.bitingTimer == 1) {
                managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
                managers.Game.SFX.volume = 0.2;
                this.bitingTimer++;
            }
            if (this.attackTimer == 1) {
                managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
                managers.Game.SFX.volume = 0.2;
                this.attackTimer++;
            }
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            //movement implementation
            if (managers.Game.keyboardManager.moveUp) {
                this.y -= this.playerMoveSpeed;
                this.direction = config.Direction.UP;
            }
            if (managers.Game.keyboardManager.moveDown) {
                this.y += this.playerMoveSpeed;
                this.direction = config.Direction.DOWN;
            }
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= this.playerMoveSpeed;
                this.direction = config.Direction.LEFT;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += this.playerMoveSpeed;
                this.direction = config.Direction.RIGHT;
            }
            // Running Implementation
            if (managers.Game.keyboardManager.running) {
                var runningSpeed = this.playerMoveSpeed + 1;
                if (managers.Game.keyboardManager.moveUp) {
                    this.y -= runningSpeed;
                    this.direction = config.Direction.UP;
                }
                if (managers.Game.keyboardManager.moveDown) {
                    this.y += runningSpeed;
                    this.direction = config.Direction.DOWN;
                }
                if (managers.Game.keyboardManager.moveLeft) {
                    this.x -= runningSpeed;
                    this.direction = config.Direction.LEFT;
                }
                if (managers.Game.keyboardManager.moveRight) {
                    this.x += runningSpeed;
                    this.direction = config.Direction.RIGHT;
                }
            }
            //if player presses the attack button
            if (managers.Game.keyboardManager.attacking) {
                //and the attack sequence is not defined... then define attack sequence
                if (this.attackSequence == 0 && this.weapon != undefined) {
                    this.weapon.Attack();
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
                    managers.Game.keyboardManager.attackEnabled = false;
                    setTimeout(function () {
                        console.log("Attack re-enabled");
                        managers.Game.keyboardManager.attackEnabled = true;
                    }, 300);
                }
            }
            // Biting/Dash Implementation
            if (managers.Game.keyboardManager.biting && this.bitingTimer <= 3) {
                console.log("BITING");
                managers.Game.keyboardManager.enabled = false;
                switch (this.direction) {
                    case config.Direction.UP:
                        this.y -= (this.playerMoveSpeed + 16);
                        break;
                    case config.Direction.DOWN:
                        this.y += (this.playerMoveSpeed + 16);
                        break;
                    case config.Direction.RIGHT:
                        this.x += (this.playerMoveSpeed + 16);
                        break;
                    case config.Direction.LEFT:
                        this.x -= (this.playerMoveSpeed + 16);
                        break;
                }
                managers.Game.keyboardManager.enabled = true;
                this.bitingTimer++;
            }
        };
        Player.prototype.CheckBound = function () {
            // right bound
            if (this.x >= config.Bounds.RIGHT_BOUND - this.halfW) {
                if (this.canTraverseRight) {
                    if (this.y < config.Bounds.DOOR_EASING_TOP || this.y > config.Bounds.DOOR_EASING_BOTTOM) {
                        this.x = config.Bounds.RIGHT_BOUND - this.halfW;
                    }
                    if (this.x >= config.Bounds.RIGHT_BOUND + this.width) {
                        managers.Game.currentScene = this.sceneOnRight;
                        this.lastPosition = new math.Vec2(config.Bounds.LEFT_BOUND - this.halfW, this.y);
                        this.SetPosition(this.lastPosition);
                    }
                }
                else {
                    this.x = config.Bounds.RIGHT_BOUND - this.halfW;
                }
            }
            // left bound
            if (this.x <= this.halfW + config.Bounds.LEFT_BOUND) {
                if (this.canTraverseLeft) {
                    if (this.y < config.Bounds.DOOR_EASING_TOP || this.y > config.Bounds.DOOR_EASING_BOTTOM) {
                        this.x = this.halfW + config.Bounds.LEFT_BOUND;
                    }
                    if (this.x <= 0) {
                        managers.Game.currentScene = this.sceneOnLeft;
                        this.lastPosition = new math.Vec2(config.Bounds.RIGHT_BOUND + this.halfW, this.y);
                        this.SetPosition(this.lastPosition);
                    }
                }
                else {
                    this.x = this.halfW + config.Bounds.LEFT_BOUND;
                }
            }
            // bottom bound
            if (this.y >= config.Bounds.BOTTOM_BOUND - this.halfH) {
                if (this.canTraverseBot) {
                    if (this.x < config.Bounds.DOOR_EASING_LEFT || this.x > config.Bounds.DOOR_EASING_RIGHT) {
                        this.y = config.Bounds.BOTTOM_BOUND - this.halfH;
                    }
                    if (this.y >= config.Bounds.BOTTOM_BOUND + this.height) {
                        managers.Game.currentScene = this.sceneOnBot;
                        this.lastPosition = new math.Vec2(this.x, this.halfH + config.Bounds.TOP_BOUND);
                        this.SetPosition(this.lastPosition);
                    }
                }
                else {
                    this.y = config.Bounds.BOTTOM_BOUND - this.halfH;
                }
            }
            // top bound
            if (this.y <= this.halfH + config.Bounds.TOP_BOUND) {
                if (this.canTraverseTop) {
                    if (this.x < config.Bounds.DOOR_EASING_LEFT || this.x > config.Bounds.DOOR_EASING_RIGHT) {
                        this.y = this.halfH + config.Bounds.TOP_BOUND;
                    }
                    if (this.y <= config.Bounds.TOP_BOUND - (this.height / 2)) {
                        managers.Game.currentScene = this.sceneOnTop;
                        this.lastPosition = new math.Vec2(this.x, config.Bounds.BOTTOM_BOUND + this.height);
                        this.SetPosition(this.lastPosition);
                    }
                }
                else {
                    this.y = this.halfH + config.Bounds.TOP_BOUND;
                }
            }
        };
        Player.prototype.GetDamage = function (attacker) {
            _super.prototype.GetDamage.call(this, attacker);
            if (this.hp <= 0) {
                console.log(attacker.name + " erased " + this.name + "'s existence from this world.");
                managers.Game.stage.removeChild(this.weapon);
                managers.Game.stage.removeChild(this);
                this.weapon.visible = false;
                this.visible = false;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map