module objects {
    export abstract class Enemy extends objects.GameObject {
        
        public isStunned: boolean;

        constructor(assetManager: createjs.LoadQueue, enemyName: string) {
            super(assetManager, enemyName);
            this.Start();
            this.Move();
        }

        // Methods
        public Start(): void {
        }

        public Update(): void {            
            if (this.hp <=0){
                this.isStunned = true;
                if (this.visible){
                    console.log(this.name + " is stunned!");
                }
            }
        }
        public Reset(): void { 

        }
        public Move(): void {
        }

        public CheckBound(): void {
        }
        
        public GetDamage(attacker:objects.GameObject){
            //enemy state = stunned
            if (!this.isTakingDamage && this.isStunned){
                console.log(attacker.name + " ended " + this.name + "'s life.");
                objects.Game.stage.removeChild(attacker);
                this.visible = false;                
            }
            else{
                super.GetDamage(attacker);
            }
        }
    }
}