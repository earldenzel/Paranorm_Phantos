module objects {
    export class GhostTeeth extends objects.Enemy {
        // Variable
        private currentSpeed: number;

        private isAttacking: boolean;
        private attack: Array<any>;
        public direction: config.Direction;
        private chargeSequence: number = 0;

        // Constructor
        constructor(moveSpeed: number) {
            super(managers.Game.enemies_TextureAtlas, "GhostTeeth_Idle");
            this.Start();
            this.hp = 25;
            this.attackPower = 3;

            this.moveSpeed = moveSpeed;
            this.currentSpeed = moveSpeed * 3;
            this.knockback = 0.75;
            this.eatTimer = 600;
            this.bounty = 30;
            this.isFlying = true;
            this.powerUp = config.PowerUp.BITE;

            this.attack = ["GhostTeeth_AttackFront", "GhostTeeth_AttackBack", "GhostTeeth_AttackRight", "GhostTeeth_AttackRight"];
            this.direction = config.Direction.UP;
        }

        // Methods
        public Start(): void {
            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            if (this.isDead){
                this.SwitchAnimation("Ghost_Explode");
            }
            else{
                if (this.isStunned){
                    this.SwitchAnimation("GhostTeeth_Stun");
                }
                else{                    
                    if (this.isAttacking && this.chargeSequence > 0){
                        this.SwitchAnimation(this.attack[this.direction as number]);
                    }
                    else {
                        this.SwitchAnimation("GhostTeeth_Idle");
                    }
                }
            }
            
            if (this.currentAnimation == "Ghost_Explode" && this.currentAnimationFrame > 3) {
                managers.Game.stage.removeChild(this);
                this.visible = false;
            }

            console.log(this.x + " " + this.y);
            super.Update();
        }
        public Reset(): void { }

        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);
            this.isAttacking = (distanceToPlayer < 200);

            if (this.isAttacking && this.chargeSequence == 0) {
                this.chargeSequence = setTimeout(() => {
                    this.currentSpeed = this.moveSpeed * 3;
                    //if (dirToPlayer.y < 60 && dirToPlayer.y > -60) {
                    if (Math.abs(dirToPlayer.x) >= Math.abs(dirToPlayer.y)) {
                        if (enemyPosition.x < playerPosition.x) {
                            console.log("Charge LEFT");
                            this.direction = config.Direction.LEFT;
                        }
                        else{
                            console.log("Charge RIGHT");
                            this.direction = config.Direction.RIGHT;
                        }
                    }
                    //else if (dirToPlayer.x < 40 && dirToPlayer.x > -40) {
                    else{
                        if (enemyPosition.y < playerPosition.y) {
                            this.direction = config.Direction.DOWN;
                        }
                        else {
                            this.direction = config.Direction.UP;
                        }
                    }
                    this.chargeSequence = 0;
                }, 1000);
            }      

            if (this.chargeSequence > 0){                    
                switch (this.direction){
                    case config.Direction.UP:
                        this.y += this.currentSpeed;
                        this.scaleX = 1;
                        break;
                    case config.Direction.DOWN:
                        this.y -= this.currentSpeed;
                        this.scaleX = 1;
                        break;
                    case config.Direction.LEFT:
                        this.x += this.currentSpeed;
                        this.scaleX = 1;
                        break;
                    case config.Direction.RIGHT:
                        this.x -= this.currentSpeed;
                        this.scaleX = -1;
                        break;
                }
            }

            this.CheckBound();
        }
        public DevourEffect(): void {
            if (managers.Game.player.powerUp == this.powerUp){
                managers.Game.player.GainHealth(3);
            }
            else{
                managers.Game.player.powerUp = this.powerUp;
            }
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