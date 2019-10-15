var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["OPENING_SCENE"] = 1] = "OPENING_SCENE";
        Scene[Scene["GRAVEYARD_1"] = 2] = "GRAVEYARD_1";
        Scene[Scene["GRAVEYARD_2"] = 3] = "GRAVEYARD_2";
        Scene[Scene["GRAVEYARD_3"] = 4] = "GRAVEYARD_3";
        Scene[Scene["GRAVEYARD_4"] = 5] = "GRAVEYARD_4";
        Scene[Scene["GRAVEYARD_5"] = 6] = "GRAVEYARD_5";
        Scene[Scene["GRAVEYARD_6"] = 7] = "GRAVEYARD_6";
        Scene[Scene["STAGE_PICKER"] = 8] = "STAGE_PICKER";
        Scene[Scene["SHOP"] = 9] = "SHOP";
        Scene[Scene["OVER"] = -1] = "OVER";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map