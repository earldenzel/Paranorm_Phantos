module config {
    export class Experience {
        private experienceDictionary:any = {};
        private powerDictionary:any = {};
        constructor(){
            for (let index = 0; index < 10; index++) {
                this.experienceDictionary[index] = index*index + index*10 - 1; //l                
            }
            for (let index = 10; index < 20; index++) {
                this.experienceDictionary[index] = 2*index*index + index - 3; //l                
            }
            for (let index = 20; index <= 30; index++) {
                this.experienceDictionary[index] = 3*index*index - index*10 + 3; //l                
            }
            for (let index = 1; index <= 30; index++) {
                if (index == 13){
                    this.powerDictionary[index] = config.Effects.INCREASE_MAX_HP;
                }
                else if (index % 10 == 0){
                    this.powerDictionary[index] = config.Effects.INCREASE_SPEED;
                }
                else if (index % 2 == 1){
                    this.powerDictionary[index] = config.Effects.INCREASE_ATK;
                }
                else{
                    this.powerDictionary[index] = config.Effects.INCREASE_SWING_SPEED;
                }         
            }
        }
        public DetermineLevel(totalExp: number): number{
            let currentLevel: number = 0;
            while (totalExp > this.experienceDictionary[currentLevel]){
                currentLevel++;
            }
            return currentLevel;
        }
        public LevelUpEffects(level: number){
            switch(this.powerDictionary[level]){
                case config.Effects.INCREASE_MAX_HP:
                    managers.Game.player.GainMaxHealth();
                    break;
                case config.Effects.INCREASE_SPEED:
                    managers.Game.player.GainSpeed(1);
                    break;
                case config.Effects.INCREASE_ATK:
                    managers.Game.player.GainAttack(1);
                    break;
                case config.Effects.INCREASE_SWING_SPEED:
                    managers.Game.player.GainSwingSpeed(50);
                    break;
            }
        }

        
    }
}