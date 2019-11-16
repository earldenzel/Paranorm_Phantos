module objects {
    export class SpiderUp extends objects.Enemy {
        // variables
        private distance: number;
        private moveSpeed: number;

        // constructor
        constructor(distance: number, moveSpeed: number) {
            super(managers.Game.spider_TextureAtlas, "spiderUp");

            this.Start();

            this.distance = distance;
            this.moveSpeed = moveSpeed;

            this.hp = 3;
            this.attackPower = 1;         
            this.knockback = 0.75;
            this.eatTimer = 500;
            this.bounty = 4;
            this.isFlying = false;
        }

        // methods
        public Start(): void {
            // set the initial position
            this.y = 200;
            this.x = 320;
        }

        public Update(): void {
            super.Update();
        }

        public Reset(): void {
            super.CheckBound();
        }

        public Move(): void {
            
        }

        public CheckBound(): void {
            super.CheckBound();
        }        

        public DevourEffect(): void{
            managers.Game.player.GainHealth(2);
        }
    }
}