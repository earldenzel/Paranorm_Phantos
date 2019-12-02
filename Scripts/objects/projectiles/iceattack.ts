module objects{
    export class IceAttack extends objects.Bullet {
        // Variables
        public enemyNotPlayer: boolean;
        public isActivated: boolean;

        // Constructor
        constructor(){
            super(managers.Game.enemies_TextureAtlas,"IceAttackStart",2);

            this.Start();
        }

        // Methods
        public Start():void{
            this.Reset();
        }
        public Update():void{
            if(this.isActivated){
                if(this.currentAnimation != "IceAttackStart"){
                    this.visible = true;
                    this.SwitchAnimation("IceAttackStart");
                }
                if(this.currentAnimation == "IceAttackStart" && this.currentAnimationFrame > 7){
                    this.SwitchAnimation("IceAttackIdle");
                }
            }
            else{
                if(this.currentAnimation != "IceAttackFinish"){
                    this.SwitchAnimation("IceAttackFinish");
                }
                if(this.currentAnimation == "IceAttackFinish" && this.currentAnimationFrame > 7){
                    this.visible = false;
                    this.Reset();
                }
            }
            super.Update();
        }
        public Reset(): void {
            this.x = -5000;
            this.y = -5000;
        }
        public SwitchAnimation(newAnimation: string) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        }
        public Main(): void { }
        public CheckBounds(): void { }
    }
}