module scenes {

    export class Hotel_1 extends scenes.PlayScene { 
        // Constructor
        constructor() {
            // hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight
            super(false, true, true, true,config.Design.HOTEL);
            this.isDoorLeftLocked = managers.HotelLocks.hotel_1_lockLeft;
            console.log("Hotel 1");
            this.Start();
        }

        // Methods
        public Start(): void {
            managers.Game.player.sceneOnLeft = config.Scene.HOTEL_2;
            managers.Game.player.sceneOnRight = config.Scene.HOTEL_3;
            managers.Game.player.sceneOnBot = config.Scene.HOTEL_6;
            super.Start();
            this.playerInfo.PlayerLocation = new math.Vec2(96,18);

            this.cosmetics[0] = new objects.Stairs(config.Scene.GRAVEYARD_1,this.design, false);
            this.cosmetics[0].SetPosition(new math.Vec2(450, 235));
        }        

        public Update(): void {
            if(!this.isDoorLeftLocked){
                managers.HotelLocks.hotel_1_lockLeft = false;
            }
            super.Update();
        }

        public Main(): void {
            super.Main();
        }
    }
}