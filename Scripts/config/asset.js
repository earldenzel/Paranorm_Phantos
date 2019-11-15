var config;
(function (config) {
    var Assets = /** @class */ (function () {
        function Assets() {
        }
        Assets.getAssets = [
            // SPRITES
            {
                "id": "backButton",
                "src": "./Assets/Old/BackButton.png"
            },
            {
                "id": "nextButton",
                "src": "./Assets/Old/NextButton.png"
            },
            {
                "id": "background",
                "src": "./Assets/Old/background.png"
            },
            {
                "id": "player",
                "src": "./Assets/Old/player.png"
            },
            {
                "id": "weapon",
                "src": "./Assets/Old/phantos.png"
            },
            {
                "id": "testEnemy",
                "src": "./Assets/Old/ship.png"
            },
            {
                "id": "title_background",
                "src": "./Assets/_Background/_TestStage/Placeholder_BlackBackground.png"
            },
            {
                "id": "title_ui",
                "src": "./Assets/_UI/Title/Title_3.png"
            },
            {
                "id": "gameover_ui",
                "src": "./Assets/_UI/GameOver/GameOver.png"
            },
            {
                "id": "gameover_spotlight",
                "src": "./Assets/_UI/GameOver/GameOver_Spotlight.png"
            },
            {
                "id": "player_p_walk1",
                "src": "./Assets/_Player/Phoebe/Phoebe_Walk1.png"
            },
            {
                "id": "player_p_walk3",
                "src": "./Assets/_Player/Phoebe/Phoebe_Walk3.png"
            },
            {
                "id": "player_p_walk5",
                "src": "./Assets/_Player/Phoebe/Phoebe_Walk5.png"
            },
            {
                "id": "player_p_walk7",
                "src": "./Assets/_Player/Phoebe/Phoebe_Walk7.png"
            },
            {
                "id": "item_p_front2",
                "src": "./Assets/_Items/Phantos/Phantos_Front2.png"
            },
            {
                "id": "item_p_left2",
                "src": "./Assets/_Items/Phantos/Phantos_Left2.png"
            },
            {
                "id": "item_p_right2",
                "src": "./Assets/_Items/Phantos/Phantos_Right2.png"
            },
            {
                "id": "enemy_test",
                "src": "./Assets/_Enemies/_Test/Test_Enemy.png"
            },
            {
                "id": "enemy_bat",
                "src": "./Assets/_Enemies/bat/bat1.png"
            },
            {
                "id": "enemy_zombieTest",
                "src": "./Assets/_Enemies/zombieTest.png"
            },
            {
                "id": "background_c_hori",
                "src": "./Assets/_Background/_TestStage/Placeholder_CEILING-Horizontal.png"
            },
            {
                "id": "background_c_vert",
                "src": "./Assets/_Background/_TestStage/Placeholder_CEILING-Vertical.png"
            },
            {
                // NEW
                "id": "background_c_w_all",
                "src": "./Assets/_Background/_TestStageB/PlaceholderB_Ceiling_Walls.png"
            },
            {
                // EDIT
                "id": "background_d_vertT",
                "src": "./Assets/_Background/_TestStageB/PlaceholderB_DoorV_Top.png"
                //"./Assets/_Background/_TestStage/Placeholder_DOOR-VerticalTop.png"
            },
            {
                // NEW
                "id": "background_d_horiT",
                "src": "./Assets/_Background/_TestStageB/PlaceholderB_DoorH_Top.png"
            },
            {
                // EDIT
                "id": "background_d_vert",
                "src": "./Assets/_Background/_TestStageB/PlaceholderB_DoorV.png"
                //"./Assets/_Background/_TestStage/Placeholder_DOOR-Vertical.png"
            },
            {
                "id": "background_d_vertC",
                "src": "./Assets/_Background/_TestStageB/PlaceholderB_DoorV_Closed.png"
            },
            {
                // EDIT
                "id": "background_d_hori",
                "src": "./Assets/_Background/_TestStageB/PlaceholderB_DoorH.png"
                //"./Assets/_Background/_TestStage/Placeholder_DOOR-Horizontal.png"
            },
            {
                "id": "background_d_horiC",
                "src": "./Assets/_Background/_TestStageB/PlaceholderB_DoorH_Closed.png"
            },
            {
                // EDIT 
                "id": "background_f_all",
                "src": "./Assets/_Background/_TestStageB/PlaceholderB_Background_Floor.png"
                //"./Assets/_Background/_TestStage/Placeholder_FLOOR-All.png"
            },
            {
                "id": "background_w_hori",
                "src": "./Assets/_Background/_TestStage/Placeholder_WALL-Horizontal.png"
            },
            {
                "id": "background_w_vert",
                "src": "./Assets/_Background/_TestStage/Placeholder_WALL-Vertical.png"
            },
            {
                "id": "ui_playerinfo",
                "src": "./Assets/_UI/PlayerInfo/UILayout_Placement.png"
            },
            {
                "id": "life_0-5",
                "src": "./Assets/_UI/PlayerInfo/_Life/Life_0-5.png"
            },
            {
                "id": "life_1-5",
                "src": "./Assets/_UI/PlayerInfo/_Life/Life_1-5.png"
            },
            {
                "id": "life_2-5",
                "src": "./Assets/_UI/PlayerInfo/_Life/Life_2-5.png"
            },
            {
                "id": "life_3-5",
                "src": "./Assets/_UI/PlayerInfo/_Life/Life_3-5.png"
            },
            {
                "id": "life_4-5",
                "src": "./Assets/_UI/PlayerInfo/_Life/Life_4-5.png"
            },
            {
                "id": "life_5-5",
                "src": "./Assets/_UI/PlayerInfo/_Life/Life_5-5.png"
            },
            {
                "id": "ecto_0-5",
                "src": "./Assets/_UI/PlayerInfo/_Ecto/Ecto_0-5.png"
            },
            {
                "id": "ecto_1-5",
                "src": "./Assets/_UI/PlayerInfo/_Ecto/Ecto_1-5.png"
            },
            {
                "id": "ecto_2-5",
                "src": "./Assets/_UI/PlayerInfo/_Ecto/Ecto_2-5.png"
            },
            {
                "id": "ecto_3-5",
                "src": "./Assets/_UI/PlayerInfo/_Ecto/Ecto_3-5.png"
            },
            {
                "id": "ecto_4-5",
                "src": "./Assets/_UI/PlayerInfo/_Ecto/Ecto_4-5.png"
            },
            {
                "id": "ecto_5-5",
                "src": "./Assets/_UI/PlayerInfo/_Ecto/Ecto_5-5.png"
            },
            {
                "id": "background_barrierTest",
                "src": "./Assets/_Background/_TestStage/barrierTest.png"
            },
            {
                "id": "background_gapTest",
                "src": "./Assets/_Background/_TestStage/gapTest.png"
            },
            {
                "id": "kKeyIndicator",
                "src": "./Assets/_UI/HowToPlay/HowToPlay_KKey.png"
            },
            {
                "id": "wKeyIndicator",
                "src": "./Assets/_UI/HowToPlay/HowToPlay_WKey.png"
            },
            {
                "id": "aKeyIndicator",
                "src": "./Assets/_UI/HowToPlay/HowToPlay_AKey.png"
            },
            {
                "id": "sKeyIndicator",
                "src": "./Assets/_UI/HowToPlay/HowToPlay_SKey.png"
            },
            {
                "id": "dKeyIndicator",
                "src": "./Assets/_UI/HowToPlay/HowToPlay_DKey.png"
            },
            {
                "id": "jKeyIndicator",
                "src": "./Assets/_UI/HowToPlay/HowToPlay_JKey.png"
            },
            {
                "id": "item_key",
                "src": "./Assets/_Items/Key.png"
            },
            // SPRITE SHEETS
            {
                "id": "tAtlas_MapG",
                "src": "./Assets/_UI/PlayerInfo/_Map/Map_Graveyard_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Items",
                "src": "./Assets/_Items/Items_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Phoebe",
                "src": "./Assets/_Player/Phoebe_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Bat",
                "src": "./Assets/_Enemies/bat/Bat_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Graveyard",
                "src": "./Assets/_Background/Graveyard_TextureAtlas.png"
            },
            // SOUND EFFECTS
            {
                "id": "enemiesHit",
                "src": "./Assets/_SoundEffects/Enemies_Hit.wav"
            },
            {
                "id": "itemCollect",
                "src": "./Assets/_SoundEffects/Item_Collect.wav"
            },
            {
                "id": "doorUnlock",
                "src": "./Assets/_SoundEffects/Door_Unlock.wav"
            },
            {
                "id": "phoebeDash-Swing",
                "src": "./Assets/_SoundEffects/Phoebe_DashOrSwing.wav"
            },
            {
                "id": "phoebeEat",
                "src": "./Assets/_SoundEffects/Phoebe_Eat.wav"
            },
            {
                "id": "phoebeHit",
                "src": "./Assets/_SoundEffects/Phoebe_Hit.wav"
            },
            {
                "id": "phoebeTransform",
                "src": "./Assets/_SoundEffects/Phoebe_Transform.wav"
            },
            {
                "id": "anyDefeated",
                "src": "./Assets/_SoundEffects/Defeat.wav"
            }
        ];
        Assets.getAtlas_Bat = {
            "images": [],
            "framerate": 20,
            "frames": [
                [0, 0, 96, 56, 0, 0, 0],
                [96, 0, 96, 56, 0, 0, 0],
                [192, 0, 96, 56, 0, 0, 0]
            ],
            "animations": {
                "bat": {
                    "frames": [0, 1, 2],
                    "speed": 0.1
                }
            },
        };
        Assets.getAtlas_MapGraveYard = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [1, 1, 162, 86, 0, 0, 0],
                [165, 1, 162, 86, 0, 0, 0],
                [329, 1, 162, 86, 0, 0, 0],
                [493, 1, 14, 14, 0, -81, -21],
                [1, 89, 162, 86, 0, 0, 0],
                [165, 89, 162, 86, 0, 0, 0],
                [329, 89, 162, 86, 0, 0, 0]
            ],
            "animations": {
                "MapsGraveyard_Initial": { "frames": [0] },
                "MapsGraveyard_UnlockA": { "frames": [1] },
                "MapsGraveyard_UnlockAB": { "frames": [2] },
                "MapsGraveyard_PlayerLocation": { "frames": [3] },
                "MapsGraveyard_UnlockABC": { "frames": [4] },
                "MapsGraveyard_UnlockB": { "frames": [5] },
                "MapsGraveyard_UnlockBC": { "frames": [6] }
            }
        };
        Assets.getAtlas_Graveyard = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [1, 1, 564, 651, 0, 0, 0],
                [567, 1, 28, 642, 0, 0, 0],
                [1, 654, 556, 34, 0, 0, 0],
                [1, 690, 194, 244, 0, 0, 0],
                [197, 690, 88, 161, 0, 0, 0],
                [287, 690, 142, 64, 0, 0, 0],
                [287, 756, 78, 104, 0, 0, 0],
                [197, 853, 88, 64, 0, 0, 0],
                [431, 690, 92, 78, 0, 0, 0],
                [367, 756, 46, 150, 0, 0, 0],
                [287, 862, 52, 64, 0, 0, 0],
                [341, 862, 24, 44, 0, 0, 0],
                [415, 770, 52, 64, 0, 0, 0],
                [415, 836, 52, 64, 0, 0, 0],
                [469, 770, 52, 64, 0, 0, 0],
                [469, 836, 52, 64, 0, 0, 0],
                [525, 690, 52, 64, 0, 0, 0],
                [567, 645, 28, 38, 0, 0, 0],
                [525, 756, 52, 34, 0, 0, 0],
                [523, 792, 52, 64, 0, 0, 0],
                [523, 858, 52, 64, 0, 0, 0],
                [415, 902, 52, 34, 0, 0, 0],
                [469, 902, 28, 34, 0, 0, 0],
                [341, 908, 32, 16, 0, 0, 0],
                [375, 908, 24, 24, 0, 0, 0]
            ],
            "animations": {
                "Graveyard_GrassTile_FullScreen": { "frames": [0] },
                "Graveyard_FenceVertical": { "frames": [1] },
                "Graveyard_FenceHorizontal": { "frames": [2] },
                "Graveyard_GrassTile_1_4Screen": { "frames": [3] },
                "Graveyard_ParanormalGlow_Closed-Final": { "frames": [4] },
                "Graveyard_ParanormalGlow_Open-copy": { "frames": [5] },
                "Graveyard_Gate_H": { "frames": [6] },
                "Graveyard_Gate_Closed": { "frames": [7] },
                "Graveyard_Gate_V": { "frames": [8] },
                "Graveyard_Tree": { "frames": [9] },
                "Graveyard_DirtTile": { "frames": [10] },
                "Graveyard_Cross": { "frames": [11] },
                "Graveyard_GrassTile": { "frames": [12] },
                "Graveyard_HoleTile": { "frames": [13] },
                "Graveyard_HoleTile_Center": { "frames": [14] },
                "Graveyard_HoleTile_Horizontal": { "frames": [15] },
                "Graveyard_HoleTile_Stairs": { "frames": [16] },
                "Graveyard_Grave": { "frames": [17] },
                "Graveyard_Fence2x": { "frames": [18] },
                "Graveyard_HoleTile_Vertical": { "frames": [19] },
                "Graveyard_Stairs_Up": { "frames": [20] },
                "Graveyard_HoleTile_Corner": { "frames": [21] },
                "Graveyard_Fence": { "frames": [22] },
                "Graveyard_Flowers": { "frames": [23] },
                "Graveyard_GraveTile": { "frames": [24] }
            }
        };
        Assets.getAtlas_Items = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 28, 51, 0, 0, 0],
                [28, 0, 28, 49, 0, 0, 0],
                [28, 49, 28, 16, 0, 0, 0],
                [0, 51, 24, 24, 0, 0, 0],
                [24, 65, 24, 22, 0, 0, 0],
                [0, 75, 22, 25, 0, 0, 0],
                [48, 65, 13, 14, 0, 0, 0],
                [22, 87, 22, 25, 0, 0, 0],
                [0, 100, 22, 25, 0, 0, 0],
                [44, 87, 20, 24, 0, 0, 0],
                [44, 111, 20, 24, 0, 0, 0],
                [22, 112, 22, 25, 0, 0, 0],
                [44, 135, 20, 24, 0, 0, 0],
                [0, 125, 22, 25, 0, 0, 0],
                [22, 137, 22, 25, 0, 0, 0],
                [0, 150, 21, 40, 0, 0, 0],
                [21, 162, 21, 22, 0, 0, 0]
            ],
            "animations": {
                "Items_Hellebore-Flower": {
                    "frames": [1, 3, 0],
                    "speed": 0.1
                },
                "Items_Gold-Bar": { "frames": [2] },
                "Items_Diamonds": { "frames": [4] },
                "Items_Fifty-Dollars": { "frames": [5] },
                "Items_One-Dollar-Coin": { "frames": [6] },
                "Items_Five-Dollars": { "frames": [7] },
                "Items_One-Dollar": { "frames": [8] },
                "Items_Emeralds": { "frames": [9] },
                "Items_Rubies": { "frames": [10] },
                "Items_One-Hundred-Dollars": { "frames": [11] },
                "Items_Sapphires": { "frames": [12] },
                "Items_Ten-Dollars": { "frames": [13] },
                "Items_Twenty-Dollars": { "frames": [14] },
                "Items_Key": { "frames": [15] },
                "Items_Pearl": { "frames": [16] }
            }
        };
        Assets.getAtlas_Phoebe = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 37, 46, 0, 0, 0],
                [37, 0, 37, 46, 0, 0, 0],
                [74, 0, 37, 46, 0, 0, 0],
                [111, 0, 37, 46, 0, 0, 0],
                [148, 0, 37, 46, 0, 0, 0],
                [185, 0, 37, 46, 0, 0, 0],
                [222, 0, 37, 46, 0, 0, 0],
                [259, 0, 37, 46, 0, 0, 0],
                [296, 0, 37, 46, 0, 0, 0],
                [333, 0, 37, 46, 0, 0, 0],
                [370, 0, 37, 46, 0, 0, 0],
                [407, 0, 37, 46, 0, 0, 0],
                [444, 0, 37, 46, 0, 0, 0],
                [0, 51, 37, 46, 0, 0, 0],
                [37, 51, 37, 46, 0, 0, 0],
                [74, 51, 37, 46, 0, 0, 0],
                [111, 51, 37, 46, 0, 0, 0],
                [148, 51, 37, 46, 0, 0, 0],
                [185, 51, 37, 46, 0, 0, 0],
                [222, 51, 37, 46, 0, 0, 0],
                [259, 51, 37, 46, 0, 0, 0],
                [296, 51, 37, 46, 0, 0, 0],
                [333, 51, 37, 46, 0, 0, 0],
                [370, 51, 37, 46, 0, 0, 0],
                [407, 51, 37, 46, 0, 0, 0],
                [444, 51, 37, 46, 0, 0, 0],
                [0, 102, 37, 46, 0, 0, 0],
                [37, 102, 37, 46, 0, 0, 0],
                [74, 102, 37, 46, 0, 0, 0],
                [111, 102, 37, 46, 0, 0, 0],
                [148, 102, 37, 46, 0, 0, 0],
                [185, 102, 37, 46, 0, 0, 0],
                [222, 102, 37, 46, 0, 0, 0],
                [259, 102, 37, 46, 0, 0, 0],
                [296, 102, 37, 46, 0, 0, 0],
                [333, 102, 37, 46, 0, 0, 0],
                [370, 102, 37, 46, 0, 0, 0],
                [407, 102, 37, 46, 0, 0, 0],
                [444, 102, 37, 46, 0, 0, 0],
                [0, 153, 37, 46, 0, 0, 0],
                [37, 153, 37, 46, 0, 0, 0],
                [74, 153, 37, 46, 0, 0, 0],
                [111, 153, 37, 46, 0, 0, 0],
                [148, 153, 37, 46, 0, 0, 0],
                [185, 153, 37, 46, 0, 0, 0],
                [222, 153, 37, 46, 0, 0, 0],
                [259, 153, 37, 46, 0, 0, 0],
                [296, 153, 37, 46, 0, 0, 0],
                [333, 153, 37, 51, 0, 0, 0],
                [370, 153, 37, 51, 0, 0, 0],
                [407, 153, 37, 51, 0, 0, 0],
                [444, 153, 37, 51, 0, 0, 0],
                [0, 204, 37, 51, 0, 0, 0],
                [37, 204, 37, 51, 0, 0, 0],
                [74, 204, 37, 51, 0, 0, 0],
                [111, 204, 37, 51, 0, 0, 0],
                [148, 204, 37, 51, 0, 0, 0],
                [185, 204, 37, 51, 0, 0, 0],
                [222, 204, 37, 51, 0, 0, 0],
                [259, 204, 37, 51, 0, 0, 0],
                [296, 204, 37, 51, 0, 0, 0],
                [333, 204, 37, 51, 0, 0, 0],
                [370, 204, 37, 51, 0, 0, 0],
                [407, 204, 37, 51, 0, 0, 0],
                [444, 204, 37, 51, 0, 0, 0]
            ],
            "animations": {
                "Phoebe_Attack_Left": {
                    "frames": [0, 1, 2],
                    "speed": 0.1
                },
                "Phoebe_Attack_Front": {
                    "frames": [3, 4, 5],
                    "speed": 0.1
                },
                "Phoebe_Attack_Right": {
                    "frames": [6, 7, 8],
                    "speed": 0.1
                },
                "Phoebe_Attack_Back": {
                    "frames": [9, 10, 11],
                    "speed": 0.1
                },
                "Phoebe_Bite_Left1": { "frames": [12] },
                "Phoebe_Bite_Left2": { "frames": [13] },
                "Phoebe_Bite_Front1": { "frames": [14] },
                "Phoebe_Bite_Front2": { "frames": [15] },
                "Phoebe_Bite_Back": { "frames": [16] },
                "Phoebe_Bite_Right1": { "frames": [17] },
                "Phoebe_Bite_Right2": { "frames": [18] },
                "Phoebe_Dead_A": { "frames": [19, 20] },
                "Phoebe_Dead_B": { "frames": [21, 22] },
                "Phoebe_Explosion": { "frames": [23, 24, 25, 26] },
                "Phoebe_Hurt": { "frames": [27] },
                "Phoebe_Run_Left": { "frames": [28, 29] },
                "Phoebe_Run_Front": { "frames": [30, 31, 32, 33] },
                "Phoebe_Run_Right": { "frames": [34, 35] },
                "Phoebe_Run_Back": { "frames": [36, 37, 38, 39] },
                "Phoebe_Walk_Front1": { "frames": [40] },
                "Phoebe_Walk_Front2": { "frames": [41] },
                "Phoebe_Walk_Left1": { "frames": [42] },
                "Phoebe_Walk_Left2": { "frames": [43] },
                "Phoebe_Walk_Right1": { "frames": [44] },
                "Phoebe_Walk_Right2": { "frames": [45] },
                "Phoebe_Walk_Back1": { "frames": [46] },
                "Phoebe_Walk_Back2": { "frames": [47] },
                "PhoebeSoul_Attack_Left": { "frames": [48] },
                "PhoebeSoul_Attack_Front": { "frames": [49] },
                "PhoebeSoul_Attack_Right": { "frames": [50] },
                "PhoebeSoul_Attack_Back": { "frames": [51] },
                "PhoebeSoul_Dodge_Left": { "frames": [52] },
                "PhoebeSoul_Dodge_Right": { "frames": [53] },
                "PhoebeSoul_Dodge_Front": { "frames": [54] },
                "PhoebeSoul_Dodge_Back": { "frames": [55] },
                "PhoebeSoul_Hit": { "frames": [56] },
                "PhoebeSoul_Run_Left": { "frames": [57] },
                "PhoebeSoul_Run_Right": { "frames": [58] },
                "PhoebeSoul_Run_Front": { "frames": [59] },
                "PhoebeSoul_Run_Back": { "frames": [60] },
                "PhoebeSoul_Walk_Front": { "frames": [61] },
                "PhoebeSoul_Walk_Left": { "frames": [62] },
                "PhoebeSoul_Walk_Right": { "frames": [63] },
                "PhoebeSoul_Walk_Back": { "frames": [64] }
            }
        };
        return Assets;
    }());
    config.Assets = Assets;
})(config || (config = {}));
//# sourceMappingURL=asset.js.map