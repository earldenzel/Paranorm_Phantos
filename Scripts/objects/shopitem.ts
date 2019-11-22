module objects{
    export class ShopItem extends objects.GameObject{
        // Variables
        public price: number;
        public priceTag: objects.Label;
        public description: string;
        public effect: config.ShopEffects;
        public available: boolean = true;
        // Constructor
        constructor(item: string, price: number, effect: config.ShopEffects){
            super(managers.Game.item_TextureAtlas, item);
            this.price = price;
            this.effect = effect;
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
            this.priceTag.y = this.y - this.halfH - config.Bounds.TEXT_OFFSET;
        }
        public Move():void {}
        public CheckBound():void {}
        public TriggerShopEffect(){
            switch (this.effect){
                case config.ShopEffects.INCREASE_MAX_HP:
                    managers.Game.player.GainMaxHealth(5);
                    break;
                case config.ShopEffects.INCREASE_KEY_COUNT:
                    managers.Game.player.key++;
                    break;
                case config.ShopEffects.INCREASE_ATK:
                    managers.Game.player.GainAttack(10);
                    break;
            }
        }
    }
}