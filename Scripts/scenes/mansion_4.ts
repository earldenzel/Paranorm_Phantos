module scenes {

    export class Mansion_4 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, false, false,config.Design.MANSION);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.SpiderUp(new math.Vec2(140, 220), 300);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderLeft(new math.Vec2(120, 250), 370);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.SpiderRight(new math.Vec2(430, 630), 400);
            this.enemies[2].attackPower = 1;

            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(285, 440));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 300));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 300));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 550));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 550));

            managers.Game.player.sceneOnBot = config.Scene.MANSION_9;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,18);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}