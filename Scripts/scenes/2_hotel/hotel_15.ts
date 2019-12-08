module scenes {

    export class Hotel_15 extends scenes.PlayScene { 

        private victoryDanced: boolean = false;
        private onlyTheBossIsLeft: boolean = false;
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, false, false,config.Design.HOTEL);
            this.isBossRoom = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            if (managers.Game.player.stageFinished <= 1){    
                this.enemies[0] = new objects.HotelManager(2, false, false);
            }     
            
            this.cosmetics[0] = new objects.Stairs(config.Scene.MANSION_1, true);
            this.cosmetics[0].SetPosition(new math.Vec2(285, 420));

            managers.Game.player.sceneOnTop = config.Scene.HOTEL_13;
            this.isDoorTopLocked =  (managers.Game.player.stageFinished == 1);
            this.cosmetics[0].visible = (managers.Game.player.stageFinished > 1);
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,82);
        }        

        public Update(): void {
            super.Update();
            
            if (managers.Game.player.stageFinished <= 1){    
                if (this.enemies[0].isStunned && !this.onlyTheBossIsLeft){
                    this.DestroyOthers(this.enemies[0]);
                    this.onlyTheBossIsLeft = true;
                }
                if (this.AllEnemiesAreDead()){
                    this.isDoorTopLocked = false;
                    managers.Game.player.stageFinished = 2;
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