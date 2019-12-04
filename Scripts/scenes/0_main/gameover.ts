module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameOver: objects.TitleUI;
        //private gameOverLabel: objects.Label;
        private pressEnterLabel: objects.Label;
        private spotlight: createjs.Bitmap;
        private phoebe: createjs.Bitmap;
        private messageTimeout: number = 0;
        private attemptToCancel: boolean = false;
        private retryingAgain: boolean = false;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Method
        public Start():void {
            this.background = new objects.Background("title_background");
            this.gameOver = new objects.TitleUI("GameOver",90,240);
            this.attemptToCancel = false;

            //this.gameOverLabel = new objects.Label(
            //    "Game Over!", "40px", "Consolas", "#000000", 320, 240, true);
            //

            this.spotlight = new createjs.Bitmap(managers.Game.assetManager.getResult("gameover_spotlight"));
            this.spotlight.x = 148;
            this.phoebe = new createjs.Bitmap(managers.Game.assetManager.getResult("player_p_walk7"));
            this.phoebe.x = 260;
            this.phoebe.y = 500;
            this.pressEnterLabel = new objects.Label("PRESS ENTER TO CONTINUE", "16px", "'Press Start 2P'", "#000000", 300, 700, true);
            this.pressEnterLabel.color = "#FFFFFF";
            managers.Game.keyboardManager.playMode = false;

            // Play Music
            managers.Game.music = createjs.Sound.play("music_gameOver");
            managers.Game.music.loop = 0;
            managers.Game.music.volume = 0.1;

            this.Main();
            
            managers.Game.player.deathCount++;
            managers.Game.player.Reset();
        }

        public Update():void {
            if(managers.Game.keyboardManager.confirming && !this.retryingAgain){
                this.retryingAgain = true;
                if (this.messageTimeout == 0){
                    this.messageTimeout = setTimeout(() => {
                        this.backButtonClick();
                    }, 1000);
                }
            }
            else{
                if (this.messageTimeout > 0){
                    this.messageTimeout = 0;
                    clearTimeout(this.messageTimeout);
                }
            } 
            if(managers.Game.keyboardManager.cancelling){
                if (this.attemptToCancel){
                    createjs.Sound.stop();
                    managers.Game.currentScene = config.Scene.START;
                }
                else{
                    this.pressEnterLabel.text = "PRESS ESC AGAIN TO RESET";
                    setTimeout(() => {                        
                        this.attemptToCancel = true;
                    }, 1000);
                }
            }
        }

        private backButtonClick():void {
            createjs.Sound.stop();            
            managers.Game.currentScene = config.Scene.OPENING_SCENE;
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.spotlight);
            this.addChild(this.phoebe);
            this.addChild(this.pressEnterLabel);
            this.addChild(this.gameOver);
        }
    }
}