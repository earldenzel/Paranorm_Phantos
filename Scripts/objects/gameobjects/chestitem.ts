module objects{
    export class ChestItem extends objects.GameObject{
        // Variables
        public effect: config.Effects;
        public appearingScene: config.Scene;
        public available: boolean = true;
        public locked: boolean = false;
        private triggeredSequence: number = 0;
        public showItem: objects.ShowItem;
        // Constructor
        constructor(imageString: string, showItemString: string, effect: config.Effects, appearingScene: config.Scene, initiallyShown: boolean = true){
            super(managers.Game.chest_TextureAtlas, imageString);
            this.showItem = new objects.ShowItem(showItemString);
            this.effect = effect;
            this.appearingScene = appearingScene;
            this.Start();
            this.visible = initiallyShown;
        }
        // Methods
        public Start():void {
            this.showItem.Start();
        }
        public Update():void {
            if (!this.available){
                this.visible = true;
                this.gotoAndStop("openedChest");
            }
        }
        public Reset():void {           
        }
        public Move():void {}
        public CheckBound():void {}
        
        public TriggerChestEffect(){
            this.showItem.x = this.x;
            this.showItem.y = this.y;
            this.showItem.visible = true; 
            if (this.triggeredSequence == 0){  
                this.triggeredSequence = setTimeout(() => {
                    switch (this.effect){
                        case config.Effects.INCREASE_MAX_HP:
                            managers.Game.player.GainMaxHealth();
                            break;
                        case config.Effects.INCREASE_KEY_COUNT:
                            managers.Game.player.GainKey();
                            break;
                        case config.Effects.INCREASE_ATK:
                            managers.Game.player.GainAttack(10);
                            break;
                        case config.Effects.INCREASE_GOLD:
                            managers.Game.player.GainDollars(10);
                            break;                
                        case config.Effects.INCREASE_GOLD_50:
                            managers.Game.player.GainDollars(50);
                            break;
                    }                   
                    this.available = false;
                    this.triggeredSequence = 0;
                    this.Update();                     
                    managers.Game.SFX = createjs.Sound.play("itemCollect");
                    managers.Game.SFX.volume = 0.6;
                }, 250);
            }
        }
    }
}