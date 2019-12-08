module managers{
    export class Shop{
        // Variables
        public shopKeeper: objects.ShopKeeper;
        public chooseYes: objects.Label;
        public chooseNo: objects.Label;
        public indicatorYes: objects.Indicator;
        public indicatorNo: objects.Indicator;
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
            this.indicatorYes = new objects.Indicator("attackIndicator");
            this.indicatorYes.SetPosition(new math.Vec2(185, 315));
            this.chooseNo = new objects.Label(
                "NO", "16px", "'Press Start 2P'", "#FFFF00", 385, 285, true);
            this.indicatorNo = new objects.Indicator("stunIndicator");
            this.indicatorNo.SetPosition(new math.Vec2(385, 315));
            //this.chooseYes.addEventListener("click", this.buyItem.bind(this), false);
            //this.chooseNo.addEventListener("click", this.cancelBuy.bind(this), false);
            this.Reset();
            
            this.shopItems[0] = new objects.ShopItem("Items_Hellebore-Flower1", 150, config.Effects.INCREASE_MAX_HP, config.Scene.GRAVEYARD_7);     
            this.shopItems[0].SetPosition(new math.Vec2(185, 400));
            this.shopItems[0].description = "This increases your Max HP. Buy?";
            
            this.shopItems[1] = new objects.ShopItem("Items_Key", 10, config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_7);  
            this.shopItems[1].SetPosition(new math.Vec2(285, 400));
            this.shopItems[1].description = "That'd be ten bucks please.";
            
            this.shopItems[2] = new objects.ShopItem("Items_Rubies", 1000, config.Effects.INCREASE_ATK, config.Scene.GRAVEYARD_7);    
            this.shopItems[2].SetPosition(new math.Vec2(385, 400));
            this.shopItems[2].description = "Power in a gem - just for you";
            
            this.shopItems[3] = new objects.ShopItem("Items_Hellebore-Flower1", 500, config.Effects.INCREASE_MAX_HP, config.Scene.HOTEL_14);     
            this.shopItems[3].SetPosition(new math.Vec2(185, 400));
            this.shopItems[3].description = "More maximum health for ya. Good?";
            
            this.shopItems[4] = new objects.ShopItem("Items_Hellebore-Flower2", 50, config.Effects.FRESHEN_UP, config.Scene.HOTEL_14);  
            this.shopItems[4].SetPosition(new math.Vec2(285, 400));
            this.shopItems[4].description = "Pay me fifty, I heal ye.";
            
            this.shopItems[5] = new objects.ShopItem("Items_Sapphires", 1000, config.Effects.INCREASE_SPEED, config.Scene.HOTEL_14);    
            this.shopItems[5].SetPosition(new math.Vec2(385, 400));
            this.shopItems[5].description = "Literally makes you more agile";    
            
            this.shopItems[6] = new objects.ShopItem("Items_Emeralds", 3000, config.Effects.INCREASE_SWING_SPEED, config.Scene.MANSION_5);     
            this.shopItems[6].SetPosition(new math.Vec2(185, 400));
            this.shopItems[6].description = "Make your mean swing meaner";
            
            this.shopItems[7] = new objects.ShopItem("Items_Pearl", 500, config.Effects.RANDOM_POWER, config.Scene.MANSION_5);  
            this.shopItems[7].SetPosition(new math.Vec2(285, 400));
            this.shopItems[7].description = "A random power for $500";
            
            this.shopItems[8] = new objects.ShopItem("Items_Diamonds", 5000, config.Effects.LEVEL_RESETTER, config.Scene.MANSION_5);    
            this.shopItems[8].SetPosition(new math.Vec2(385, 400));
            this.shopItems[8].description = "Reset your level to 0 but keep progress";    
        }

        public Reset():void {            
            this.chooseYes.visible = false;
            this.chooseNo.visible = false;
            this.indicatorYes.visible = false;
            this.indicatorNo.visible = false;
        }

        public Update(): void{            
            this.shopKeeper.Update();        
            this.hasItemSelected = false;
            let shopItems: Array<objects.ShopItem> = this.shopItems.filter(e => {
                return (e.appearingScene == managers.Game.currentScene);
            });

            shopItems.forEach(e => {
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
                    managers.Game.keyboardManager.ControlReset(false);                        
                    this.shopKeeper.TellItemInformation(this.selected);
                    this.chooseYes.visible = true;
                    this.chooseNo.visible = true;
                    this.indicatorYes.visible = true;
                    this.indicatorNo.visible = true;
                }
                else{
                    managers.Game.keyboardManager.playMode = true;
                    this.Reset();
                }
            }
            else{
                this.canChoose = true;
                managers.Game.keyboardManager.playMode = true;
                this.Reset();
            }

            if(managers.Game.keyboardManager.confirming){
                this.buyItem();

            }
            if (managers.Game.keyboardManager.cancelling){
                this.cancelBuy();

            }
        }

        public buyItem(){
            if (this.selected != null){
                if (managers.Game.player.money >= this.selected.price){
                    this.selected.TriggerShopEffect();
                    this.shopKeeper.dialog.text = "Thanks for doing business";
                    managers.Game.player.GainDollars(-this.selected.price);
                    managers.Game.SFX = createjs.Sound.play("itemCollect");
                    managers.Game.SFX.volume = 0.6;
                    this.selected.available = false;
                }
                else{
                    this.shopKeeper.dialog.text = "You don't have enough";
                }
            }
            this.shopKeeper.dialog.Recenter();
            this.canChoose = false;
            this.selected = null;
            managers.Game.keyboardManager.confirming = false;
        }

        public cancelBuy(){
            this.canChoose = false;
            this.shopKeeper.dialog.text = "Okay then!";
            this.shopKeeper.dialog.Recenter();
            managers.Game.keyboardManager.cancelling = false;
            managers.Game.SFX = createjs.Sound.play("enemiesHit");
            managers.Game.SFX.volume = 0.2;
        }

        public SetShopItems(): void{

        }
    }
}
