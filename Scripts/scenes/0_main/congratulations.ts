module scenes {
    export class CongratulationScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private congratulation: objects.Background;
        private creditScroll: managers.CreditScroll;
        private counter: number = 0;
        private messageTimeout: number = 0;

        // Constructor
        constructor(){
            super();
            this.Start();
        }

        // Methods
        public Start():void {
            this.background = new objects.Background("background");
            this.congratulation = new objects.Background("congratulation_ui");
            this.congratulation.x = 10;
            this.congratulation.y = 60;

            this.creditScroll = new managers.CreditScroll();
            this.creditScroll.y = 700;

            managers.Game.keyboardManager.playMode = false;
            // Play Music
            managers.Game.music = createjs.Sound.play("music_credits");
            managers.Game.music.loop = 0;
            managers.Game.music.volume = 0.1;

            this.Main();
        }

        public Update():void{
            if(this.counter < (315 * 30)){
                this.creditScroll.y-= 0.5;
                managers.Game.keyboardManager.enabled = false; 
            }
            else {
                managers.Game.keyboardManager.enabled = true;

                if (managers.Game.keyboardManager.confirming){
                    if (this.messageTimeout == 0){
                        this.messageTimeout = setTimeout(() => {
                            this.startButtonClick();
                        }, 50);
                    }
                }
            }
            this.counter++;
        }
        public Main():void {
            this.addChild(this.background);
            this.addChild(this.creditScroll);
            this.addChild(this.congratulation);
        }

        private startButtonClick():void {
            createjs.Sound.stop();
            managers.Game.currentScene = config.Scene.START;
        }
    }
}