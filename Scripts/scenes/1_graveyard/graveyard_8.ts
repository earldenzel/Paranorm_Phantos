module scenes {

    export class Graveyard_8 extends scenes.PlayScene {

        private victoryDanced: boolean = false;
        private onlyTheBossIsLeft: boolean = false;
        // Constructor
        constructor() {
            super(true, false, false, false,config.Design.GRAVEYARD);
            this.isBossRoom = true;
            this.Start();
        }

        // Methods
        public Start(): void {        
            if (managers.Game.player.stageFinished <= 0){    
                this.enemies[0] = new objects.Undertaker(0.5);
                this.enemies[0].SetPosition(new math.Vec2(300, 530));
                this.enemies[1] = new objects.Zombie(1.5);
                this.enemies[1].SetPosition(new math.Vec2(375, 500));
                this.enemies[2] = new objects.Zombie(1.5);
                this.enemies[2].SetPosition(new math.Vec2(225, 500));
                this.enemies[3] = new objects.Bat(10, 400);
                this.enemies[3].SetPosition(new math.Vec2(500, 500));
                this.enemies[4] = new objects.Bat(10, 400);
                this.enemies[4].SetPosition(new math.Vec2(0, 500));

                this.enemies[5] = new objects.Zombie(1.5);
                this.enemies[5].visible = false;
                this.enemies[6] = new objects.Zombie(1.5);
                this.enemies[6].visible = false;
                
                this.cosmetics[1] = new objects.Indicator("attackIndicator");
                this.cosmetics[1].SetPosition(new math.Vec2(150, 150));
                this.cosmetics[2] = new objects.Indicator("stunIndicator");
                this.cosmetics[2].SetPosition(new math.Vec2(180, 150));
            }
            
            this.cosmetics[0] = new objects.Stairs(config.Scene.HOTEL_1,this.design, false);
            this.cosmetics[0].SetPosition(new math.Vec2(285, 420));

            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_6;
            this.isDoorTopLocked =  (managers.Game.player.stageFinished == 0);
            this.cosmetics[0].visible = (managers.Game.player.stageFinished > 0);

            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(112,82); // 30,60
        }        

        public Update(): void {
            super.Update();
            
            if (managers.Game.player.stageFinished <= 0){
                this.cosmetics[1].visible = (!managers.Game.player.activateSoul && managers.Game.player.soulCounter > 0);
                this.cosmetics[2].visible = (!managers.Game.player.activateSoul && managers.Game.player.soulCounter > 0);
                if (this.enemies[1].hp <= 0 && this.enemies[2].hp <= 0 && this.enemies[5].hp > 0 && this.enemies[6].hp> 0){                
                    this.enemies[5].SetPosition(new math.Vec2(500, 600));
                    this.enemies[5].visible = true;
                    this.enemies[5].SetPosition(new math.Vec2(100, 600));
                    this.enemies[6].visible = true;
                }
                if (this.enemies[0].isStunned && !this.onlyTheBossIsLeft){
                    this.DestroyOthers(this.enemies[0]);
                    this.onlyTheBossIsLeft = true;
                }
                if (this.AllEnemiesAreDead()){
                    this.isDoorTopLocked = false;
                    this.cosmetics[1].visible = false;
                    this.cosmetics[2].visible = false;
                    managers.Game.player.stageFinished = 1;
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