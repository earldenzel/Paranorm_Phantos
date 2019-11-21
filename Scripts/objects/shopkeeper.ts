module objects{
    export class ShopKeeper extends objects.GameObject{
        // Variables
        // Constructor
        constructor(){
            super(managers.Game.item_TextureAtlas, "FortuneTeller");
            this.Start();
        }
        // Methods
        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}