module objects {
    export interface Controller<T> { [key: string]: T };
    export class Player extends objects.GameObject {
        //Variables
        public playerController: Controller<boolean>;
        private goingUpInterval: any;
        private goingDownInterval: any;
        private goingLeftInterval: any;
        private goingRightInterval: any;
        private attackSequence: any;
        private playerMoveSpeed: number = 10;
        public weapon: objects.Weapon;

        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "player");
            this.weapon = new objects.Weapon(assetManager);
            this.Start();
            this.Move();
            this.hp = 5;
            this.attackPower = 1;
        }

        // Methods
        public Start(): void {
            // set the initial position
            this.y = 700;
            this.x = 320;
            this.playerController = { "W": false, "A": false, "S": false, "D": false, "Z": false };

        }
        
        public Update(): void {
            this.Move();
            this.weapon.Update();
            this.CheckBound(); // <-- Check collisions
        }

        public Reset(): void { }

        public Move(): void {
            //current keyboard implementation - will likely change later
            this.AddEventListeners();
        }

        public CheckBound(): void {
            // right bound
            if (this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }
            // left bound
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
            // top bound
            if (this.y >= 900 - this.halfH) {
                this.y = 900 - this.halfH;
            }
            // bot bound
            if (this.y <= this.halfH) {
                this.y = this.halfH;
            }
        }

        public GetDamage(attacker:objects.GameObject){
            super.GetDamage(attacker);
            if (this.hp < 0){
                console.log(attacker.name + " erased " + this.name + "'s existence from this world.");
                objects.Game.stage.removeChild(this.weapon);
                objects.Game.stage.removeChild(this);
                this.weapon.visible = false;
                this.visible = false;

                //insert gameover transition scene here
            }
        }

        //current keyboard implementation
        private AddEventListeners(): void {
            document.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === "w" || e.key === "ArrowUp") {
                    if (!this.playerController.W) {
                        //console.log('UpKeys: Hold');
                        this.playerController.W = true;
                        this.goingUpInterval = setInterval(() => {
                            this.y -= this.playerMoveSpeed;
                        }, 10);
                    }
                }
                if (e.key === "a" || e.key === "ArrowLeft") {
                    if (!this.playerController.A) {
                        // console.log('LeftKeys: Hold');
                        this.playerController.A = true;
                        this.goingLeftInterval = setInterval(() => {
                            this.x -= this.playerMoveSpeed;
                        }, 10);
                    }
                }
                if (e.key === "s" || e.key === "ArrowDown") {
                    if (!this.playerController.S) {
                        // console.log('DownKeys: Hold');
                        this.playerController.S = true;
                        this.goingDownInterval = setInterval(() => {
                            this.y += this.playerMoveSpeed;
                        }, 10);
                        
                    }
                }
                if (e.key === "d" || e.key === "ArrowRight") {
                    if (!this.playerController.D) {
                        // console.log('RightKeys: Hold');
                        this.playerController.D = true;
                        this.goingRightInterval = setInterval(() => {
                            this.x += this.playerMoveSpeed;
                        }, 10);
                    }
                }                
                if (e.key === "z") {
                    if (!this.playerController.Z) {
                        this.playerController.Z = true;
                        console.log("Attack initiated");
                        this.attackSequence = setInterval(() => {
                            this.weapon.y -= 20;
                            this.weapon.x = this.x;
                        }, 10);
                    }
                }
            });
            // when keyup
            document.addEventListener('keyup', (e: KeyboardEvent) => {
                if (e.key === "w"|| e.key === "ArrowUp") {
                    if (this.playerController.W) {
                        // console.log('UpKeys: Released');
                        this.playerController.W = false;
                        clearInterval(this.goingUpInterval);
                    }
                }
                if (e.key === "a" || e.key === "ArrowLeft") {
                    if (this.playerController.A) {
                        // console.log('LeftKeys: Released');
                        this.playerController.A = false;
                        clearInterval(this.goingLeftInterval);
                    }
                }
                if (e.key === "s" || e.key === "ArrowDown") {
                    if (this.playerController.S) {
                        // console.log('DownKeys: Released');
                        this.playerController.S = false;
                        clearInterval(this.goingDownInterval);
                    }
                }
                if (e.key === "d" || e.key === "ArrowRight") {
                    if (this.playerController.D) {
                        // console.log('RightKeys: Released');
                        this.playerController.D = false;
                        clearInterval(this.goingRightInterval);
                    }
                }
                if (e.key === "z") {
                    if (this.playerController.Z) {
                        // console.log('UpKeys: Released');
                        this.playerController.Z = false;
                        clearInterval(this.attackSequence);
                        console.log("Attack stopped");
                    }
                }
            });
        }
    }
}