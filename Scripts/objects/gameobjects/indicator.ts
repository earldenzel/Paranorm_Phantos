module objects {
    export class Indicator extends objects.GameObject {
        // Constructor
        constructor(imageString:string) {
            super(managers.Game.item_TextureAtlas, imageString);
            this.name = imageString;
            this.Start();
        }

        public Start():void {
            this.scaleX = 0.8;
            this.scaleY = 0.8;
        }
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}