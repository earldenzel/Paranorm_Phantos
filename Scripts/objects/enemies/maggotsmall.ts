module objects {
    export class MaggotSmall extends objects.Enemy {
        // Variable
        private rightDirection: boolean;
        private downDirection: boolean;
        private walk: Array<any>;
        public direction: config.Direction;

        // Constructor
        constructor(moveSpeed: number, rightDirection: boolean, downDirection: boolean) {
            super(managers.Game.enemies_TextureAtlas, "Maggot_SmallWalkForward");
            console.log("Created");
            this.Start();
            this.hp = 2;
            this.attackPower = 1;

            this.moveSpeed = moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.knockback = 1;
            this.eatTimer = 100;
            this.bounty = 5;
            this.isFlying = false;
            this.expGain = 1;
            this.halfSpeed = moveSpeed / 2;

            this.walk = ["Maggot_SmallWalkForward", "Maggot_SmallWalkForward", "Maggot_SmallWalkSide", "Maggot_SmallWalkSide"];

            this.direction = config.Direction.DOWN;
            this.explosion = new objects.Explosion(ExplodeTypes.MAGGOT,this.GetPosition(),0,false);
        }
        // Methods
        public Start(): void {

            this.y = 400;
            this.x = 320;
        }
        public Update(): void {
            if (!this.isDead) {
                this.SwitchAnimation(this.walk[this.direction as number]);
            }
            else{                 
                this.SwitchAnimation("Maggot_Explode");
            }
            if (this.currentAnimation == "Maggot_Explode" && this.currentAnimationFrame > 3) {
                managers.Game.stage.removeChild(this);
                this.visible = false;
            }
            super.Update();
        }
        public Reset(): void { }
        public Move(): void {
            let ticker = createjs.Ticker.getTicks();

            if (ticker % 150 > 75) {
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                this.direction = config.Direction.LEFT;
            }
            else {
                this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;
                this.direction = config.Direction.DOWN;
            }
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
            this.CheckBound();
        }
        
        public DevourEffect(): void{
            managers.Game.player.GainHealth(1);
        }
    }
}