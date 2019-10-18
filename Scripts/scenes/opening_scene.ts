module scenes {
    export class OpeningScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private pressEnterLabel: objects.Label;
        
        private cutSceneMessages: Array<string>;
        private currentMessage: number;
        private changingMessage: boolean;

        private player:objects.Player;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            // Initialize our objects for this scene
            this.currentMessage = 0;
            this.changingMessage = false;
            this.background = new objects.Background(this.assetManager, "background");

            this.pressEnterLabel = new objects.Label("", "16px", "'Press Start 2P'", "#000000", 10, 200, true);
            this.pressEnterLabel.color = "#FFFFFF";
            this.cutSceneMessages = [
                "Hello, welcome... stranger",
                "Before we begin, please note you may \nescape cutscenes via the ESC key.\nThat is, if you already know what to do.",
                "In this game, you play the role of \nPhoebe, who is a paranormal bounty\nhunter.",
                "This time, her case involves investi-\ngating a graveyard. Eerie voices were \nreported during the wee hours",
                "Missing persons reports state that \nthe gravekeeper seems to be missing for \na month now ",
                "Graves seem to have been freshly \ntrampled upon, and headstones... let's\njust say these weren't on the right \nplace.",
                "Phoebe already knows what it is -\na ghoulish existence that gained a\nfollowing. A spirit horde...",
                "And she has three objectives:\n\tsolve this case,\n\tearn sweet, sweet dough,\n\tand devour the rest.",
                "Let's jump right in..."
            ];

            //initialize new player
            this.player = new objects.Player(this.assetManager);
            objects.Game.player = this.player;
            
            this.Main();
        }
        public Update():void {
            this.pressEnterLabel.text = this.cutSceneMessages[this.currentMessage];
            document.addEventListener('keydown',(e: KeyboardEvent)=>{
                if(e.key === "Escape"){
                    this.startButtonClick();
                }             
                else if(!this.changingMessage){
                    this.changingMessage = true;
                    setTimeout(() => 
                    {
                        this.nextMessage();
                        this.changingMessage = false;
                    },
                    500);
                }
            });
        }

        private startButtonClick():void {
            // Change our game state to GAME
            objects.Game.currentScene = config.Scene.GRAVEYARD_1;
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