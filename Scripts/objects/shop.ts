module objects{
    export class Shop extends createjs.Container{
        // Variables
        private shopKeeper: objects.ShopKeeper;
        private shopItems: Array<objects.ShopItem>;
        private chooseYes: objects.Label;
        private chooseNo: objects.Label;
        private selected: objects.ShopItem;
        private hasItemSelected: boolean;
        private canChoose: boolean;
        // Constructor
        constructor(shopItems: Array<objects.ShopItem>){
            super();
            this.shopItems = shopItems;
            this.Start();
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
            this.Main();
        }


        public Update():void {
            this.shopKeeper.Update();
            
            this.hasItemSelected = false;
            this.shopItems.forEach(e => {
                if (!e.available){
                    e.visible = false;
                    e.priceTag.visible = false;
                }
                this.hasItemSelected = this.hasItemSelected || managers.Collision.Check(managers.Game.player, e);  
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

        public Reset():void {            
            this.chooseYes.visible = false;
            this.chooseNo.visible = false;
        }
        public Move():void {}
        public CheckBound():void {}
        public Main(): void{
            this.addChild(this.shopKeeper);
            this.addChild(this.shopKeeper.dialog);
            this.addChild(this.chooseYes);
            this.addChild(this.chooseNo);
            this.shopItems.forEach(e => {
                this.addChild(e);
                e.Reset();
                this.addChild(e.priceTag);
            });   
        }

        public buyItem(){
            if (this.selected != null){
                if (managers.Game.player.money > this.selected.price){
                    this.selected.TriggerShopEffect();
                    this.shopKeeper.dialog.text = "Thanks for doing business";
                    managers.Game.player.GainDollars(-this.selected.price);
                    this.selected.priceTag.text = "a";
                    this.selected.priceTag.Recenter();
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
    }
}
