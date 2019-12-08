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
            if(this.x >= entity.x + entity.width || this.x + this.width <= entity.x || this.y >= entity.y + entity.height || this.y + this.height <= entity.y){
                //console.log(this.width, this.height);
            }
            else{
                if (entity.hp > 0) {
                    if (entity instanceof objects.Player && !this.playerNotEnemy) {
                        //player will be hit by ice from ghostwoman's attack every 1s
                        if (managers.Game.player.playerIceDamageSequence == 0){
                            managers.Game.player.playerIceDamageSequence = setTimeout(() => {                                
                                (entity as objects.Player).GetDamage(this);
                                managers.Game.player.playerIceDamageSequence = 0;
                            }, 1000);
                        }
                    }
                    else if (entity instanceof objects.Enemy && this.playerNotEnemy) {
                        entity.GetDamage(this.Host());
                    }
                }
            }
        }
    }
}