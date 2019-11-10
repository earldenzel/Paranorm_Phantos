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
        private images: Array<any>;
        public direction: config.Direction;
        public money: number;
        public key: number;
        public lastPosition: math.Vec2;
        public playerStatus: objects.Label;
        public isDead: boolean = false;

        public ecto: number;
        public maxHp: number;
        public maxEcto: number;

        //Constructor
        constructor() {
            super("player_p_walk7");
            this.weapon = new objects.Weapon();
            this.Start();
            this.hp = 5;
            this.maxHp = this.hp;
            this.ecto = 5;
            this.maxEcto = this.ecto;
            this.attackPower = 1;
            this.images = [
                managers.Game.assetManager.getResult("player_p_walk7"),
                managers.Game.assetManager.getResult("player_p_walk1"),
                managers.Game.assetManager.getResult("player_p_walk3"),
                managers.Game.assetManager.getResult("player_p_walk5")
            ]
            this.direction = config.Direction.UP;
            this.money = 0;
            this.playerStatus = new objects.Label("1234567890", "16px", "'Press Start 2P'", "#FFFFFF", this.x, this.y, true);
            this.key = 0;
        }

        // Methods
        public Start(): void {
            this.x = 320;
            this.y = 700;
            //this.playerController = { "W": false, "A": false, "S": false, "D": false, "Z": false };
        }

        public Update(): void {
            managers.Game.player = this;
            this.image = this.images[this.direction as number];
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.Move();
            this.weapon.Update();
            this.CheckBound(); // <-- Check collisions

            //define the moving status bar for Phoebe
            this.playerStatus.x = this.x;
            if (this.y < config.Bounds.TEXT_SHIFT_Y){
                this.playerStatus.y = this.y + this.halfH + config.Bounds.TEXT_OFFSET;
            }
            else{
                this.playerStatus.y = this.y - this.halfH - config.Bounds.TEXT_OFFSET;
            }

            if (this.hp <= 0 && !this.isDead) {
                this.isDead = true;
                this.DeadMessage();
            }
            if(this.bitingTimer == 4){
                this.bitingReset++;
            }
            if(this.bitingReset == 40){
                console.log("BITING RESET");
                this.bitingTimer = 0;
                this.bitingReset = 0;
            }

            // SOUND EFFECTS
            if(this.bitingTimer == 1){
                managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
                managers.Game.SFX.volume = 0.2;
                this.bitingTimer++;
            }
            if(this.attackTimer == 1){
                managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
                managers.Game.SFX.volume = 0.2;
                this.attackTimer++;
            }
        }

        public Reset(): void { }

        public Move(): void {
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
            if(managers.Game.keyboardManager.running){
                let runningSpeed: number = this.playerMoveSpeed + 1;
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
                    setTimeout(() => {
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
                console.log(attacker.name + " erased " + this.name + "'s existence from this world.");
                managers.Game.stage.removeChild(this.weapon);
                managers.Game.stage.removeChild(this);
                this.weapon.visible = false;
                this.visible = false;
            }
        }

        //phoebe effects from devour
        public GainHealth(healthGain: number){
            let oldHp: number = this.hp;
            this.hp += healthGain;
            if (this.hp > this.maxHp){
                this.hp = this.maxHp;
            }
            let gain: number = this.hp - oldHp;
            let message: string = "";
            if (gain > 0){
                let random: number = Math.random() * 100;
                if (random > 75){                    
                    message = "DELICIOUS.";
                } else if (random > 50){
                    message = "I WANT MORE FOOD";
                } else if (random > 25){
                    message = "HEALED UP!"
                } else {
                    message = "+" + gain + " HP";
                }
            }
            else{
                let random: number = Math.random() * 100;
                if (random > 75){                    
                    message = "YUMMY!";
                } else if (random > 50){
                    message = "AHHH! FRESH MEAT";
                } else if (random > 25){
                    message = "NOM NOM NOM"
                } else {
                    message = "ALREADY FULL THO";
                }
            }
            this.EchoMessage(message); 
        }

        public GainSpeed(speedGain: number){
            this.playerMoveSpeed += speedGain;
            this.EchoMessage("+" + speedGain + " MOVE SPD");
        }        

        public GainAttack(attackGain: number){
            this.attackPower += attackGain;
            this.EchoMessage("+" + attackGain + " ATK");
        }

        public GainDollars(dollars: number){
            this.money += dollars;
            this.EchoMessage("GAINED $" + dollars);
        }

        public HurtMessage(){                     
            let random: number = Math.random() * 100;
            if (random > 75){
                this.EchoMessage("OUCH!", 500);
            } else if (random > 50){
                this.EchoMessage("UGH...", 500);
            } else if (random > 25){
                this.EchoMessage("GET OFF ME!", 500);
            } else {
                this.EchoMessage("WHY YOU!", 500);
            }
        }

        public FallMessage(){                     
            let random: number = Math.random() * 100;
            if (random > 75){
                this.EchoMessage("AAAAHH!", 500);
            } else if (random > 50){
                this.EchoMessage("NOOOOO...", 500);
            } else if (random > 25){
                this.EchoMessage("UH OH", 500);
            } else {
                this.EchoMessage("OOPS", 500);
            }
        }

        public DeadMessage(){                     
            let random: number = Math.random() * 100;
            if (random > 75){
                this.EchoMessage("I FAILED...", 3000);
            } else if (random > 50){
                this.EchoMessage("IS THIS IT?", 3000);
            } else if (random > 25){
                this.EchoMessage("FINALLY, DEATH...", 3000);
            } else {
                this.EchoMessage("BYE BYE", 3000);
            }
        }

        public EchoMessage(message: string, timeout: number = 1000){
            if (this.isDead){
                this.playerStatus.text = message;
                this.playerStatus.Recenter();
                this.playerStatus.visible = true;
                if (this.isDead){
                    setTimeout(() => {
                        managers.Game.currentScene = config.Scene.OVER;
                    }, timeout);
                }                
            }
            else{
                if (this.textSequence != 0){
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
    }
}