module managers{
    export class Chest{
        // Variables
        public chestItems: Array<objects.ChestItem> = new Array<objects.ChestItem>();
        // Constructor
        constructor(){
        }
        // Methods
        public Start():void {
            this.chestItems[0] = new objects.ChestItem("regularChest", config.Effects.INCREASE_GOLD, config.Scene.GRAVEYARD_1);
            this.chestItems[0].SetPosition(new math.Vec2(150, 150));
        }

        public Reset():void {            
        }

        public Update(): void{   
            this.chestItems.forEach(e => {
                e.Update();
                if (managers.Collision.Check(managers.Game.player, e) && e.available){  
                    e.TriggerChestEffect();
                }
            });
        }
    }
}
