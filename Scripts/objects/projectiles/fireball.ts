module objects{
    export class FireBall extends objects.Bullet{
        // Variable
        public farPointPosition: math.Vec2;

        public staticNotPositional: boolean = false;
        public direction: config.Direction;
        // Constructor
        constructor() {
            super(managers.Game.enemies_TextureAtlas, "Fireball", 2);

            this.Start();
        }
        // Methods
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
            if (this.farPointPosition || this.staticNotPositional) {
                this.Move();
            }
            if(managers.Collision.Check(managers.Game.player.weapon, this)){
                this.Reset();
            }
            if(!this.staticNotPositional){
                if(managers.Collision.Check(managers.Game.player, this)){
                    let ticker: number = createjs.Ticker.getTicks();
    
                    // use ticker to restrict 1 bullet every 10 frames for damage
                    if (ticker % 10 == 0){
                        managers.Game.player.GetDamage(this);
                        this.Reset();
                    }
                }
            }
        }
        public Reset(): void {
            this.x = -5000;
            this.y = -5000;
        }
        public Move(): void {
            if (!this.staticNotPositional) {
                let fireBallPosition: math.Vec2 = new math.Vec2(this.x, this.y);

                let dirToFarPoint: math.Vec2 = math.Vec2.Subtract(fireBallPosition, this.farPointPosition);
                let distanceToFarPoint: number = math.Vec2.Distance(fireBallPosition, this.farPointPosition);

                let newPos: math.Vec2 = math.Vec2.Add(fireBallPosition, math.Vec2.NormalizeMultiplySpeed(dirToFarPoint, distanceToFarPoint, 6));

                this.x = newPos.x;
                this.y = newPos.y;
            }
            else {
                switch(this.direction){
                    case config.Direction.UP:
                        this.y -= 6;
                        break;
                    case config.Direction.DOWN:
                            this.y += 6;
                        break;
                    case config.Direction.RIGHT:
                        this.x += 6;
                        break;
                    case config.Direction.LEFT:
                        this.x -= 6;
                        break;
                }
            }
        }
        public Main(): void { }
        public CheckBounds(): void { }
    }
}