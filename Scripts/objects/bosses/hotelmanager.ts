module objects {
    // To Be Tested
    export class HotelManager extends objects.Enemy{
        // Variables
        private currentSpeed: number;
        private rightDirection: boolean;
        private downDirection: boolean;
        public spawn: objects.GiantWorm;

        // Constructor
        constructor(moveSpeed: number, rightDirection: boolean, downDirection: boolean){
            super(managers.Game.bosses_TextureAtlas,"Boss2_Idle");

            this.Start();

            this.hp = 40;
            this.attackPower = 2;
            this.moveSpeed = moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.knockback = 0.55;
            this.eatTimer = 3000;
            this.isFlying = true;
            this.bounty = 1;
            this.explosion = new objects.Explosion(ExplodeTypes.GHOSTSHADOW, this.GetPosition(),2,false);
        }
        // Methods
        public Start():void{
            // Set the initial position
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            if(!this.isStunned && !this.isDead){
                if(this.hp > 20){
                    this.currentSpeed = this.moveSpeed;
                    this.SwitchAnimation("Boss2_Idle");
                }
                else if (this.hp <= 20) {
                    this.currentSpeed = this.moveSpeed / 2;
                    this.SwitchAnimation("Boss2_IdleB");
                    if(this.spawn == null){
                        this.SpawnCreateAndActivate();
                        this.canBeAttacked = false;
                    }
                    if(this.spawn.isDead){
                        this.canBeAttacked = true;
                        this.hp = 0;
                    }
                }
            }
            else if(this.isStunned && !this.isDead){
                this.SwitchAnimation("Boss2_Stun");

                if(managers.Game.player.biteSequence == 0 && this.currentAnimation == "Boss2_Stun"){
                    this.isDead = true;
                }
            }
            else {
                if(managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "GhostShadow_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.spriteSheet = managers.Game.enemies_TextureAtlas;
                    this.SwitchAnimation("GhostShadow_Explode");
                }
            }
            super.Update();
        }
        public Reset(): void { }
        public Move(): void {
            this.x += this.rightDirection ? this.currentSpeed : -this.currentSpeed;
            this.y += this.downDirection ? this.currentSpeed : -this.currentSpeed;

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
        public CheckBound(): void {
            super.CheckBound();
        }
        private SpawnCreateAndActivate(): void {
            // Create the spawn
            this.spawn = new objects.GiantWorm();
            // Activate the spawn
            (managers.Game.currentStage as scenes.PlayScene).AddEnemyToScene(this.spawn);
        }

        public DevourEffect(): void {
            managers.Game.player.GainSwingSpeed(100);
        }
    }
}