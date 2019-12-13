module objects {
    export class GiantWorm extends objects.Enemy {
        // Variables
        private bulletSpawn: math.Vec2;
        private rateOfFire: number;
        public spawn: objects.MaggotSmall;
        private explosions: objects.Explosion[];

        // Constructor
        constructor() {
            super(managers.Game.bosses_TextureAtlas, "Boss2_Worm_Alpha");

            this.Start();

            this.hp = 100;
            this.attackPower = 2;
            this.moveSpeed = 0;
            this.knockback = 0;
            this.eatTimer = 0;
            this.canBeEaten = false;
            this.bounty = 200;
            this.isFlying = false;
            this.rateOfFire = 100;
            this.explosion = new objects.Explosion(ExplodeTypes.MAGGOT, this.GetPosition(), 2);
            this.explosions = [
                new objects.Explosion(ExplodeTypes.MAGGOT, this.GetPosition(), 3),
                new objects.Explosion(ExplodeTypes.MAGGOT, this.GetPosition(), 3),
                new objects.Explosion(ExplodeTypes.MAGGOT, this.GetPosition(), 3),
                new objects.Explosion(ExplodeTypes.MAGGOT, this.GetPosition(), 3)
            ];
        }
        // Methods
        public Start(): void {
            // Change the position.
            this.SetPosition(new math.Vec2(282, 662));
        }
        public Update(): void {
            let ticker = createjs.Ticker.getTicks();
            if (!this.isDead) {
                if (ticker % 90 == 0 && this.currentAnimation == "Boss2_Worm_Alpha") {
                    this.SwitchAnimation("Boss2_Worm");
                }
            }
            else {
                for (let i = 0; i < this.explosions.length; i++) {
                    const e = this.explosions[i];
                    switch (i) {
                        case 0:
                            e.x = (this.x - this.halfW) + 100;
                            e.y = (this.y - this.halfH);
                            break;
                        case 1:
                            e.x = (this.x - this.halfW) - 100;
                            e.y = (this.y - this.halfH);
                            break;
                        case 2:
                            e.x = (this.x - this.halfW) + 200;
                            e.y = (this.y - this.halfH) - 50;
                            break;
                        case 3:
                            e.x = (this.x - this.halfW) - 200;
                            e.y = (this.y - this.halfH) - 50;
                            break;
                    }
                }
                managers.Game.stage.addChild(this.explosions[0]);
                if (ticker % 30 == 0) {
                    managers.Game.stage.addChild(this.explosions[1]);
                }
                if (ticker % 60 == 0) {
                    managers.Game.stage.addChild(this.explosions[2]);
                }
                if (ticker % 90 == 0) {
                    managers.Game.stage.addChild(this.explosions[3]);
                }
                if (this.currentAnimation == "Boss2_Worm") {
                    this.SwitchAnimation("Boss2_Worm_Alpha");
                }
                if (ticker % 90 == 0 && this.currentAnimation == "Boss2_Worm_Alpha") {
                    managers.Game.stage.removeChild(this);
                    this.visible = false;
                }
            }
            console.log(this.hp);
            super.Update();
        }
        public Reset(): void { }
        public Move(): void {
            // Not necessarily move but its method path.
            let ticker = createjs.Ticker.getTicks();
            if (ticker % 60 == 0) {
                if (this.currentAnimation == "Boss2_Worm") {
                    let command: number = Math.floor(Math.random() * Math.floor(4)); // Between 0 to 3
                    let pos: math.Vec2;
                    pos = new math.Vec2(this.x + 18, this.y + 34);
                    this.BulletFire(pos);
                    switch (command) {
                        case 0:
                            pos = new math.Vec2(this.x - 106, this.y - 54);
                            this.SpawnCreateAndActivate(pos);
                            break;
                        case 1:
                            pos = new math.Vec2(this.x - 68, this.y + 26);
                            this.BulletFire(pos);
                            break;
                        case 2:
                            pos = new math.Vec2(this.x + 77, this.y - 17);
                            this.SpawnCreateAndActivate(pos);
                            break;
                        case 3:
                            pos = new math.Vec2(this.x + 109, this.y - 70);
                            this.BulletFire(pos);
                            break;
                    }
                }
            }
        }
        public CheckBound(): void {
            super.CheckBound();
        }
        private SpawnCreateAndActivate(spawnHolePosition: math.Vec2): void {
            let spawnSpeed: number = Math.floor(Math.random() * Math.floor(3)) + 1; // Between 1 to 3
            let spawnDown: boolean = false;
            let spawnRight: boolean = (spawnHolePosition.x <= this.x + 115);
            // Create the spawn
            this.spawn = new objects.MaggotSmall(spawnSpeed, spawnRight, spawnDown);
            // Activate the spawn
            this.spawn.SetPosition(spawnHolePosition);
            (managers.Game.currentStage as scenes.PlayScene).AddEnemyToScene(this.spawn);
        }
        public BulletFire(spawnHolePosition: math.Vec2) {
            let ticker: number = createjs.Ticker.getTicks();

            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = spawnHolePosition;

                    let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);

                    let currentBullet = managers.Game.bulletManager.CurrentBullet;
                    let bullet = managers.Game.bulletManager.giantWormBullets[currentBullet];

                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;

                    // get the direction when the bullet shoots
                    let bulletPosition: math.Vec2 = new math.Vec2(bullet.x, bullet.y);
                    let dirToPlayer: math.Vec2 = math.Vec2.Subtract(bulletPosition, playerPosition);
                    let distanceToPlayer: number = math.Vec2.Distance(bulletPosition, playerPosition);
                    let farPointPosition: math.Vec2 = math.Vec2.Add(playerPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, 1000));

                    bullet.farPointPosition = farPointPosition;

                    managers.Game.bulletManager.CurrentBullet++;

                    if (managers.Game.bulletManager.CurrentBullet > 49) {
                        managers.Game.bulletManager.CurrentBullet = 0;
                    }
                }
            } else {
                this.bulletSpawn = new math.Vec2(-5000, -5000);
            }
        }
    }
}