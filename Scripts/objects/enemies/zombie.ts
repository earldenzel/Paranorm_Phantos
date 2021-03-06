module objects {
    export class Zombie extends objects.Enemy {
        // Variables
        private currentSpeed: number;
        private attackingMode: boolean;
        // Animation Variables
        private walk: Array<any>;
        private attack: Array<any>;
        public direction: config.Direction;

        // Constructors
        constructor(moveSpeed: number) {
            super(managers.Game.enemies_TextureAtlas, "Zombie_WalkBack");
            this.Start();
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 300;
            this.isFlying = false;
            this.halfSpeed = moveSpeed / 2;
            this.canBeEaten = true;
            this.attackingMode = false;

            // Animations
            this.walk = ["Zombie_WalkBack", "Zombie_WalkFront", "Zombie_WalkLeft", "Zombie_WalkLeft"];
            this.attack = ["Zombie_AttackBack", "Zombie_AttackFront", "Zombie_AttackLeft", "Zombie_AttackLeft"];

            this.direction = config.Direction.UP;
            this.explosion = new objects.Explosion(ExplodeTypes.ZOMBIE,this.GetPosition(),0,false);
        }

        // Methods
        public Start(): void {
            // set the initial position
            this.y = 300;
            this.x = 350;
            let stageOfSpawn: config.Design = (managers.Game.currentStage as scenes.PlayScene).design;
            switch(stageOfSpawn){
                case config.Design.GRAVEYARD:
                    this.hp = 3;
                    this.attackPower = 1;   
                    this.bounty = 5;
                    this.expGain = 2;
                    break;
                case config.Design.HOTEL:
                    this.hp = 18;
                    this.attackPower = 2;   
                    this.bounty = 9;
                    this.expGain = 4;
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
                this.SwitchAnimation("Zombie_Explode");
            }
            else{
                if (this.isStunned){
                    this.SwitchAnimation("Zombie_Stun");
                }
                else{
                    if (this.attackingMode) {
                        this.SwitchAnimation(this.attack[this.direction as number]);
                    } else {
                        this.SwitchAnimation(this.walk[this.direction as number]);
                    }
                }
            }

            if (this.currentAnimation == "Zombie_Explode" && this.currentAnimationFrame > 3) {
                managers.Game.stage.removeChild(this);
                this.visible = false;
            }
            super.Update();
        }
        public Reset(): void { }

        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 100) {
                this.attackingMode = true;
                this.currentSpeed = this.moveSpeed * 2;
            } else {
                this.attackingMode = false;
                this.currentSpeed = this.moveSpeed;
            }

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.currentSpeed));
            
            if (newPos.x < this.x) {
                this.scaleX = 1;
                this.direction = config.Direction.LEFT;
            }
            if (newPos.x > this.x) {
                this.scaleX = -1;
                this.direction = config.Direction.RIGHT;
            }
            if (newPos.y > this.y) {
                this.direction = config.Direction.DOWN;
            }
            if (newPos.y < this.y) {
                this.direction = config.Direction.UP;
            }

            this.x = newPos.x;
            this.y = newPos.y;
        }
        public CheckBound(): void {
            super.CheckBound();
        }

        public GetObjectSpeed(): number {
            return this.currentSpeed;
        }               

        public DevourEffect(): void{
            managers.Game.player.GainHealth(3);
        }
    }
}