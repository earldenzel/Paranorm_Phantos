module objects {
    export class QuakeEffect extends objects.Bullet {
        // Variables
        private direction: config.Direction;
        public activation: boolean;

        // Constructor
        constructor() {
            super(managers.Game.bosses_TextureAtlas, "Boss3_QuakeStraight", 2);
            this.Start();
            this.activation = false;
        }
        // Methods
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
            if(this.activation){
                this.Move();
            }
            super.Update();
        }
        public Reset(): void {
            this.x = -5000;
            this.y = -5000;
        }
        public Move(): void {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        public Main(): void { }
        public CheckBounds(): void { }
        public SetupEffect(direction: config.Direction):void{
            this.direction = direction;
            switch (this.direction) {
                case config.Direction.UP:
                    this.scaleY = -1;
                    this.speedX = 0;
                    this.speedY = -3;
                    break;
                case config.Direction.DOWN:
                    this.speedX = 0;
                    this.speedY = 3;
                    break;
                case config.Direction.LEFT:
                    this.rotation += 90;
                    this.speedX = -3;
                    this.speedY = 0;
                    break;
                case config.Direction.RIGHT:
                    this.rotation -= 90;
                    this.speedX = 3;
                    this.speedY = 0;
                    break;
                case config.Direction.UP_LEFT:
                    this.gotoAndPlay("Boss3_QuakeDiagonal");
                    this.scaleY = -1;
                    this.speedX = -3;
                    this.speedY = -3;
                    break;
                case config.Direction.UP_RIGHT:
                    this.gotoAndPlay("Boss3_QuakeDiagonal");
                    this.scaleY = -1;
                    this.scaleX = -1;
                    this.speedX = 3;
                    this.speedY = -3;
                    break;
                case config.Direction.DOWN_LEFT:
                    this.gotoAndPlay("Boss3_QuakeDiagonal");
                    this.speedX = -3;
                    this.speedY = 3;
                    break;
                case config.Direction.DOWN_RIGHT:
                    this.gotoAndPlay("Boss3_QuakeDiagonal");
                    this.scaleX = -1;
                    this.speedX = 3;
                    this.speedY = 3;
                    break;
            }
        }
    }
}