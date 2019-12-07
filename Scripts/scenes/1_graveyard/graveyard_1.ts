module scenes {

    export class Graveyard_1 extends scenes.PlayScene {
        // Variables        
        // Constructor
        constructor() {
            super(false, true, true, true,config.Design.GRAVEYARD);
            this.isDoorLeftLocked = managers.GraveyardLocks.graveyard_1_lockLeft;
            this.isDoorRightLocked = managers.GraveyardLocks.graveyard_1_lockRight;
            this.isDoorBotLocked = managers.GraveyardLocks.graveyard_1_lockBot;
            this.Start();
        }

        // Methods
        public Start(): void {
            if (managers.Game.player.stageFinished == 0){
                this.enemies[0] = new objects.Ghost(0);
                this.enemies[0].attackPower = 0; // you will never die from starter enemy
                this.enemies[0].SetPosition(new math.Vec2(200, 600));

                let x : number = 200;
                let y : number = 250;
                
                this.cosmetics[0] = new objects.Indicator("upIndicator");
                this.cosmetics[1] = new objects.Indicator("downIndicator");
                this.cosmetics[2] = new objects.Indicator("leftIndicator");
                this.cosmetics[3] = new objects.Indicator("rightIndicator");
                this.cosmetics[4] = new objects.Indicator("attackIndicator");
                this.cosmetics[7] = new objects.Indicator("runIndicator");
                this.cosmetics[8] = new objects.Indicator("powersIndicator");
                this.cosmetics[9] = new objects.Indicator("stunIndicator");
                this.cosmetics[10] = new objects.Indicator("attackIndicator");
                this.cosmetics[11] = new objects.Indicator("stunIndicator");
                this.cosmetics[0].SetPosition(new math.Vec2(x,y-this.cosmetics[0].height));
                this.cosmetics[1].SetPosition(new math.Vec2(x,y));
                this.cosmetics[2].SetPosition(new math.Vec2(x-this.cosmetics[2].width,y));
                this.cosmetics[3].SetPosition(new math.Vec2(x+this.cosmetics[3].width,y));
                this.cosmetics[4].SetPosition(new math.Vec2(200,350));
                this.cosmetics[7].SetPosition(new math.Vec2(200,300));
                this.cosmetics[8].SetPosition(new math.Vec2(200,400));
                this.cosmetics[9].SetPosition(new math.Vec2(200,450));
                this.cosmetics[10].SetPosition(new math.Vec2(180,500));
                this.cosmetics[11].SetPosition(new math.Vec2(220,500));
                
                this.extraLabels[0] = new objects.Label("MOVEMENT", "16px", "'Press Start 2P'", "#FFFF00", 350, 250, true),
                this.extraLabels[1] = new objects.Label("HOLD TO RUN", "16px", "'Press Start 2P'", "#FFFF00", 350, 300, true),
                this.extraLabels[2] = new objects.Label("ATTACK", "16px", "'Press Start 2P'", "#FFFF00", 350, 350, true),                
                this.extraLabels[3] = new objects.Label("POWERS", "16px", "'Press Start 2P'", "#FFFF00", 350, 400, true),               
                this.extraLabels[4] = new objects.Label("DEVOUR/DASH", "16px", "'Press Start 2P'", "#FFFF00", 350, 450, true),               
                this.extraLabels[5] = new objects.Label("SOUL MODE", "16px", "'Press Start 2P'", "#FFFF00", 350, 500, true),            
                this.extraLabels[6] = new objects.Label("USE SPARINGLY", "16px", "'Press Start 2P'", "#FFFF00", 350, 520, true)
            }
            this.cosmetics[5] = new objects.Stairs(config.Scene.HOTEL_1, true);
            this.cosmetics[6] = new objects.Stairs(config.Scene.MANSION_1, true);
            this.cosmetics[5].SetPosition(new math.Vec2(500, 550));
            this.cosmetics[6].SetPosition(new math.Vec2(500, 650));
            this.cosmetics[5].visible = (managers.Game.player.stageFinished > 0);
            this.cosmetics[6].visible = (managers.Game.player.stageFinished > 1);
            this.extraLabels[7] = new objects.Label("TO HOTEL", "16px", "'Press Start 2P'", "#FFFF00", 450, 550, true);
            this.extraLabels[8] = new objects.Label("TO MANSION", "16px", "'Press Start 2P'", "#FFFF00", 450, 650, true);
            this.extraLabels[7].visible = (managers.Game.player.stageFinished > 0);
            this.extraLabels[8].visible = (managers.Game.player.stageFinished > 1);

            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_3;
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_4;
            super.Start();
        }

        public Update(): void {
            //god mode to unlock all stages and temporarily make phoebe strong
            if (managers.Game.keyboardManager.powers && 
                managers.Game.keyboardManager.running && 
                managers.Game.keyboardManager.biting && 
                managers.Game.keyboardManager.attacking &&
                !managers.Game.player.godMode){
                managers.Game.player.powerUp = config.PowerUp.ICE;
                managers.Game.player.playerAttackDelay = 0;
                managers.Game.player.money = 99999;
                managers.Game.player.godMode = true;
                managers.Game.player.key = 99; 
                managers.Game.player.attackPower = 8;
                managers.Game.player.maxHp = 15;
                managers.Game.player.hp = 15;
                managers.Game.player.ecto = 5;
            }

            if (managers.Game.player.godMode){            
                this.cosmetics[5].visible = true;
                this.cosmetics[6].visible = true;
                this.extraLabels[7].visible = true;
                this.extraLabels[8].visible = true;
            }

            if(this.AllEnemiesAreDead()){
                managers.GraveyardLocks.graveyard_1_lockRight = false;
                this.isDoorRightLocked = false;
                managers.GraveyardLocks.graveyard_1_lockBot = false;
                this.isDoorBotLocked = false;
            }
            if(!this.isDoorLeftLocked){
                managers.GraveyardLocks.graveyard_1_lockLeft = false;
            }
            super.Update();
        }

        public Main(): void {
            this.playerInfo.PlayerLocation = new math.Vec2(112,34); // 30,12
            super.Main();
        }
    }
}