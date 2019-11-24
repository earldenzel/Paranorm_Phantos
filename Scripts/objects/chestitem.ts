module objects{
    export class ChestItem extends objects.GameObject{
        // Variables
        public effect: config.Effects;
        public appearingScene: config.Scene;
        public available: boolean = true;
        // Constructor
        constructor(imageString: string, effect: config.Effects, appearingScene: config.Scene, initiallyShown: boolean = true){
            super(managers.Game.chest_TextureAtlas, imageString);
            this.effect = effect;
            this.appearingScene = appearingScene;
            this.Start();
            this.visible = initiallyShown;
        }
        // Methods
        public Start():void {
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
            switch (this.effect){
                case config.Effects.INCREASE_MAX_HP:
                    managers.Game.player.GainMaxHealth(5);
                    break;
                case config.Effects.INCREASE_KEY_COUNT:
                    managers.Game.player.key++;
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
            this.Update();
        }
    }
}