module objects{
    export class Ghost extends objects.Enemy{
        // Variable
        private moveSpeed: number;

        // Constructors
        constructor(moveSpeed: number){
            super(managers.Game.enemies_TextureAtlas,"Ghost_Idle");
            this.Start();
            this.hp = 2;
            this.attackPower = 1;

            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 300;
            this.bounty = 5;
            this.isFlying = true;
        }

        // Methods
        public Start():void{
            this.y = 400;
            this.x = 320;
        }
        public Update():void{
            if(!this.isStunned && !this.isDead){
                this.SwitchAnimation("Ghost_Idle");
            }
            else if (this.isStunned && !this.isDead){
                this.SwitchAnimation("Ghost_Stun");
            }
            else{
                if (this.currentAnimation == "Ghost_Explode" && this.currentAnimationFrame > 3) {
                    managers.Game.stage.removeChild(this);
                    this.visible = false;
                }
                this.SwitchAnimation("Ghost_Explode");
            }
            super.Update();
        }
        public Reset(): void { }
        public Move():void{
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));
            this.x = newPos.x;
            this.y = newPos.y;
        }
        public RemoveFromPlay(bounty: number): void {
            this.isDead = true;
            
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        }
    }
}