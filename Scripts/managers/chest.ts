module managers{
    export class Chest{
        // Variables
        public chestItems: Array<objects.ChestItem> = new Array<objects.ChestItem>();
        public chestsNotSpawned: boolean = true;
        // Constructor
        constructor(){
        }
        // Methods
        public Start():void {
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
        }

        public Reset():void {            
        }

        public Update(): void{   
            this.chestItems.forEach(e => {
                e.Update();
                if (managers.Collision.Check(managers.Game.player, e) && e.available && managers.Game.currentScene == e.appearingScene){  
                    e.TriggerChestEffect();
                }
            });
        }

        public ShowHiddenChests(scene: config.Scene){
            if (this.chestsNotSpawned){
                let hiddenChest: Array<objects.ChestItem> = this.chestItems.filter(e =>{
                    return (!e.visible && e.available && (scene == e.appearingScene));
                });
                hiddenChest.forEach(e =>{
                    e.visible = true;
                });
                this.chestsNotSpawned = false;
            }
        }
    }
}
