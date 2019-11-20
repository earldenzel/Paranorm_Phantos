module objects {
    export class Stairs extends objects.GameObject {
        public nextScene: config.Scene;
        // Constructor
        constructor(nextScene: config.Scene) {
            super(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile_Stairs");
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