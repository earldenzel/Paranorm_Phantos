module objects{
    export class Maggot extends objects.Enemy{
        // Variable
        private moveSpeed: number;
        private rightDirection: boolean;
        private downDirection: boolean;
        public spawnNumber: number;
        public spawns: objects.MaggotSmall[];

        private walk: Array<any>;
        public direction: config.Direction;

        // Constructor
        constructor(moveSpeed: number, rightDirection: boolean, downDirection: boolean, spawnNumber: number) {
            super(managers.Game.enemies_TextureAtlas,"Maggot_WalkForward");
            this.Start();
            this.hp = 2;
            this.attackPower = 1;

            this.moveSpeed = moveSpeed;
            this.rightDirection = rightDirection;
            this.downDirection = downDirection;
            this.spawnNumber = spawnNumber;
            this.knockback = 1;
            this.canBeEaten = false;
            this.bounty = 20;
            this.isFlying = false;

            this.walk = ["Maggot_WalkForward","Maggot_WalkForward","Maggot_WalkSide","Maggot_WalkSide"];

            this.direction = config.Direction.DOWN;

            this.SpawnCreation();
        }
        // Methods
        public Start(): void {
            this.y = 400;
            this.x = 320;
            
        }
        public Update():void{
            if(!this.isDead){
                this.SwitchAnimation(this.walk[this.direction as number]);
            }
            else{
                if (this.currentAnimation == "Maggot_Explode" && this.currentAnimationFrame > 3) {
                    if(this.visible){
                        this.ActivateSpawns();
                    }
                    managers.Game.stage.removeChild(this);
                    this.visible = false;
                }
                this.SwitchAnimation("Maggot_Explode");
            }
            super.Update();
        }
        public Reset(): void{}
        public Move():void{
            let ticker = createjs.Ticker.getTicks();
        
            if(ticker % 300 > 150){
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                this.direction = config.Direction.LEFT;
            } 
            else{
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
        private SpawnCreation():void{
            this.spawns = new Array<objects.MaggotSmall>();
            for (let i = 0; i < this.spawnNumber; i++) {
                let smallMoveSpeed: number = this.moveSpeed + i;
                let smallRightDir: boolean = (i % 2 == 0);
                let smallDownDir: boolean = (i % 4 == 0 || i % 3 == 0); 
                this.spawns[i] = new objects.MaggotSmall(smallMoveSpeed,smallRightDir,smallDownDir); 
            }
            console.log(this.spawns);
        }
        public ActivateSpawns():void{
            for (let i = 0; i < this.spawnNumber; i++) {
                this.spawns[i].x = this.x;
                this.spawns[i].y = this.y;
               (managers.Game.currentStage as scenes.PlayScene).AddEnemyToScene(this.spawns[i]);
               
               //this.spawns[i].Update();
               console.log("Created Maggot ",i);
            }
        }
    }
}