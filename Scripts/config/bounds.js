var config;
(function (config) {
    var Bounds = /** @class */ (function () {
        function Bounds() {
        }
        Bounds.RIGHT_BOUND = 510;
        Bounds.LEFT_BOUND = 60;
        Bounds.TOP_BOUND = 125;
        Bounds.BOTTOM_BOUND = 675;
        Bounds.DOOR_EASING_LEFT = 248;
        Bounds.DOOR_EASING_RIGHT = 324;
        Bounds.DOOR_EASING_TOP = 402; //402
        Bounds.DOOR_EASING_BOTTOM = 440;
        Bounds.OBSTACLE_OFFSET = 10;
        Bounds.ENEMY_COLLISION_OFFSET = 20;
        Bounds.TEXT_OFFSET = 20;
        Bounds.TEXT_SHIFT_Y = 210;
        return Bounds;
    }());
    config.Bounds = Bounds;
})(config || (config = {}));
//# sourceMappingURL=bounds.js.map