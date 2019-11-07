module objects {
    //export interface Controller<T> { [key: string]: T };
    export class Player extends objects.GameObject {
        //Variables
        //public playerController: Controller<boolean>;
        public attackSequence: number = 0;
        public biteSequence: number = 0;
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
        public lastPosition: math.Vec2;

        public ecto: number;

        //Constructor
        constructor() {
            super("player_p_walk7");
            this.weapon = new objects.Weapon();
            this.Start();
            this.hp = 5;
            this.ecto = 5;
            this.attackPower = 1;
            this.images = [
                managers.Game.assetManager.getResult("player_p_walk7"),
                managers.Game.assetManager.getResult("player_p_walk1"),
                managers.Game.assetManager.getResult("player_p_walk3"),
                managers.Game.assetManager.getResult("player_p_walk5")
            ]
            this.direction = config.Direction.UP;
            this.money = 0;
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
            this.Move();
            this.weapon.Update();
            this.CheckBound(); // <-- Check collisions           

            if (this.hp <= 0) {
                managers.Game.currentScene = config.Scene.OVER;
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
                let runningSpeed = this.playerMoveSpeed + 1;
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
                    if (this.y < 335 || this.y > 431) {
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
                    if (this.y < 335 || this.y > 431) {
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
                    if (this.x < 276 || this.x > 372) {
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
                    if (this.x < 276 || this.x > 372) {
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
            if (this.hp <= 0) {
                console.log(attacker.name + " erased " + this.name + "'s existence from this world.");
                managers.Game.stage.removeChild(this.weapon);
                managers.Game.stage.removeChild(this);
                this.weapon.visible = false;
                this.visible = false;
            }
        }
    }
}