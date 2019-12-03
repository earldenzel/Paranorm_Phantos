module objects{
    export class Bat extends objects.Enemy{
        // variables
        private updateTime: number;
        private currentTime: number;
        private trajectory: math.Vec2;

        // constructors
        
        constructor(moveSpeed:number, updateTime: number){
            super(managers.Game.bat_TextureAtlas, "bat");
            this.Start();
      
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 500;
            this.updateTime = updateTime;
            this.currentTime = updateTime;
            this.isFlying = true;
        }
        // methods

        public Start(): void {
            // set the initial position
            this.y = 200;
            this.x = 320;
            this.trajectory = new math.Vec2(0,0);
            let stageOfSpawn: config.Design = (managers.Game.currentStage as scenes.PlayScene).design;
            switch(stageOfSpawn){
                case config.Design.GRAVEYARD:
                    this.hp = 3;
                    this.attackPower = 1;   
                    this.bounty = 2;
                    this.expGain = 3;
                    break;
                case config.Design.HOTEL:
                    this.hp = 13;
                    this.attackPower = 1;   
                    this.bounty = 9;
                    this.expGain = 5;
                    break;
                case config.Design.MANSION:
                    this.hp = 23;
                    this.attackPower = 2;   
                    this.bounty = 15;
                    this.expGain = 7;
                    break;
            }
        }
        public Update(): void {
            super.Update();
        }
        public Reset(): void {
            super.CheckBound();
        }

        public Move(): void {
            this.currentTime -= 1;
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (this.currentTime == 0){
                this.trajectory = math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed);
                this.currentTime = this.updateTime;
            }

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, this.trajectory);
            
            this.x = newPos.x;
            this.y = newPos.y;
        }

        public CheckBound(): void {
            super.CheckBound();
        }        

        public DevourEffect(): void{
            managers.Game.player.GainHealth(2);
        }
    }
}