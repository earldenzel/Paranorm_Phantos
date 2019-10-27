module objects {
    export interface Controller<T> { [key: string]: T };
    export class Player extends objects.GameObject {
        //Variables
        public playerController: Controller<boolean>;
        private attackSequence: number = 0;
        private playerMoveSpeed: number = 4;
        public weapon: objects.Weapon;
        private attackTimer: number = 0;
        public canTraverseTop: boolean = false;
        public canTraverseBot: boolean = false;
        public canTraverseLeft: boolean = false;
        public canTraverseRight: boolean = false;
        public sceneOnTop: number;
        public sceneOnBot: number;
        public sceneOnLeft: number;
        public sceneOnRight: number;

        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "player_p_walk7");
            this.weapon = new objects.Weapon(assetManager);
            this.Start();
            this.Move();
            this.hp = 5;
            this.attackPower = 1;
        }

        // Methods
        public Start(): void {     
            this.x = 320;
            this.y = 380;
            this.playerController = { "W": false, "A": false, "S": false, "D": false, "Z": false };

        }

        public Update(): void {
            objects.Game.player = this;
            this.Move();
            this.weapon.Update();
            this.CheckBound(); // <-- Check collisions           

            if (!this.visible && this.hp <= 0) {
                objects.Game.currentScene = config.Scene.OVER;
            }
        }

        public Reset(): void { }

        public Move(): void {
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
                if (this.attackSequence == 0){
                    console.log("Attack initiated");
                    this.weapon.visible = true;
                    this.attackSequence = setInterval(() => {
                        this.weapon.y -= 20;
                        this.weapon.x = this.x;
                    }, 50);
                }
                //and the attack sequence is defined, then increase timer for attack (button held down)
                else{
                    this.attackTimer++;
                }

                //if button is held down too long, then weapon visibility is lost. 
                if (this.attackTimer > 50){                    
                    console.log("Attack disabled");
                    this.weapon.visible = false;
                }
            }
            //if player does not press the attack button
            else{                
                //attack sequence is defined and the button was held down sparingly, then turn off attack
                if (this.attackSequence > 0 && this.attackTimer <= 50){
                    console.log("Attack sequence cancelled");
                    this.attackTimer = 0;
                    clearInterval(this.attackSequence);
                    this.weapon.visible = false;
                    this.attackSequence = 0;
                }
                //if weapon is disabled, and button is let go, then reset timer
                //introduce a 300ms disable of the weapon
                if (this.attackTimer > 50 && !this.weapon.visible){
                    this.attackTimer = 0;
                    objects.Game.keyboardManager.attackEnabled = false;
                    setTimeout(() => {
                        console.log("Attack re-enabled");
                        objects.Game.keyboardManager.attackEnabled = true;
                    },300);
                }
            }
        }

        public CheckBound(): void {
            // right bound
            if (this.x >= 565 - this.halfW) {
                this.x = 565 - this.halfW;
            }
            // left bound
            if (this.x <= this.halfW + 80) {
                this.x = this.halfW + 80;
            }
            // bottom bound
            if (this.y >= 765 - this.halfH) {                
                if (this.canTraverseBot){
                    if(this.x < 276 || this.x > 372){
                        this.y = 765 - this.halfH;
                    }
                    if(this.y >= 765){
                        objects.Game.currentScene = this.sceneOnBot;                        
                        this.SetPosition(new math.Vec2(this.x, this.halfH + 40));
                    }
                }
                else{                    
                    this.y = 765 - this.halfH;
                }                
            }
            // top bound
            if (this.y <= this.halfH + 40) {
                if (this.canTraverseTop){
                    if(this.x < 276 || this.x > 372){
                        this.y = this.halfH + 40;
                    }
                    if(this.y <= 0){
                        objects.Game.currentScene = this.sceneOnTop;                        
                        this.SetPosition(new math.Vec2(this.x, 765 - this.halfH));
                    }
                }
                else{                    
                    this.y = this.halfH + 40;
                }
            }
        }

        public GetDamage(attacker: objects.GameObject) {
            super.GetDamage(attacker);
            if (this.hp < 0) {
                console.log(attacker.name + " erased " + this.name + "'s existence from this world.");
                objects.Game.stage.removeChild(this.weapon);
                objects.Game.stage.removeChild(this);
                this.weapon.visible = false;
                this.visible = false;
            }
        }
    }
}