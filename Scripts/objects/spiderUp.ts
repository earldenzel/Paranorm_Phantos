module objects {
    export class SpiderUp extends objects.Enemy {
        // variables
        private distance: number;
        private speed: number = 1;
        private isToRight: Boolean = true;

        // constructor
        constructor(startPosition: math.Vec2, distance: number) {
            super(managers.Game.spider_TextureAtlas, "spiderUp", startPosition);

            this.distance = distance;

            this.hp = 1;
            this.attackPower = 1;
            this.knockback = 0.75;
            this.eatTimer = 500;
            this.bounty = 4;
            this.isFlying = false;
        }

        // methods
        public Start(): void {
            // set the initial position
            this.SetPosition(this.startPosition);
        }

        public Update(): void {
            super.Update();
        }

        public Reset(): void {
            super.CheckBound();
        }

        public Move(): void {

            if (this.isToRight && !(this.x == this.startPosition.x + this.distance)) {
                this.x += this.speed;
            } else if (this.isToRight && (this.x == this.startPosition.x + this.distance)) {
                this.isToRight = false;
            } else if (!this.isToRight && !(this.x == this.startPosition.x)) {
                this.x -= this.speed;
            } else if (!this.isToRight && (this.x == this.startPosition.x)) {
                this.isToRight = true;
            }
        }

        public CheckBound(): void {
            super.CheckBound();
        }

        public DevourEffect(): void {
            managers.Game.player.GainHealth(2);
        }
    }
}