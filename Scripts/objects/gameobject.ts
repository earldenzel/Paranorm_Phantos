module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // Variables
        protected speedX: number;
        protected speedY: number;

        public width: number;
        public height: number;
        public halfW: number;   // Half-width; Useful for collision detection
        public halfH: number;   // Half-height
        public isColliding: boolean;
        public isTakingDamage: boolean;
        public hp: number;
        public attackPower: number;

        // Constructor
        constructor(assetManager:createjs.LoadQueue, imageString:string) {
            super(assetManager.getResult(imageString));

            this.name = imageString;

            this.Init();
        }
        // Methods 
        private Init():void {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;

            this.isColliding = false;
            this.isTakingDamage = false;
        }

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}

        public GetDamage(attacker:objects.GameObject){
            if (!this.isTakingDamage){
                this.isTakingDamage = true;
                this.hp -= attacker.attackPower;
                console.log(attacker.name + " dealt " + attacker.attackPower + " damage to " + this.name);
            }
        }
    }
}