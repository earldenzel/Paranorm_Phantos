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
                "id": "tAtlas_Phantos",
                "src": "./Assets/_Items/Phantos_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Phantorm",
                "src": "./Assets/_Player/Phoebe+Phantos_TextureAtlas.png"
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
                [0, 0, 564, 650, 0, 0, 0],
                [0, 650, 555, 32, 0, 0, 0],
                [555, 650, 22, 42, 0, 0, 0],
                [564, 0, 26, 640, 0, 0, 0],
                [0, 682, 192, 242, 0, 0, 0],
                [192, 682, 140, 62, 0, 0, 0],
                [332, 682, 86, 160, 0, 0, 0],
                [192, 744, 76, 102, 0, 0, 0],
                [268, 744, 44, 148, 0, 0, 0],
                [192, 846, 50, 62, 0, 0, 0],
                [242, 846, 26, 36, 0, 0, 0],
                [242, 882, 26, 32, 0, 0, 0],
                [192, 908, 30, 14, 0, 0, 0],
                [418, 692, 90, 76, 0, 0, 0],
                [418, 768, 86, 62, 0, 0, 0],
                [504, 768, 50, 62, 0, 0, 0],
                [508, 692, 50, 62, 0, 0, 0],
                [418, 830, 50, 62, 0, 0, 0],
                [312, 842, 50, 62, 0, 0, 0],
                [362, 842, 50, 62, 0, 0, 0],
                [268, 892, 22, 22, 0, 0, 0],
                [468, 830, 50, 62, 0, 0, 0],
                [518, 830, 50, 62, 0, 0, 0],
                [412, 892, 50, 32, 0, 0, 0],
                [462, 892, 50, 32, 0, 0, 0]
            ],
            "animations": {
                "Graveyard_GrassTile_FullScreen": { "frames": [0] },
                "Graveyard_FenceHorizontal": { "frames": [1] },
                "Graveyard_Cross": { "frames": [2] },
                "Graveyard_FenceVertical": { "frames": [3] },
                "Graveyard_GrassTile_1_4Screen": { "frames": [4] },
                "Graveyard_ParanormalGlow_Open-copy": { "frames": [5] },
                "Graveyard_ParanormalGlow_Closed-Final": { "frames": [6] },
                "Graveyard_Gate_H": { "frames": [7] },
                "Graveyard_Tree": { "frames": [8] },
                "Graveyard_DirtTile": { "frames": [9] },
                "Graveyard_Grave": { "frames": [10] },
                "Graveyard_Fence": { "frames": [11] },
                "Graveyard_Flowers": { "frames": [12] },
                "Graveyard_Gate_V": { "frames": [13] },
                "Graveyard_Gate_Closed": { "frames": [14] },
                "Graveyard_GrassTile": { "frames": [15] },
                "Graveyard_HoleTile": { "frames": [16] },
                "Graveyard_HoleTile_Center": { "frames": [17] },
                "Graveyard_HoleTile_Horizontal": { "frames": [18] },
                "Graveyard_HoleTile_Stairs": { "frames": [19] },
                "Graveyard_GraveTile": { "frames": [20] },
                "Graveyard_HoleTile_Vertical": { "frames": [21] },
                "Graveyard_Stairs_Up": { "frames": [22] },
                "Graveyard_Fence2x": { "frames": [23] },
                "Graveyard_HoleTile_Corner": { "frames": [24] }
            },
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
                "Phoebe_Bite_Left2": {
                    "frames": [12, 13],
                    "speed": 0.1
                },
                "Phoebe_Bite_Front1": { "frames": [14] },
                "Phoebe_Bite_Front2": {
                    "frames": [14, 15],
                    "speed": 0.1
                },
                "Phoebe_Bite_Back": { "frames": [16] },
                "Phoebe_Bite_Right1": { "frames": [17] },
                "Phoebe_Bite_Right2": {
                    "frames": [17, 18],
                    "speed": 0.1
                },
                "Phoebe_Dead_A": {
                    "frames": [19, 20],
                    "speed": 0.1
                },
                "Phoebe_Dead_B": {
                    "frames": [21, 22],
                    "speed": 0.1
                },
                "Phoebe_Explosion": {
                    "frames": [23, 24, 25, 26],
                    "speed": 0.1
                },
                "Phoebe_Hurt": { "frames": [27] },
                "Phoebe_Run_Left": {
                    "frames": [28, 29],
                    "speed": 0.1
                },
                "Phoebe_Run_Front": {
                    "frames": [30, 31, 32, 33],
                    "speed": 0.1
                },
                "Phoebe_Run_Right": {
                    "frames": [34, 35],
                    "speed": 0.1
                },
                "Phoebe_Run_Back": {
                    "frames": [36, 37, 38, 39],
                    "speed": 0.1
                },
                "Phoebe_Walk_Front1": {
                    "frames": [40, 41],
                    "speed": 0.1
                },
                "Phoebe_Walk_Front2": { "frames": [40] },
                "Phoebe_Walk_Left1": {
                    "frames": [42, 43],
                    "speed": 0.1
                },
                "Phoebe_Walk_Left2": { "frames": [42] },
                "Phoebe_Walk_Right1": {
                    "frames": [44, 45],
                    "speed": 0.1
                },
                "Phoebe_Walk_Right2": { "frames": [44] },
                "Phoebe_Walk_Back1": {
                    "frames": [46, 47],
                    "speed": 0.1
                },
                "Phoebe_Walk_Back2": { "frames": [46] },
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
        Assets.getAtlas_Phantos = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 105, 92, 0, -18.5, 0],
                [105, 0, 105, 92, 0, -18.5, 0],
                [210, 0, 105, 92, 0, -18.5, 0],
                [315, 0, 105, 92, 0, 0, 23],
                [0, 97, 105, 92, 0, 0, 23],
                [105, 97, 105, 92, 0, 0, 23],
                [210, 97, 105, 92, 0, 18.5, 0],
                [315, 97, 105, 92, 0, 18.5, 0],
                [0, 194, 105, 92, 0, 18.5, 0],
                [105, 194, 105, 92, 0, 0, -23],
                [210, 194, 105, 92, 0, 0, -23],
                [315, 194, 105, 92, 0, 0, -23],
                [0, 291, 97, 97, 0, 0, 0],
                [105, 291, 97, 97, 0, 0, 0],
                [210, 291, 97, 97, 0, 0, 0],
                [315, 291, 97, 97, 0, 0, 0]
            ],
            "animations": {
                "Phantos_Left": {
                    "frames": [0, 1, 2],
                    "speed": 0.1
                },
                "Phantos_Front": {
                    "frames": [3, 4, 5],
                    "speed": 0.1
                },
                "Phantos_Right": {
                    "frames": [6, 7, 8],
                    "speed": 0.1
                },
                "Phantos_Back": {
                    "frames": [9, 10, 11],
                    "speed": 0.1
                },
                "PhantosSoul_Back": { "frames": [12] },
                "PhantosSoul_Front": { "frames": [13] },
                "PhantosSoul_Left": { "frames": [14] },
                "PhantosSoul_Right": { "frames": [15] }
            },
            "speed": 0.1
        };
        Assets.getAtlas_Phantorm = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 71, 98, 0, 0, -14],
                [0, 98, 71, 98, 0, -42, -14],
                [0, 196, 35, 51, 0, -1, 0],
                [35, 196, 30, 51, 0, -1, 0],
                [65, 196, 30, 51, 0, -6, 0],
                [71, 0, 25, 86, 0, -44, 0],
                [71, 86, 99, 75, 0, -8, -15],
                [71, 161, 34, 34, 0, -2, -6],
                [95, 195, 25, 51, 0, -6, 0],
                [105, 161, 34, 34, 0, -2, -6],
                [120, 195, 25, 51, 0, -6, 0],
                [139, 161, 27, 27, 0, -5, -9],
                [145, 188, 59, 62, 0, -18, -5],
                [166, 161, 17, 17, 0, -10, -14],
                [96, 0, 99, 74, 0, -8, -38],
                [170, 74, 55, 73, 0, 11, -5],
                [183, 147, 34, 41, 0, -3, 0],
                [204, 188, 56, 62, 0, 13, -5],
                [195, 0, 55, 73, 0, -14, -5],
                [217, 147, 25, 39, 0, -6, -3],
                [225, 73, 25, 73, 0, -18, -5],
                [242, 146, 25, 39, 0, -6, -3],
                [260, 185, 55, 65, 0, 11, 12],
                [250, 0, 25, 69, 0, -18, 16],
                [250, 69, 55, 65, 0, -14, 12],
                [267, 134, 25, 51, 0, -6, 0],
                [292, 134, 25, 51, 0, -6, 0],
                [315, 185, 58, 58, 0, -18, 5],
                [275, 0, 57, 58, 0, 14, 5],
                [305, 58, 66, 48, 0, 22, -5],
                [332, 0, 66, 48, 0, -14, -5],
                [317, 106, 37, 48, 0, 0, -3],
                [354, 106, 37, 48, 0, 0, -3],
                [371, 48, 37, 48, 0, 0, -3],
                [398, 0, 37, 48, 0, 0, -3],
                [373, 154, 30, 46, 0, -7, 0],
                [373, 200, 29, 46, 0, -4, 0],
                [402, 200, 29, 46, 0, -3, 0],
                [391, 96, 29, 46, 0, -8, 0],
                [408, 48, 29, 46, 0, -4, 0],
                [435, 0, 28, 46, 0, -5, 0],
                [403, 142, 28, 46, 0, -5, 0],
                [420, 94, 28, 46, 0, -4, 0],
                [437, 46, 28, 46, 0, -5, 0],
                [463, 0, 28, 46, 0, -5, 0],
                [431, 140, 26, 46, 0, -5, -5],
                [448, 92, 26, 46, 0, -5, -5],
                [465, 46, 26, 46, 0, -5, -5],
                [431, 186, 26, 46, 0, -5, -5],
                [457, 138, 26, 46, 0, -7, 0],
                [474, 92, 26, 46, 0, -4, 0],
                [457, 184, 26, 46, 0, -5, 0],
                [491, 0, 25, 46, 0, -7, 0],
                [491, 46, 25, 46, 0, -6, 0],
                [483, 138, 25, 46, 0, -6, 0],
                [500, 92, 25, 46, 0, -6, 0],
                [483, 184, 25, 46, 0, -6, 0],
                [516, 0, 25, 46, 0, -6, 0],
                [516, 46, 25, 46, 0, -6, 0],
                [541, 0, 37, 38, 0, 0, -4],
                [578, 0, 37, 38, 0, 0, -4],
                [615, 0, 26, 38, 0, -6, -4],
                [541, 38, 37, 38, 0, 0, -4],
                [578, 38, 37, 38, 0, 0, -4],
                [615, 38, 26, 38, 0, -6, -4],
                [541, 76, 37, 37, 0, 0, -4],
                [578, 76, 37, 37, 0, 0, -4],
                [615, 76, 26, 38, 0, -6, -4],
                [525, 113, 25, 46, 0, -6, 0],
                [550, 113, 25, 46, 0, -7, 0],
                [575, 113, 25, 46, 0, -6, 0],
                [600, 114, 25, 46, 0, -6, 0],
                [508, 160, 25, 46, 0, -6, 0],
                [508, 206, 25, 45, 0, -6, -1],
                [533, 159, 25, 46, 0, -6, 0],
                [533, 205, 25, 46, 0, -6, 0],
                [558, 159, 25, 46, 0, -6, 0],
                [558, 205, 25, 46, 0, -6, 0],
                [583, 160, 25, 46, 0, -6, 0],
                [583, 206, 25, 45, 0, -6, 0],
                [608, 160, 25, 46, 0, -6, 0],
                [608, 206, 25, 38, 0, -8, 0]
            ],
            "animations": {
                "PhoebeWeapon_SoulAttack1": { "frames": [0] },
                "PhoebeWeapon_SoulAttack3": { "frames": [1] },
                "PhoebeSoul_Attack4": { "frames": [2] },
                "PhoebeSoul_Attack1": { "frames": [3] },
                "PhoebeSoul_Attack3": { "frames": [4] },
                "PhoebeWeapon_Victory": { "frames": [5] },
                "PhoebeWeapon_SoulAttack4": { "frames": [6] },
                "Phoebe_Dead3": { "frames": [7] },
                "PhoebeSoul_Walk1": { "frames": [8] },
                "Phoebe_Dead4": { "frames": [9] },
                "PhoebeSoul_Walk2": { "frames": [10] },
                "Phoebe_Explosion2": { "frames": [11] },
                "PhoebeWeapon_Attack6": { "frames": [12] },
                "Phoebe_Explosion1": { "frames": [13] },
                "PhoebeWeapon_SoulAttack2": { "frames": [14] },
                "PhoebeWeapon_Attack3": { "frames": [15] },
                "PhoebeSoul_Attack2": { "frames": [16] },
                "PhoebeWeapon_Attack4": { "frames": [17] },
                "PhoebeWeapon_Attack9": { "frames": [18] },
                "Phoebe_Dead1": { "frames": [19] },
                "PhoebeWeapon_Attack5": { "frames": [20] },
                "Phoebe_Dead2": { "frames": [21] },
                "PhoebeWeapon_Attack1": { "frames": [22] },
                "PhoebeWeapon_Attack11": { "frames": [23] },
                "PhoebeWeapon_Attack7": { "frames": [24] },
                "PhoebeSoul_Walk3": { "frames": [25] },
                "PhoebeSoul_Walk4": { "frames": [26] },
                "PhoebeWeapon_Attack10": { "frames": [27] },
                "PhoebeWeapon_Attack12": { "frames": [28] },
                "PhoebeWeapon_Attack2": { "frames": [29] },
                "PhoebeWeapon_Attack8": { "frames": [30] },
                "PhoebeSoul_Dodge1": { "frames": [31] },
                "PhoebeSoul_Dodge2": { "frames": [32] },
                "PhoebeSoul_Run1": { "frames": [33] },
                "PhoebeSoul_Run2": { "frames": [34] },
                "Phoebe_Attack10": { "frames": [35] },
                "Phoebe_Attack1": { "frames": [36] },
                "Phoebe_Attack12": { "frames": [37] },
                "Phoebe_Attack6": { "frames": [38] },
                "Phoebe_Attack7": { "frames": [39] },
                "Phoebe_Attack2": { "frames": [40] },
                "Phoebe_Attack4": { "frames": [41] },
                "Phoebe_Attack8": { "frames": [42] },
                "Phoebe_Run1": { "frames": [43] },
                "Phoebe_Run7": { "frames": [44] },
                "PhoebeSoul_Dodge3": { "frames": [45] },
                "PhoebeSoul_Dodge4": { "frames": [46] },
                "PhoebeSoul_Run3": { "frames": [47] },
                "PhoebeSoul_Run4": { "frames": [48] },
                "Phoebe_Attack3": { "frames": [49] },
                "Phoebe_Attack9": { "frames": [50] },
                "Phoebe_Run5": { "frames": [51] },
                "Phoebe_Attack11": { "frames": [52] },
                "Phoebe_Run10": { "frames": [53] },
                "Phoebe_Run11": { "frames": [54] },
                "Phoebe_Run12": { "frames": [55] },
                "Phoebe_Run2": { "frames": [56] },
                "Phoebe_Run3": { "frames": [57] },
                "Phoebe_Run4": { "frames": [58] },
                "Phoebe_Bite1": { "frames": [59] },
                "Phoebe_Bite2": { "frames": [60] },
                "Phoebe_Bite3": { "frames": [61] },
                "Phoebe_Bite6": { "frames": [62] },
                "Phoebe_Bite7": { "frames": [63] },
                "Phoebe_Bite4": { "frames": [64] },
                "Phoebe_Explosion3": { "frames": [65] },
                "Phoebe_Explosion4": { "frames": [66] },
                "Phoebe_Bite5": { "frames": [67] },
                "Phoebe_Run6": { "frames": [68] },
                "Phoebe_Run8": { "frames": [69] },
                "Phoebe_Run9": { "frames": [70] },
                "Phoebe_Walk1": { "frames": [71] },
                "Phoebe_Walk2": { "frames": [72] },
                "PhoebeSoul_Hit1": { "frames": [73] },
                "Phoebe_Walk3": { "frames": [74] },
                "Phoebe_Walk4": { "frames": [75] },
                "Phoebe_Walk5": { "frames": [76] },
                "Phoebe_Walk6": { "frames": [77] },
                "Phoebe_Walk7": { "frames": [78] },
                "Phoebe_Hurt1": { "frames": [79] },
                "Phoebe_Walk8": { "frames": [80] },
                "Phoebe_Attack5": { "frames": [81] },
                "Phoebe_Attack_Left": {
                    "frames": [22, 29, 15],
                    "speed": 0.2
                },
                "Phoebe_Attack_Front": {
                    "frames": [17, 20, 12],
                    "speed": 0.2
                },
                "Phoebe_Attack_Right": {
                    "frames": [24, 30, 18],
                    "speed": 0.2
                },
                "Phoebe_Attack_Back": {
                    "frames": [27, 23, 28],
                    "speed": 0.2
                }
            }
        };
        return Assets;
    }());
    config.Assets = Assets;
})(config || (config = {}));
//# sourceMappingURL=asset.js.map