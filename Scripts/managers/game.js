var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.gameHeight = 650;
        Game.gameWidth = 530;
        Game.expConfigurer = new config.Experience();
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map