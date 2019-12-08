module objects {
    export class Ghost extends objects.Enemy {
        // Variable

        // Constructors
        constructor(moveSpeed: number) {
            super(managers.Game.enemies_TextureAtlas, "Ghost_Idle");
            this.Start();
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 300;
            this.isFlying = true;
        }

        // Methods
        public Start(): void {
            this.y = 400;
            this.x = 320;
            let stageOfSpawn: config.Design = (managers.Game.currentStage as scenes.PlayScene).design;
            switch(stageOfSpawn){
                case config.Design.MANSION:
                    this.hp = 25;
                    this.attackPower = 2;   
                    this.bounty = 15;
                    this.expGain = 7;
                    break;
                case config.Design.HOTEL:
                    this.hp = 8;
                    this.attackPower = 1;   
                    this.bounty = 9;
                    this.expGain = 5;
                    break;                
                case config.Design.GRAVEYARD:
                default:
                    this.hp = 2;
                    this.attackPower = 1;   
                    this.bounty = 5;
                    this.expGain = 2;
                    break;
            }
        }
        public Update(): void {
            if (!this.isStunned && !this.isDead) {
                this.SwitchAnimation("Ghost_Idle");
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("Ghost_Stun");
            }
            else {
                if (this.currentAnimation == "Ghost_Explode" && this.currentAnimationFrame > 3) {
                    managers.Game.stage.removeChild(this);
                    this.visible = false;
                }
                this.SwitchAnimation("Ghost_Explode");
            }
            super.Update();
        }
        public Reset(): void { }
        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));
            this.x = newPos.x;
            this.y = newPos.y;
        }
        public DevourEffect(): void{
            managers.Game.player.GainHealth(2);
        }
    }
}