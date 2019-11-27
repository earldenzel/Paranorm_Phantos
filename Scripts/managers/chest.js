var managers;
(function (managers) {
    var Chest = /** @class */ (function () {
        // Constructor
        function Chest() {
            // Variables
            this.chestItems = new Array();
            this.chestsNotSpawned = true;
        }
        // Methods
        Chest.prototype.Start = function () {
            this.chestItems[0] = new objects.ChestItem("regularChest", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_1);
            this.chestItems[0].SetPosition(new math.Vec2(285, 150));
            this.chestItems[1] = new objects.ChestItem("regularChest", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_3, false);
            this.chestItems[1].SetPosition(new math.Vec2(285, 150));
            this.chestItems[2] = new objects.ChestItem("chestWithGold", config.Effects.INCREASE_GOLD_50, config.Scene.GRAVEYARD_2, false);
            this.chestItems[2].SetPosition(new math.Vec2(285, 150));
            this.chestItems[3] = new objects.ChestItem("regularChest", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_6);
            this.chestItems[3].SetPosition(new math.Vec2(400, 630));
            this.chestItems[4] = new objects.ChestItem("regularChest", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_2, false);
            this.chestItems[4].SetPosition(new math.Vec2(140, 630));
            this.chestItems[5] = new objects.ChestItem("regularChest", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_3, false);
            this.chestItems[5].SetPosition(new math.Vec2(285, 440));
            this.chestItems[6] = new objects.ChestItem("regularChest", config.Effects.INCREASE_GOLD, config.Scene.HOTEL_4, false);
            this.chestItems[6].SetPosition(new math.Vec2(285, 630));
            this.chestItems[7] = new objects.ChestItem("regularChest", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_5, false);
            this.chestItems[7].SetPosition(new math.Vec2(385, 440));
            this.chestItems[8] = new objects.ChestItem("regularChest", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_6, false);
            this.chestItems[8].SetPosition(new math.Vec2(440, 150));
            this.chestItems[8] = new objects.ChestItem("chestWithGold", config.Effects.INCREASE_GOLD_50, config.Scene.HOTEL_7, false);
            this.chestItems[8].SetPosition(new math.Vec2(385, 440));
            this.chestItems[9] = new objects.ChestItem("lockedChest", config.Effects.INCREASE_GOLD_50, config.Scene.GRAVEYARD_1);
            this.chestItems[9].SetPosition(new math.Vec2(185, 150));
            this.chestItems[9].locked = true;
            this.chestItems[10] = new objects.ChestItem("regularChest", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_4, false);
            this.chestItems[10].SetPosition(new math.Vec2(250, 300));
            this.chestItems[11] = new objects.ChestItem("regularChest", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_5, false);
            this.chestItems[11].SetPosition(new math.Vec2(250, 300));
            this.chestItems[12] = new objects.ChestItem("regularChest", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_6, false);
            this.chestItems[12].SetPosition(new math.Vec2(250, 300));
        };
        Chest.prototype.Reset = function () {
        };
        Chest.prototype.Update = function () {
            var chestItems = this.chestItems.filter(function (e) {
                return (e.appearingScene == managers.Game.currentScene);
            });
            chestItems.forEach(function (e) {
                e.Update();
                if (managers.Collision.Check(managers.Game.player, e)) {
                    if (e.locked) {
                        if (managers.Game.player.key > 0) {
                            managers.Game.player.key--;
                            e.TriggerChestEffect();
                            e.locked = false;
                        }
                        else {
                            managers.Game.player.EchoMessage("Locked");
                        }
                    }
                    else if (e.available && managers.Game.currentScene == e.appearingScene) {
                        e.TriggerChestEffect();
                    }
                }
            });
        };
        Chest.prototype.ShowHiddenChests = function (scene) {
            if (this.chestsNotSpawned) {
                var hiddenChest = this.chestItems.filter(function (e) {
                    return (!e.visible && e.available && (scene == e.appearingScene));
                });
                hiddenChest.forEach(function (e) {
                    e.visible = true;
                });
                this.chestsNotSpawned = false;
            }
        };
        return Chest;
    }());
    managers.Chest = Chest;
})(managers || (managers = {}));
//# sourceMappingURL=chest.js.map