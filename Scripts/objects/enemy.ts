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
                console.log(this.name + " is stunned!");
            }
        }
        public Reset(): void { 

        }
        public Move(): void {
        }

        public CheckBound(): void {
        }
    }
}