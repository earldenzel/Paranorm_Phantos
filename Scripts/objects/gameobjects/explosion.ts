module objects {
    export enum ExplodeTypes {
        DEFAULT,
        SKELETON,
        MAGGOT,
        ZOMBIE,
        GHOST,
        GHOSTSHADOW,
        GHOSTSLIME,
        GHOSTWOMAN,
        UNDERTAKER,
        FIRE
    }
    export class Explosion extends objects.GameObject {
        // Variables
        private repeatCount: number;
        private type: ExplodeTypes;
        private ExplosionB: objects.Explosion;
        private sfx: boolean;
        // Constructor
        constructor(type:ExplodeTypes ,position: math.Vec2, repeatCount: number, sfx?: boolean){
            switch(type) {
                case ExplodeTypes.DEFAULT:
                    super(managers.Game.phoebe_TextureAtlas,"Phoebe_Explosion");
                    break;
                case ExplodeTypes.FIRE:
                    super(managers.Game.titleUIMap_TextureAtlas,"Effects_FlameHit");
                    break;
                case ExplodeTypes.SKELETON:
                    super(managers.Game.enemies_TextureAtlas,"Skeleton_Explode");
                    break;
                case ExplodeTypes.MAGGOT:
                    super(managers.Game.enemies_TextureAtlas,"Maggot_Explode");
                    break;
                case ExplodeTypes.ZOMBIE:
                    super(managers.Game.enemies_TextureAtlas,"Zombie_Explode");
                    break;
                case ExplodeTypes.GHOST:
                    super(managers.Game.enemies_TextureAtlas,"Ghost_Explode");
                    break;
                case ExplodeTypes.GHOSTSHADOW:
                    super(managers.Game.enemies_TextureAtlas,"GhostShadow_Explode");
                    break;
                case ExplodeTypes.GHOSTSLIME:
                    super(managers.Game.enemies_TextureAtlas,"GhostSlime_Explosion");
                    break;
                case ExplodeTypes.GHOSTWOMAN:
                    super(managers.Game.enemies_TextureAtlas,"GhostWoman_Explode");
                    break;
                case ExplodeTypes.UNDERTAKER:
                    super(managers.Game.bosses_TextureAtlas,"Boss1_Explode");
                    break;
            }
            this.x = position.x;
            this.y = position.y;
            this.type = type;
            if(sfx != null){
                this.sfx = sfx;
            } else {
                this.sfx = true;
            }
            this.repeatCount = repeatCount;
            this.Start();
        }
        // Methods
        public Start(): void {
            if(this.sfx){
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.4;
            }
            this.on("animationend",this.animationEnded.bind(this),false);
        }

        public Update(): void {

        }
        public Reset(): void { }
        public Move(): void { }
        public CheckBound(): void { }

        private animationEnded():void {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this),false);
            managers.Game.stage.removeChild(this);
            this.visible = false;

            if(this.repeatCount > 0){
                console.log("REPEAT");
                this.ExplosionB = new objects.Explosion(this.type,this.GetPosition(),this.repeatCount - 1);
                managers.Game.stage.addChild(this.ExplosionB);
                this.repeatCount -= 1;
            }
        }
    }
}