module objects {
    export class ShowItem extends createjs.Sprite {
        // Variables
        protected speedY: number;

        public width: number;
        public height: number;
        public halfW: number;   // Half-width; Useful for collision detection
        public halfH: number;   // Half-height

        // Constructor
        constructor(imageString:string) {
            super(managers.Game.item_TextureAtlas, imageString);
            this.name = imageString;

            this.Init();
        }
        // Methods 
        private Init():void {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            
            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;
        }

        public Start():void {
            this.visible = false;
            this.scaleX = 1.5;
            this.scaleY = 1.5;
        }
        public Update():void {            
            if (this.visible){
                this.rotation -= 10;
                this.y -= 2;
                setTimeout(() => {
                    this.visible = false;
                    managers.Game.currentStage.removeChild(this);
                }, 650);
            }
        }
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}