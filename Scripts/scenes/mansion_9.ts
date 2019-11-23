module scenes {

    export class Mansion_9 extends scenes.PlayScene {
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(true, false, true, false, config.Design.MANSION);
            this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.SpiderRight(new math.Vec2(450, 400), 170);
            this.enemies[0].attackPower = 1;
            this.enemies[1] = new objects.SpiderRight(new math.Vec2(450, 630), 170);
            this.enemies[1].attackPower = 1;
            this.enemies[2] = new objects.Zombie(1.5);
            this.enemies[2].SetPosition(new math.Vec2(280, 400));

            this.obstacles[0] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 225));
            this.obstacles[1] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 285));
            this.obstacles[2] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 345));

            this.obstacles[3] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 650));
            this.obstacles[4] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 590));
            this.obstacles[5] = new objects.Gap(managers.Game.mansion_TextureAtlas, "Hole", new math.Vec2(400, 530));

            managers.Game.player.sceneOnLeft = config.Scene.MANSION_8;
            managers.Game.player.sceneOnTop = config.Scene.MANSION_4;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,34);
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}