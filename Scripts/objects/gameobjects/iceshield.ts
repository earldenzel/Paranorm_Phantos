module objects {
    export class IceShield extends objects.GameObject {
        // Variables
        public playerNotEnemy: boolean = false;
        public isActivated: boolean;
        private host: objects.GameObject;

        // Getter
        public Host(): objects.GameObject {
            return this.host;
        }
        // Constructor
        constructor(host: objects.GameObject) {
            super(managers.Game.enemies_TextureAtlas, "IceAttackStart");
            this.host = host;
            this.attackPower = 2;
            this.Start();
        }

        // Methods
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
            this.x = this.host.x;
            this.y = this.host.y;
            if (this.isActivated) {
                this.visible = true;
                if (this.currentAnimation == "IceAttackFinish") {
                    this.SwitchAnimation("IceAttackStart");
                }
                if (this.currentAnimation == "IceAttackStart" && this.currentAnimationFrame > 7) {
                    this.SwitchAnimation("IceAttackIdle");
                    this.width = 128;
                    this.height = 122;
                }
            }
            else {
                if (this.currentAnimation != "IceAttackFinish") {
                    this.SwitchAnimation("IceAttackFinish");
                    this.width = -86;
                    this.height = -52;
                }
                if (this.currentAnimation == "IceAttackFinish" && this.currentAnimationFrame > 7) {
                    this.Reset();
                }
            }
        }
        public Reset(): void {
            this.visible = false;
            this.isActivated = false;

        }
        public SwitchAnimation(newAnimation: string) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        }
        public Main(): void { }
        public CheckBounds(): void { }
        public CheckShieldDamage(entity: objects.GameObject) {
            //let offset = -config.Bounds.OBSTACLE_OFFSET;
            //let gapTopLeftX = this.x - this.halfW - offset;
            //let gapTopLeftY = this.y - this.halfH - offset;
            //let gapBotRightX = gapTopLeftX + this.width + offset;
            //let gapBotRightY = this.y + this.width + offset;
            //let entityFeetX = entity.x;
            //let entityFeetY = entity.y + entity.halfH;
            if(this.x >= entity.x + entity.width || this.x + this.width <= entity.x || this.y >= entity.y + entity.height || this.y + this.height <= entity.y){
                //console.log(this.width, this.height);
            }
            else{
                if (entity.hp > 0) {
                    if (entity instanceof objects.Player && !this.playerNotEnemy) {
                        //console.log("Player gets hit");
                        (entity as objects.Player).GetDamage(this);
                    }
                    else if (entity instanceof objects.Enemy && this.playerNotEnemy) {
                        entity.hp -= this.attackPower;
                    }
                }
            }
            //if (managers.Collision.Check(this, entity)) {
            //if (entityFeetX > gapTopLeftX && entityFeetX < gapBotRightX && entityFeetY > gapTopLeftY && entityFeetY < gapBotRightY) {
            //    console.log(this.getBounds());
            //    if (entity.hp > 0) {
            //        if (entity instanceof objects.Player && !this.playerNotEnemy) {
            //            console.log("Player gets hit");
            //            (entity as objects.Player).GetDamage(this);
            //        }
            //        else if (entity instanceof objects.Enemy && this.playerNotEnemy) {
            //            entity.hp -= this.attackPower;
            //        }
            //    }
            //}
        }
    }
}