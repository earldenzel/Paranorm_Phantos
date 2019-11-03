module objects {
    export abstract class Enemy extends objects.GameObject {

        public isStunned: boolean;
        protected knockback: number;
        protected eatTimer: number;
        public stunIndicator: objects.Indicator;
        protected bounty: number;

        constructor(assetManager: createjs.LoadQueue, enemyName: string) {
            super(assetManager, enemyName);
            this.Start();
            this.stunIndicator = new objects.Indicator(assetManager, "kKeyIndicator");
            this.Move();
        }

        // Methods
        public Start(): void {
            this.isStunned = false;
        }

        public Update(): void {
            //if current hp  of enemy = 0, then it is stunned           
            if (this.hp <= 0) {
                this.isStunned = true;
                this.CheckBound();
            }

            //if it is stunned
            if (this.isStunned) {                
                //determine whether it is currently in contact with player and whether the biting button is pressed
                //disable attack button during eating phase
                if (managers.Game.keyboardManager.biting 
                    && managers.Collision.Check(managers.Game.player, this) 
                    && managers.Game.player.biteSequence == 0) {
                        managers.Game.player.SetPosition(this.GetPosition());
                        //managers.Game.messageStatus.text = "Phoebe started eating " + this.name;
                        managers.Game.keyboardManager.enabled = false;
                        managers.Game.player.biteSequence = setTimeout(() => {
                            //managers.Game.messageStatus.text = "Phoebe finished eating " + this.name;
                            this.DevourEffect();
                            this.RemoveFromPlay(0);
                            managers.Game.player.biteSequence = 0;                            
                        }, this.eatTimer);
                }
                //re-enable attacking since Phoebe is not eating 
                else{
                    managers.Game.keyboardManager.enabled = true;
                }
            }
            //else, the player is not stunned and can move
            else{
                this.Move();
            }

            //if the player is not taking damage -- check player collision with this (as long as it is not stunned)
            if (!managers.Game.player.isTakingDamage) {
                if (managers.Collision.Check(managers.Game.player, this) && !this.isStunned) {
                    managers.Game.player.isTakingDamage = true;
                    managers.Game.player.GetDamage(this);
                }
            }
            //the else for this condition is under play.ts - this is because the player might have other collisions with other enemies

            //if enemy is not taking damage -- check collision with weapon
            if (!this.isTakingDamage) {
                if (managers.Collision.Check(managers.Game.player.weapon, this)) {
                    this.isTakingDamage = true;
                    this.GetDamage(managers.Game.player);
                }
            }
            //else, only remove the flag for taking damage when collision with weapon has ended
            else {
                if (!managers.Collision.Check(managers.Game.player.weapon, this)) {
                    this.isTakingDamage = false;
                }
            }
        }
        public Reset(): void {

        }
        public Move(): void {

        }

        public CheckBound(): void {
            // right bound
            if (this.x >= config.Bounds.RIGHT_BOUND - this.halfW) {    
                this.x = config.Bounds.RIGHT_BOUND - this.halfW;
            }
            // left bound
            if (this.x <= this.halfW + config.Bounds.LEFT_BOUND) {  
                this.x = this.halfW + config.Bounds.LEFT_BOUND;
            }
            // bottom bound
            if (this.y >= config.Bounds.BOTTOM_BOUND - this.halfH) {    
                this.y = config.Bounds.BOTTOM_BOUND - this.halfH;
            }
            // top bound
            if (this.y <= this.halfH + config.Bounds.TOP_BOUND) {
                this.y = this.halfH + config.Bounds.TOP_BOUND;
            }
        }

        public GetDamage(attacker: objects.GameObject) {
            //enemy state = stunned
            if (this.isStunned) {
                //managers.Game.messageStatus.text = attacker.name + " ended " + this.name + "'s life.";
                this.RemoveFromPlay(this.bounty);
            }
            else {
                //introduce a knockback
                let awayVector: math.Vec2 = this.GetPosition().AwayFrom(managers.Game.player.GetPosition()).Multiply(this.knockback);
                let newPosition: math.Vec2 = math.Vec2.Add(this.GetPosition(), awayVector);
                this.SetPosition(newPosition);
                super.GetDamage(attacker);
                
                if (this.hp <= 0){
                    //delay is important so there is no-split second show of the enemy body atop the barrier
                    setTimeout(() => {
                        //managers.Game.messageStatus.text = this.name + " is stunned!";
                        this.stunIndicator.x = this.x;
                        this.stunIndicator.y = this.y - this.halfH - this.stunIndicator.halfH;
                        this.stunIndicator.visible = true;                        
                    }, 5);
                }
            }
        }

        public GetObjectSpeed(): number {
            return 0;
        }

        public RemoveFromPlay(bounty: number): void{
            managers.Game.player.money += bounty;
            this.stunIndicator.visible = false;
            managers.Game.stage.removeChild(this);
            this.visible = false;
        }

        //this function governs what happens when Phoebe eats enemy
        public DevourEffect(): void{
            
        }

        //function governs how much Phoebe earns
        public CalculateBounty(): number{
            return this.bounty;         
        }
    }
}