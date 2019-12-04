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
            if (entity.fallSequence > 0){
                return;
            }
            let leftX = this.x - this.halfW + config.Bounds.OBSTACLE_OFFSET;
            let rightX = this.x + this.halfW + config.Bounds.OBSTACLE_OFFSET;
            let topY = this.y - this.halfH + config.Bounds.OBSTACLE_OFFSET;
            let botY = this.y + this.halfH;
            let entityFeetX = entity.x + entity.halfW;
            let entityFeetY = entity.y + entity.halfH;
            
            if ((entityFeetX > leftX && entityFeetX < rightX && entityFeetY > topY && entityFeetY < botY)
                || (entity instanceof objects.Enemy && entity.isStunned && entity.isFlying)){
                entity.SetPosition(new math.Vec2(leftX, this.y));
                //if enemy is entity, and a fall sequence was not defined, then define call sequence
                //remove all view and keyboard, then after 1 second, transfer to original position
                if (entity instanceof objects.Player && managers.Game.player.fallSequence == 0){
                    managers.Game.keyboardManager.ControlReset();
                    setTimeout(() => {
                        entity.visible = false;
                    }, 200);
                    entity.weapon.visible = false;
                    entity.FallMessage();
                    entity.hp -= 1;
                    if (entity.hp <= 0){
                        entity.DeathSequence();
                    }
                    managers.Game.player.fallSequence = setTimeout(() => {
                        entity.isTakingDamage = false;
                        entity.SetPosition(entity.lastPosition);
                        if (entity.hp > 0){
                            entity.visible = true;
                        }
                        managers.Game.keyboardManager.enabled = true;
                        managers.Game.player.fallSequence = 0;
                        // Sound Effect
                        // Not Defined yet                                
                    }, 1000);
                }
                else if (entity instanceof objects.Enemy && entity.fallSequence == 0){
                    entity.fallSequence = setTimeout(() => {
                        entity.fallSequence = 0;
                        entity.RemoveFromPlay(entity.CalculateBounty());
                        // Sound Effect
                        // Not Defined yet                                
                    }, 1000);
                }
            }
            
        }
    }
}