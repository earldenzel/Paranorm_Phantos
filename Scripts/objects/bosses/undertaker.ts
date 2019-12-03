module objects {
    export class Undertaker extends objects.Enemy {
        // variables
        // Phase 1
        private currentSpeed: number;
        private attackingMode: boolean;
        private maxHp: number;
        private walk: Array<any>;
        private attack: Array<any>;
        public direction: config.Direction;
        // constructors

        constructor(moveSpeed: number) {
            super(managers.Game.bosses_TextureAtlas, "Boss1_WalkFront");
            //super(managers.Game.bat_TextureAtlas, "bat");
            //this.scaleX = 2;
            //this.scaleY = 2;
            this.Start();
            //
            this.hp = 20;
            this.maxHp = this.hp;
            this.attackPower = 1;
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 2000;
            this.bounty = 100;
            this.isFlying = false;
            this.attackingMode = false;

            this.walk = ["Boss1_WalkBack", "Boss1_WalkFront", "Boss1_WalkRight", "Boss1_WalkRight"];
            this.attack = ["Boss1_AttackBack", "Boss1_AttackFront", "Boss1_AttackRight", "Boss1_AttackRight"];

            this.direction = config.Direction.DOWN;
            this.expGain = 20;
        }
        // methods

        public Start(): void {
            // set the initial position
            this.y = 300;
            this.x = 350;
        }
        public Update(): void {
            if (!this.isStunned && !this.isDead) {
                if (this.attackingMode) {
                    if (this.hp > (this.maxHp / 2)) {
                        this.SwitchAnimation(this.attack[this.direction as number]);
                    }
                    else{
                        let ticker:number = createjs.Ticker.getTicks();
                        if(this.currentAnimation == "Boss1_Idle"){
                            switch (ticker % 3) {
                                case 0:
                                    this.SwitchAnimation("Boss1_ShovelAttack");
                                    break;
                                case 1:
                                    this.SwitchAnimation("Boss1_CrossAttack");
                                    break;
                                default:
                                    this.SwitchAnimation("Boss1_BothAttack");
                                    break;
                            }
                            this.height = 384;
                        }
                    }
                } else {
                    if (this.hp > (this.maxHp / 2)) {
                        this.SwitchAnimation(this.walk[this.direction as number]);
                    }
                    else{
                        if(this.currentAnimation == "Boss1_BothAttack" || this.currentAnimation == "Boss1_ShovelAttack" ||this.currentAnimation == "Boss1_CrossAttack"){
                            this.SwitchAnimation("Boss1_Idle");
                            this.height = 280;
                        }
                        if(this.currentAnimation == "Boss1_Explode" && this.currentAnimationFrame > 3){
                            this.SwitchAnimation("Boss1_Idle");
                            this.width = 326;
                            this.height = 280;
                            this.attackPower = 1;
                            this.scaleX = 1;
                        }
                        if(this.currentAnimation == this.attack[this.direction as number] || this.currentAnimation == this.walk[this.direction as number]){
                            this.SwitchAnimation("Boss1_Explode");
                            this.attackPower = 0;
                        }
                    }
                }
            }
            else if(this.isStunned && !this.isDead){
                this.attackingMode = false;
                if(this.currentAnimation != "Boss1_Stun"){
                    this.SwitchAnimation("Boss1_Destroy");
                }
                if(this.currentAnimation == "Boss1_Destroy" && this.currentAnimationFrame > 10){
                    this.SwitchAnimation("Boss1_Stun");
                }
                if(managers.Game.player.biteSequence == 0 && this.currentAnimation == "Boss1_Stun"){
                    this.isDead = true;
                }
            }
            else{
                if (this.currentAnimation == "Boss1_Explode" && this.currentAnimationFrame > 3) {
                    managers.Game.stage.removeChild(this);
                    this.visible = false;
                }
                this.SwitchAnimation("Boss1_Explode");
            }
            super.Update();
        }
        public Reset(): void { }

        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if(this.hp > (this.maxHp / 2)){
                if (distanceToPlayer < 120) {
                    this.attackingMode = true;
                    this.attackPower = 2;
                    
                } else {
                    this.attackingMode = false;
                    this.attackPower = 1;
                }
                this.currentSpeed = this.moveSpeed;
            }
            else {
                if (distanceToPlayer < 140) {
                    this.attackingMode = true;
                    this.attackPower = 3;
                    
                } else {
                    this.attackingMode = false;
                    this.attackPower = 2;
                }
                this.currentSpeed = this.moveSpeed / 2;
                this.isFlying = true;
            }

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.currentSpeed));

            if (!this.attackingMode) {
                if (newPos.x < this.x) {
                    if(this.hp > (this.maxHp / 2)){
                        this.scaleX = -1;
                    }
                    this.direction = config.Direction.LEFT;
                }
                if (newPos.x > this.x) {
                    if(this.hp > (this.maxHp / 2)){
                        this.scaleX = 1;
                    }
                    this.direction = config.Direction.RIGHT;
                }
                if (newPos.y > this.y) {
                    this.direction = config.Direction.DOWN;
                }
                if (newPos.y < this.y) {
                    this.direction = config.Direction.UP;
                }
                if(this.currentAnimation != "Boss1_Explode"){
                    this.x = newPos.x;
                    this.y = newPos.y;
                }
            }
        }

        public CheckBound(): void {
            super.CheckBound();
        }

        public GetObjectSpeed(): number {
            return this.currentSpeed;
        }

        public DevourEffect(): void {
            managers.Game.player.GainAttack(5);
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