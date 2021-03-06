module scenes {

    export class Mansion_11 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, true, false, true, config.Design.MANSION);
            this.isDoorBotLocked = managers.MansionLocks.mansion_11_lockBot;
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.ShootingFLower(new math.Vec2(275, 440));
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.Zombie(1);
            this.enemies[2].SetPosition(new math.Vec2(400, 200));
            this.enemies[3] = new objects.Zombie(1.5);
            this.enemies[3].SetPosition(new math.Vec2(400, 650));

            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(280, 350));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(280, 550));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(200, 450));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(350, 450));

            managers.Game.player.sceneOnRight = config.Scene.MANSION_12;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_7;
            managers.Game.player.sceneOnBot = config.Scene.MANSION_15;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,50);
        }        

        public Update(): void {
            if(!this.isDoorBotLocked){
                managers.MansionLocks.mansion_11_lockBot = false;
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}