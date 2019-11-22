module objects {
    //export interface Controller<T> { [key: string]: T };
    export class Player extends objects.GameObject {
        //Variables
        //public playerController: Controller<boolean>;
        public attackSequence: number = 0;
        public biteSequence: number = 0;
        public fallSequence: number = 0;
        public textSequence: number = 0;
        public playerMoveSpeed: number = 4;
        public weapon: objects.Weapon;
        private attackTimer: number = 0;
        private bitingTimer: number = 0;
        private bitingReset: number = 0;
        public canTraverseTop: boolean = false;
        public canTraverseBot: boolean = false;
        public canTraverseLeft: boolean = false;
        public canTraverseRight: boolean = false;
        public sceneOnTop: number;
        public sceneOnBot: number;
        public sceneOnLeft: number;
        public sceneOnRight: number;
        private walk: Array<any>;
        private run: Array<any>;
        private stand: Array<any>;
        private bitedash: Array<any>;
        private bite: Array<any>;
        public direction: config.Direction;
        public money: number;
        public key: number;
        public lastPosition: math.Vec2;
        public playerStatus: objects.Label;
        public deadPlayer: Array<objects.DeadPlayer> = new Array<objects.DeadPlayer>();

        public ecto: number;
        public maxHp: number;
        public maxEcto: number;

        //Constructor
        constructor() {
            super(managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Back1");
            this.weapon = new objects.Weapon();
            this.Start();
            this.hp = 5;
            this.maxHp = this.hp;
            this.ecto = 0;
            this.maxEcto = 5;
            this.attackPower = 1;
            this.walk = ["Phoebe_Walk_Back1", "Phoebe_Walk_Front1", "Phoebe_Walk_Left1", "Phoebe_Walk_Right1"];
            this.stand = ["Phoebe_Walk_Back2", "Phoebe_Walk_Front2", "Phoebe_Walk_Left2", "Phoebe_Walk_Right2"];
            this.run = ["Phoebe_Run_Back", "Phoebe_Run_Front", "Phoebe_Run_Left", "Phoebe_Run_Right"];
            this.bitedash = ["Phoebe_Bite_Back", "Phoebe_Bite_Front1", "Phoebe_Bite_Left1", "Phoebe_Bite_Right1"];
            this.bite = ["Phoebe_Bite_Front2", "Phoebe_Bite_Front2", "Phoebe_Bite_Left2", "Phoebe_Bite_Right2"];
            this.direction = config.Direction.UP;
            this.money = 9999;
            this.playerStatus = new objects.Label("1234567890", "16px", "'Press Start 2P'", "#FFFFFF", this.x, this.y, true);
            this.key = 0;
            this.deadPlayer = [
                new objects.DeadPlayer("Phoebe_Dead_A"),
                new objects.DeadPlayer("Phoebe_Dead_B", false, false),
                new objects.DeadPlayer("Phoebe_Dead_B", true, false),
                new objects.DeadPlayer("Phoebe_Dead_B", false, true),
                new objects.DeadPlayer("Phoebe_Dead_B", true, true)
            ];
        }

        // Methods
        public Start(): void {
            this.x = 320;
            this.y = 700;
            //this.playerController = { "W": false, "A": false, "S": false, "D": false, "Z": false };
        }

        public Update(): void {
            managers.Game.player = this;
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            if (this.hp > 0) {
                this.Move();
                this.weapon.Update();
            }
            if (this.isDead) {
                this.deadPlayer.forEach(e => {
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
            if (this.attackTimer == 1) {
                managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
                managers.Game.SFX.volume = 0.2;
                this.attackTimer++;
            }
        }

        public Reset(): void { }

        public Move(): void {
            //movement implementation
            if (!managers.Game.keyboardManager.moveUp
                && !managers.Game.keyboardManager.moveDown
                && !managers.Game.keyboardManager.moveLeft
                && !managers.Game.keyboardManager.moveRight
                && !managers.Game.keyboardManager.attacking
                && !managers.Game.keyboardManager.biting
                && this.biteSequence === 0) {
                this.SwitchAnimation(this.stand[this.direction as number]);
            }
            // Running Implementation
            if (managers.Game.keyboardManager.running) {
                let runningSpeed: number = this.playerMoveSpeed + 1;
                if (managers.Game.keyboardManager.moveLeft) {
                    this.x -= runningSpeed;
                    this.direction = config.Direction.LEFT;
                    if (!managers.Game.keyboardManager.moveDown &&
                        !managers.Game.keyboardManager.moveUp) {
                        this.SwitchAnimation(this.run[this.direction as number]);
                    }
                }
                if (managers.Game.keyboardManager.moveRight) {
                    this.x += runningSpeed;
                    this.direction = config.Direction.RIGHT;
                    if (!managers.Game.keyboardManager.moveDown &&
                        !managers.Game.keyboardManager.moveUp) {
                        this.SwitchAnimation(this.run[this.direction as number]);
                    }
                }
                if (managers.Game.keyboardManager.moveUp) {
                    this.y -= runningSpeed;
                    this.direction = config.Direction.UP;
                    this.SwitchAnimation(this.run[this.direction as number]);
                }
                if (managers.Game.keyboardManager.moveDown) {
                    this.y += runningSpeed;
                    this.direction = config.Direction.DOWN;
                    this.SwitchAnimation(this.run[this.direction as number]);
                }
            }
            else {
                if (managers.Game.keyboardManager.moveLeft) {
                    this.x -= this.playerMoveSpeed;
                    this.direction = config.Direction.LEFT;
                    if (!managers.Game.keyboardManager.moveDown &&
                        !managers.Game.keyboardManager.moveUp) {
                        this.SwitchAnimation(this.walk[this.direction as number]);
                    }
                }
                if (managers.Game.keyboardManager.moveRight) {
                    this.x += this.playerMoveSpeed;
                    this.direction = config.Direction.RIGHT;
                    if (!managers.Game.keyboardManager.moveDown &&
                        !managers.Game.keyboardManager.moveUp) {
                        this.SwitchAnimation(this.walk[this.direction as number]);
                    }
                }
                if (managers.Game.keyboardManager.moveUp) {
                    this.y -= this.playerMoveSpeed;
                    this.direction = config.Direction.UP;
                    this.SwitchAnimation(this.walk[this.direction as number]);
                }
                if (managers.Game.keyboardManager.moveDown) {
                    this.y += this.playerMoveSpeed;
                    this.direction = config.Direction.DOWN;
                    this.SwitchAnimation(this.walk[this.direction as number]);
                }
            }
            //if player presses the attack button
            if (managers.Game.keyboardManager.attacking) {
                if (this.attackSequence == 0 && this.weapon != undefined) {
                    this.alpha = 0;
                    this.attackSequence = 1;
                    this.weapon.Attack();
                }
            }

            if (this.biteSequence !== 0) {
                this.SwitchAnimation(this.bite[this.direction as number]);
            }
            // Biting/Dash Implementation
            if (managers.Game.keyboardManager.biting) {
                if (this.bitingTimer <= 3) {
                    managers.Game.keyboardManager.enabled = false;
                    switch (this.direction) {
                        case config.Direction.UP:
                            this.y -= (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction as number]);
                            break;
                        case config.Direction.DOWN:
                            this.y += (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction as number]);
                            break;
                        case config.Direction.RIGHT:
                            this.x += (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction as number]);
                            break;
                        case config.Direction.LEFT:
                            this.x -= (this.playerMoveSpeed + 16);
                            this.SwitchAnimation(this.bitedash[this.direction as number]);
                            break;
                    }
                    managers.Game.keyboardManager.enabled = true;
                    this.bitingTimer++;
                }
            }
        }

        public CheckBound(): void {
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
                        this.lastPosition = new math.Vec2(this.x, this.halfH + config.Bounds.TOP_BOUND)
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
        }

        public GetDamage(attacker: objects.GameObject) {
            super.GetDamage(attacker);
            this.HurtMessage();
            if (this.hp <= 0) {
                this.DeathSequence();
            }
        }

        public GainMaxHealth(maxHpGain: number){
            this.maxHp += maxHpGain;
            this.hp = this.maxHp;
            this.EchoMessage("MAX HP");

        }

        //phoebe effects from devour
        public GainHealth(healthGain: number) {
            let oldHp: number = this.hp;
            this.hp += healthGain;
            if (this.hp > this.maxHp) {
                this.hp = this.maxHp;
            }
            let gain: number = this.hp - oldHp;
            let message: string = "";
            if (gain > 0) {
                let random: number = Math.random() * 100;
                if (random > 75) {
                    message = "DELICIOUS.";
                } else if (random > 50) {
                    message = "I FEEL BETTER";
                } else if (random > 25) {
                    message = "HEALED UP!"
                } else {
                    message = "+" + gain + " HP";
                }
            }
            else {
                let random: number = Math.random() * 100;
                if (random > 75) {
                    message = "YUM!";
                } else if (random > 50) {
                    message = "FRESH MEAT";
                } else if (random > 25) {
                    message = "TASTY!"
                } else {
                    message = "ALL GOOD";
                }
            }
            this.EchoMessage(message);
        }

        public GainSpeed(speedGain: number) {
            this.playerMoveSpeed += speedGain;
            this.EchoMessage("+" + speedGain + " MOVE SPD");
        }

        public GainAttack(attackGain: number) {
            this.attackPower += attackGain;
            this.EchoMessage("+" + attackGain + " ATK");
        }

        public GainDollars(dollars: number) {
            this.money += dollars;
            if (dollars > 0){
                this.EchoMessage("GAINED $" + dollars);
            }
        }        

        public GainEcto() {
            if (this.ecto < this.maxEcto) {
                this.ecto += 1;
            }
        }


        public HurtMessage() {
            let random: number = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("OUCH!", 500);
            } else if (random > 50) {
                this.EchoMessage("UGH...", 500);
            } else if (random > 25) {
                this.EchoMessage("GET OFF ME!", 500);
            } else {
                this.EchoMessage("WHY YOU!", 500);
            }
        }

        public FallMessage() {
            let random: number = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("AAAAHH!", 500);
            } else if (random > 50) {
                this.EchoMessage("NOOOOO...", 500);
            } else if (random > 25) {
                this.EchoMessage("UH OH", 500);
            } else {
                this.EchoMessage("OOPS", 500);
            }
        }

        public DeadMessage() {
            let random: number = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("I FAILED...", 3000);
            } else if (random > 50) {
                this.EchoMessage("IS THIS IT?", 3000);
            } else if (random > 25) {
                this.EchoMessage("GOOD NIGHT..", 3000);
            } else {
                this.EchoMessage("BYE BYE", 3000);
            }
        }

        public EatMessage() {
            let random: number = Math.random() * 100;
            if (random > 75) {
                this.EchoMessage("MUNCH MUNCH", 3000);
            } else if (random > 50) {
                this.EchoMessage("CHOMP CHOMP", 3000);
            } else if (random > 25) {
                this.EchoMessage("MMMMMM...", 3000);
            } else {
                this.EchoMessage("AHHHH...", 3000);
            }
        }

        public EchoMessage(message: string, timeout: number = 1000) {
            if (this.isDead) {
                this.playerStatus.text = message;
                this.playerStatus.Recenter();
                this.playerStatus.visible = true;
                setTimeout(() => {
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
                this.textSequence = setTimeout(() => {
                    this.playerStatus.visible = false;
                    this.textSequence = 0;
                }, timeout);
            }
        }

        private phoebeDied(): void {
            this.off("animationend", null);
            this.deadPlayer.forEach(e => {
                e.SetPosition(this.GetPosition());
                e.visible = true;
            });
            this.visible = false;
            this.weapon.visible = false;
        }

        public DeathSequence(): void {
            this.SwitchAnimation("Phoebe_Explosion");
            this.on("animationend", this.phoebeDied.bind(this), false, true);
            this.isDead = true;
            this.DeadMessage();

        }

        public SwitchAnimation(newAnimation: string) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        }

        public SetBitePositionDirection(target: math.Vec2): void {
            switch (this.direction) {
                case config.Direction.UP:
                    this.direction = config.Direction.DOWN;
                case config.Direction.DOWN:
                    target = math.Vec2.Add(target, new math.Vec2(0, -this.halfH / 2));
                    break;
                case config.Direction.RIGHT:
                    target = math.Vec2.Add(target, new math.Vec2(-this.halfW, 0));
                    break;
                case config.Direction.LEFT:
                    target = math.Vec2.Add(target, new math.Vec2(this.halfW, 0));
                    break;
            }
            this.SetPosition(target);

        }
    }
}