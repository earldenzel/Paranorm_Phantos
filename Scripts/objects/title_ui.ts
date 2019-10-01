module objects{
    export class TitleUI extends createjs.Bitmap{
        // Variables

        // Constructor
        constructor(assetManager:createjs.LoadQueue,x:number = 0, y:number = 0){
            super(assetManager.getResult("title_ui"));
            this.x = x;
            this.y = y;
            this.Start();
        }
        // Methods
        public Start():void{
        }
    }
}