var config;
(function (config) {
    var Effects;
    (function (Effects) {
        Effects[Effects["INCREASE_MAX_HP"] = 0] = "INCREASE_MAX_HP";
        Effects[Effects["INCREASE_KEY_COUNT"] = 1] = "INCREASE_KEY_COUNT";
        Effects[Effects["INCREASE_ATK"] = 2] = "INCREASE_ATK";
        Effects[Effects["INCREASE_GOLD"] = 3] = "INCREASE_GOLD";
        Effects[Effects["INCREASE_GOLD_50"] = 4] = "INCREASE_GOLD_50";
        Effects[Effects["INCREASE_SPEED"] = 5] = "INCREASE_SPEED";
        Effects[Effects["FRESHEN_UP"] = 6] = "FRESHEN_UP";
        Effects[Effects["INCREASE_SWING_SPEED"] = 7] = "INCREASE_SWING_SPEED";
        Effects[Effects["RANDOM_POWER"] = 8] = "RANDOM_POWER";
        Effects[Effects["LEVEL_RESETTER"] = 9] = "LEVEL_RESETTER";
    })(Effects = config.Effects || (config.Effects = {}));
})(config || (config = {}));
//# sourceMappingURL=effects.js.map