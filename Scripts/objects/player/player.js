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
            _this.delaySequence = 0;
            _this.biteSequence = 0;
            _this.fallSequence = 0;
            _this.textSequence = 0;
            _this.playerMoveSpeed = 4;
            _this.playerHalfSpeed = _this.playerMoveSpeed / 2;
            _this.playerAttackDelay = 1000;
            _this.bitingTimer = 0;
            _this.bitingReset = 0;
            _this.canTraverseTop = false;
            _this.canTraverseBot = false;
            _this.canTraverseLeft = false;
            _this.canTraverseRight = false;
            _this.deadPlayer = new Array();
            _this.deathCount = 0;
            _this.stageFinished = 0;
            _this.weapon = new objects.Weapon();
            _this.Start();
            _this.hp = 5;
            _this.maxHp = _this.hp;
            _this.ecto = 0;
            _this.maxEcto = 5;
            _this.attackPower = 1;
            _this.activatePowers = false;
            _this.walk = ["Phoebe_Walk_Back1", "Phoebe_Walk_Front1", "Phoebe_Walk_Left1", "Phoebe_Walk_Right1"];
            _this.stand = ["Phoebe_Walk_Back2", "Phoebe_Walk_Front2", "Phoebe_Walk_Left2", "Phoebe_Walk_Right2"];
            _this.run = ["Phoebe_Run_Back", "Phoebe_Run_Front", "Phoebe_Run_Left", "Phoebe_Run_Right"];
            _this.bitedash = ["Phoebe_Bite_Back", "Phoebe_Bite_Front1", "Phoebe_Bite_Left1", "Phoebe_Bite_Right1"];
            _this.bite = ["Phoebe_Bite_Front2", "Phoebe_Bite_Front2", "Phoebe_Bite_Left2", "Phoebe_Bite_Right2"];
            _this.specialAttack = ["Phoebe_SpecialAttack_Back", "Phoebe_SpecialAttack_Front", "Phoebe_SpecialAttack_Left", "Phoebe_SpecialAttack_Right"];
            _this.direction = config.Direction.UP;
            _this.money = 0;
            _this.playerStatus = new objects.Label("1234567890", "16px", "'Press Start 2P'", "#FFFFFF", _this.x, _this.y, true);
            _this.key = 0;
            _this.deadPlayer = [
                new objects.DeadPlayer("Phoebe_Dead_A"),
                new objects.DeadPlayer("Phoebe_Dead_B", false, false),
                new objects.DeadPlayer("Phoebe_Dead_B", true, false),
                new objects.DeadPlayer("Phoebe_Dead_B", false, true),
                new objects.DeadPlayer("Phoebe_Dead_B", true, true)
            ];
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
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            if (this.hp > 0) {
                this.Move();
                this.weapon.Update();
            }
            if (this.isDead) {
                this.deadPlayer.forEach(function (e) {
                    e.visible = true;
                    e.Update();
                });
            }
            this.CheckBound(); // <-- Check collisions
            //define the moving status bar for Phoebe
            this.playerStatus.x = this.x;
            if (this.y < config.Bounds.TEXT_SHIFT_Y) {
                this.playerStatus.y = this.y + this.halfH + config.Bounds.TEXT_OFFSET;
            }
            else {
                this.playerStatus.y = this.y - this.halfH - config.Bounds.TEXT_OFFSET;
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
            this.ActivatePowers();
        };
        Player.prototype.Reset = function () {
            this.visible = true;
            this.hp = this.maxHp;
            this.ecto = 0;
            this.isDead = false;
            this.SwitchAnimation(this.stand[this.direction]);
            this.deadPlayer.forEach(function (e) {
                e.visible = false;
            });
            this.Start();
            this.isTakingDamage = false;
        };
        Player.prototype.Move = function () {
            //movement implementation
            if (!this.activatePowers) {
                if (!managers.Game.keyboardManager.moveUp
                    && !managers.Game.keyboardManager.moveDown
                    && !managers.Game.keyboardManager.moveLeft
                    && !managers.Game.keyboardManager.moveRight
                    && !managers.Game.keyboardManager.attacking
                    && !managers.Game.keyboardManager.biting
                    && this.biteSequence === 0) {
                    this.SwitchAnimation(this.stand[this.direction]);
                }
                // Running Implementation
                if (managers.Game.keyboardManager.running) {
                    var runningSpeed = this.playerMoveSpeed + 2;
                    if (managers.Game.keyboardManager.moveLeft) {
                        this.x -= runningSpeed;
                        this.direction = config.Direction.LEFT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.run[this.direction]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveRight) {
                        this.x += runningSpeed;
                        this.direction = config.Direction.RIGHT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.run[this.direction]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveUp) {
                        this.y -= runningSpeed;
                        this.direction = config.Direction.UP;
                        this.SwitchAnimation(this.run[this.direction]);
                    }
                    if (managers.Game.keyboardManager.moveDown) {
                        this.y += runningSpeed;
                        this.direction = config.Direction.DOWN;
                        this.SwitchAnimation(this.run[this.direction]);
                    }
                }
                else {
                    if (managers.Game.keyboardManager.moveLeft) {
                        this.x -= this.playerMoveSpeed;
                        this.direction = config.Direction.LEFT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.walk[this.direction]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveRight) {
                        this.x += this.playerMoveSpeed;
                        this.direction = config.Direction.RIGHT;
                        if (!managers.Game.keyboardManager.moveDown &&
                            !managers.Game.keyboardManager.moveUp) {
                            this.SwitchAnimation(this.walk[this.direction]);
                        }
                    }
                    if (managers.Game.keyboardManager.moveUp) {
                        this.y -= this.playerMoveSpeed;
                        this.direction = config.Direction.UP;
                        this.SwitchAnimation(this.walk[this.direction]);
                    }
                    if (managers.Game.keyboardManager.moveDown) {
                        this.y += this.playerMoveSpeed;
                        this.direction = config.Direction.DOWN;
                        this.SwitchAnimation(this.walk[this.direction]);
                    }
                }
                //if (managers.Game.keyboardManager.moveUp) {
                //    this.y -= this.playerMoveSpeed / 2;
                //    this.direction = config.Direction.UP;
                //    this.SwitchAnimation(this.walk[this.direction as number]);
                //}
                //if (managers.Game.keyboardManager.moveDown) {
                //    this.y += this.playerMoveSpeed / 2;
                //    this.direction = config.Direction.DOWN;
                //    this.SwitchAnimation(this.walk[this.direction as number]);
                //}
            }
            //if player presses the attack button
            if (managers.Game.keyboardManager.attacking) {
                if (this.attackSequence == 0 && this.weapon != undefined && this.delaySequence == 0) {
                    this.alpha = 0;
                    this.attackSequence = 1;
                    this.delaySequence = 1;
                    this.weapon.Attack();
                }
            }
            if (this.biteSequence !== 0) {
                this.SwitchAnimation(this.bite[this.direction]);
            }
            // Biting/Dash Implementation
            if (managers.Game.keyboardManager.biting) {
                if (this.bitingTimer <= 3) {
                    managers.Game.keyboardManager.enabled = false;
                    switch (this.direction) {
                        case config.Direction.UP:
                            this.y -= (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction]);
                            break;
                        case config.Direction.DOWN:
                            this.y += (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction]);
                            break;
                        case config.Direction.RIGHT:
                            this.x += (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction]);
                            break;
                        case config.Direction.LEFT:
                            this.x -= (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction]);
                            break;
                    }
                    managers.Game.keyboardManager.enabled = true;
                    this.bitingTimer++;
                }
            }
            if (managers.Game.keyboardManager.powers) {
                if (this.ecto > 0 && this.powerUp != config.PowerUp.NONE) {
                    this.activatePowers = true;
                }
                else {
                    this.activatePowers = false;
                }
            }
            else {
                this.activatePowers = false;
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
                this.DeathSequence();
            }
        };
        Player.prototype.GainMaxHealth = function (maxHpGain) {
            this.maxHp += maxHpGain;
            this.hp = this.maxHp;
            this.EchoMessage("MAX HP UP");
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
                    message = "I FEEL BETTER";
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
                    message = "YUM!";
                }
                else if (random > 50) {
                    message = "FRESH MEAT";
                }
                else if (random > 25) {
                    message = "TASTY!";
                }
                else {
                    message = "ALL GOOD";
                }
            }
            this.EchoMessage(message);
        };
        Player.prototype.ActivatePowers = function () {
            if (this.activatePowers) {
                var ticker = createjs.Ticker.getTicks();
                switch (this.powerUp) {
                    case config.PowerUp.SHADOW:
                        this.SwitchAnimation("Phoebe_Shadow");
                        if (ticker % 90 == 0) {
                            this.ecto -= 1;
                        }
                        break;
                    case config.PowerUp.BITE:
                        switch (this.direction) {
                            case config.Direction.UP:
                                this.y -= (this.playerMoveSpeed + 26);
                                this.SwitchAnimation(this.bitedash[this.direction]);
                                break;
                            case config.Direction.DOWN:
                                this.y += (this.playerMoveSpeed + 26);
                                this.SwitchAnimation(this.bitedash[this.direction]);
                                break;
                            case config.Direction.RIGHT:
                                this.x += (this.playerMoveSpeed + 26);
                                this.SwitchAnimation(this.bitedash[this.direction]);
                                break;
                            case config.Direction.LEFT:
                                this.x -= (this.playerMoveSpeed + 26);
                                this.SwitchAnimation(this.bitedash[this.direction]);
                                break;
                        }
                        if (ticker % 15 == 0) {
                            this.ecto -= 1;
                        }
                        break;
                    case config.PowerUp.SLIME:
                        managers.Game.currentStage.hasProjectileShooters = true;
                        var rateOfFire = 80;
                        if (ticker % rateOfFire == 0) {
                            var bulletSpawn = new math.Vec2(this.x + this.halfW, this.y);
                            var currentBullet = managers.Game.bulletManager.CurrentBullet;
                            var bullet = managers.Game.bulletManager.slimeBalls[currentBullet];
                            bullet.staticNotPositional = true;
                            bullet.direction = this.direction;
                            bullet.x = bulletSpawn.x;
                            bullet.y = bulletSpawn.y;
                            managers.Game.bulletManager.CurrentBullet++;
                            if (managers.Game.bulletManager.CurrentBullet > 49) {
                                managers.Game.bulletManager.CurrentBullet = 0;
                            }
                        }
                        this.SwitchAnimation(this.specialAttack[this.direction]);
                        this.ecto -= 1;
                        break;
                }
            }
        };
        Player.prototype.GainSpeed = function (speedGain) {
            this.playerMoveSpeed += speedGain;
            this.playerHalfSpeed = this.playerMoveSpeed / 2;
            this.EchoMessage("+" + speedGain + " MOVE SPD");
        };
        Player.prototype.AlterSpeed = function (reduceSpeed) {
            if (reduceSpeed) {
                this.playerMoveSpeed = this.playerHalfSpeed;
            }
            else {
                this.playerMoveSpeed = this.playerHalfSpeed * 2;
            }
        };
        Player.prototype.GainAttack = function (attackGain) {
            this.attackPower += attackGain;
            this.EchoMessage("+" + attackGain + " ATK");
        };
        Player.prototype.GainDollars = function (dollars) {
            this.money += dollars;
            if (dollars > 0) {
                this.EchoMessage("GAINED $" + dollars);
            }
        };
        Player.prototype.GainEcto = function (gain) {
            if (gain === void 0) { gain = 1; }
            if (this.ecto < this.maxEcto) {
                this.ecto += gain;
            }
            if (this.ecto > this.maxEcto) {
                this.ecto = this.maxEcto;
            }
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
                this.EchoMessage("GOOD NIGHT..", 3000);
            }
            else {
                this.EchoMessage("BYE BYE", 3000);
            }
        };
        Player.prototype.EatMessage = function () {
            var random = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("MUNCH MUNCH", 3000);
            }
            else if (random > 50) {
                this.EchoMessage("CHOMP CHOMP", 3000);
            }
            else if (random > 25) {
                this.EchoMessage("MMMMMM...", 3000);
            }
            else {
                this.EchoMessage("AHHHH...", 3000);
            }
        };
        Player.prototype.VictoryMessage = function (nextScene) {
            managers.Game.keyboardManager.ControlReset();
            this.EchoMessage("I DID IT!", 3000);
            setTimeout(function () {
                managers.Game.keyboardManager.enabled = true;
                managers.Game.currentScene = nextScene;
            }, 3000);
        };
        Player.prototype.EchoMessage = function (message, timeout) {
            var _this = this;
            if (timeout === void 0) { timeout = 1000; }
            if (this.isDead) {
                this.playerStatus.text = message;
                this.playerStatus.Recenter();
                this.playerStatus.visible = true;
                setTimeout(function () {
                    managers.Game.currentScene = config.Scene.OVER;
                }, timeout);
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
        Player.prototype.phoebeDied = function () {
            var _this = this;
            this.off("animationend", null);
            this.deadPlayer.forEach(function (e) {
                e.SetPosition(_this.GetPosition());
                e.visible = true;
            });
            this.visible = false;
            this.weapon.visible = false;
        };
        Player.prototype.DeathSequence = function () {
            createjs.Sound.stop();
            managers.Game.SFX = createjs.Sound.play("anyDefeated");
            this.SwitchAnimation("Phoebe_Explosion");
            this.on("animationend", this.phoebeDied.bind(this), false, true);
            this.isDead = true;
            this.DeadMessage();
        };
        Player.prototype.SwitchAnimation = function (newAnimation) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        };
        Player.prototype.SetBitePositionDirection = function (target) {
            switch (this.direction) {
                case config.Direction.UP:
                    this.direction = config.Direction.DOWN;
                case config.Direction.DOWN:
                    target = math.Vec2.Add(target, new math.Vec2(-this.halfW / 2, 0));
                    break;
                case config.Direction.RIGHT:
                    target = math.Vec2.Add(target, new math.Vec2(-this.halfW * 2, 0));
                    break;
                case config.Direction.LEFT:
                    target = math.Vec2.Add(target, new math.Vec2(this.halfW, 0));
                    break;
            }
            this.SetPosition(target);
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map