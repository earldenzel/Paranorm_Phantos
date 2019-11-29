var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.gameHeight = 900;
        Game.gameWidth = 640;
        Game.expConfigurer = new config.Experience();
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map