module objects {
    export class Indicator extends objects.GameObject {
        // Constructor
        constructor(textureAtlas: createjs.SpriteSheet, imageString:string) {
            super(textureAtlas, imageString);

            this.name = imageString;
        }

        public Start():void {
            this.visible = false;
        }
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}