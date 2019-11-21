module objects{
    export class ShopKeeper extends objects.GameObject{
        // Variables        
        public dialog: objects.Label;
        private dialogMessages: Array<string>;
        private currentDisplay: number = 0;
        public interrupted: boolean;
        // Constructor
        constructor(){
            super(managers.Game.item_TextureAtlas, "FortuneTeller");
            this.Start();
        }
        // Methods
        public Start():void {
            this.dialogMessages = [
                "Hello!",
                "Welcome to the secret shop.",
                "You choose what you want...",
                "and you pay me in dollars.",
                "Simple, right?",
                ""
            ];
            this.dialog = new objects.Label(
                this.dialogMessages[this.currentDisplay], "16px", "'Press Start 2P'", "#FFFF00", this.x, this.y, true);
        }
        public Update():void {
            this.dialog.x = this.x;
            this.dialog.y = this.y - this.halfH - config.Bounds.TEXT_OFFSET;

            
            let ticker: number = createjs.Ticker.getTicks();

            if (ticker % 100 == 0){
                if (this.currentDisplay++ < this.dialogMessages.length){
                    this.dialog.text = this.dialogMessages[this.currentDisplay];
                    this.dialog.Recenter();
                }

            }
        }
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}

        public TellItemInformation(shopItem: objects.ShopItem){
            this.dialog.text = shopItem.name;
            this.dialog.Recenter();
            this.interrupted = true;
        }
    }
}