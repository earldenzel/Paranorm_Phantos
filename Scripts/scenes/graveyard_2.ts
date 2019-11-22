module scenes {

    export class Graveyard_2 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(false, false, false, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            this.enemies[0] = new objects.TestEnemy(1, true, true);
            this.enemies[0].SetPosition(new math.Vec2(275, 430));
            this.enemies[1] = new objects.TestZombie(0.5);
            this.enemies[1].SetPosition(new math.Vec2(275, 200));
            this.enemies[2] = new objects.TestZombie(0.5);
            this.enemies[2].SetPosition(new math.Vec2(275, 600));
            this.enemies[3] = new objects.Bat(2.5, 100);
            this.enemies[3].SetPosition(new math.Vec2(100, 430));

            this.obstacles[0] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[0].SetPosition(new math.Vec2(150, 360));
            this.obstacles[1] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[1].SetPosition(new math.Vec2(150, 410));
            this.obstacles[2] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[2].SetPosition(new math.Vec2(150, 460));
            this.obstacles[3] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[3].SetPosition(new math.Vec2(150, 510));

            this.obstacles[4] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[4].SetPosition(new math.Vec2(400, 360));
            this.obstacles[5] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[5].SetPosition(new math.Vec2(400, 410));
            this.obstacles[6] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[6].SetPosition(new math.Vec2(400, 460));
            this.obstacles[7] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[7].SetPosition(new math.Vec2(400, 510));

            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_3;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(80,34); //-2,12
        }

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}