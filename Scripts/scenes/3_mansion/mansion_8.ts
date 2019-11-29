module scenes {

    export class Mansion_8 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, true, true, config.Design.MANSION);
            this.isDoorRightLocked = managers.MansionLocks.mansion_8_lockRight;
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(275, 440));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.Bat(2.5, 100);
            this.enemies[1].SetPosition(new math.Vec2(100, 200));
            this.enemies[2] = new objects.Bat(2.5, 100);
            this.enemies[2].SetPosition(new math.Vec2(450, 200));
            this.enemies[3] = new objects.Bat(2.5, 100);
            this.enemies[3].SetPosition(new math.Vec2(450, 650));
            this.enemies[4] = new objects.Bat(2.5, 100);
            this.enemies[4].SetPosition(new math.Vec2(100, 650));

            managers.Game.player.sceneOnLeft = config.Scene.MANSION_7;
            managers.Game.player.sceneOnRight = config.Scene.MANSION_9;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_3;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_12;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(112,34);
        }        

        public Update(): void {
            if(!this.isDoorRightLocked){
                managers.MansionLocks.mansion_8_lockRight = false;
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}