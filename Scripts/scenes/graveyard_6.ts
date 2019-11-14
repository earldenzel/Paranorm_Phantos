module scenes {

    export class Graveyard_6 extends scenes.PlayScene {
        // Constructor
        constructor() {
            super(true, true, false, false);
            this.isDoorBotLocked = managers.GraveyardLocks.graveyard_6_lockBot;
            this.Start();
        }

        // Methods
        public Start(): void {

            this.enemies[0] = new objects.TestZombie(1);
            this.enemies[0].SetPosition(new math.Vec2(430, 240));
            this.enemies[1] = new objects.TestZombie(1);
            this.enemies[1].SetPosition(new math.Vec2(230, 600));
            this.enemies[2] = new objects.TestEnemy(2, true, true);
            this.enemies[2].SetPosition(new math.Vec2(100, 240));
            this.enemies[3] = new objects.Bat(2, 100);
            this.enemies[3].SetPosition(new math.Vec2(100, 600));


            this.obstacles[0] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[0].SetPosition(new math.Vec2(165, 220));
            this.obstacles[1] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[1].SetPosition(new math.Vec2(165, 270));
            this.obstacles[2] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[2].SetPosition(new math.Vec2(165, 320));
            this.obstacles[3] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[3].SetPosition(new math.Vec2(165, 370));
            this.obstacles[4] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[4].SetPosition(new math.Vec2(165, 505));
            this.obstacles[5] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[5].SetPosition(new math.Vec2(165, 555));
            this.obstacles[6] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[6].SetPosition(new math.Vec2(165, 605));
            this.obstacles[7] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[7].SetPosition(new math.Vec2(165, 655));
            this.obstacles[8] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[8].SetPosition(new math.Vec2(215, 320));
            this.obstacles[9] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[9].SetPosition(new math.Vec2(265, 320));
            this.obstacles[10] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[10].SetPosition(new math.Vec2(315, 320));
            this.obstacles[11] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "Graveyard_GraveTile");
            this.obstacles[11].SetPosition(new math.Vec2(450, 320));
            this.obstacles[12] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(400, 505));
            this.obstacles[13] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(350, 505));
            this.obstacles[14] = new objects.Gap(managers.Game.graveyard_TextureAtlas, "Graveyard_HoleTile", new math.Vec2(300, 505));

            managers.Game.player.sceneOnTop = config.Scene.GRAVEYARD_5;
            managers.Game.player.sceneOnBot = config.Scene.GRAVEYARD_8;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(30,44);
        }        

        public Update(): void {
            if(!this.enemies[0].visible && !this.enemies[1].visible && !this.enemies[2].visible && !this.enemies[3].visible){
                if(!this.getChildByName("Items_Key") && managers.GraveyardLocks.graveyard_6_key){
                    this.key = new objects.Key();
                    this.key.x = 250;
                    this.key.y = 300;
                    this.addChild(this.key);
                    managers.GraveyardLocks.graveyard_6_key = false;
                }
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}