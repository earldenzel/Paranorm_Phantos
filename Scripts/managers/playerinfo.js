var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var managers;
(function (managers) {
    var PlayerInfo_UI = /** @class */ (function (_super) {
        __extends(PlayerInfo_UI, _super);
        // Constructor
        function PlayerInfo_UI() {
            var _this = _super.call(this) || this;
            _this.InIt();
            return _this;
        }
        Object.defineProperty(PlayerInfo_UI.prototype, "Money", {
            // Add in Player Location
            // Getters and Setters
            get: function () {
                return this.money;
            },
            set: function (newMoney) {
                this.money = newMoney;
                this.moneyLabel.text = "";
                if (this.money > 99999999) {
                    this.moneyLabel.text = "99999999";
                }
                else {
                    var numberOfZeros = 8 - String(this.money).length;
                    for (var i = 0; i < numberOfZeros; i++) {
                        this.moneyLabel.text += "0";
                    }
                    this.moneyLabel.text += this.money.toString();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "Key", {
            get: function () {
                return this.key;
            },
            set: function (newKey) {
                this.key = newKey;
                var numberOfZeros = 2 - String(this.key).length;
                this.keyLabel.text = "";
                if (this.key > 99) {
                    this.keyLabel.text = "99";
                }
                else {
                    var numberOfZeros_1 = 2 - String(this.key).length;
                    for (var i = 0; i < numberOfZeros_1; i++) {
                        this.keyLabel.text += "0";
                    }
                    this.keyLabel.text = this.Key.toString();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerHealth", {
            get: function () {
                return this.playerHealth;
            },
            set: function (newPlayerHealth) {
                this.removeFlowers();
                this.playerHealth = newPlayerHealth;
                this.ChangeHealthInfo();
                this.addFlowers();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerMaxHealth", {
            get: function () {
                return this.playerMaxHealth;
            },
            set: function (newPlayerMaxHealth) {
                this.removeFlowers();
                this.playerMaxHealth = newPlayerMaxHealth;
                this.ChangeHealthInfo();
                this.addFlowers();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerEcto", {
            get: function () {
                return this.PlayerEcto;
            },
            set: function (newPlayerEcto) {
                this.playerEcto = newPlayerEcto;
                //this.removeChild(this.playerInfo_Ecto);
                this.ChangeEctoInfo();
                //this.addChild(this.playerInfo_Ecto);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerLocation", {
            get: function () {
                return this.playerLocation;
            },
            set: function (newCoordinates) {
                this.playerLocation = newCoordinates;
                //this.removeChild(this.playerInfo_Location);
                this.ChangePlayerLocation();
                //this.addChild(this.playerInfo_Location);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerInfo_UI.prototype, "PlayerPower", {
            get: function () {
                return this.playerPower;
            },
            set: function (newPower) {
                this.playerPower = newPower;
                this.ChangePlayerPower();
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        PlayerInfo_UI.prototype.InIt = function () {
            // Create Base
            this.playerInfo_Base = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "UILayout_Placement");
            // Create Labels
            this.moneyLabel = new objects.Label("00000000", "16px", "'Press Start 2P'", "#FFFFFF", 236, 20, false);
            this.keyLabel = new objects.Label("00", "16px", "'Press Start 2P'", "#FFFFFF", 250, 77, false);
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
            this.playerInfo_Health = new Array();
            this.playerInfo_Location = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "PlayerLocation");
            this.playerInfo_Power = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Power_Shadow");
            this.playerInfo_Power.x = 300;
            this.playerInfo_Power.y = 46;
            // Set Defaults
            this.playerHealth = 5;
            this.playerEcto = 5;
            this.playerMaxHealth = 5;
            this.money = 0;
            this.key = 0;
            this.playerLocation = new math.Vec2(0, 0);
            this.playerPower = config.PowerUp.NONE;
            this.ChangePlayerLocation();
            this.ChangePlayerPower();
            this.playerInfo_Ecto = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Ecto_0");
            this.playerInfo_Ecto.x = 10;
            this.playerInfo_Ecto.y = 10;
            this.Main();
        };
        PlayerInfo_UI.prototype.Main = function () {
            var _this = this;
            // Add to the Player Information Container
            this.addChild(this.playerInfo_Base);
            this.addChild(this.moneyLabel);
            this.addChild(this.keyLabel);
            this.playerInfo_Health.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.playerInfo_Ecto);
            this.addChild(this.playerInfo_Map);
            this.addChild(this.playerInfo_Location);
            this.addChild(this.playerInfo_Power);
        };
        PlayerInfo_UI.prototype.ChangeHealthInfo = function () {
            var maximumFlower = this.playerMaxHealth / 5;
            var currentHp = this.playerHealth;
            var flower;
            for (var index = 0; index < maximumFlower; index++) {
                flower = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_0");
                if (currentHp >= 5) {
                    flower = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_5");
                    currentHp -= 5;
                }
                else {
                    switch (currentHp) {
                        case 1:
                            flower = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_1");
                            break;
                        case 2:
                            flower = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_2");
                            break;
                        case 3:
                            flower = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_3");
                            break;
                        case 4:
                            flower = new createjs.Sprite(managers.Game.titleUIMap_TextureAtlas, "Life_4");
                            break;
                    }
                    currentHp = 0;
                }
                this.playerInfo_Health[index] = flower;
                if (index == 0) {
                    this.playerInfo_Health[index].x = 376 + flower.getBounds().width * index;
                }
                else {
                    this.playerInfo_Health[index].x = (376 + flower.getBounds().width * index) - (index * 10);
                }
                if (index % 2 == 0) {
                    this.playerInfo_Health[index].y = 36;
                }
                else {
                    this.playerInfo_Health[index].y = 64;
                }
            }
        };
        PlayerInfo_UI.prototype.ChangeEctoInfo = function () {
            switch (this.playerEcto) {
                case 0:
                    this.SwitchAnimation(this.playerInfo_Ecto, "Ecto_0");
                    break;
                case 1:
                    this.SwitchAnimation(this.playerInfo_Ecto, "Ecto_1");
                    break;
                case 2:
                    this.SwitchAnimation(this.playerInfo_Ecto, "Ecto_2");
                    break;
                case 3:
                    this.SwitchAnimation(this.playerInfo_Ecto, "Ecto_3");
                    break;
                case 4:
                    this.SwitchAnimation(this.playerInfo_Ecto, "Ecto_4");
                    break;
                case 5:
                    this.SwitchAnimation(this.playerInfo_Ecto, "Ecto_5");
                    break;
                default:
                    this.SwitchAnimation(this.playerInfo_Ecto, "Ecto_0");
                    break;
            }
        };
        PlayerInfo_UI.prototype.ChangePlayerLocation = function () {
            this.playerInfo_Location.x = this.playerLocation.x;
            this.playerInfo_Location.y = this.playerLocation.y;
        };
        PlayerInfo_UI.prototype.removeFlowers = function () {
            var _this = this;
            this.playerInfo_Health.forEach(function (e) {
                _this.removeChild(e);
            });
            this.playerInfo_Health = new Array();
        };
        PlayerInfo_UI.prototype.addFlowers = function () {
            var _this = this;
            this.playerInfo_Health.forEach(function (e) {
                _this.addChild(e);
            });
        };
        PlayerInfo_UI.prototype.ChangePlayerPower = function () {
            if (this.playerPower != config.PowerUp.NONE) {
                this.playerInfo_Power.visible = true;
                switch (this.playerPower) {
                    case config.PowerUp.SHADOW:
                        this.SwitchAnimation(this.playerInfo_Power, "Power_Shadow");
                        break;
                    case config.PowerUp.BITE:
                        this.SwitchAnimation(this.playerInfo_Power, "Power_Bite");
                        break;
                    case config.PowerUp.FIRE:
                        this.SwitchAnimation(this.playerInfo_Power, "Power_Fire");
                        break;
                    case config.PowerUp.ICE:
                        this.SwitchAnimation(this.playerInfo_Power, "Power_Ice");
                        break;
                    case config.PowerUp.SLIME:
                        this.SwitchAnimation(this.playerInfo_Power, "Power_Slime");
                        break;
                }
            }
            else {
                this.playerInfo_Power.visible = false;
            }
        };
        PlayerInfo_UI.prototype.SwitchAnimation = function (animator, newAnimation) {
            if (animator.currentAnimation != newAnimation) {
                animator.gotoAndPlay(newAnimation);
            }
        };
        return PlayerInfo_UI;
    }(createjs.Container));
    managers.PlayerInfo_UI = PlayerInfo_UI;
})(managers || (managers = {}));
//# sourceMappingURL=playerinfo.js.map