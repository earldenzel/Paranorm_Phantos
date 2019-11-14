// Immediate Invoked Anonymous Function

(function () {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;

    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene and state information
    let currentScene: objects.Scene;
    let currentState: number;

    let keyboardManager: managers.Keyboard;

    let mapG_TextureAtlasData: any;
    let mapG_TextureAtlas: createjs.SpriteSheet;

    let item_TextureAtlasData: any;
    let item_TextureAtlas: createjs.SpriteSheet;

    let phoebe_TextureAtlasData: any;
    let phoebe_TextureAtlas: createjs.SpriteSheet;

    let graveyard_TextureAtlasData: any;
    let graveyard_TextureAtlas: createjs.SpriteSheet;
    
    let bat_TextureAtlasData: any;
    let bat_TextureAtlas: createjs.SpriteSheet;

    // Gets the asset manifest
    //let request = new Request("./Content/assetManifest.json");
    //fetch(request)
    //    .then(response => {
    //        return response.json();
    //    })
    //    .then(data => {
    //        assetManifest = data; 
    //    });
    assetManifest = config.Assets.getAssets;



    function Init() {
        console.log("Initialization Start");
        // Start();

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application...");

        mapG_TextureAtlasData = config.Assets.getAtlas_MapGraveYard;
        mapG_TextureAtlasData.images = [assetManager.getResult("tAtlas_MapG")];
        mapG_TextureAtlas = new createjs.SpriteSheet(mapG_TextureAtlasData);

        item_TextureAtlasData = config.Assets.getAtlas_Items;
        item_TextureAtlasData.images = [assetManager.getResult("tAtlas_Items")];
        item_TextureAtlas = new createjs.SpriteSheet(item_TextureAtlasData);

        phoebe_TextureAtlasData = config.Assets.getAtlas_Phoebe;
        phoebe_TextureAtlasData.images = [assetManager.getResult("tAtlas_Phoebe")];
        phoebe_TextureAtlas = new createjs.SpriteSheet(phoebe_TextureAtlasData);

        graveyard_TextureAtlasData = config.Assets.getAtlas_Graveyard;
        graveyard_TextureAtlasData.images = [assetManager.getResult("tAtlas_Graveyard")];
        graveyard_TextureAtlas = new createjs.SpriteSheet(graveyard_TextureAtlasData);

        bat_TextureAtlasData = config.Assets.getAtlas_Bat;
        bat_TextureAtlasData.images = [assetManager.getResult("tAtlas_Bat")];
        bat_TextureAtlas = new createjs.SpriteSheet(bat_TextureAtlasData);

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);

        stage.enableMouseOver(20);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game

        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);

        // Create a global reference to our stage object
        managers.Game.stage = stage;

        // Set up default game state
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;

        // Keyboard Manager
        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;

        // Asset Manager
        managers.Game.assetManager = assetManager;
        managers.Game.map_TextureAtlas = mapG_TextureAtlas;
        managers.Game.item_TextureAtlas = item_TextureAtlas;
        managers.Game.phoebe_TextureAtlas = phoebe_TextureAtlas;
        managers.Game.graveyard_TextureAtlas = graveyard_TextureAtlas;
        managers.Game.bat_TextureAtlas = bat_TextureAtlas;

        Main();
    }

    function Update() {
        // Has my state changed since the last check?
        if (currentState != managers.Game.currentScene) {
            console.log("Changing scenes to" + managers.Game.currentScene);
            Main();
        }

        currentScene.Update();

        stage.update();
    }

    function Main() {
        console.log("Game Start...");

        // Finite State Machine
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.OPENING_SCENE:
                stage.removeAllChildren();
                currentScene = new scenes.OpeningScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_1:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_1();
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_2:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_2();
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_3:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_3();
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_4:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_4();
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_5:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_5();
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_6:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_6();
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_7:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_7();
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_8:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_8();
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
        }

        currentState = managers.Game.currentScene;
    }

    window.onload = Init;
})();