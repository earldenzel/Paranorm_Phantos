module objects {
    export class SpiderBulletRight extends objects.GameObject{
        // Variables
        // Constructor
        constructor()
        {
            super(managers.Game.spider_TextureAtlas, "spiderBullet");

            this.Start();
        }
        // Methods
        public Start():void {
            this.speedX = 5;
            this.speedY = 0;

            this.Reset();
        }
        public Update():void {
            this.Move();
        }
        public Reset():void {
            this.x = -5000;
            this.y = -5000;
        }
        public Move():void {
            this.x -= this.speedX;
        }

        public Main():void {}
        public CheckBounds():void {}
    }
}