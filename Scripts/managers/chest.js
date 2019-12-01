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
            // GRAVEYARD_1
            this.chestItems[0] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_1);
            this.chestItems[0].SetPosition(new math.Vec2(285, 150));
            this.chestItems[1] = new objects.ChestItem("lockedChest", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.GRAVEYARD_1);
            this.chestItems[1].SetPosition(new math.Vec2(185, 150));
            this.chestItems[1].locked = true;
            // GRAVEYARD_2
            this.chestItems[2] = new objects.ChestItem("chestWithGold", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.GRAVEYARD_2, false);
            this.chestItems[2].SetPosition(new math.Vec2(285, 150));
            // GRAVEYARD_3
            this.chestItems[3] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_3, false);
            this.chestItems[3].SetPosition(new math.Vec2(285, 150));
            // GRAVEYARD_4
            this.chestItems[4] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_4, false);
            this.chestItems[4].SetPosition(new math.Vec2(250, 300));
            // GRAVEYARD_5
            this.chestItems[5] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_5, false);
            this.chestItems[5].SetPosition(new math.Vec2(250, 300));
            // GRAVEYARD_6
            this.chestItems[6] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_6);
            this.chestItems[6].SetPosition(new math.Vec2(400, 630));
            this.chestItems[7] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_6, false);
            this.chestItems[7].SetPosition(new math.Vec2(250, 300));
            // HOTEL_2
            this.chestItems[8] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_2, false);
            this.chestItems[8].SetPosition(new math.Vec2(140, 630));
            // HOTEL_3
            this.chestItems[9] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_3, false);
            this.chestItems[9].SetPosition(new math.Vec2(285, 440));
            // HOTEL_4
            this.chestItems[10] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.HOTEL_4, false);
            this.chestItems[10].SetPosition(new math.Vec2(285, 630));
            // HOTEL_5
            this.chestItems[11] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_5, false);
            this.chestItems[11].SetPosition(new math.Vec2(385, 440));
            // HOTEL_6
            this.chestItems[12] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_6, false);
            this.chestItems[12].SetPosition(new math.Vec2(440, 200));
            // HOTEL_7
            this.chestItems[13] = new objects.ChestItem("chestWithGold", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.HOTEL_7, false);
            this.chestItems[13].SetPosition(new math.Vec2(385, 440));
            // HOTEL_8
            this.chestItems[14] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_8, false);
            this.chestItems[14].SetPosition(new math.Vec2(440, 630));
            // HOTEL_9
            this.chestItems[15] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.HOTEL_9, false);
            this.chestItems[15].SetPosition(new math.Vec2(140, 630));
            // HOTEL_10
            this.chestItems[16] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.HOTEL_10, false);
            this.chestItems[16].SetPosition(new math.Vec2(440, 630));
            // HOTEL_11
            this.chestItems[17] = new objects.ChestItem("chestWithGold", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.HOTEL_11, false);
            this.chestItems[17].SetPosition(new math.Vec2(285, 200));
            // HOTEL_12
            this.chestItems[18] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.HOTEL_12, false);
            this.chestItems[18].SetPosition(new math.Vec2(140, 630));
        };
        Chest.prototype.Reset = function () {
        };
        Chest.prototype.Update = function () {
            var chestItems = this.chestItems.filter(function (e) {
                return (e.appearingScene == managers.Game.currentScene);
            });
            chestItems.forEach(function (e) {
                e.Update();
                e.showItem.Update();
                if (managers.Collision.Check(managers.Game.player, e)) {
                    if (e.locked) {
                        if (managers.Game.player.key > 0) {
                            managers.Game.player.UseKey();
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