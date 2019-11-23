module managers{
    export class Shop{
        // Variables
        public shopKeeper: objects.ShopKeeper;
        public chooseYes: objects.Label;
        public chooseNo: objects.Label;
        public selected: objects.ShopItem;
        public hasItemSelected: boolean;
        public canChoose: boolean;
        public shopItems: Array<objects.ShopItem> = new Array<objects.ShopItem>();
        // Constructor
        constructor(){
        }
        // Methods
        public Start():void {
            this.canChoose = true;
            this.shopKeeper = new objects.ShopKeeper;
            this.shopKeeper.SetPosition(new math.Vec2 (285, 285));
            this.chooseYes = new objects.Label(
                "YES", "16px", "'Press Start 2P'", "#FFFF00", 185, 285, true);
            this.chooseNo = new objects.Label(
                "NO", "16px", "'Press Start 2P'", "#FFFF00", 385, 285, true);
            this.chooseYes.addEventListener("click", this.buyItem.bind(this), false);
            this.chooseNo.addEventListener("click", this.cancelBuy.bind(this), false);
            this.Reset();
            
            this.shopItems[0] = new objects.ShopItem("Items_Hellebore-Flower1", 500, config.Effects.INCREASE_MAX_HP, config.Scene.GRAVEYARD_7);     
            this.shopItems[0].SetPosition(new math.Vec2(185, 400));
            this.shopItems[0].description = "This increases your Max HP. Buy?";
            
            this.shopItems[1] = new objects.ShopItem("Items_Key", 10, config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_7);  
            this.shopItems[1].SetPosition(new math.Vec2(285, 400));
            this.shopItems[1].description = "That'd be ten bucks please.";
            
            this.shopItems[2] = new objects.ShopItem("Items_Hellebore-Flower2", 1000, config.Effects.INCREASE_ATK, config.Scene.GRAVEYARD_7);    
            this.shopItems[2].SetPosition(new math.Vec2(385, 400));
            this.shopItems[2].description = "Concentrated power for $1000";    
        }

        public Reset():void {            
            this.chooseYes.visible = false;
            this.chooseNo.visible = false;
        }

        public Update(): void{            
            this.shopKeeper.Update();        
            this.hasItemSelected = false;
            this.shopItems.forEach(e => {
                if (!e.available){
                    e.visible = false;
                    e.priceTag.visible = false;
                }
                this.hasItemSelected = 
                    this.hasItemSelected || managers.Collision.Check(managers.Game.player, e);  
                if (managers.Collision.Check(managers.Game.player, e)){  
                    this.selected = e;
                }
            });

            if (this.hasItemSelected){
                if (this.canChoose){
                    managers.Game.keyboardManager.ControlReset();                        
                    this.shopKeeper.TellItemInformation(this.selected);
                    this.chooseYes.visible = true;
                    this.chooseNo.visible = true;
                }
                else{
                    managers.Game.keyboardManager.enabled = true;
                    this.Reset();
                }
            }
            else{
                this.canChoose = true;
                managers.Game.keyboardManager.enabled = true;
                this.Reset();
            }
        }

        public buyItem(){
            if (this.selected != null){
                if (managers.Game.player.money > this.selected.price){
                    this.selected.TriggerShopEffect();
                    this.shopKeeper.dialog.text = "Thanks for doing business";
                    managers.Game.player.GainDollars(-this.selected.price);
                    this.selected.available = false;
                }
                else{
                    this.shopKeeper.dialog.text = "You don't have enough";
                }
            }
            this.shopKeeper.dialog.Recenter();
            this.canChoose = false;
        }

        public cancelBuy(){
            this.canChoose = false;
            this.shopKeeper.dialog.text = "Okay then!";
            this.shopKeeper.dialog.Recenter();
        }

        public SetShopItems(): void{

        }
    }
}
