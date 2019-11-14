module objects{
    export class Key extends objects.GameObject{
        // Variables
        // Constructor
        constructor(){
            super(managers.Game.item_TextureAtlas, "Items_Key");
            this.Start();
        }
        // Methods
        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
        public RemoveFromPlay():void{
            this.visible = false;
            managers.Game.stage.removeChild(this);
        }
    }
}