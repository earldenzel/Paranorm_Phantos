module managers {
    export class Keyboard {
        // Variables
        public moveUp: boolean;
        public moveDown: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public attacking: boolean;
        public biting: boolean;
        public running: boolean;

        public enabled: boolean;
        public attackEnabled: boolean = true;
        public pause: boolean;
        public playMode: boolean;

        // Constructor
        constructor() {
            this.enabled = true;
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }

        // Methods
        public onKeyDown(event: KeyboardEvent): void {
            if (this.enabled){
                if(this.playMode){
                    switch (event.keyCode) {
                        case config.Keys.W:
                        case config.Keys.UP_ARROW:
                            this.moveUp = true;
                            break;
                        case config.Keys.A:
                        case config.Keys.LEFT_ARROW:
                            this.moveLeft = true;
                            break;
                        case config.Keys.S:
                        case config.Keys.DOWN_ARROW:
                            this.moveDown = true;
                            break;
                        case config.Keys.D:
                        case config.Keys.RIGHT_ARROW:
                            this.moveRight = true;
                            break;
                        case config.Keys.J:
                        case config.Keys.Z:
                            if (this.attackEnabled){
                                this.attacking = true;
                            }
                            break;              
                        case config.Keys.X:
                        case config.Keys.K:  
                            this.biting = true;
                            break;
                        case config.Keys.L:
                        case config.Keys.C:
                            this.running = true;
                            break;
                        case config.Keys.ENTER:
                            this.pause = !this.pause;
                            break;
                        case config.Keys.ESCAPE:
                            break;
                    }
                }
                else{
                    switch (event.keyCode) {
                        case config.Keys.J:
                        case config.Keys.Z:
                        case config.Keys.ENTER:
                            if (this.attackEnabled){
                                this.attacking = true;
                            }
                            break;              
                        case config.Keys.X:
                        case config.Keys.K:  
                        case config.Keys.ESCAPE:
                            this.biting = true;
                            break;
                    }
                }
            }
        }
        public onKeyUp(event: KeyboardEvent): void {
            if (this.enabled){
                if(this.playMode){
                    switch (event.keyCode) {
                        case config.Keys.W:
                        case config.Keys.UP_ARROW:
                            this.moveUp = false;
                            break;
                        case config.Keys.A:
                        case config.Keys.LEFT_ARROW:
                            this.moveLeft = false;
                            break;
                        case config.Keys.S:
                        case config.Keys.DOWN_ARROW:
                            this.moveDown = false;
                            break;
                        case config.Keys.D:
                        case config.Keys.RIGHT_ARROW:
                            this.moveRight = false;
                            break;
                        case config.Keys.J:
                        case config.Keys.Z:
                            if (this.attackEnabled){
                                this.attacking = false;
                            }
                            break;              
                        case config.Keys.X:
                        case config.Keys.K:  
                            this.biting = false;
                            break;
                        case config.Keys.L:
                        case config.Keys.C:
                            this.running = false;
                            break;
                        case config.Keys.ENTER:
                            this.pause = !this.pause;
                            break;
                        case config.Keys.ESCAPE:
                            break;
                    }
                }
                else{
                    switch (event.keyCode) {
                        case config.Keys.J:
                        case config.Keys.Z:
                        case config.Keys.ENTER:
                            if (this.attackEnabled){
                                this.attacking = false;
                            }
                            break;              
                        case config.Keys.X:
                        case config.Keys.K:  
                        case config.Keys.ESCAPE:
                            this.biting = false;
                            break;
                    }
                }
            }
        }
    }
}