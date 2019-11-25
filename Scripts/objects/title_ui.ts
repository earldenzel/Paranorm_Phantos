module objects{
    export class TitleUI extends createjs.Sprite{
        // Variables

        // Constructor
        constructor(imageString: string,x:number = 0, y:number = 0){
            super(managers.Game.titleUIMap_TextureAtlas,imageString);
            this.x = x;
            this.y = y;
            this.Start();
        }
        // Methods
        public Start():void{
        }
    }
}