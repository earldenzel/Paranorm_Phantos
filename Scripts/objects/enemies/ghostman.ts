module objects{
    export class GhostMan extends objects.Enemy{
        // Variables
        private bulletSpawn: math.Vec2;
        private rateOfFire: number;
        private attackingMode: boolean;
        private walk: Array<any>;
        private attack: Array<any>;
        public direction: config.Direction;

        // Constructor
        constructor(moveSpeed: number){
            super(managers.Game.enemies_TextureAtlas, "GhostMan_IdleFront");
            this.Start();

            this.hp = 5;
            this.attackPower = 1;
            this.moveSpeed = moveSpeed;
            this.knockback = 0.75;
            this.eatTimer = 400;
            this.rateOfFire = 45;
            this.isFlying = true;
            this.canBeEaten = true;
            this.bounty = 60;
            this.attackingMode = false;
            this.powerUp = config.PowerUp.FIRE;


            this.walk = ["GhostMan_IdleBack", "GhostMan_IdleFront", "GhostMan_IdleLeft", "GhostMan_IdleLeft"];
            this.attack = ["GhostMan_AttackBack", "GhostMan_AttackFront", "GhostMan_AttackLeft", "GhostMan_AttackLeft"];

            this.direction = config.Direction.DOWN;
        }

        // Methods
        public Start():void{
            // set the initial position
            this.y = 300;
            this.x = 350;
        }
        public Update(): void {
            
            if(!this.isStunned && !this.isDead){
                if (this.attackingMode) {
                    this.SwitchAnimation(this.attack[this.direction as number]);
                } else {
                    this.SwitchAnimation(this.walk[this.direction as number]);
                }
            }
            else if (this.isStunned && !this.isDead){
                this.SwitchAnimation("GhostMan_Stun");
                if (managers.Game.player.biteSequence == 0) {
                    this.isDead = true;
                }
            }
            else{
                if(managers.Game.player.biteSequence != 0){
                    if (this.currentAnimation == "GhostShadow_Explode" && this.currentAnimationFrame > 3) {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("GhostShadow_Explode");
                }
            }
            super.Update();
            if(this.attackingMode){
                this.BulletFire();
            }
        }
        public Reset(): void { }
        public Move(): void {
            let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);
            let enemyPosition: math.Vec2 = new math.Vec2(this.x, this.y);

            let dirToPlayer: math.Vec2 = math.Vec2.Subtract(enemyPosition, playerPosition);
            let distanceToPlayer: number = math.Vec2.Distance(enemyPosition, playerPosition);

            if (distanceToPlayer < 200) {
                this.attackingMode = true;
            } else {
                this.attackingMode = false;
            }

            let newPos: math.Vec2 = math.Vec2.Add(enemyPosition, math.Vec2.NormalizeMultiplySpeed(dirToPlayer, distanceToPlayer, this.moveSpeed));
            
            if (newPos.x < this.x) {
                this.scaleX = 1;
                this.direction = config.Direction.LEFT;
            }
            if (newPos.x > this.x) {
                this.scaleX = -1;
                this.direction = config.Direction.RIGHT;
            }
            if (newPos.y > this.y) {
                this.direction = config.Direction.DOWN;
            }
            if (newPos.y < this.y) {
                this.direction = config.Direction.UP;
            }

            this.x = newPos.x;
            this.y = newPos.y;
        }
        public CheckBound(): void {
            super.CheckBound();
        }
        public BulletFire(): void {
            let ticker: number = createjs.Ticker.getTicks();

            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x, this.y);

                    let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);

                    let currentBullet = managers.Game.bulletManager.CurrentBullet;
                    let bullet = managers.Game.bulletManager.fireBalls[currentBullet];

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
        public DevourEffect(): void {
            managers.Game.player.powerUp = this.powerUp;
            super.DevourEffect();
        }

        public RemoveFromPlay(bounty: number): void {
            this.isDead = true;

            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        }
    }
}