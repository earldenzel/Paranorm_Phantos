var managers;
(function (managers) {
    var Chest = /** @class */ (function () {
        // Constructor
        function Chest() {
            // Variables
            this.chestItems = new Array();
        }
        // Methods
        Chest.prototype.Start = function () {
            this.chestItems[0] = new objects.ChestItem("regularChest", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_1);
            this.chestItems[0].SetPosition(new math.Vec2(150, 150));
        };
        Chest.prototype.Reset = function () {
        };
        Chest.prototype.Update = function () {
            this.chestItems.forEach(function (e) {
                e.Update();
                if (managers.Collision.Check(managers.Game.player, e) && e.available) {
                    e.TriggerChestEffect();
                }
            });
        };
        return Chest;
    }());
    managers.Chest = Chest;
})(managers || (managers = {}));
//# sourceMappingURL=chest.js.map