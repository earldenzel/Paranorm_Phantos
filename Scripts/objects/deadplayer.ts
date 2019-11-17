module objects {
    //export interface Controller<T> { [key: string]: T };
    export class DeadPlayer extends objects.GameObject {

        //Constructor
        constructor(variant: string, mirrorX: boolean = false, mirrorY: boolean = false) {
            super(managers.Game.phoebe_TextureAtlas, variant);
            if (mirrorX){
                this.scaleX = -1;
            }
            if (mirrorY){
                this.scaleY = -1;
            }
            this.visible = false;
        }

        // Methods
        public Start(): void {
        }

        public Update(): void {            
            if (this.name === "Phoebe_Dead_A"){
                this.y -= 2.8;
            }
            else{
                this.x += (this.scaleX > 0) ? 2 : -2;
                this.y += (this.scaleY > 0) ? -2 : 2;
            }
        }

        public Reset(): void { }

        public Move(): void {
        }

        public CheckBound(): void {
        }
    }
}