module objects {
    export class SlimeBall extends objects.Bullet {
        // Variables
        public farPointPosition: math.Vec2;

        public staticNotPositional: boolean = false;
        public direction: config.Direction;
        // Constructor
        constructor() {
            super(managers.Game.enemies_TextureAtlas, "SlimeBall", 2);

            this.Start();
        }
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
            if (this.farPointPosition || this.staticNotPositional) {
                this.Move();
            }
            if (managers.Collision.Check(managers.Game.player.weapon, this)) {
                this.Reset();
            }
            if (!this.staticNotPositional) {
                if (managers.Collision.Check(managers.Game.player, this)) {
                    if (!managers.Game.player.activatePowers && managers.Game.player.powerUp != config.PowerUp.SHADOW) {
                        let ticker: number = createjs.Ticker.getTicks();

                        // use ticker to restrict 1 bullet every 10 frames for damage
                        if (ticker % 10 == 0) {
                            managers.Game.player.GetDamage(this);
                            this.Reset();
                        }
                    }
                }
            }
            else{
                if(this.x > config.Bounds.RIGHT_BOUND + this.width || this.x < config.Bounds.LEFT_BOUND - this.width || 
                    this.y < config.Bounds.TOP_BOUND - this.height || this.y > config.Bounds.BOTTOM_BOUND + this.height){
                    this.Reset();
                }
            }
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
                switch (this.direction) {
                    case config.Direction.UP:
                        this.y -= 2;
                        break;
                    case config.Direction.DOWN:
                        this.y += 2;
                        break;
                    case config.Direction.RIGHT:
                        this.x += 2;
                        break;
                    case config.Direction.LEFT:
                        this.x -= 2;
                        break;
                }
            }
        }

        public Main(): void { }
        public CheckBounds(): void { }
    }
}