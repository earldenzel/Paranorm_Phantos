module math {
    export class Vec2 extends createjs.Point {
        //variables
        //constructors
        constructor(x: number = 0, y: number = 0) {
            super(x, y);
        }
        //method
        public static Distance(P1: Vec2, P2: Vec2): number {
            return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));
        }

        public static Add(P1: Vec2, P2: Vec2): Vec2{
            return new Vec2(P1.x + P2.x, P1.y + P2.y);
        }

        public AwayFrom(P: Vec2): Vec2{
            return new Vec2 (this.x - P.x, this.y - P.y);
        }

        public Multiply(multiplier: number): Vec2{
            return new Vec2(this.x*multiplier, this.y*multiplier);
        }
    }
}