module objects {
    export class SlimePuddle extends objects.GameObject {
        // Variables
        public position: math.Vec2;
        //private playerSlowdown: boolean = false;
        //private enemySlowdown: boolean = false;
        private types: Array<any> = [
            "SlimePuddle1",
            "SlimePuddle2",
            "SlimePuddle3",
            "SlimePuddle4"
        ];

        // Constructor
        constructor(imageNumber: number, position: math.Vec2) {
            super(managers.Game.enemies_TextureAtlas, "SlimePuddle1");
            // Change the animation right away
            this.gotoAndPlay(this.types[imageNumber]);
            this.position = position;
            this.Start();
        }
        public Start(): void {
            this.SetPosition(this.position);
        }
        public Update(): void { }
        public Reset(): void { }
        public Move(): void { }
        public CheckBound(): void {
        }
    }
}