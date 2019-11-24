module objects{
    export class ShopItem extends objects.GameObject{
        // Variables
        public price: number;
        public priceTag: objects.Label;
        public description: string;
        public effect: config.Effects;
        public available: boolean = true;
        public appearingScene: number;
        // Constructor
        constructor(item: string, price: number, effect: config.Effects, appearingScene: number){
            super(managers.Game.item_TextureAtlas, item);
            this.price = price;
            this.effect = effect;
            this.appearingScene = appearingScene;
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
                case config.Effects.INCREASE_MAX_HP:
                    managers.Game.player.GainMaxHealth(5);
                    break;
                case config.Effects.INCREASE_KEY_COUNT:
                    managers.Game.player.key++;
                    break;
                case config.Effects.INCREASE_ATK:
                    managers.Game.player.GainAttack(10);
                    break;                
                case config.Effects.INCREASE_SPEED:
                    managers.Game.player.GainSpeed(1);
                    break;                        
                case config.Effects.FRESHEN_UP:
                    managers.Game.player.GainHealth(99);
                    managers.Game.player.GainEcto(5);
                    break;
            }
        }
    }
}