module objects {
    export abstract class GameObject extends createjs.Sprite {
        // Variables
        protected speedX: number;
        protected speedY: number;

        public width: number;
        public height: number;
        public halfW: number;   // Half-width; Useful for collision detection
        public halfH: number;   // Half-height
        public isColliding: boolean;
        public isTakingDamage: boolean;
        public isTakingProjectileDamage: boolean;
        public hp: number;
        public attackPower: number;
        public powerUp: config.PowerUp;
        public isDead: boolean = false;

        // Constructor
        constructor(textureAtlas: createjs.SpriteSheet, imageString:string) {
            super(textureAtlas, imageString);

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

            // from Yizhi: Why I change this is since: for AABB collision, 
            // it uses the left corner as x and y instead of the center of the object
            
            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;

            this.isColliding = false;
            this.isTakingDamage = false;
            this.isTakingProjectileDamage = false;

            this.powerUp = config.PowerUp.NONE;
        }

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}

        public GetDamage(attacker:objects.GameObject){
            this.hp -= attacker.attackPower;
            console.log(attacker.name + " dealt " + attacker.attackPower + " damage to " + this.name);
        }

        public SetPosition(position: math.Vec2){
            this.x = position.x;
            this.y = position.y;
        }

        public GetPosition(): math.Vec2{
            return new math.Vec2(this.x, this.y);
        }
    }
}