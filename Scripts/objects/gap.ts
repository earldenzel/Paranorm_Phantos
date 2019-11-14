module objects{
    export class Gap extends objects.GameObject{
        // Variables
        public position: math.Vec2;

        // Constructor
        constructor(textureAtlas: createjs.SpriteSheet, imageString: string, position: math.Vec2){
            super(textureAtlas, imageString);
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
            let offset = -config.Bounds.OBSTACLE_OFFSET;
            let gapTopLeftX = this.x - this.halfW - offset;
            let gapTopLeftY = this.y - this.halfH - offset;
            let gapBotRightX = gapTopLeftX + this.width + offset;
            let gapBotRightY = this.y + this.width + offset;
            let entityFeetX = entity.x;
            let entityFeetY = entity.y + entity.halfH;
            if (entityFeetX > gapTopLeftX && entityFeetX < gapBotRightX && entityFeetY > gapTopLeftY && entityFeetY < gapBotRightY){
                
                //if enemy is entity, and a fall sequence was not defined, then define call sequence
                //remove all view and keyboard, then after 1 second, transfer to original position
                if (entity instanceof objects.Player && managers.Game.player.fallSequence == 0){
                    entity.visible = false;
                    entity.weapon.visible = false;
                    entity.FallMessage();
                    managers.Game.keyboardManager.moveLeft = false;
                    managers.Game.keyboardManager.moveRight = false;
                    managers.Game.keyboardManager.moveUp = false;
                    managers.Game.keyboardManager.moveDown = false;
                    managers.Game.keyboardManager.enabled = false;
                    managers.Game.keyboardManager.attacking = false;
                    managers.Game.keyboardManager.biting = false;
                    managers.Game.player.fallSequence = setTimeout(() => {
                        entity.hp -= 1;
                        entity.isTakingDamage = false;
                        entity.SetPosition(entity.lastPosition);
                        entity.Update();
                        entity.visible = true;
                        managers.Game.keyboardManager.enabled = true;
                        managers.Game.player.fallSequence = 0;
                        // Sound Effect
                        // Not Defined yet                                
                    }, 1000);
                }
                else if (entity instanceof objects.Enemy && !entity.isFlying){
                    entity.RemoveFromPlay(entity.CalculateBounty());
                }
            }
        }
    }
}