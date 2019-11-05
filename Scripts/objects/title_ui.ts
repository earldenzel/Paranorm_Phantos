module objects{
    export class TitleUI extends createjs.Bitmap{
        // Variables

        // Constructor
        constructor(imageString: string,x:number = 0, y:number = 0){
            super(managers.Game.assetManager.getResult(imageString));
            this.x = x;
            this.y = y;
            this.Start();
        }
        // Methods
        public Start():void{
        }
    }
}