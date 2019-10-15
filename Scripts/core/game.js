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
    assetManifest = [
        { id: "backButton", src: "./Assets/Old/BackButton.png" },
        { id: "nextButton", src: "./Assets/Old/NextButton.png" },
        { id: "background", src: "./Assets/Old/background.png" },
        { id: "player", src: "./Assets/Old/player.png" },
        { id: "weapon", src: "./Assets/Old/phantos.png" },
        { id: "testEnemy", src: "./Assets/Old/ship.png" },
        { id: "title_background", src: "./Assets/_Background/_TestStage/Placeholder_BlackBackground.png" },
        { id: "title_ui", src: "./Assets/_UI/Title/Title_1.png" },
        { id: "player_p_walk1", src: "./Assets/_Player/Phoebe/Phoebe_Walk1.png" },
        { id: "player_p_walk3", src: "./Assets/_Player/Phoebe/Phoebe_Walk3.png" },
        { id: "player_p_walk5", src: "./Assets/_Player/Phoebe/Phoebe_Walk5.png" },
        { id: "player_p_walk7", src: "./Assets/_Player/Phoebe/Phoebe_Walk7.png" },
        { id: "item_p_front2", src: "./Assets/_Items/Phantos/Phantos_Front2.png" },
        { id: "enemy_test", src: "./Assets/_Enemies/Test_Enemy.png" },
        { id: "background_c_hori", src: "./Assets/_Background/_TestStage/Placeholder_CEILING-Horizontal.png" },
        { id: "background_c_vert", src: "./Assets/_Background/_TestStage/Placeholder_CEILING-Vertical.png" },
        { id: "background_d_vertT", src: "./Assets/_Background/_TestStage/Placeholder_DOOR-VerticalTop.png" },
        { id: "background_d_vert", src: "./Assets/_Background/_TestStage/Placeholder_DOOR-Vertical.png" },
        { id: "background_f_all", src: "./Assets/_Background/_TestStage/Placeholder_FLOOR-All.png" },
        { id: "background_w_hori", src: "./Assets/_Background/_TestStage/Placeholder_WALL-Horizontal.png" },
        { id: "background_w_vert", src: "./Assets/_Background/_TestStage/Placeholder_WALL-Vertical.png" }
    ];
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
        objects.Game.stage = stage;
        // Set up default game state
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        // Keyboard Manager
        keyboardManager = new managers.Keyboard;
        objects.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to" + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function clickableButtonMouseClick() {
        console.log("AHHHHHHH");
    }
    function Main() {
        console.log("Game Start...");
        // Finite State Machine
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map