module objects {
    export abstract class Enemy extends objects.GameObject {
        
        public isStunned: boolean;

        constructor(assetManager: createjs.LoadQueue, enemyName: string) {
            super(assetManager, enemyName);
            this.Start();
            this.Move();
        }

        // Methods
        public Start(): void {
            this.isStunned = false;
        }

        public Update(): void {
            //if current hp  of enemy = 0, then it is stunned           
            if (this.hp <=0){
                this.isStunned = true;
                if (this.visible){
                    objects.Game.messageStatus.text = this.name + " is stunned!";
                }
            }

            //if it is not stunned, it can move
            if (!this.isStunned){
                this.Move();
            }

            //if the player is not taking damage -- check player collision with this (as long as it is not stunned)
            if (!objects.Game.player.isTakingDamage){
                if(managers.Collision.Check(objects.Game.player,this) && !this.isStunned){
                    objects.Game.player.isTakingDamage = true;
                    objects.Game.player.GetDamage(this);
                }
            }
            //the else for this condition is under play.ts - this is because the player might have other collisions with other enemies

            //if enemy is not taking damage -- check collision with weapon
            if (!this.isTakingDamage){
                if(managers.Collision.Check(objects.Game.player.weapon,this)){
                    this.isTakingDamage = true;
                    this.GetDamage(objects.Game.player);
                }
            }
            //else, only remove the flag for taking damage when collosion with weapon has ended
            else{
                if(!managers.Collision.Check(objects.Game.player.weapon,this)){
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
        
        public GetDamage(attacker:objects.GameObject){
            //enemy state = stunned
            if (this.isStunned){
                objects.Game.messageStatus.text = attacker.name + " ended " + this.name + "'s life.";
                objects.Game.stage.removeChild(attacker);
                this.visible = false;                
            }
            else{
                super.GetDamage(attacker);
            }
        }
    }
}