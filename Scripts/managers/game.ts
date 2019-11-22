module managers {
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static map_TextureAtlas: createjs.SpriteSheet;
        public static item_TextureAtlas: createjs.SpriteSheet;
        public static phoebe_TextureAtlas: createjs.SpriteSheet;
        public static graveyard_TextureAtlas: createjs.SpriteSheet;
        public static hotel_TextureAtlas: createjs.SpriteSheet;
        public static bat_TextureAtlas: createjs.SpriteSheet;
        public static spider_TextureAtlas: createjs.SpriteSheet;
        public static shootingFlower_TextureAtlas: createjs.SpriteSheet;
        // KC
        public static enemies_TextureAtlas: createjs.SpriteSheet; 
        public static titleUIMap_TextureAtlas: createjs.SpriteSheet;
        public static bulletManager: managers.Bullet;
        public static phantos_TextureAtlas: createjs.SpriteSheet;
        public static phantorm_TextureAtlas: createjs.SpriteSheet;
        public static currentScene: number;
        public static player: objects.Player;
        public static gameHeight: number = 900;
        public static gameWidth: number = 640;
        //public static messageStatus: objects.Label
        public static keyboardManager: managers.Keyboard;
        public static SFX: createjs.AbstractSoundInstance;

    }
}