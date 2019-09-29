module objects {
    export abstract class Enemy extends objects.GameObject {

        constructor(assetManager: createjs.LoadQueue, enemyName: string) {
            super(assetManager, enemyName);
            this.Start();
            this.Move();
        }

        // Methods
        public Start(): void {
        }

        public Update(): void {
        }
        public Reset(): void { 

        }
        public Move(): void {
        }

        public CheckBound(): void {
        }
    }
}