module scenes {

    export class Graveyard_3 extends scenes.PlayScene {
        //this scene is left of graveyard 1
        // Constructor
        constructor() {
            super(false, false, true, true);
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnRight = config.Scene.GRAVEYARD_1;
            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_2;
            this.enemies[0] = new objects.Bat( 5, 150);
            this.enemies[0].SetPosition(new math.Vec2(135, 250));
            this.enemies[1] = new objects.Bat(7, 175);
            this.enemies[1].SetPosition(new math.Vec2(425, 250));
            this.enemies[2] = new objects.Bat(4, 100);
            this.enemies[2].SetPosition(new math.Vec2(282, 600));

            this.obstacles[0] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(115, 220));
            this.obstacles[1] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(115, 270));
            this.obstacles[2] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(115, 320));
            this.obstacles[3] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(115, 370));
            this.obstacles[4] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(165, 220));
            this.obstacles[5] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(165, 270));
            this.obstacles[6] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(165, 320));
            this.obstacles[7] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(165, 370));
            this.obstacles[12] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(450, 220));
            this.obstacles[13] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(450, 270));
            this.obstacles[14] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(450, 320));
            this.obstacles[15] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(450, 370));
            this.obstacles[16] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(400, 220));
            this.obstacles[17] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(400, 270));
            this.obstacles[18] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(400, 320));
            this.obstacles[19] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(400, 370));
            this.obstacles[24] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(282, 655));
            this.obstacles[25] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(282, 605));
            this.obstacles[26] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(282, 555));
            this.obstacles[27] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(282, 505));
            this.obstacles[28] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(232, 655));
            this.obstacles[29] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(232, 605));
            this.obstacles[30] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(232, 555));
            this.obstacles[31] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(232, 505));
            this.obstacles[32] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(332, 655));
            this.obstacles[33] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(332, 605));
            this.obstacles[34] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(332, 555));
            this.obstacles[35] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(332, 505));

            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,34); // 14,12
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}