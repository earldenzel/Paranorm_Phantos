module objects{
    export class Shop extends createjs.Container{
        // Variables
        private shopKeeper: objects.ShopKeeper;
        private shopItems: Array<objects.ShopItem>;
        // Constructor
        constructor(shopItems: Array<objects.ShopItem>){
            super();
            this.shopItems = shopItems;
            this.Start();
        }
        // Methods
        public Start():void {
            this.shopKeeper = new objects.ShopKeeper;
            this.shopKeeper.SetPosition(new math.Vec2 (285, 285));
            this.shopItems[0].SetPosition(new math.Vec2(185, 400));
            this.shopItems[1].SetPosition(new math.Vec2(285, 400));
            this.shopItems[2].SetPosition(new math.Vec2(385, 400));
            this.Main();
            
            
        }
        public Update():void {
            this.shopKeeper.Update();
            this.shopItems.forEach(e => {
                console.log(e.x + " " + e.y);
                if (managers.Collision.Check(managers.Game.player, e)){
                    this.shopKeeper.TellItemInformation(e);
                }
            });    
        }
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
        public Main(): void{
            this.addChild(this.shopKeeper);
            this.addChild(this.shopKeeper.dialog);
            this.shopItems.forEach(e => {
                this.addChild(e);
                e.Reset();
                this.addChild(e.priceTag);
            });    
        }
    }
}
