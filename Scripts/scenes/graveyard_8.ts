module scenes {

    export class Graveyard_8 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(true, false, false, false);
            this.Start();
        }

        // Methods
        public Start(): void {            
            this.enemies[0] = new objects.Undertaker(0.5);
            this.enemies[0].SetPosition(new math.Vec2(300, 530));
            this.enemies[1] = new objects.TestZombie(1.5);
            this.enemies[1].SetPosition(new math.Vec2(375, 500));
            this.enemies[2] = new objects.TestZombie(1.5);
            this.enemies[2].SetPosition(new math.Vec2(225, 500));
            this.enemies[3] = new objects.Bat(4.5, 100);
            this.enemies[3].SetPosition(new math.Vec2(500, 500));
            this.enemies[4] = new objects.Bat(4.5, 100);
            this.enemies[4].SetPosition(new math.Vec2(0, 500));

            this.enemies[5] = new objects.TestZombie(1.5);
            this.enemies[5].visible = false;
            this.enemies[6] = new objects.TestZombie(1.5);
            this.enemies[6].visible = false;

            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(112,82); // 30,60
        }        

        public Update(): void {
            super.Update();
            
            if (this.enemies[1].hp <= 0 && this.enemies[2].hp <= 0 && this.enemies[5].hp > 0 && this.enemies[6].hp> 0){                
                this.enemies[5].SetPosition(new math.Vec2(500, 600));
                this.enemies[5].visible = true;
                this.enemies[5].SetPosition(new math.Vec2(100, 600));
                this.enemies[6].visible = true;
            }
        }

        public Main(): void {
            super.Main();
        }
    }
}