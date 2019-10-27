module objects{
    export class Barriers extends objects.GameObject{
        // Variables

        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString: string){
            super(assetManager,imageString);
            this.Start();
            
        }
        // Methods
        public Start():void {
            this.x = 200;
            this.y = 200;
        }
        public Update():void {}
        public Reset():void {}
        public Move(): void {}
        public CheckBound():void{}
    }
}