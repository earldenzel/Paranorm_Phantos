module objects {
    export interface Controller<T> { [key: string]: T };
    export class Player extends objects.GameObject {
        private playerController: Controller<boolean>;
        private goingUpInterval: any;
        private goingDownInterval: any;
        private goingLeftInterval: any;
        private goingRightInterval: any;

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
            this.Move();
        }

        // Methods
        public Start(): void {
            // set the initial position
            this.y = 700;
            this.x = 320;

            this.playerController = { "W": false, "A": false, "S": false, "D": false };
        }

        public Update(): void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset(): void { }
        public Move(): void {
            // We reference the stage object and get mouse position
            // this.x = objects.Game.stage.mouseX;
            // this.y = objects.Game.stage.mouseY;

            // this is evetually replaced with keyboard input
            this.AddEventListeners();
            // Maybe xbox controller
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
        }

        private AddEventListeners(): void {
            document.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === "w" || e.key === "ArrowUp") {
                    if (!this.playerController.W) {
                        //console.log('UpKeys: Hold');
                        this.playerController.W = true;
                        this.goingUpInterval = setInterval(() => {
                            this.y -= 1;
                        }, 10);
                    }
                }
                if (e.key === "a" || e.key === "ArrowLeft") {
                    if (!this.playerController.A) {
                        // console.log('LeftKeys: Hold');
                        this.playerController.A = true;
                        this.goingLeftInterval = setInterval(() => {
                            this.x -= 1;
                        }, 10);
                    }
                }
                if (e.key === "s" || e.key === "ArrowDown") {
                    if (!this.playerController.S) {
                        // console.log('DownKeys: Hold');
                        this.playerController.S = true;
                        this.goingDownInterval = setInterval(() => {
                            this.y += 1;
                        }, 10);
                        
                    }
                }
                if (e.key === "d" || e.key === "ArrowRight") {
                    if (!this.playerController.D) {
                        // console.log('RightKeys: Hold');
                        this.playerController.D = true;
                        this.goingRightInterval = setInterval(() => {
                            this.x += 1;
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
            });
        }
    }
}