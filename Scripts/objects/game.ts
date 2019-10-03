module objects {
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static player: objects.Player;
        public static gameHeight: number = 900;
        public static gameWidth: number = 640;
        public static messageStatus: objects.Label;
    }
}