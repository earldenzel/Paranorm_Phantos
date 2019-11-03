module objects {
    export abstract class Enemy extends objects.GameObject {

        public isStunned: boolean;
        protected knockback: number;
        protected eatTimer: number;
        public stunIndicator: objects.GameObject;

        constructor(assetManager: createjs.LoadQueue, enemyName: string) {
            super(assetManager, enemyName);
            this.Start();
            this.stunIndicator = new objects.Indicator(assetManager, "xKeyIndicator");
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
                //TODO: ensure that enemy is inside stage when stunned
            }

            //if it is stunned
            if (this.isStunned) {                
                //determine whether it is currently in contact with player and whether the biting button is pressed
                //disable attack button during eating phase
                if (managers.Game.keyboardManager.biting && managers.Collision.Check(managers.Game.player, this)) {
                    managers.Game.messageStatus.text = "Phoebe started eating " + this.name;
                    this.eatTimer -= 1;
                    managers.Game.keyboardManager.attackEnabled = false;

                    //if the enemy eat timer is less than zero, then phoebe is finished eating                    
                    if (this.eatTimer <= 0){
                        managers.Game.messageStatus.text = "Phoebe finished eating " + this.name;
                        this.DevourEffect();
                        this.RemoveFromPlay();
                    }
                }
                //re-enable attacking since Phoebe is not eating 
                else{
                    managers.Game.keyboardManager.attackEnabled = true;
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
        }

        public GetDamage(attacker: objects.GameObject) {
            //enemy state = stunned
            if (this.isStunned) {
                managers.Game.messageStatus.text = attacker.name + " ended " + this.name + "'s life.";
                this.RemoveFromPlay();
            }
            else {
                //introduce a knockback
                let awayVector: math.Vec2 = this.GetPosition().AwayFrom(managers.Game.player.GetPosition()).Multiply(this.knockback);
                let newPosition: math.Vec2 = math.Vec2.Add(this.GetPosition(), awayVector);
                this.SetPosition(newPosition);
                super.GetDamage(attacker);

                //if hp < 0, show player that it can be eaten via the X key
                if (this.hp <= 0){
                    managers.Game.messageStatus.text = this.name + " is stunned!";
                    this.stunIndicator.x = this.x;
                    this.stunIndicator.y = this.y - this.stunIndicator.height;
                    this.stunIndicator.visible = true;
                    managers.Game.stage.addChild(this.stunIndicator);
                }
            }
        }

        public GetObjectSpeed(): number {
            return 0;
        }

        public RemoveFromPlay(): void{
            managers.Game.stage.removeChild(this);
            this.visible = false;
            this.stunIndicator.visible = false;
        }

        public DevourEffect(): void{
            
        }
    }
}