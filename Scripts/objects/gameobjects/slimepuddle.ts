module objects{
    export class SlimePuddle extends objects.GameObject {
        // Variables
        public position: math.Vec2;
        private types: Array<any> = [
            "SlimePuddle1",
            "SlimePuddle2",
            "SlimePuddle3",
            "SlimePuddle4"
        ];

        // Constructor
        constructor(imageNumber: number, position: math.Vec2){
            super(managers.Game.enemies_TextureAtlas, "SlimePuddle1");
            // Change the animation right away
            this.gotoAndPlay(this.types[imageNumber]);
            this.position = position;
            this.Start();
        }
        public Start():void {
            this.SetPosition(this.position);
        }
        public Update():void {}
        public Reset():void {}
        public Move(): void {}
        public CheckBound():void{       
        } 
        public CheckEntity(entity: objects.GameObject):void{
            // This checks the entity position and the puddle position
            // Similar to the Gap gameObject but it reduces the speed of the entities by half
            // Doesn't affect any of the flying entities
            let offset = -config.Bounds.OBSTACLE_OFFSET;
            let gapTopLeftX = this.x - this.halfW - offset;
            let gapTopLeftY = this.y - this.halfH - offset;
            let gapBotRightX = gapTopLeftX + this.width + offset;
            let gapBotRightY = this.y + this.width + offset;
            let entityFeetX = entity.x;
            let entityFeetY = entity.y + entity.halfH;

            if (entityFeetX > gapTopLeftX && entityFeetX < gapBotRightX && entityFeetY > gapTopLeftY && entityFeetY < gapBotRightY){
                if(entity instanceof objects.Player){
                    (entity as objects.Player).AlterSpeed(true);
                }
                else if(entity instanceof objects.Enemy && !entity.isFlying){
                    (entity as objects.Enemy).AlterSpeed(true);
                }
            }
            else{
                if(entity instanceof objects.Player){
                    (entity as objects.Player).AlterSpeed(false);
                } 
                else if(entity instanceof objects.Enemy && !entity.isFlying){
                    (entity as objects.Enemy).AlterSpeed(false);
                }
            }
        } 
    }
}