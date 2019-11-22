module managers {
    export class PlayerInfo_UI extends createjs.Container {
        // Variables
        public playerInfo_Base: createjs.Sprite;

        public moneyLabel: objects.Label;
        public keyLabel: objects.Label;
        public playerInfo_Health: createjs.Sprite;
        public playerInfo_Ecto: createjs.Sprite;
        public playerInfo_Map: createjs.Sprite;
        public playerInfo_Location: createjs.Sprite;
        public playerInfo_Power: createjs.Sprite;

        private money: number;
        private key: number;
        private playerHealth: number;
        private playerEcto: number;
        private playerLocation: math.Vec2;

        // Add in Player Location

        // Getters and Setters
        get Money(): number {
            return this.money;
        }
        set Money(newMoney: number) {
            this.money = newMoney;
            this.moneyLabel.text = "";
            if (this.money > 99999999) {
                this.moneyLabel.text = "99999999";
            }
            else {
                let numberOfZeros = 8 - String(this.money).length;
                for (let i = 0; i < numberOfZeros; i++) {
                    this.moneyLabel.text += "0";
                }
                this.moneyLabel.text += this.money.toString();
            }
        }
        get Key(): number {
            return this.key;
        }
        set Key(newKey: number) {
            this.key = newKey;
            let numberOfZeros = 2 - String(this.key).length;
            this.keyLabel.text = "";
            if (this.key > 99) {
                this.keyLabel.text = "99";
            }
            else {
                let numberOfZeros = 2 - String(this.key).length;
                for (let i = 0; i < numberOfZeros; i++) {
                    this.keyLabel.text += "0";
                }
                this.keyLabel.text = this.Key.toString();
            }
        }
        get PlayerHealth(): number {
            return this.playerHealth;
        }
        set PlayerHealth(newPlayerHealth: number) {
            this.playerHealth = newPlayerHealth;
            this.removeChild(this.playerInfo_Health);
            this.ChangeHealthInfo();
            this.addChild(this.playerInfo_Health);
        }
        get PlayerEcto(): number {
            return this.PlayerEcto;
        }
        set PlayerEcto(newPlayerEcto: number) {
            this.playerEcto = newPlayerEcto;
            this.removeChild(this.playerInfo_Ecto);
            this.ChangeEctoInfo();
            this.addChild(this.playerInfo_Ecto);
        }
        get PlayerLocation(): math.Vec2 {
            return this.playerLocation;
        }
        set PlayerLocation(newCoordinates: math.Vec2) {
            this.playerLocation = newCoordinates;
            this.removeChild(this.playerInfo_Location);
            this.ChangePlayerLocation();
            this.addChild(this.playerInfo_Location);
        }


        // Constructor
        constructor() {
            super();
            this.InIt();
        }

        // Methods
        private InIt(): void {
            // Create Base
            this.playerInfo_Base = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "UILayout_Placement");
            // Create Labels
            this.moneyLabel = new objects.Label(
                "00000000", "16px", "'Press Start 2P'", "#FFFFFF", 236, 20, false
            );
            this.keyLabel = new objects.Label(
                "00", "16px", "'Press Start 2P'", "#FFFFFF", 250, 77, false
            );
            switch (managers.Game.currentScene) {
                case config.Scene.HOTEL_1:
                case config.Scene.HOTEL_2:
                case config.Scene.HOTEL_3:
                case config.Scene.HOTEL_4:
                case config.Scene.HOTEL_5:
                case config.Scene.HOTEL_6:
                case config.Scene.HOTEL_7:
                case config.Scene.HOTEL_8:
                case config.Scene.HOTEL_9:
                case config.Scene.HOTEL_10:
                case config.Scene.HOTEL_11:
                case config.Scene.HOTEL_12:
                case config.Scene.HOTEL_13:
                case config.Scene.HOTEL_14:
                case config.Scene.HOTEL_15:
                    this.playerInfo_Map = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "MapsHotel");
                    break;
                case config.Scene.MANSION_1:
                case config.Scene.MANSION_2:
                case config.Scene.MANSION_3:
                case config.Scene.MANSION_4:
                case config.Scene.MANSION_5:
                case config.Scene.MANSION_6:
                case config.Scene.MANSION_7:
                case config.Scene.MANSION_8:
                case config.Scene.MANSION_9:
                case config.Scene.MANSION_10:
                case config.Scene.MANSION_11:
                case config.Scene.MANSION_12:
                case config.Scene.MANSION_13:
                case config.Scene.MANSION_14:
                case config.Scene.MANSION_15:
                case config.Scene.MANSION_16:
                case config.Scene.MANSION_17:
                case config.Scene.MANSION_18:
                    this.playerInfo_Map = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "MapsMansion");
                    break;
                case config.Scene.GRAVEYARD_1:
                case config.Scene.GRAVEYARD_2:
                case config.Scene.GRAVEYARD_3:
                case config.Scene.GRAVEYARD_4:
                case config.Scene.GRAVEYARD_5:
                case config.Scene.GRAVEYARD_6:
                case config.Scene.GRAVEYARD_7:
                case config.Scene.GRAVEYARD_8:
                default:
                    this.playerInfo_Map = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "MapsGraveyard");
                    break;
            }

            this.playerInfo_Map.x = 30;
            this.playerInfo_Map.y = 12;

            this.playerInfo_Location = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "PlayerLocation");

            // Set Defaults
            this.playerHealth = 5;
            this.playerEcto = 5;
            this.money = 0;
            this.key = 0;
            this.playerLocation = new math.Vec2(0, 0);

            this.ChangePlayerLocation();

            this.ChangeHealthInfo();
            this.ChangeEctoInfo();

            this.Main();
        }
        private Main(): void {
            // Add to the Player Information Container
            this.addChild(this.playerInfo_Base);

            this.addChild(this.moneyLabel);
            this.addChild(this.keyLabel);
            this.addChild(this.playerInfo_Health);
            this.addChild(this.playerInfo_Ecto);
            this.addChild(this.playerInfo_Map);
            this.addChild(this.playerInfo_Location);
        }
        private ChangeHealthInfo(): void {

            switch (this.playerHealth) {
                case 0:
                    this.playerInfo_Health = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_0");
                    break;
                case 1:
                    this.playerInfo_Health = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_1");
                    break;
                case 2:
                    this.playerInfo_Health = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_2");
                    break;
                case 3:
                    this.playerInfo_Health = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_3");
                    break;
                case 4:
                    this.playerInfo_Health = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_4");
                    break;
                case 5:
                    this.playerInfo_Health = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_5");
                    break;
            }
            this.playerInfo_Health.x = 376;
            this.playerInfo_Health.y = 36;
        }
        private ChangeEctoInfo(): void {

            switch (this.playerEcto) {
                case 0:
                    this.playerInfo_Ecto = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Ecto_0");
                    break;
                case 1:
                    this.playerInfo_Ecto = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Ecto_1");
                    break;
                case 2:
                    this.playerInfo_Ecto = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Ecto_2");
                    break;
                case 3:
                    this.playerInfo_Ecto = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Ecto_3");
                    break;
                case 4:
                    this.playerInfo_Ecto = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Ecto_4");
                    break;
                case 5:
                    this.playerInfo_Ecto = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Ecto_5");
                    break;
            }
            this.playerInfo_Ecto.x = 10;
            this.playerInfo_Ecto.y = 10;
        }
        private ChangePlayerLocation(): void {
            this.playerInfo_Location.x = this.playerLocation.x;
            this.playerInfo_Location.y = this.playerLocation.y;
        }
    }
}