module managers {
    export class Chest {
        // Variables
        public chestItems: Array<objects.ChestItem> = new Array<objects.ChestItem>();
        public chestsNotSpawned: boolean = true;
        // Constructor
        constructor() {
        }
        // Methods
        public Start(): void {
            // GRAVEYARD_1
            this.chestItems[0] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_1);
            this.chestItems[0].SetPosition(new math.Vec2(420, 150));
            this.chestItems[1] = new objects.ChestItem("lockedChest", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.GRAVEYARD_1);
            this.chestItems[1].SetPosition(new math.Vec2(285, 150));
            this.chestItems[1].locked = true;
            // GRAVEYARD_2
            this.chestItems[2] = new objects.ChestItem("chestWithGold", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.GRAVEYARD_2, false);
            this.chestItems[2].SetPosition(new math.Vec2(285, 150));
            // GRAVEYARD_3
            this.chestItems[3] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_3, false);
            this.chestItems[3].SetPosition(new math.Vec2(285, 150));
            // GRAVEYARD_4
            this.chestItems[4] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_4, false);
            this.chestItems[4].SetPosition(new math.Vec2(285, 440));
            // GRAVEYARD_5
            this.chestItems[5] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_5, false);
            this.chestItems[5].SetPosition(new math.Vec2(80, 420));
            // GRAVEYARD_6
            this.chestItems[6] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.GRAVEYARD_6, false);
            this.chestItems[6].SetPosition(new math.Vec2(80, 420));
            this.chestItems[7] = new objects.ChestItem("regularChest", "Items_Ten-Dollars", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_6);
            this.chestItems[7].SetPosition(new math.Vec2(480, 420));
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

            // MANSION_2
            this.chestItems[19] = new objects.ChestItem("chestWithGold", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.MANSION_2, false);
            this.chestItems[19].SetPosition(new math.Vec2(140, 200));
            // MANSION_3
            this.chestItems[20] = new objects.ChestItem("chestWithGold", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.MANSION_3, false);
            this.chestItems[20].SetPosition(new math.Vec2(440, 630));
            // MANSION_4
            this.chestItems[21] = new objects.ChestItem("chestWithGold", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.MANSION_4, false);
            this.chestItems[21].SetPosition(new math.Vec2(140, 200));
            // MANSION_6
            this.chestItems[22] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_6, false);
            this.chestItems[22].SetPosition(new math.Vec2(285, 630));
            // MANSION_7
            this.chestItems[23] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_7, false);
            this.chestItems[23].SetPosition(new math.Vec2(285, 440));
            // MANSION_8
            this.chestItems[24] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_8, false);
            this.chestItems[24].SetPosition(new math.Vec2(140, 200));
            // MANSION_9
            this.chestItems[25] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_9, false);
            this.chestItems[25].SetPosition(new math.Vec2(285, 440));
            // MANSION_10
            this.chestItems[26] = new objects.ChestItem("chestWithGold", "Items_Fifty-Dollars", config.Effects.INCREASE_GOLD_50, config.Scene.MANSION_10, false);
            this.chestItems[26].SetPosition(new math.Vec2(285, 440));
            // MANSION_11
            this.chestItems[27] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_11, false);
            this.chestItems[27].SetPosition(new math.Vec2(140, 200));
            // MANSION_12
            this.chestItems[28] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_12, false);
            this.chestItems[28].SetPosition(new math.Vec2(285, 440));
            // MANSION_13
            this.chestItems[29] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_13, false);
            this.chestItems[29].SetPosition(new math.Vec2(285, 200));
            // MANSION_14
            this.chestItems[30] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_14, false);
            this.chestItems[30].SetPosition(new math.Vec2(285, 630));
            // MANSION_15
            this.chestItems[31] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_15, false);
            this.chestItems[31].SetPosition(new math.Vec2(285, 630));
            // MANSION_16
            this.chestItems[32] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_16, false);
            this.chestItems[32].SetPosition(new math.Vec2(140, 300));
            // MANSION_17
            this.chestItems[33] = new objects.ChestItem("regularChest", "Items_Key", config.Effects.INCREASE_KEY_COUNT, config.Scene.MANSION_17, false);
            this.chestItems[33].SetPosition(new math.Vec2(285, 440));
        }

        public Reset(): void {
        }

        public Update(): void {
            let chestItems: Array<objects.ChestItem> = this.chestItems.filter(e => {
                return (e.appearingScene == managers.Game.currentScene);
            });
            chestItems.forEach(e => {
                e.Update();
                e.showItem.Update();
                if (managers.Collision.Check(managers.Game.player, e)) {
                    if (e.locked) {
                        if (managers.Game.player.key > 0) {                       
                            managers.Game.SFX = createjs.Sound.play("doorUnlock");
                            managers.Game.SFX.volume = 0.5;
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
        }

        public ShowHiddenChests(scene: config.Scene) {
            if (this.chestsNotSpawned) {
                let hiddenChest: Array<objects.ChestItem> = this.chestItems.filter(e => {
                    return (!e.visible && e.available && (scene == e.appearingScene));
                });
                hiddenChest.forEach(e => {
                    e.visible = true;
                });
                this.chestsNotSpawned = false;
            }
        }
    }
}
