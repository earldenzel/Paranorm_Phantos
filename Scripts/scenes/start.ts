module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.TitleBackground;
        private title: objects.TitleUI;
        //private welcomeLabel: objects.Label;
        private startButton: objects.Button;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.TitleBackground(this.assetManager);

            //this.welcomeLabel = new objects.Label(
            //    "PARANORM //// PHANTOS", "40px", "Consolas", "#FFFFFF", 320, 240, true);

            this.title = new objects.TitleUI(this.assetManager,90,240);
            this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 500);
            this.Main();
        }
        public Update():void {
            document.addEventListener('keydown',(e: KeyboardEvent)=>{
                if(e.key === "Enter"){
                    this.startButtonClick();
                }
            });
        }

        private startButtonClick():void {
            // Change our game state from START to GAME
            objects.Game.currentScene = config.Scene.GAME;
        }

        public Main():void {
            // Add items to our scene
            this.addChild(this.background);
            this.addChild(this.title);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }
    }
}