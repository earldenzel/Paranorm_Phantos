module objects {
    export class GhostThin extends objects.Enemy {
        // Variable
        private rightDirection: boolean;
        private downDirection: boolean;

        // Constructor
        constructor(moveSpeed: number, rightDirection: boolean, downDirection: boolean) {
            super(managers.Game.enemies_TextureAtlas, "GhostThin_Idle");
            this.moveSpeed = moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.knockback = 0.75;
            this.eatTimer = 300;
            this.isFlying = true;
            this.explosion = new objects.Explosion(ExplodeTypes.GHOST,this.GetPosition(),0);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.y = 400;
            this.x = 320;
            let stageOfSpawn: config.Design = (managers.Game.currentStage as scenes.PlayScene).design;
            switch(stageOfSpawn){
                case config.Design.GRAVEYARD:
                    this.hp = 2;
                    this.attackPower = 1;   
                    this.bounty = 5;
                    this.expGain = 2;
                    break;
                case config.Design.HOTEL:
                    this.hp = 8;
                    this.attackPower = 1;   
                    this.bounty = 9;
                    this.expGain = 5;
                    break;
                case config.Design.MANSION:
                    this.hp = 25;
                    this.attackPower = 2;   
                    this.bounty = 15;
                    this.expGain = 7;
                    break;
            }
        }
        public Update(): void {
            if (this.isDead){                
                this.SwitchAnimation("Ghost_Explode");
            }
            else{
                if (this.isStunned){
                    this.SwitchAnimation("GhostThin_Stun");

                }
                else{
                    this.SwitchAnimation("GhostThin_Idle");
                }
            }            
            if (this.currentAnimation == "Ghost_Explode" && this.currentAnimationFrame > 3) {
                managers.Game.stage.removeChild(this);
                this.visible = false;
            }
            super.Update();
        }
        public Reset(): void { }
        public Move(): void {
            this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
            this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;

            if (this.x > managers.Game.gameWidth && this.rightDirection) {
                this.rightDirection = false;
            }
            else if (this.x < 0 && !this.rightDirection) {
                this.rightDirection = true;
            }
            if (this.y > managers.Game.gameHeight && this.downDirection) {
                this.downDirection = false;
            }
            else if (this.y < 0 && !this.downDirection) {
                this.downDirection = true;
            }
        }

        public DevourEffect(): void{
            managers.Game.player.GainHealth(2);
        }
    }
}