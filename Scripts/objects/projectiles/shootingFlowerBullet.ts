module objects {
    export class ShootingFlowerBullet extends objects.Bullet{

        public farPointPosition: math.Vec2;

        // Constructor
        constructor()
        {
            super(managers.Game.shootingFlower_TextureAtlas, "shootingFlowerBullet", 2);

            this.Start();
        }
        // Methods
        public Start():void {
            this.Reset();
        }
        public Update():void {
            if (this.farPointPosition) {
                this.Move();
            }
            super.Update();
        }
        public Reset():void {
            this.x = -5000;
            this.y = -5000;
        }
        public Move():void {
            let bulletPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToFarPoint: math.Vec2 = math.Vec2.Subtract(bulletPosition, this.farPointPosition);
            let distanceToFarPoint: number = math.Vec2.Distance(bulletPosition, this.farPointPosition);

            let newPos: math.Vec2 = math.Vec2.Add(bulletPosition, math.Vec2.NormalizeMultiplySpeed(dirToFarPoint, distanceToFarPoint, 2));

            this.x = newPos.x;
            this.y = newPos.y;
            
        }

        public Main():void {}
        public CheckBounds():void {}
    }
}