module scenes {
    export class OpeningScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private pressEnterLabel: objects.Label;
        
        private cutSceneMessages: Array<string>;
        private currentMessage: number;
        private messageTimeout: number = 0;

        private player:objects.Player;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        public Start():void {
            // Initialize our objects for this scene
            this.currentMessage = 0;
            this.background = new objects.Background("background");

            this.pressEnterLabel = new objects.Label("", "16px", "'Press Start 2P'", "#000000", 10, 200, true);
            this.pressEnterLabel.color = "#FFFFFF";
            this.cutSceneMessages = [
                "",
                "Hello, welcome... stranger",
                "Before we begin, please note you \nmay escape cutscenes via the ESC \nkey.\nThat is, if you already know what \nto do.",
                "In this game, you play the role of \nPhoebe, who is a paranormal bounty\nhunter.",
                "This time, her case involves \ninvestigating a graveyard. Eerie \nvoices were reported during the \nwee hours",
                "Missing persons reports state that \nthe gravekeeper seems to be \nmissing for a month now ",
                "Graves seem to have been freshly \ntrampled upon, and headstones... \nlet's just say these weren't on \nthe right place.",
                "Phoebe already knows what it is -\na ghoulish existence that gained a\nfollowing. A spirit horde...",
                "And she has three objectives:\n\tsolve this case,\n\tearn sweet, sweet dough,\n\tand devour the rest.",
                "Let's jump right in..."
            ];

            //initialize new player
            this.player = new objects.Player();
            managers.Game.player = this.player;
            
            this.Main();
        }
        public Update():void {
            this.pressEnterLabel.text = this.cutSceneMessages[this.currentMessage];
            if (managers.Game.keyboardManager.biting){
                setTimeout(() => {
                        this.startButtonClick();
                    }, 200);
            }
            
            //press attack button to show next message
            if (managers.Game.keyboardManager.attacking){
                if (this.messageTimeout == 0){
                    this.messageTimeout = setTimeout(() => {
                        this.nextMessage();
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
            // Change our game state to GAME
            managers.Game.currentScene = config.Scene.GRAVEYARD_1;
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.pressEnterLabel);
        }

        private nextMessage(): void{
            this.currentMessage++;
            if (this.currentMessage >= this.cutSceneMessages.length){
                this.startButtonClick();
            }

        }
    }
}