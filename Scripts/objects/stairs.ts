module objects {
    export class Stairs extends objects.GameObject {
        public nextScene: config.Scene;
        // Constructor
        constructor(nextScene: config.Scene, up: boolean) {
            if (up){
                super(managers.Game.graveyard_TextureAtlas, "Upstairs");
            }
            else{
                super(managers.Game.graveyard_TextureAtlas, "Downstairs");
            }
            this.nextScene = nextScene;
            this.Start();
        }

        public Start():void {
        }
        public Update():void {

        }
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}