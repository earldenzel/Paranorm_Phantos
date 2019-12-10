module objects {
    export class Stairs extends objects.GameObject {
        public nextScene: config.Scene;
        // Constructor
        constructor(nextScene: config.Scene, design: config.Design, up: boolean) {
            switch (design) {
                case config.Design.GRAVEYARD:
                        if (up) {
                            super(managers.Game.graveyard_TextureAtlas, "Upstairs");
                        }
                        else {
                            super(managers.Game.graveyard_TextureAtlas, "Downstairs");
                        }
                    break;
                case config.Design.HOTEL:
                        if (up) {
                            super(managers.Game.hotel_TextureAtlas, "Upstairs");
                        }
                        else {
                            super(managers.Game.hotel_TextureAtlas, "Downstairs");
                        }
                    break;
                case config.Design.MANSION:
                        if (up) {
                            super(managers.Game.mansion_TextureAtlas, "Upstairs");
                        }
                        else {
                            super(managers.Game.mansion_TextureAtlas, "Downstairs");
                        }
                    break;
            }
            this.nextScene = nextScene;
            this.Start();
        }

        public Start(): void {
        }
        public Update(): void {

        }
        public Reset(): void { }
        public Move(): void { }
        public CheckBound(): void { }
    }
}