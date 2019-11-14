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
            var _this = _super.call(this, managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Back1") || this;
            //Variables
            //public playerController: Controller<boolean>;
            _this.attackSequence = 0;
            _this.biteSequence = 0;
            _this.fallSequence = 0;
            _this.textSequence = 0;
            _this.playerMoveSpeed = 4;
            _this.attackTimer = 0;
            _this.bitingTimer = 0;
            _this.bitingReset = 0;
            _this.canTraverseTop = false;
            _this.canTraverseBot = false;
            _this.canTraverseLeft = false;
            _this.canTraverseRight = false;
            _this.isDead = false;
            _this.weapon = new objects.Weapon();
            _this.Start();
            _this.hp = 5;
            _this.maxHp = _this.hp;
            _this.ecto = 5;
            _this.maxEcto = _this.ecto;
            _this.attackPower = 1;
            _this.images = [
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Back1"),
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Front1"),
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Left1"),
                new createjs.Sprite(managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Right1"),
            ];
            _this.direction = config.Direction.UP;
            _this.money = 0;
            _this.playerStatus = new objects.Label("1234567890", "16px", "'Press Start 2P'", "#FFFFFF", _this.x, _this.y, true);
            _this.key = 0;
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
            this.currentAnimation = this.images[this.direction];
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.Move();
            this.weapon.Update();
            this.CheckBound(); // <-- Check collisions
            //define the moving status bar for Phoebe
            this.playerStatus.x = this.x;
            if (this.y < config.Bounds.TEXT_SHIFT_Y) {
                this.playerStatus.y = this.y + this.halfH + config.Bounds.TEXT_OFFSET;
            }
            else {
                this.playerStatus.y = this.y - this.halfH - config.Bounds.TEXT_OFFSET;
            }
            if (this.hp <= 0 && !this.isDead) {
                this.isDead = true;
                this.DeadMessage();
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
            this.HurtMessage();
            if (this.hp <= 0) {
                console.log(attacker.name + " erased " + this.name + "'s existence from this world.");
                managers.Game.stage.removeChild(this.weapon);
                managers.Game.stage.removeChild(this);
                this.weapon.visible = false;
                this.visible = false;
            }
        };
        //phoebe effects from devour
        Player.prototype.GainHealth = function (healthGain) {
            var oldHp = this.hp;
            this.hp += healthGain;
            if (this.hp > this.maxHp) {
                this.hp = this.maxHp;
            }
            var gain = this.hp - oldHp;
            var message = "";
            if (gain > 0) {
                var random = Math.random() * 100;
                if (random > 75) {
                    message = "DELICIOUS.";
                }
                else if (random > 50) {
                    message = "I WANT MORE FOOD";
                }
                else if (random > 25) {
                    message = "HEALED UP!";
                }
                else {
                    message = "+" + gain + " HP";
                }
            }
            else {
                var random = Math.random() * 100;
                if (random > 75) {
                    message = "YUMMY!";
                }
                else if (random > 50) {
                    message = "AHHH! FRESH MEAT";
                }
                else if (random > 25) {
                    message = "NOM NOM NOM";
                }
                else {
                    message = "ALREADY FULL THO";
                }
            }
            this.EchoMessage(message);
        };
        Player.prototype.GainSpeed = function (speedGain) {
            this.playerMoveSpeed += speedGain;
            this.EchoMessage("+" + speedGain + " MOVE SPD");
        };
        Player.prototype.GainAttack = function (attackGain) {
            this.attackPower += attackGain;
            this.EchoMessage("+" + attackGain + " ATK");
        };
        Player.prototype.GainDollars = function (dollars) {
            this.money += dollars;
            this.EchoMessage("GAINED $" + dollars);
        };
        Player.prototype.HurtMessage = function () {
            var random = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("OUCH!", 500);
            }
            else if (random > 50) {
                this.EchoMessage("UGH...", 500);
            }
            else if (random > 25) {
                this.EchoMessage("GET OFF ME!", 500);
            }
            else {
                this.EchoMessage("WHY YOU!", 500);
            }
        };
        Player.prototype.FallMessage = function () {
            var random = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("AAAAHH!", 500);
            }
            else if (random > 50) {
                this.EchoMessage("NOOOOO...", 500);
            }
            else if (random > 25) {
                this.EchoMessage("UH OH", 500);
            }
            else {
                this.EchoMessage("OOPS", 500);
            }
        };
        Player.prototype.DeadMessage = function () {
            var random = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("I FAILED...", 3000);
            }
            else if (random > 50) {
                this.EchoMessage("IS THIS IT?", 3000);
            }
            else if (random > 25) {
                this.EchoMessage("FINALLY, DEATH...", 3000);
            }
            else {
                this.EchoMessage("BYE BYE", 3000);
            }
        };
        Player.prototype.EchoMessage = function (message, timeout) {
            var _this = this;
            if (timeout === void 0) { timeout = 1000; }
            if (this.isDead) {
                this.playerStatus.text = message;
                this.playerStatus.Recenter();
                this.playerStatus.visible = true;
                if (this.isDead) {
                    setTimeout(function () {
                        managers.Game.currentScene = config.Scene.OVER;
                    }, timeout);
                }
            }
            else {
                if (this.textSequence != 0) {
                    clearTimeout();
                }
                this.playerStatus.text = message;
                this.playerStatus.Recenter();
                this.playerStatus.visible = true;
                this.textSequence = setTimeout(function () {
                    _this.playerStatus.visible = false;
                    _this.textSequence = 0;
                }, timeout);
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map