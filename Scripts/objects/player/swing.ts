module objects {
    export class Swing extends objects.GameObject {
        // Variables
        private images: Array<any>;
        // Constructor
        constructor() {
            super(managers.Game.phoebe_TextureAtlas, "PhoebeSoul_Attack_Back");            
            this.images = ["PhoebeSoul_Attack_Back","PhoebeSoul_Attack_Front", "PhoebeSoul_Attack_Left", "PhoebeSoul_Attack_Right"];
            this.Start();
            this.alpha = 0.3;
            this.regX = 59;
            this.regY = 58;
        }
        // Methods
        // Initializing our variables with default values
        public Start():void {
        }
        // Updated 60 times per second (60FPS)
        public Update():void {            
            this.visible = managers.Game.player.weapon.visible;
            if (this.visible){
                this.alpha -= 0.02;
            }
            else{
                this.alpha = 0.3;
            }
            this.x = managers.Game.player.x;
            this.y = managers.Game.player.y; 
            if (this.currentAnimation != this.images[managers.Game.player.weapon.direction as number]){               
                this.gotoAndPlay(this.images[managers.Game.player.weapon.direction as number]);
            }
        }
        // Resets the position of the object
        public Reset():void {
        }
        // Collision Detection 
        public CheckBound():void {            
        }
    }
}