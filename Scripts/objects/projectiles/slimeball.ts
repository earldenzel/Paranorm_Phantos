module objects {
    export class SlimeBall extends objects.Bullet {
        // Variables
        public farPointPosition: math.Vec2;
        
        public staticNotPositional: boolean = false;
        public direction: config.Direction;
        // Constructor
        constructor() {
            super(managers.Game.enemies_TextureAtlas, "SlimeBall", 1);

            this.Start();
        }
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
            if (this.farPointPosition) {
                this.Move();
            }
            super.Update();
        }
        public Reset(): void {
            this.x = -5000;
            this.y = -5000;
        }
        public Move(): void {
            if (!this.staticNotPositional) {
                let slimeBallPosition: math.Vec2 = new math.Vec2(this.x, this.y);

                let dirToFarPoint: math.Vec2 = math.Vec2.Subtract(slimeBallPosition, this.farPointPosition);
                let distanceToFarPoint: number = math.Vec2.Distance(slimeBallPosition, this.farPointPosition);

                let newPos: math.Vec2 = math.Vec2.Add(slimeBallPosition, math.Vec2.NormalizeMultiplySpeed(dirToFarPoint, distanceToFarPoint, 2));

                this.x = newPos.x;
                this.y = newPos.y;
            }
            else {
                switch(this.direction){
                    case config.Direction.UP:
                        this.y -= 5;
                        break;
                    case config.Direction.DOWN:
                            this.y += 5;
                        break;
                    case config.Direction.RIGHT:
                        this.x += 5;
                        break;
                    case config.Direction.LEFT:
                        this.x -= 5;
                        break;
                }
            }
        }

        public Main(): void { }
        public CheckBounds(): void { }
    }
}