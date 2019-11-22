module scenes {

    export class Graveyard_7 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, false, true, false);
            this.hasShop = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_5;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(46,28);
            this.shopItems[0] = new objects.ShopItem("Items_Hellebore-Flower1", 500, config.ShopEffects.INCREASE_MAX_HP);     
            this.shopItems[0].SetPosition(new math.Vec2(185, 400));
            this.shopItems[0].description = "This increases your Max HP. Buy?";
            
            this.shopItems[1] = new objects.ShopItem("Items_Key", 10, config.ShopEffects.INCREASE_KEY_COUNT); 
            this.shopItems[1].SetPosition(new math.Vec2(285, 400));
            this.shopItems[1].description = "That'd be ten bucks please.";
            
            this.shopItems[2] = new objects.ShopItem("Items_Hellebore-Flower2", 1000, config.ShopEffects.INCREASE_ATK);      
            this.shopItems[2].SetPosition(new math.Vec2(385, 400));
            this.shopItems[2].description = "Concentrated power for $1000";
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();            
        }
    }
}