var config;
(function (config) {
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
        Direction[Direction["UP_LEFT"] = 4] = "UP_LEFT";
        Direction[Direction["UP_RIGHT"] = 5] = "UP_RIGHT";
        Direction[Direction["DOWN_LEFT"] = 6] = "DOWN_LEFT";
        Direction[Direction["DOWN_RIGHT"] = 7] = "DOWN_RIGHT";
    })(Direction = config.Direction || (config.Direction = {}));
})(config || (config = {}));
//# sourceMappingURL=direction.js.map