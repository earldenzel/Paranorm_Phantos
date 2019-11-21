module objects{
    export class ShopItem extends objects.GameObject{
        // Variables
        public price: number;
        public priceTag: objects.Label;
        // Constructor
        constructor(item: string, price: number){
            super(managers.Game.item_TextureAtlas, item);
            this.price = price;
            this.Start();
        }
        // Methods
        public Start():void {
            this.priceTag = new objects.Label(
                "$" + this.price, "16px", "'Press Start 2P'", "#FFFF00", this.x, this.y, true);
        }
        public Update():void {
        }
        public Reset():void {           
            this.priceTag.x = this.x;
            this.priceTag.y = this.y - config.Bounds.TEXT_OFFSET;
        }
        public Move():void {}
        public CheckBound():void {}
    }
}