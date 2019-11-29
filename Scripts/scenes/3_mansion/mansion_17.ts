module scenes {

    export class Mansion_17 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, true, false, config.Design.MANSION);
            this.isDoorTopLocked = managers.MansionLocks.mansion_17_lockTop;
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.SpiderRight(new math.Vec2(440, 630), 400);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.Bat(2.5, 100);
            this.enemies[1].SetPosition(new math.Vec2(430, 200));
            this.enemies[2] = new objects.Bat(2, 100);
            this.enemies[2].SetPosition(new math.Vec2(430, 650));
            this.enemies[3] = new objects.ShootingFLower(new math.Vec2(285, 420));
            this.enemies[3].attackPower = 1;

            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 230));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 230));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 640));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 640));
            this.obstacles[5] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 290));
            this.obstacles[6] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 290));
            this.obstacles[7] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 350));
            this.obstacles[8] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 350));
            this.obstacles[9] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 580));
            this.obstacles[10] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 580));
            this.obstacles[11] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(180, 520));
            this.obstacles[12] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(380, 520));

            managers.Game.player.sceneOnLeft = config.Scene.MANSION_16;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_13;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,66);
        }        

        public Update(): void {
            if(!this.isDoorTopLocked){
                managers.MansionLocks.mansion_17_lockTop = false;
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}