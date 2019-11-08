module scenes {

    export class Graveyard_1 extends scenes.PlayScene {
        // Variables
        // Constructor
        constructor() {
            super(false, true, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.TestEnemy(0, true, true);
            this.enemies[0].attackPower = 0; // you will never die from starter enemy

            let x : number = (config.Bounds.LEFT_BOUND + config.Bounds.RIGHT_BOUND)/2;
            let y : number = (config.Bounds.TOP_BOUND + config.Bounds.BOTTOM_BOUND)/2 + 150;
            this.cosmetics[0] = new objects.Indicator("wKeyIndicator");
            this.cosmetics[1] = new objects.Indicator("sKeyIndicator");
            this.cosmetics[2] = new objects.Indicator("aKeyIndicator");
            this.cosmetics[3] = new objects.Indicator("dKeyIndicator");
            this.cosmetics[4] = new objects.Indicator("jKeyIndicator");
            this.cosmetics[0].SetPosition(new math.Vec2(x,y-this.cosmetics[0].height));
            this.cosmetics[1].SetPosition(new math.Vec2(x,y+this.cosmetics[1].height));
            this.cosmetics[2].SetPosition(new math.Vec2(x-this.cosmetics[2].width,y));
            this.cosmetics[3].SetPosition(new math.Vec2(x+this.cosmetics[3].width,y));
            this.cosmetics[4].SetPosition(new math.Vec2(this.enemies[0].x,this.enemies[0].y - 100));

            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_3;
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_4;
            super.Start();
        }

        public Update(): void {
            if(!this.enemies[0].visible && this.cosmetics[0].visible){
                setTimeout(() => {
                    this.cosmetics.forEach(cosmetic =>{
                        cosmetic.visible = false;
                    });                  
                }, 1500);
            }
            super.Update();
        }

        public Main(): void {
            this.playerInfo.PlayerLocation = new math.Vec2(30,12);
            super.Main();
        }
    }
}