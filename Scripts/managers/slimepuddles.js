var managers;
(function (managers) {
    var SlimePuddles = /** @class */ (function () {
        function SlimePuddles() {
        }
        SlimePuddles.CheckEntitySlowdown = function (entity) {
            for (var i = 0; i < managers.Game.slimePuddles.length; i++) {
                var element = managers.Game.slimePuddles[i];
                if (managers.Collision.Check(entity, element)) {
                    return true;
                }
                else if (managers.Collision.Check(entity, element)) {
                    return true;
                }
            }
            return false;
        };
        return SlimePuddles;
    }());
    managers.SlimePuddles = SlimePuddles;
})(managers || (managers = {}));
//# sourceMappingURL=slimepuddles.js.map