module objects {
    export abstract class Bullet extends objects.GameObject {

        private projectileTickerTime: number = 10;

        // Constructor
        constructor(textureAtlas: createjs.SpriteSheet, imageString:string, attackPower: number) {
            super(textureAtlas, imageString);

            this.name = imageString;
            this.attackPower = attackPower;
        }
        // Methods
        public Start(): void {
        }

        public Update(): void {
            if(managers.Collision.Check(managers.Game.player, this)){
                let ticker: number = createjs.Ticker.getTicks();

                // use ticker to restrict 1 bullet only hurts 1 hp
                if (ticker % this.projectileTickerTime == 0){
                    managers.Game.player.GetDamage(this);
                    this.Reset();
                }
            }
        }
    }
}