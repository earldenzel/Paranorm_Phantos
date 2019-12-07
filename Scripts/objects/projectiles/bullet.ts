module objects {
    export abstract class Bullet extends objects.GameObject {

        // Constructor
        constructor(textureAtlas: createjs.SpriteSheet, imageString: string, attackPower: number) {
            super(textureAtlas, imageString);

            this.name = imageString;
            this.attackPower = attackPower;
        }
        // Methods
        public Start(): void {
        }

        public Update(): void {
            //intentional change: please do not set this to weapon swing
            if (managers.Collision.Check(managers.Game.player.weapon, this)) {
                this.Reset();
            }
            if (managers.Collision.Check(managers.Game.player, this)) {
                if (!managers.Game.player.activatePowers && managers.Game.player.powerUp != config.PowerUp.SHADOW) {
                    let ticker: number = createjs.Ticker.getTicks();

                    // use ticker to restrict 1 bullet every 10 frames for damage
                    if (ticker % 10 == 0) {
                        managers.Game.player.isTakingProjectileDamage = true;
                        managers.Game.player.GetDamage(this);
                        this.Reset();
                    }
                }
            }
        }
    }
}