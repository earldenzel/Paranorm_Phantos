module objects{
    export enum GhostSlimeState{
        IDLE,
        TELEPORT
    }
    export class GhostSlime extends objects.Enemy{
        // Variables
        private bulletSpawn: math.Vec2;
        private rateOfFire: number;

        private state: GhostSlimeState;
        private puddleCount:number;
        // Constructor
        constructor(){
            super(managers.Game.enemies_TextureAtlas,"GhostSlime_Travel");
            this.Start();
            this.hp = 4;
            this.attackPower = 1;

            this.knockback = 0;
            this.eatTimer = 700;
            this.bounty = 20;
            this.isFlying = true;
            this.state = GhostSlimeState.IDLE;
            this.rateOfFire = 35;
            this.puddleCount = managers.Game.slimePuddles.length;
            this.powerUp = config.PowerUp.SLIME;
        }
        // Methods
        public Start():void{
            let slimeX = managers.Game.slimePuddles[0].position.x;
            let slimeY = managers.Game.slimePuddles[0].position.y;
            this.SetPosition(new math.Vec2(slimeX,slimeY));
        }
        public Update():void{
            if(!this.isStunned && !this.isDead){
                let ticker: number = createjs.Ticker.getTicks();

                if(this.currentAnimation == "GhostSlime_Hide" && this.currentAnimationFrame > 3){
                    this.visible = false;
                    this.canBeAttacked = false;
                    this.SlimeTeleportation();
                }
                if(this.currentAnimation == "GhostSlime_Emerge" && this.currentAnimationFrame > 2){
                    this.canBeAttacked = true;
                    this.state = GhostSlimeState.IDLE;
                }

                if(ticker % 90 == 1 && this.canBeAttacked){
                    this.state = this.ChangeState();
                    switch (this.state) {
                        case GhostSlimeState.IDLE:
                            this.SwitchAnimation("GhostSlime_Idle");
                            break;
                        case GhostSlimeState.TELEPORT:
                            this.SwitchAnimation("GhostSlime_Hide");
                            break;
                        
                        default:
                            break;
                    }
                    console.log(this.state);
                }
                else if(ticker % 60 == 1 && !this.canBeAttacked){
                    this.visible = true;
                    this.SwitchAnimation("GhostSlime_Emerge");
                }
            }
            else if (this.isStunned && !this.isDead) {
                this.SwitchAnimation("GhostSlime_Stun");
                if (managers.Game.player.biteSequence == 0) {
                    this.isDead = true;
                }
            }
            else {
                if (managers.Game.player.biteSequence != 0) {
                    if (this.currentAnimation == "GhostSlime_Explosion") {
                        managers.Game.stage.removeChild(this);
                        this.visible = false;
                    }
                    this.SwitchAnimation("GhostSlime_Explosion");
                }
            }
            super.Update();
            if(this.state != GhostSlimeState.TELEPORT){
                this.BulletFire();
            }
        }
        public Reset(): void {
            super.CheckBound();
        }
        public Move():void {}
        public CheckBound(): void {
            super.CheckBound();
        }

        public ChangeState():GhostSlimeState{
            let stateRand = Math.floor(Math.random() * Math.floor(3));
            if(stateRand == GhostSlimeState.IDLE && this.state == GhostSlimeState.IDLE){
                stateRand = (Math.floor(Math.random() * Math.floor(2))) + 1;
            }
            return stateRand as GhostSlimeState;
        }
        public SlimeTeleportation():void{
            let teleportRand = Math.floor(Math.random() * Math.floor(this.puddleCount));
            let slimeX = managers.Game.slimePuddles[teleportRand].position.x;
            let slimeY = managers.Game.slimePuddles[teleportRand].position.y;
            this.SetPosition(new math.Vec2(slimeX,slimeY));        }
        
        public BulletFire(): void {
            let ticker: number = createjs.Ticker.getTicks();

            if (this.hp > 0) {
                if (ticker % this.rateOfFire == 0) {
                    this.bulletSpawn = new math.Vec2(this.x, this.y);

                    let playerPosition: math.Vec2 = new math.Vec2(managers.Game.player.x, managers.Game.player.y);

                    let currentBullet = managers.Game.bulletManager.CurrentBullet;
                    let bullet = managers.Game.bulletManager.slimeBalls[currentBullet];

                    bullet.x = this.bulletSpawn.x;
                    bullet.y = this.bulletSpawn.y;
                    managers.Game.SFX = createjs.Sound.play("slimeball");
                    managers.Game.SFX.volume = 0.4;

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
            managers.Game.SFX = createjs.Sound.play("phoebeTransform");
            managers.Game.SFX.volume = 0.6;
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