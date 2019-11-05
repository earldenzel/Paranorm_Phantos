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
            this.enemies[0].SetPosition(new math.Vec2(config.Bounds.RIGHT_BOUND,config.Bounds.TOP_BOUND));
            this.enemies[1] = new objects.Bat(7, 175);
            this.enemies[1].SetPosition(new math.Vec2(config.Bounds.LEFT_BOUND,config.Bounds.TOP_BOUND));
            this.enemies[2] = new objects.Bat(4, 100);
            this.enemies[2].SetPosition(new math.Vec2(config.Bounds.RIGHT_BOUND,config.Bounds.BOTTOM_BOUND));
            this.enemies[3] = new objects.Bat(2, 50);
            this.enemies[3].SetPosition(new math.Vec2(config.Bounds.LEFT_BOUND,config.Bounds.BOTTOM_BOUND));
            super.Start();
        }        

        public Update(): void {
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}