module scenes {

    export class Mansion_18 extends scenes.PlayScene {

        private victoryDanced: boolean = false;
        private onlyTheBossIsLeft: boolean = false;
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, false, false, config.Design.MANSION);
            this.hasProjectileShooters = true;
            this.isBossRoom = true;
            this.Start();
        }

        // Methods
        public Start(): void {            
            if (managers.Game.player.stageFinished <= 2){    
                this.enemies[0] = new objects.LittleGirl(2, true, false);
            }     
            
            this.cosmetics[0] = new objects.Stairs(config.Scene.CONGRATULATIONS,this.design, true); 
            this.cosmetics[0].SetPosition(new math.Vec2(285, 420));
            managers.Game.player.sceneOnTop = config.Scene.MANSION_16;
            this.isDoorTopLocked =  (managers.Game.player.stageFinished == 2);
            this.cosmetics[0].visible = (managers.Game.player.stageFinished > 2);
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(112,82);
        }        

        public Update(): void {
            super.Update();

            if (managers.Game.player.stageFinished <= 2){    
                if (this.enemies[0].isStunned && !this.onlyTheBossIsLeft){
                    this.DestroyOthers(this.enemies[0]);
                    this.onlyTheBossIsLeft = true;
                }
                if (this.AllEnemiesAreDead()){
                    this.isDoorTopLocked = false;
                    managers.Game.player.stageFinished = 3;
                    if (!this.victoryDanced){
                        managers.Game.player.VictoryDance();
                        this.victoryDanced = true;
                    }
                    this.cosmetics[0].visible = true;
                }
            }
        }

        public Main(): void {
            super.Main();
        }
    }
}