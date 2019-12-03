module scenes {

    export class Graveyard_4 extends scenes.PlayScene {
        //this scene is right of graveyard 1
        // Constructor
        constructor() {
            super(false, false, true, false,config.Design.GRAVEYARD);
            //this.hasProjectileShooters = true;
            this.Start();
        }

        // Methods
        public Start(): void {
            //this.enemies[0] = new objects.RedSkeleton(new math.Vec2(400, 360),3,false,true);
            this.enemies[0] = new objects.Maggot(1,false,true,4);
            this.enemies[1] = new objects.GhostThin(3, false, false);
            this.enemies[2] = new objects.GhostThin(2,false,true);
            this.enemies[3] = new objects.Zombie(1);

            this.obstacles[0] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[0].SetPosition(new math.Vec2(200, 360));
            this.obstacles[1] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[1].SetPosition(new math.Vec2(360, 360));
            this.obstacles[2] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[2].SetPosition(new math.Vec2(200, 510));
            this.obstacles[3] = new objects.Barriers(managers.Game.graveyard_TextureAtlas, "GraveTile");
            this.obstacles[3].SetPosition(new math.Vec2(360, 510));

            managers.Game.player.sceneOnLeft = config.Scene.GRAVEYARD_1;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(128,34); // 46,12
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}