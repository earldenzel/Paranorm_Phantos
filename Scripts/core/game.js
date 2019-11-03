// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    // Store current scene and state information
    var currentScene;
    var currentState;
    var keyboardManager;
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
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OPENING_SCENE:
                stage.removeAllChildren();
                currentScene = new scenes.OpeningScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_1:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_1(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_2:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_2(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_3:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_3(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_4:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_4(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_5:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_5(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_6:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_6(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_7:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_7(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GRAVEYARD_8:
                stage.removeAllChildren();
                currentScene = new scenes.Graveyard_8(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map