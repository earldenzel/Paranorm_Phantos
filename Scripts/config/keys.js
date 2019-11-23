var config;
(function (config) {
    var Keys = /** @class */ (function () {
        function Keys() {
        }
        // Arrow Keys
        Keys.LEFT_ARROW = 37;
        Keys.RIGHT_ARROW = 39;
        Keys.UP_ARROW = 38;
        Keys.DOWN_ARROW = 40;
        // WASD Keys
        Keys.W = 87;
        Keys.A = 65;
        Keys.S = 83;
        Keys.D = 68;
        // Z J Keys
        Keys.Z = 90;
        Keys.J = 74;
        // X K Keys
        Keys.X = 88;
        Keys.K = 75;
        // C L Keys
        Keys.C = 67;
        Keys.L = 76;
        // V ; Keys
        Keys.V = 86;
        Keys.SEMICOLON = 186;
        // Enter Escape
        Keys.ENTER = 13;
        Keys.ESCAPE = 27;
        return Keys;
    }());
    config.Keys = Keys;
})(config || (config = {}));
//# sourceMappingURL=keys.js.map