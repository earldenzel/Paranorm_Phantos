module managers {
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static map_TextureAtlas: createjs.SpriteSheet;
        public static item_TextureAtlas: createjs.SpriteSheet;
        public static phoebe_TextureAtlas: createjs.SpriteSheet;
        public static graveyard_TextureAtlas: createjs.SpriteSheet;
        public static hotel_TextureAtlas: createjs.SpriteSheet;
        public static mansion_TextureAtlas: createjs.SpriteSheet;
        public static bat_TextureAtlas: createjs.SpriteSheet;
        public static spider_TextureAtlas: createjs.SpriteSheet;
        public static shootingFlower_TextureAtlas: createjs.SpriteSheet;
        public static chest_TextureAtlas: createjs.SpriteSheet;
        // KC
        public static currentStage: objects.Scene;
        public static enemies_TextureAtlas: createjs.SpriteSheet; 
        public static titleUIMap_TextureAtlas: createjs.SpriteSheet;
        public static bulletManager: managers.Bullet;
        public static shopManager: managers.Shop;
        public static chestManager: managers.Chest;
        public static phantos_TextureAtlas: createjs.SpriteSheet;
        public static phantorm_TextureAtlas: createjs.SpriteSheet;
        public static currentScene: number;
        public static player: objects.Player;
        public static gameHeight: number = 900;
        public static gameWidth: number = 640;
        //public static messageStatus: objects.Label
        public static keyboardManager: managers.Keyboard;
        public static SFX: createjs.AbstractSoundInstance;
        public static music: createjs.AbstractSoundInstance;

        // For each scene with a slime enemy, add a slime puddle(s)
        //  The slime puddles should be within this array
        //  This array must be declared within the Start function
        //  The enemy will teleport between the slime puddles.
        public static slimePuddles: objects.SlimePuddle[];
    }
}