module objects{
    export class Bone extends objects.Bullet{
        // Variables
        public farPointPosition: math.Vec2;

        // Constructor
        constructor(){
            super(managers.Game.enemies_TextureAtlas,"Bone", 2);

            this.Start();
        }
        public Start():void{
            this.Reset();
        }
        public Update():void{
            if(this.farPointPosition){
                this.Move();
            }
            super.Update();
        }
        public Reset():void {
            this.x = -5000;
            this.y = -5000;
        }
        public Move():void {
            let bonePosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToFarPoint: math.Vec2 = math.Vec2.Subtract(bonePosition, this.farPointPosition);
            let distanceToFarPoint: number = math.Vec2.Distance(bonePosition, this.farPointPosition);

            let newPos: math.Vec2 = math.Vec2.Add(bonePosition, math.Vec2.NormalizeMultiplySpeed(dirToFarPoint, distanceToFarPoint, 2));

            this.x = newPos.x;
            this.y = newPos.y;
            
        }

        public Main():void {}
        public CheckBounds():void {}
    }
}