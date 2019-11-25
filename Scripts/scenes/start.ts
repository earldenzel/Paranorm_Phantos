module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private title: objects.TitleUI;
        //private welcomeLabel: objects.Label;
        //private startButton: objects.Button;
        private pressEnterLabel: objects.Label;
        private messageTimeout: number = 0;
        private enterVisibility: boolean;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background("title_background");

            //this.welcomeLabel = new objects.Label(
            //    "PARANORM //// PHANTOS", "40px", "Consolas", "#FFFFFF", 320, 240, true);

            this.title = new objects.TitleUI("Title",40,240);
            //this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 500);
            this.pressEnterLabel = new objects.Label("PRESS ENTER", "16px", "'Press Start 2P'", "#000000", 300, 500, true);
            this.pressEnterLabel.color = "#FFFFFF";
            this.enterVisibility = true;

            managers.Game.keyboardManager.playMode = false;

            // Play Music
            managers.Game.music = createjs.Sound.play("music_title");
            managers.Game.music.loop = -1;
            managers.Game.music.volume = 0.1;
            
            this.Main();
        }
        public Update():void {
            //press attack button to show next message
            if (managers.Game.keyboardManager.attacking){
                if (this.messageTimeout == 0){
                    this.messageTimeout = setTimeout(() => {
                        this.startButtonClick();
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

        private startButtonClick():void {
            //initialize player on start play
            let player = new objects.Player();
            managers.Game.player = player;
            createjs.Sound.stop();
            // Change our game state from START to OPENING_SCENE
            managers.Game.currentScene = config.Scene.OPENING_SCENE;
        }

        public Main():void {
            // Add items to our scene
            this.addChild(this.background);
            this.addChild(this.title);
            this.addChild(this.pressEnterLabel);
            //this.addChild(this.startButton);
            //this.startButton.on("click", this.startButtonClick);
        }
    }
}