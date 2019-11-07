module objects{
    export class Gap extends objects.GameObject{
        // Variables
        public position: math.Vec2;

        // Constructor
        constructor(imageString: string, position: math.Vec2){
            super(imageString);
            this.position = position;
            this.Start();  
        }
        // Methods
        public Start():void {
            this.SetPosition(this.position);
        }
        public Update():void {}
        public Reset():void {}
        public Move(): void {}
        public CheckBound():void{       
        }        

        public CheckGapDamage(entity: objects.GameObject): void {
            let gapTopLeftX = this.x - this.halfW;
            let gapTopLeftY = this.y - this.halfH;
            let entityFeetX = entity.x;
            let entityFeetY = entity.y + entity.halfH;
            if (entityFeetX > gapTopLeftX && entityFeetX < (gapTopLeftX + this.width) && entityFeetY > gapTopLeftY && entityFeetY < (gapTopLeftY + this.height)){
                if (entity instanceof objects.Player){
                    entity.hp -= 1;
                    entity.SetPosition(entity.lastPosition);
                    entity.Update();

                }
                else if (entity instanceof objects.Enemy){     
                    if (!entity.isFlying){
                        entity.RemoveFromPlay(entity.CalculateBounty());
                    }
                }
            }
        }
    }
}