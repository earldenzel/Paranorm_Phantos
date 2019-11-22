module scenes {

    export class Mansion_14 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, false, true);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.ShootingFLower(new math.Vec2(120, 230));
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.ShootingFLower(new math.Vec2(120, 630));
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.SpiderLeft(new math.Vec2(120, 310), 220);
            this.enemies[2].attackPower = 1;
            this.enemies[3] = new objects.TestZombie(1);
            this.enemies[3].SetPosition(new math.Vec2(420, 230));
            this.enemies[4] = new objects.TestZombie(1);
            this.enemies[4].SetPosition(new math.Vec2(420, 640));

            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 320));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 380));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 440));
            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 500));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Mansion_FloorTile_Hole", new math.Vec2(180, 560));
            this.obstacles[5] = new objects.Barriers(managers.Game.mansion_TextureAtlas, "Mansion_Plant_ng");
            this.obstacles[5].SetPosition(new math.Vec2(275, 430));

            managers.Game.player.sceneOnRight = config.Scene.MANSION_15;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_10;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,66);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}