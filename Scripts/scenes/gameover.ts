module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameOver: objects.TitleUI;
        //private gameOverLabel: objects.Label;
        private spotlight: createjs.Bitmap;
        private phoebe: createjs.Bitmap;
        private messageTimeout: number = 0;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Method
        public Start():void {
            this.background = new objects.Background("title_background");
            this.gameOver = new objects.TitleUI("gameover_ui",90,240);

            //this.gameOverLabel = new objects.Label(
            //    "Game Over!", "40px", "Consolas", "#000000", 320, 240, true);
            //

            this.spotlight = new createjs.Bitmap(managers.Game.assetManager.getResult("gameover_spotlight"));
            this.spotlight.x = 148;
            this.phoebe = new createjs.Bitmap(managers.Game.assetManager.getResult("player_p_walk7"));
            this.phoebe.x = 260;
            this.phoebe.y = 500;
            managers.Game.keyboardManager.playMode = false;
            this.Main();
        }

        public Update():void {
            if(managers.Game.keyboardManager.attacking){
                if (this.messageTimeout == 0){
                    this.messageTimeout = setTimeout(() => {
                        this.backButtonClick();
                    }, 50);
                }
            }
            else{
                if (this.messageTimeout > 0){
                    this.messageTimeout = 0;
                    clearTimeout(this.messageTimeout);
                }
            } 
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.START;
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.spotlight);
            this.addChild(this.phoebe);
            this.addChild(this.gameOver);
        }
    }
}