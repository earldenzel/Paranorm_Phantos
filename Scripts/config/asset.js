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
                "id": "tAtlas_Graveyard",
                "src": "./Assets/_Background/Graveyard_TextureAtlas.png"
            },
            {
                "id": "tAtlas_MapG",
                "src": "./Assets/_UI/PlayerInfo/_Map/Map_Graveyard_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Hotel",
                "src": "./Assets/_Background/Hotel_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Mansion",
                "src": "./Assets/_Background/Mansion_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Items",
                "src": "./Assets/_UI/TitleUiItemsMap_TextureAtlas.png"
            },
            {
                "id": "tAtlas__TitlesUIMap",
                "src": "./Assets/_UI/_Final/TitleUiMap_TextureAtlas.png"
            },
            {
                "id": "tAtlas__Items",
                "src": "./Assets/_Items/_Final/Items_TextureAtlas.png"
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
                "id": "tAtlas__Phoebe",
                "src": "./Assets/_Player/_Final/Phoebe__TextureAtlas.png"
            },
            {
                "id": "tAtlas__Enemies",
                "src": "./Assets/_Enemies/_Final/Enemies__TextureAtlas.png"
            },
            {
                "id": "tAtlas_Bat",
                "src": "./Assets/_Enemies/bat/Bat_TextureAtlas.png"
            },
            {
                "id": "tAtlas_Spider",
                "src": "./Assets/_Enemies/spider/Spider_TextureAtlas.png"
            },
            {
                "id": "tAtlas_ShootingFlower",
                "src": "./Assets/_Enemies/shootingFlower/ShootingFlower_TextureAtlas.png"
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
        Assets.getAtlas_Spider = {
            "images": [],
            "framerate": 20,
            "frames": [
                [0, 0, 11, 11, 0, 0, 0],
                [11, 0, 56, 92, 0, -4, 0],
                [67, 0, 56, 92, 0, -4, 0],
                [0, 92, 64, 86, 0, 0, -3],
                [64, 92, 64, 86, 0, 0, -3],
                [0, 178, 86, 64, 0, -3, 0],
                [0, 242, 92, 56, 0, 0, -4]
            ],
            "animations": {
                "spiderRight": {
                    "frames": [1, 4],
                    "speed": 0.1
                },
                "spiderLeft": {
                    "frames": [2, 3],
                    "speed": 0.1
                },
                "spiderUp": {
                    "frames": [6, 5],
                    "speed": 0.1
                },
                "spiderBullet": { "frames": [0] },
                "spiderRight1": { "frames": [1] },
                "spiderLeft1": { "frames": [2] },
                "spiderLeft2": { "frames": [3] },
                "spiderRight2": { "frames": [4] },
                "spiderUp2": { "frames": [5] },
                "spiderUp1": { "frames": [6] }
            },
        };
        Assets.getAtlas_ShootingFlower = {
            "images": [],
            "framerate": 20,
            "frames": [
                [0, 0, 62, 92, 0, -6, 0],
                [0, 92, 15, 15, 0, 0, 0]
            ],
            "animations": {
                "shootingFlower": { "frames": [0] },
                "shootingFlowerBullet": { "frames": [1] }
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
        Assets.getAtlas_Hotel = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 564, 652, 0, 0, 0],
                [564, 0, 386, 482, 0, 0, 0],
                [0, 652, 564, 16, 0, 0, 0],
                [950, 0, 16, 652, 0, 0, 0],
                [564, 482, 194, 242, 0, 0, 0],
                [758, 482, 74, 148, 0, 0, 0],
                [832, 482, 118, 62, 0, 0, 0],
                [0, 668, 80, 134, 0, 0, 0],
                [80, 668, 76, 134, 0, 0, 0],
                [156, 668, 134, 72, 0, 0, 0],
                [290, 668, 134, 72, 0, 0, 0],
                [424, 668, 120, 72, 0, 0, 0],
                [966, 0, 52, 118, 0, 0, 0],
                [758, 630, 74, 148, 0, 0, 0],
                [832, 544, 76, 92, 0, 0, 0],
                [832, 636, 76, 90, 0, 0, 0],
                [156, 740, 98, 58, 0, 0, 0],
                [254, 740, 82, 72, 0, 0, 0],
                [336, 740, 76, 72, 0, 0, 0],
                [412, 740, 76, 72, 0, 0, 0],
                [832, 726, 76, 64, 0, 0, 0],
                [488, 740, 76, 72, 0, 0, 0],
                [564, 724, 66, 78, 0, 0, 0],
                [966, 118, 50, 72, 0, 0, 0],
                [630, 724, 80, 36, 0, 0, 0],
                [966, 190, 50, 62, 0, 0, 0],
                [966, 252, 50, 62, 0, 0, 0],
                [966, 314, 50, 62, 0, 0, 0],
                [966, 376, 50, 62, 0, 0, 0],
                [966, 438, 50, 62, 0, 0, 0],
                [966, 500, 50, 62, 0, 0, 0],
                [966, 562, 50, 62, 0, 0, 0],
                [908, 652, 76, 90, 0, 0, 0],
                [908, 742, 52, 58, 0, 0, 0],
                [630, 760, 50, 50, 0, 0, 0],
                [960, 742, 50, 62, 0, 0, 0],
                [908, 544, 36, 42, 0, 0, 0],
                [710, 724, 32, 36, 0, 0, 0],
                [680, 760, 50, 32, 0, 0, 0],
                [908, 586, 26, 38, 0, 0, 0],
                [742, 724, 16, 16, 0, 0, 0],
                [730, 760, 26, 32, 0, 0, 0],
                [984, 624, 24, 36, 0, 0, 0]
            ],
            "animations": {
                "Hotel_Ceiling_Tile_FULL": { "frames": [0] },
                "Hotel_CarpetTile_FullScreen": { "frames": [1] },
                "Hotel_Ceiling_Tile_Horizontal": { "frames": [2] },
                "Hotel_Ceiling_Tile_Vertical": { "frames": [3] },
                "Hotel_CarpetTile_1_4Screen": { "frames": [4] },
                "Hotel_Door_Horizontal-A": { "frames": [5] },
                "Hotel_ParanormalGlow_Open": { "frames": [6] },
                "Hotel_ParanormalGlow_Closed": { "frames": [7] },
                "Hotel_Wall_Horizontal_A": { "frames": [8] },
                "Hotel_Door_Vertical-A": { "frames": [9] },
                "Hotel_Door_Vertical-A_Closed": { "frames": [10] },
                "Hotel_Wall_Vertical_A": { "frames": [11] },
                "Hotel_Desk__cal": { "frames": [12] },
                "Hotel_Door_Horizontal-A_Closed": { "frames": [13] },
                "Hotel_Wall_Horizontal_B": { "frames": [14] },
                "Hotel_Wall_Horizontal_D": { "frames": [15] },
                "Hotel_Desk__ontal": { "frames": [16] },
                "Hotel_Closed_Door": { "frames": [17] },
                "Hotel_Wall_Vertical_B": { "frames": [18] },
                "Hotel_Wall_Vertical_D": { "frames": [19] },
                "Hotel_Wall_Horizontal_C": { "frames": [20] },
                "Hotel_Wall_Vertical_D2": { "frames": [21] },
                "Hotel_Plant_Pot": { "frames": [22] },
                "Hotel_Wall_Vertical_C": { "frames": [23] },
                "Hotel_Painting_Frame": { "frames": [24] },
                "Hotel_CarpetTile": { "frames": [25] },
                "Hotel_CarpetTile_Blue": { "frames": [26] },
                "Hotel_CarpetTile_Hole": { "frames": [27] },
                "Hotel_HoleTile_Center": { "frames": [28] },
                "Hotel_HoleTile_Horizontal": { "frames": [29] },
                "Hotel_HoleTile_Vertical": { "frames": [30] },
                "Hotel_Stairs_Down": { "frames": [31] },
                "Hotel_Wall_Horizontal_D2": { "frames": [32] },
                "Hotel_Desk_2Tiles": { "frames": [33] },
                "Hotel_Light-Effect": { "frames": [34] },
                "Hotel_Stairs_Up": { "frames": [35] },
                "Hotel_Painting_OvalFrame": { "frames": [36] },
                "Hotel_Empty_Pot": { "frames": [37] },
                "Hotel_HoleTile_Corner": { "frames": [38] },
                "Hotel_Light_On": { "frames": [39] },
                "Hotel_Ceiling_Tile": { "frames": [40] },
                "Hotel_CarpetTile_Singular": { "frames": [41] },
                "Hotel_Light_Off": { "frames": [42] }
            },
        };
        Assets.getAtlas_Mansion = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 564, 652, 0, 0, 0],
                [564, 0, 386, 480, 0, 0, 0],
                [0, 652, 564, 16, 0, 0, 0],
                [950, 0, 16, 652, 0, 0, 0],
                [564, 480, 194, 242, 0, 0, 0],
                [0, 668, 74, 148, 0, 0, 0],
                [758, 480, 74, 148, 0, 0, 0],
                [832, 480, 118, 62, 0, 0, 0],
                [74, 668, 80, 134, 0, 0, 0],
                [154, 668, 76, 134, 0, 0, 0],
                [230, 668, 134, 72, 0, 0, 0],
                [230, 740, 76, 90, 0, 0, 0],
                [364, 668, 134, 72, 0, 0, 0],
                [498, 668, 66, 78, 0, 0, 0],
                [306, 740, 120, 72, 0, 0, 0],
                [832, 542, 102, 102, 0, 0, 0],
                [966, 0, 52, 118, 0, 0, 0],
                [758, 628, 74, 72, 0, 0, 0],
                [832, 644, 100, 92, 0, 0, 0],
                [758, 700, 74, 72, 0, 0, 0],
                [426, 772, 98, 58, 0, 0, 0],
                [832, 736, 100, 92, 0, 0, 0],
                [426, 740, 50, 32, 0, 0, 0],
                [966, 118, 48, 72, 0, 0, 0],
                [966, 190, 50, 64, 0, 0, 0],
                [966, 254, 50, 62, 0, 0, 0],
                [966, 316, 50, 62, 0, 0, 0],
                [966, 378, 50, 62, 0, 0, 0],
                [966, 440, 50, 62, 0, 0, 0],
                [966, 502, 50, 62, 0, 0, 0],
                [966, 564, 50, 62, 0, 0, 0],
                [524, 772, 52, 58, 0, 0, 0],
                [576, 722, 76, 88, 0, 0, 0],
                [652, 722, 76, 86, 0, 0, 0],
                [728, 772, 52, 58, 0, 0, 0],
                [780, 772, 50, 50, 0, 0, 0],
                [932, 652, 76, 72, 0, 0, 0],
                [932, 724, 76, 60, 0, 0, 0],
                [932, 784, 32, 36, 0, 0, 0],
                [728, 722, 26, 38, 0, 0, 0],
                [964, 784, 24, 36, 0, 0, 0],
                [988, 784, 26, 32, 0, 0, 0],
                [934, 542, 16, 16, 0, 0, 0]
            ],
            "animations": {
                "Mansion_Ceiling_FULL": { "frames": [0] },
                "Mansion_FloorTile_creen": { "frames": [1] },
                "Mansion_Ceiling_Horizontal": { "frames": [2] },
                "Mansion_Ceiling_Vertical": { "frames": [3] },
                "Mansion_FloorTile_reen": { "frames": [4] },
                "Mansion_DoorHorizontal_": { "frames": [5] },
                "Mansion_DoorHorizontal_sed": { "frames": [6] },
                "Mansion_ParanormalGlow_Open": { "frames": [7] },
                "Mansion_ParanormalGlow_d": { "frames": [8] },
                "Mansion_WallHorizontal_": { "frames": [9] },
                "Mansion_DoorVertical_": { "frames": [10] },
                "Mansion_WallHorizontal_ (2)": { "frames": [11] },
                "Mansion_DoorVertical_sed": { "frames": [12] },
                "Mansion_Plant_ng": { "frames": [13] },
                "Mansion_WallVertical_": { "frames": [14] },
                "Mansion_SpiderWeb": { "frames": [15] },
                "Mansion_Desk_s_cal": { "frames": [16] },
                "Mansion_WallVertical_ (2)": { "frames": [17] },
                "Mansion_Bookshelf": { "frames": [18] },
                "Mansion_WallVertical_g": { "frames": [19] },
                "Mansion_Desk_s_ontal": { "frames": [20] },
                "Mansion_Bookshelf_ooks": { "frames": [21] },
                "Mansion_HoleTile_r (1)": { "frames": [22] },
                "Mansion_WallVertical_ (3)": { "frames": [23] },
                "Mansion_Stairs_Down": { "frames": [24] },
                "Mansion_FloorTile": { "frames": [25] },
                "Mansion_FloorTile_Hole": { "frames": [26] },
                "Mansion_HoleTile_cal": { "frames": [27] },
                "Mansion_HoleTile_ontal": { "frames": [28] },
                "Mansion_HoleTile_r": { "frames": [29] },
                "Mansion_Stairs_g": { "frames": [30] },
                "Mansion_Desk_s": { "frames": [31] },
                "Mansion_WallHorizontal_ (1)": { "frames": [32] },
                "Mansion_WallHorizontal_g": { "frames": [33] },
                "Mansion_Desk_s_": { "frames": [34] },
                "Mansion_Light-Effect": { "frames": [35] },
                "Mansion_WallVertical_ (1)": { "frames": [36] },
                "Mansion_WallHorizontal_ (3)": { "frames": [37] },
                "Mansion_Empty_ng": { "frames": [38] },
                "Mansion_Light_g": { "frames": [39] },
                "Mansion_Light_ng": { "frames": [40] },
                "Mansion_FloorTile_e": { "frames": [41] },
                "Mansion_Ceiling_Tile": { "frames": [42] }
            },
        };
        Assets.getAtlas_Items = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 292, 650, 0, 0, 0],
                [0, 650, 564, 110, 0, 0, 0],
                [292, 0, 482, 180, 0, 0, 0],
                [292, 180, 482, 134, 0, 0, 0],
                [292, 314, 454, 108, 0, 0, 0],
                [292, 422, 392, 92, 0, 0, 0],
                [292, 514, 128, 128, 0, 0, 0],
                [420, 514, 162, 86, 0, 0, 0],
                [582, 514, 162, 86, 0, 0, 0],
                [684, 422, 52, 72, 0, 0, 0],
                [746, 314, 16, 86, 0, 0, 0],
                [762, 314, 16, 86, 0, 0, 0],
                [420, 600, 26, 50, 0, 0, 0],
                [736, 422, 16, 86, 0, 0, 0],
                [744, 508, 16, 86, 0, 0, 0],
                [752, 400, 16, 86, 0, 0, 0],
                [768, 400, 16, 86, 0, 0, 0],
                [446, 600, 38, 38, 0, 0, 0],
                [484, 600, 38, 38, 0, 0, 0],
                [522, 600, 38, 38, 0, 0, 0],
                [560, 600, 38, 38, 0, 0, 0],
                [598, 600, 38, 38, 0, 0, 0],
                [636, 600, 38, 38, 0, 0, 0],
                [674, 600, 38, 38, 0, 0, 0],
                [712, 600, 38, 38, 0, 0, 0],
                [564, 638, 38, 38, 0, 0, 0],
                [564, 676, 38, 38, 0, 0, 0],
                [602, 638, 38, 38, 0, 0, 0],
                [564, 714, 38, 38, 0, 0, 0],
                [602, 676, 38, 38, 0, 0, 0],
                [640, 638, 38, 38, 0, 0, 0],
                [602, 714, 38, 38, 0, 0, 0],
                [640, 676, 38, 38, 0, 0, 0],
                [678, 638, 26, 48, 0, 0, 0],
                [640, 714, 38, 34, 0, 0, 0],
                [704, 638, 38, 34, 0, 0, 0],
                [684, 494, 22, 20, 0, 0, 0],
                [706, 494, 20, 20, 0, 0, 0],
                [678, 686, 38, 34, 0, 0, 0],
                [678, 720, 38, 34, 0, 0, 0],
                [704, 672, 26, 14, 0, 0, 0],
                [716, 686, 20, 38, 0, 0, 0],
                [716, 724, 38, 34, 0, 0, 0],
                [752, 486, 18, 22, 0, 0, 0],
                [742, 638, 38, 34, 0, 0, 0],
                [446, 638, 12, 12, 0, 0, 0],
                [458, 638, 12, 12, 0, 0, 0],
                [760, 508, 20, 24, 0, 0, 0],
                [760, 532, 20, 24, 0, 0, 0],
                [760, 556, 24, 24, 0, -1, -25],
                [760, 580, 20, 24, 0, 0, 0],
                [750, 604, 20, 24, 0, 0, 0],
                [736, 672, 20, 24, 0, 0, 0],
                [736, 696, 20, 24, 0, 0, 0],
                [756, 672, 18, 22, 0, 0, 0],
                [756, 694, 18, 22, 0, 0, 0]
            ],
            "animations": {
                "GameOver_Spotlight": { "frames": [0] },
                "UILayout_Placement": { "frames": [1] },
                "Title": { "frames": [4, 3, 2] },
                "GameOver": { "frames": [5] },
                "Company_Logo": { "frames": [6] },
                "MapsGraveyard_Initial": { "frames": [7] },
                "MapsHotel_Initial": { "frames": [8] },
                "FortuneTeller": { "frames": [9] },
                "Ecto_0": { "frames": [10] },
                "Ecto_1": { "frames": [11] },
                "Items_Hellebore-Flower2": { "frames": [12] },
                "Ecto_2": { "frames": [13] },
                "Ecto_3": { "frames": [14] },
                "Ecto_4": { "frames": [15] },
                "Ecto_5": { "frames": [16] },
                "HowToPlay_AKey": { "frames": [17] },
                "HowToPlay_CKey": { "frames": [18] },
                "HowToPlay_DKey": { "frames": [19] },
                "HowToPlay_DownArrow": { "frames": [20] },
                "HowToPlay_JKey": { "frames": [21] },
                "HowToPlay_KKey": { "frames": [22] },
                "HowToPlay_LKey": { "frames": [23] },
                "HowToPlay_LeftArrow": { "frames": [24] },
                "HowToPlay_RightArrow": { "frames": [25] },
                "HowToPlay_SKey": { "frames": [26] },
                "HowToPlay_SemiColonKey": { "frames": [27] },
                "HowToPlay_UpArrow": { "frames": [28] },
                "HowToPlay_VKey": { "frames": [29] },
                "HowToPlay_WKey": { "frames": [30] },
                "HowToPlay_XKey": { "frames": [31] },
                "HowToPlay_ZKey": { "frames": [32] },
                "Items_Hellebore-Flower0": { "frames": [33] },
                "Life_0": { "frames": [34] },
                "Life_1": { "frames": [35] },
                "Items_Diamonds": { "frames": [36] },
                "Items_Pearl": { "frames": [37] },
                "Life_2": { "frames": [38] },
                "Life_3": { "frames": [39] },
                "Items_Gold-Bar": { "frames": [40] },
                "Items_Key": { "frames": [41] },
                "Life_4": { "frames": [42] },
                "Items_Emeralds": { "frames": [43] },
                "Life_5": { "frames": [44] },
                "Items_One-Dollar-Coin": { "frames": [45] },
                "PlayerLocation": { "frames": [46] },
                "Items_Fifty-Dollars": { "frames": [47] },
                "Items_Five-Dollars": { "frames": [48] },
                "Items_Hellebore-Flower1": { "frames": [49] },
                "Items_One-Dollar": { "frames": [50] },
                "Items_One-Hundred-Dollars": { "frames": [51] },
                "Items_Ten-Dollars": { "frames": [52] },
                "Items_Twenty-Dollars": { "frames": [53] },
                "Items_Rubies": { "frames": [54] },
                "Items_Sapphires": { "frames": [55] },
                "upIndicator": {
                    "frames": [28, 28, 28, 30, 30, 30],
                    "speed": 0.1
                },
                "downIndicator": {
                    "frames": [20, 20, 20, 26, 26, 26],
                    "speed": 0.1
                },
                "leftIndicator": {
                    "frames": [24, 24, 24, 17, 17, 17],
                    "speed": 0.1
                },
                "rightIndicator": {
                    "frames": [25, 25, 25, 19, 19, 19],
                    "speed": 0.1
                },
                "attackIndicator": {
                    "frames": [21, 21, 21, 32, 32, 32],
                    "speed": 0.1
                },
                "stunIndicator": {
                    "frames": [22, 22, 22, 31, 31, 31],
                    "speed": 0.1
                }
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
        // KC
        Assets.getAtlas__Phoebe = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 141, 195, 0, 41, 38],
                // OLD: 0, -29 => 41, 38 || (+41, +67)
                [0, 195, 141, 195, 0, -44, 38],
                // OLD: -85, -29 => -44, 38 || (+41, +67)
                [0, 390, 48, 171, 0, -48, 67],
                // OLD: -89, 0 => -48, 67 || (+41, +67)
                [0, 561, 32, 32, 0, -21, -29],
                [48, 390, 196, 147, 0, 24, -10],
                // OLD: -17, -77 => 24, -10 || (+41, +67)
                [48, 537, 74, 68, 0, 0, -9],
                [122, 537, 74, 68, 0, 0, -9],
                [196, 537, 74, 68, 0, 0, -9],
                [141, 0, 108, 144, 0, 12, -10],
                // OLD: -29, -77 => 12, -10 || (+41, +67)
                [141, 144, 108, 144, 0, -48, -10],
                // OLD: -89, -77 => -48, -10 || (+41, +67)
                [141, 288, 130, 94, 0, 34, -10],
                // OLD: -7, -77 => 34, -10 || (+41, +67)
                [244, 382, 48, 144, 0, -48, -10],
                // OLD: -89, -77 => -48, -10 || (+41, +67)
                [270, 526, 48, 76, 0, -13, -7],
                [249, 0, 196, 142, 0, 24, 36],
                // OLD: -17, -31 => 24, 36 || (+41, +67)
                [249, 142, 48, 136, 0, -48, 32],
                // OLD: -89, -35 => 14, 32 || (+41, +67)
                [271, 278, 130, 94, 0, -48, -10],
                // OLD: -89, -77 => -48, -10 || (+41, +67)
                [297, 142, 108, 128, 0, 12, 24],
                // OLD: -29, -43 => 12, 24 || (+41, +67)
                [292, 372, 108, 128, 0, -48, 24],
                // OLD: -89, -43 => -48, 24 || (+41, +67)
                [318, 500, 68, 94, 0, -3, 0],
                [386, 500, 67, 94, 0, -7, 0],
                [400, 372, 116, 122, 0, -48, -10],
                // OLD: -89, -77 => -48, -10 || (+41, +67)
                [401, 270, 58, 94, 0, -13, 0],
                [405, 142, 110, 122, 0, 14, -10],
                // OLD: -27, -77 => 14, -10 || (+41, +67)
                [459, 264, 58, 94, 0, -3, 0],
                [453, 494, 48, 94, 0, -13, 0],
                [501, 494, 48, 94, 0, -13, 0],
                [516, 358, 114, 114, 0, -48, 10],
                // OLD: -89, -57 => -48, 10 || (+41, +67)
                [549, 472, 112, 114, 0, 16, 10],
                // OLD: -25, -57 => 16, 10 || (+41, +67)
                [445, 0, 48, 94, 0, -13, 0],
                [493, 0, 48, 94, 0, -13, 0],
                [515, 94, 59, 93, 0, -15, 0],
                [541, 0, 57, 93, 0, -17, 0],
                [515, 187, 48, 76, 0, -13, -7],
                [517, 263, 56, 93, 0, -7, 0],
                [563, 187, 74, 74, 0, 0, -9],
                [574, 93, 56, 93, 0, -9, 0],
                [598, 0, 56, 93, 0, -9, 0],
                [630, 93, 54, 93, 0, -11, 0],
                [654, 0, 54, 93, 0, -9, 0],
                [573, 261, 54, 93, 0, -11, 0],
                [627, 261, 50, 93, 0, -9, 0],
                [637, 186, 74, 74, 0, 0, -9],
                [684, 93, 50, 93, 0, -15, 0],
                [708, 0, 48, 93, 0, -15, 0],
                [630, 354, 48, 93, 0, -17, 0],
                [677, 260, 48, 93, 0, -13, 0],
                [711, 186, 74, 74, 0, 0, -9],
                [734, 93, 48, 93, 0, -13, 0],
                [756, 0, 48, 93, 0, -13, 0],
                [782, 93, 48, 93, 0, -15, 0],
                [804, 0, 48, 93, 0, -13, 0],
                [661, 447, 48, 93, 0, -13, 0],
                [661, 540, 66, 66, 0, -5, -13],
                [678, 353, 48, 93, 0, -13, 0],
                [725, 260, 48, 93, 0, -13, 0],
                [709, 446, 48, 93, 0, -13, 0],
                [726, 353, 48, 93, 0, -13, 0],
                [773, 260, 48, 93, 0, -13, 0],
                [785, 186, 74, 74, 0, 0, -9],
                [830, 93, 48, 93, 0, -13, 0],
                [852, 0, 48, 93, 0, -13, 0],
                [727, 539, 66, 66, 0, -5, -13],
                [757, 446, 48, 93, 0, -13, 0],
                [774, 353, 50, 92, 0, -11, -1],
                [821, 260, 48, 92, 0, -13, -1],
                [859, 186, 50, 74, 0, -13, -9],
                [878, 93, 48, 92, 0, -13, -1],
                [900, 0, 48, 92, 0, -13, -1],
                [948, 0, 74, 68, 0, 0, -9],
                [948, 68, 72, 91, 0, -1, 0],
                [793, 539, 52, 52, 0, -11, -19],
                [805, 445, 72, 91, 0, -1, 0],
                [845, 536, 50, 70, 0, -11, -11],
                [824, 352, 72, 90, 0, -1, -1],
                [869, 260, 54, 90, 0, -11, -1],
                [909, 185, 50, 74, 0, -13, -9],
                [877, 442, 54, 90, 0, -11, -1],
                [895, 532, 50, 74, 0, -13, -9],
                [896, 350, 48, 88, 0, -13, -1],
                [923, 259, 48, 88, 0, -13, -1],
                [971, 159, 50, 70, 0, -11, -13],
                [971, 229, 50, 70, 0, -11, -11],
                [971, 299, 50, 70, 0, -11, -13],
                [945, 369, 72, 72, 0, -1, -9],
                [945, 441, 72, 72, 0, -1, -9]
            ],
            "animations": {
                "Phoebe_Attack_Left": {
                    "frames": [16, 10, 8],
                    "speed": 0.2
                },
                "Phoebe_Attack_Front": {
                    "frames": [22, 11, 20],
                    "speed": 0.2
                },
                "Phoebe_Attack_Right": {
                    "frames": [17, 15, 9],
                    "speed": 0.2
                },
                "Phoebe_Attack_Back": {
                    "frames": [26, 14, 27],
                    "speed": 0.2
                },
                "Phoebe_Bite_Left1": { "frames": [58] },
                "Phoebe_Bite_Left2": {
                    "frames": [58, 46],
                    "speed": 0.1
                },
                "Phoebe_Bite_Front1": { "frames": [77] },
                "Phoebe_Bite_Front2": {
                    "frames": [77, 75],
                    "speed": 0.1
                },
                "Phoebe_Bite_Back": { "frames": [65] },
                "Phoebe_Bite_Right1": { "frames": [41] },
                "Phoebe_Bite_Right2": {
                    "frames": [41, 34],
                    "speed": 0.1
                },
                "Phoebe_Dead_A": {
                    "frames": [12, 32],
                    "speed": 0.1
                },
                "Phoebe_Dead_B": {
                    "frames": [52, 61],
                    "speed": 0.1
                },
                "Phoebe_Explosion": {
                    "frames": [83, 84, 70, 3],
                    "speed": 0.1
                },
                "Phoebe_Hurt": { "frames": [78] },
                "Phoebe_Run_Left": {
                    "frames": [47, 74],
                    "speed": 0.2
                },
                "Phoebe_Run_Front": {
                    "frames": [50, 63, 51, 67],
                    "speed": 0.2
                },
                "Phoebe_Run_Right": {
                    "frames": [49, 76],
                    "speed": 0.2
                },
                "Phoebe_Run_Back": {
                    "frames": [45, 64, 48, 66],
                    "speed": 0.2
                },
                "Phoebe_Walk_Front1": {
                    "frames": [60, 62],
                    "speed": 0.1
                },
                "Phoebe_Walk_Front2": { "frames": [60] },
                "Phoebe_Walk_Left1": {
                    "frames": [59, 57],
                    "speed": 0.1
                },
                "Phoebe_Walk_Left2": { "frames": [59] },
                "Phoebe_Walk_Right1": {
                    "frames": [56, 55],
                    "speed": 0.1
                },
                "Phoebe_Walk_Right2": { "frames": [56] },
                "Phoebe_Walk_Back1": {
                    "frames": [53, 54],
                    "speed": 0.1
                },
                "Phoebe_Walk_Back2": { "frames": [53] },
                "Phoebe_Special": { "frames": [71] },
                "Phoebe_SpecialAttack_Front": {
                    "frames": [31, 44, 39],
                    "speed": 0.1
                },
                "Phoebe_SpecialAttack_Back": {
                    "frames": [33, 43, 30],
                    "speed": 0.1
                },
                "Phoebe_SpecialAttack_Left": {
                    "frames": [42, 37, 35],
                    "speed": 0.1
                },
                "Phoebe_SpecialAttack_Right": {
                    "frames": [40, 38, 36],
                    "speed": 0.1
                },
                "Phoebe_Shadow": {
                    "frames": [69, 73],
                    "speed": 0.1
                },
                "Phoebe_Victory": { "frames": [2] },
                "PhoebeSoul_Attack_Left": { "frames": [0] },
                "PhoebeSoul_Attack_Front": { "frames": [4] },
                "PhoebeSoul_Attack_Right": { "frames": [1] },
                "PhoebeSoul_Attack_Back": { "frames": [13] },
                "PhoebeSoul_Dodge_Left": { "frames": [6] },
                "PhoebeSoul_Dodge_Right": { "frames": [5] },
                "PhoebeSoul_Dodge_Front": { "frames": [80] },
                "PhoebeSoul_Dodge_Back": { "frames": [72] },
                "PhoebeSoul_Hit": { "frames": [79] },
                "PhoebeSoul_Run_Left": { "frames": [57] },
                "PhoebeSoul_Run_Right": { "frames": [7] },
                "PhoebeSoul_Run_Front": { "frames": [82] },
                "PhoebeSoul_Run_Back": { "frames": [68] },
                "PhoebeSoul_Walk_Front": { "frames": [28] },
                "PhoebeSoul_Walk_Left": { "frames": [29] },
                "PhoebeSoul_Walk_Right": { "frames": [25] },
                "PhoebeSoul_Walk_Back": { "frames": [24] },
                "PhoebeSoul_SpecialAttack_Front": { "frames": [19] },
                "PhoebeSoul_SpecialAttack_Left": { "frames": [23] },
                "PhoebeSoul_SpecialAttack_Back": { "frames": [18] },
                "PhoebeSoul_SpecialAttack_Right": { "frames": [21] }
            }
        };
        Assets.getAtlas__Items = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 26, 50, 0, 0, 0],
                [0, 50, 26, 48, 0, 0, 0],
                [26, 0, 22, 43, 0, 0, 0],
                [0, 98, 18, 44, 0, -2, 0],
                [26, 43, 20, 38, 0, 0, 0],
                [46, 43, 18, 22, 0, 0, 0],
                [46, 65, 18, 22, 0, 0, 0],
                [26, 81, 20, 24, 0, 0, 0],
                [46, 87, 18, 22, 0, 0, 0],
                [0, 142, 20, 24, 0, 0, 0],
                [0, 166, 24, 24, 0, -1, -25],
                [18, 105, 20, 24, 0, 0, 0],
                [38, 109, 26, 14, 0, 0, 0],
                [20, 129, 20, 24, 0, 0, 0],
                [40, 123, 20, 24, 0, 0, 0],
                [24, 153, 20, 24, 0, 0, 0],
                [24, 177, 22, 20, 0, 0, 0],
                [44, 147, 20, 20, 0, 0, 0],
                [48, 0, 12, 12, 0, 0, 0]
            ],
            "animations": {
                "Items_Hellebore-Flower": {
                    "frames": [1, 10, 0],
                    "speed": 0.1
                },
                "Items_EctoCooler": {
                    "frames": [3, 2],
                    "speed": 0.1
                },
                "Items_Key": { "frames": [4] },
                "Items_Emeralds": { "frames": [5] },
                "Items_Rubies": { "frames": [6] },
                "Items_Fifty-Dollars": { "frames": [7] },
                "Items_Sapphires": { "frames": [8] },
                "Items_Five-Dollars": { "frames": [9] },
                "Items_Hellebore-Flower1": { "frames": [10] },
                "Items_One-Dollar": { "frames": [11] },
                "Items_Gold-Bar": { "frames": [12] },
                "Items_One-Hundred-Dollars": { "frames": [13] },
                "Items_Ten-Dollars": { "frames": [14] },
                "Items_Twenty-Dollars": { "frames": [15] },
                "Items_Diamonds": { "frames": [16] },
                "Items_Pearl": { "frames": [17] },
                "Items_One-Dollar-Coin": { "frames": [18] }
            }
        };
        Assets.getAtlas__TitleUiMap = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 292, 650, 0, 0, 0],
                [292, 0, 564, 110, 0, 0, 0],
                [292, 110, 482, 180, 0, 0, 0],
                [292, 290, 482, 134, 0, 0, 0],
                [292, 424, 454, 108, 0, 0, 0],
                [292, 532, 392, 92, 0, 0, 0],
                [774, 110, 104, 144, 0, 0, 0],
                [774, 254, 128, 128, 0, 0, 0],
                [774, 382, 162, 86, 0, 0, 0],
                [746, 468, 162, 86, 0, 0, 0],
                [684, 554, 162, 86, 0, 0, 0],
                [856, 0, 60, 52, 0, 0, 0],
                [846, 554, 60, 52, 0, 0, 0],
                [856, 52, 60, 52, 0, 0, 0],
                [916, 0, 60, 52, 0, 0, 0],
                [916, 52, 60, 52, 0, 0, 0],
                [908, 468, 16, 86, 0, 0, 0],
                [924, 468, 16, 86, 0, 0, 0],
                [878, 104, 16, 86, 0, 0, 0],
                [894, 104, 16, 86, 0, 0, 0],
                [910, 104, 16, 86, 0, 0, 0],
                [926, 104, 16, 86, 0, 0, 0],
                [878, 190, 38, 38, 0, 0, 0],
                [846, 606, 38, 38, 0, 0, 0],
                [906, 554, 38, 38, 0, 0, 0],
                [942, 104, 38, 38, 0, 0, 0],
                [942, 142, 38, 38, 0, 0, 0],
                [944, 180, 38, 38, 0, 0, 0],
                [944, 218, 38, 38, 0, 0, 0],
                [944, 256, 38, 38, 0, 0, 0],
                [944, 294, 38, 38, 0, 0, 0],
                [944, 332, 38, 38, 0, 0, 0],
                [944, 370, 38, 38, 0, 0, 0],
                [944, 408, 38, 38, 0, 0, 0],
                [944, 446, 38, 38, 0, 0, 0],
                [944, 484, 38, 38, 0, 0, 0],
                [944, 522, 38, 38, 0, 0, 0],
                [944, 560, 38, 38, 0, 0, 0],
                [746, 424, 26, 38, 0, 0, -3],
                [916, 190, 25, 39, 0, 0, 0],
                [906, 592, 38, 34, 0, 0, 0],
                [944, 598, 38, 34, 0, 0, 0],
                [292, 624, 20, 21, 0, -1, -23],
                [902, 229, 38, 34, 0, 0, 0],
                [902, 263, 38, 34, 0, 0, 0],
                [902, 297, 38, 34, 0, 0, 0],
                [902, 331, 38, 34, 0, 0, 0],
                [684, 532, 12, 12, 0, 0, 0]
            ],
            "animations": {
                "GameOver_Spotlight": { "frames": [0] },
                "UILayout_Placement": { "frames": [1] },
                "Title": {
                    "frames": [4, 3, 2],
                    "speed": 0.05
                },
                "GameOver": { "frames": [5] },
                "FortuneTeller": { "frames": [6] },
                "Company_Logo": { "frames": [7] },
                "MapsGraveyard": { "frames": [8] },
                "MapsHotel": { "frames": [9] },
                "MapsMansion": { "frames": [10] },
                "Power_ItemBox_Bite": { "frames": [11] },
                "Power_ItemBox_Fire": { "frames": [12] },
                "Power_ItemBox_Ice": { "frames": [13] },
                "Power_ItemBox_Shadow": { "frames": [14] },
                "Power_ItemBox_Slime": { "frames": [15] },
                "Ecto_0": { "frames": [16] },
                "Ecto_1": { "frames": [17] },
                "Ecto_2": { "frames": [18] },
                "Ecto_3": { "frames": [19] },
                "Ecto_4": { "frames": [20] },
                "Ecto_5": { "frames": [21] },
                "HowToPlay_AKey": { "frames": [22] },
                "HowToPlay_CKey": { "frames": [23] },
                "HowToPlay_DKey": { "frames": [24] },
                "HowToPlay_DownArrow": { "frames": [25] },
                "HowToPlay_JKey": { "frames": [26] },
                "HowToPlay_KKey": { "frames": [27] },
                "HowToPlay_LKey": { "frames": [28] },
                "HowToPlay_LeftArrow": { "frames": [29] },
                "HowToPlay_RightArrow": { "frames": [30] },
                "HowToPlay_SKey": { "frames": [31] },
                "HowToPlay_SemiColonKey": { "frames": [32] },
                "HowToPlay_UpArrow": { "frames": [33] },
                "HowToPlay_VKey": { "frames": [34] },
                "HowToPlay_WKey": { "frames": [35] },
                "HowToPlay_XKey": { "frames": [36] },
                "HowToPlay_ZKey": { "frames": [37] },
                "Life_0": { "frames": [40] },
                "Life_1": { "frames": [41] },
                "Effects_FlameHit": {
                    "frames": [42, 38, 39],
                    "speed": 0.2
                },
                "Life_2": { "frames": [43] },
                "Life_3": { "frames": [44] },
                "Life_4": { "frames": [45] },
                "Life_5": { "frames": [46] },
                "PlayerLocation": { "frames": [47] },
                "upIndicator": {
                    "frames": [33, 35],
                    "speed": 0.01
                },
                "downIndicator": {
                    "frames": [25, 31],
                    "speed": 0.01
                },
                "leftIndicator": {
                    "frames": [29, 22],
                    "speed": 0.01
                },
                "rightIndicator": {
                    "frames": [30, 24],
                    "speed": 0.01
                },
                "attackIndicator": {
                    "frames": [37, 26],
                    "speed": 0.01
                },
                "stunIndicator": {
                    "frames": [36, 27],
                    "speed": 0.01
                }
            }
        };
        Assets.getAtlas__Enemies = {
            "images": [
                ""
            ],
            "framerate": 20,
            "frames": [
                [0, 0, 175, 197, 0, -1, 0],
                [0, 197, 175, 195, 0, -1, 0],
                [175, 0, 145, 197, 0, 0, -1],
                [0, 392, 152, 174, 0, -13, -11],
                [320, 0, 152, 172, 0, -13, -11],
                [175, 197, 100, 150, 0, -39, -23],
                [0, 566, 120, 122, 0, -25, -41],
                [472, 0, 68, 150, 0, -55, -23],
                [0, 688, 116, 102, 0, -31, -47],
                [540, 0, 64, 148, 0, -57, -25],
                [604, 0, 64, 148, 0, -57, -25],
                [668, 0, 154, 58, 0, -11, -69],
                [668, 58, 152, 52, 0, -13, -71],
                [275, 197, 46, 158, 0, -65, -19],
                [0, 790, 62, 66, 0, -57, -65],
                [321, 172, 112, 96, 0, -33, -51],
                [321, 268, 98, 102, 0, -39, -47],
                [152, 392, 46, 158, 0, -65, -17],
                [198, 347, 76, 130, 0, -51, -33],
                [274, 355, 46, 148, 0, -65, -25],
                [320, 370, 96, 102, 0, -41, -47],
                [120, 566, 60, 130, 0, -59, -33],
                [116, 696, 90, 104, 0, -43, -47],
                [180, 550, 38, 146, 0, -69, -25],
                [822, 0, 90, 104, 0, -43, -47],
                [912, 0, 86, 104, 0, -45, -47],
                [668, 110, 114, 34, 0, -31, -81],
                [198, 477, 72, 72, 0, -53, -63],
                [218, 549, 46, 154, 0, -65, -21],
                [264, 549, 48, 138, 0, -65, -29],
                [206, 703, 60, 130, 0, -59, -33],
                [266, 687, 54, 138, 0, -61, -29],
                [433, 172, 84, 106, 0, -47, -45],
                [419, 278, 84, 102, 0, -47, -47],
                [416, 380, 80, 84, 0, -49, -57],
                [270, 503, 66, 46, 0, -55, -75],
                [312, 549, 48, 134, 0, -65, -31],
                [320, 683, 40, 134, 0, -69, -31],
                [517, 150, 48, 134, 0, -65, -31],
                [565, 148, 64, 124, 0, -57, -37],
                [629, 148, 64, 122, 0, -57, -37],
                [693, 144, 58, 122, 0, -59, -37],
                [751, 144, 54, 122, 0, -61, -39],
                [503, 284, 60, 106, 0, -59, -45],
                [496, 390, 72, 76, 0, -53, -59],
                [336, 472, 82, 76, 0, -47, -61],
                [360, 548, 56, 122, 0, -61, -37],
                [360, 670, 56, 116, 0, -61, -41],
                [360, 786, 88, 70, 0, -45, -63],
                [418, 464, 68, 84, 0, -55, -57],
                [416, 548, 58, 110, 0, -63, -45],
                [416, 658, 58, 110, 0, -59, -43],
                [486, 466, 72, 76, 0, -53, -61],
                [474, 548, 44, 122, 0, -67, -37],
                [518, 542, 44, 122, 0, -67, -37],
                [474, 670, 58, 98, 0, -59, -47],
                [532, 664, 38, 116, 0, -69, -41],
                [448, 780, 58, 76, 0, -59, -61],
                [506, 780, 50, 76, 0, -65, -61],
                [556, 780, 50, 76, 0, -63, -61],
                [62, 790, 48, 62, 0, -65, -67],
                [110, 800, 66, 48, 0, -59, -85],
                [176, 800, 30, 52, 0, -73, -71],
                [820, 104, 100, 34, 0, -37, -81],
                [805, 138, 46, 122, 0, -59, -37],
                [851, 138, 44, 122, 0, -67, -37],
                [895, 138, 44, 122, 0, -67, -37],
                [939, 104, 46, 120, 0, -65, -39],
                [985, 104, 32, 122, 0, -71, -37],
                [563, 284, 56, 100, 0, -59, -47],
                [568, 384, 54, 82, 0, -61, -57],
                [558, 466, 72, 72, 0, -53, -63],
                [562, 538, 40, 122, 0, -73, -37],
                [602, 538, 34, 122, 0, -71, -37],
                [570, 660, 40, 116, 0, -69, -41],
                [610, 660, 36, 116, 0, -71, -41],
                [606, 776, 48, 76, 0, -65, -59],
                [619, 272, 34, 110, 0, -73, -43],
                [653, 270, 48, 108, 0, -65, -45],
                [701, 266, 48, 108, 0, -65, -45],
                [749, 266, 34, 114, 0, -71, -41],
                [783, 266, 34, 114, 0, -71, -41],
                [817, 260, 34, 122, 0, -73, -37],
                [851, 260, 34, 122, 0, -71, -37],
                [885, 260, 34, 114, 0, -71, -41],
                [919, 260, 24, 114, 0, -73, -41],
                [622, 382, 46, 84, 0, -65, -57],
                [668, 378, 36, 90, 0, -71, -53],
                [704, 374, 42, 94, 0, -67, -51],
                [746, 380, 56, 84, 0, -61, -57],
                [802, 382, 72, 72, 0, -53, -63],
                [943, 224, 34, 114, 0, -71, -41],
                [977, 226, 34, 114, 0, -71, -41],
                [630, 466, 38, 62, 0, -69, -67],
                [636, 528, 26, 122, 0, -75, -37],
                [668, 468, 72, 72, 0, -53, -63],
                [662, 540, 72, 72, 0, -53, -63],
                [646, 650, 34, 114, 0, -71, -41],
                [680, 612, 34, 114, 0, -71, -41],
                [714, 612, 24, 114, 0, -73, -41],
                [654, 764, 44, 84, 0, -67, -57],
                [698, 726, 34, 114, 0, -71, -41],
                [732, 726, 34, 110, 0, -73, -43],
                [732, 836, 58, 20, 0, -59, -89],
                [874, 382, 42, 72, 0, -67, -63],
                [916, 374, 44, 82, 0, -67, -57],
                [734, 540, 72, 72, 0, -53, -63],
                [740, 468, 72, 72, 0, -53, -63],
                [738, 612, 72, 72, 0, -53, -63],
                [812, 454, 72, 72, 0, -53, -63],
                [884, 456, 72, 72, 0, -53, -63],
                [812, 526, 72, 72, 0, -51, -63],
                [884, 528, 72, 72, 0, -51, -63],
                [810, 598, 50, 74, 0, -63, -61],
                [860, 600, 48, 76, 0, -65, -59],
                [908, 600, 48, 70, 0, -65, -63],
                [738, 684, 44, 40, 0, -67, -79],
                [766, 724, 44, 74, 0, -67, -61],
                [782, 684, 44, 40, 0, -67, -77],
                [790, 798, 44, 58, 0, -67, -69],
                [810, 724, 48, 62, 0, -65, -67],
                [826, 672, 30, 52, 0, -73, -71],
                [856, 676, 40, 44, 0, -69, -77],
                [858, 720, 34, 60, 0, -71, -69],
                [834, 786, 26, 60, 0, -75, -69],
                [860, 780, 26, 60, 0, -75, -69],
                [943, 338, 32, 32, 0, -73, -83],
                [960, 370, 52, 52, 0, -63, -73],
                [960, 422, 52, 52, 0, -63, -73],
                [956, 474, 60, 50, 0, -59, -73],
                [956, 524, 52, 52, 0, -63, -73],
                [956, 576, 52, 52, 0, -63, -73],
                [956, 628, 52, 52, 0, -63, -73],
                [886, 780, 46, 52, 0, -65, -71],
                [782, 110, 26, 28, 0, -75, -85],
                [896, 676, 30, 46, 0, -73, -75],
                [892, 722, 52, 52, 0, -63, -73],
                [926, 670, 30, 46, 0, -73, -75],
                [956, 680, 52, 52, 0, -61, -73],
                [944, 732, 26, 44, 0, -75, -77],
                [970, 732, 32, 32, 0, -73, -83],
                [975, 340, 14, 30, 0, -81, -83],
                [989, 340, 28, 26, 0, -75, -85],
                [416, 768, 18, 18, 0, -79, -89],
                [932, 776, 32, 32, 0, -73, -83],
                [932, 808, 32, 32, 0, -73, -83],
                [970, 764, 32, 32, 0, -73, -83],
                [964, 796, 32, 32, 0, -73, -83],
                [964, 828, 26, 28, 0, -75, -85],
                [472, 150, 30, 14, 0, -73, -91],
                [206, 833, 30, 14, 0, -73, -91],
                [175, 347, 14, 30, 0, -81, -83],
                [320, 817, 32, 32, 0, -71, -83],
                [266, 825, 28, 26, 0, -75, -85]
            ],
            "animations": {
                "GhostWoman_Idle_Front": { "frames": [36] },
                "GhostWoman_Idle_Left": { "frames": [37] },
                "GhostWoman_Idle_Back": { "frames": [38] },
                "GhostWoman_Attack": { "frames": [43] },
                "GhostWoman_Eaten_Front": { "frames": [44] },
                "GhostWoman_Eaten_Left": { "frames": [45] },
                //"GhostWoman_IceAttack1": { "frames": [76] },
                //"GhostWoman_IceAttackTP1": { "frames": [114] },
                //"GhostWoman_IceAttack2": { "frames": [3] },
                //"GhostWoman_IceAttackTP2": { "frames": [4] },
                //"GhostWoman_IceAttack3": { "frames": [0] },
                //"GhostWoman_IceAttackTP3": { "frames": [1] },
                "GhostWoman_Explode": {
                    "frames": [144, 130, 90, 95],
                    "speed": 0.1
                },
                "GhostWoman_Eaten_Back": { "frames": [52] },
                "GhostWoman_Stun": {
                    "frames": [89, 49],
                    "speed": 0.1
                },
                "IceAttack": {
                    "frames": [76, 114, 3, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 4, 76, 114],
                    "speed": 0.1
                },
                "GhostMan_Eaten_Left": { "frames": [57] },
                "GhostMan_Eaten_Front": { "frames": [58] },
                "GhostMan_Eaten_Back": { "frames": [59] },
                "GhostMan_Idle_Front": { "frames": [9] },
                "GhostMan_Idle_Back": { "frames": [10] },
                "GhostMan_Stun": {
                    "frames": [7, 5],
                    "speed": 0.1
                },
                "GhostMan_Attack_Left": { "frames": [18] },
                "GhostMan_Idle_Left": { "frames": [23] },
                "GhostMan_Attack_Back": { "frames": [30] },
                "GhostMan_Attack_Front": { "frames": [21] },
                "Fireball": {
                    "frames": [116, 122, 118],
                    "speed": 0.1
                },
                "GhostShadow_Opaque": {
                    "frames": [22, 25, 22, 16],
                    "speed": 0.05
                },
                "GhostShadow_Transparent": {
                    "frames": [24, 33, 24, 20],
                    "speed": 0.05
                },
                "GhostShadow_Stun": {
                    "frames": [32, 8],
                    "speed": 0.1
                },
                "GhostShadow_Attack": {
                    "frames": [34, 127, 6, 2, 2, 2, 2, 2, 6, 127, 34],
                    "speed": 0.1
                },
                "GhostShadow_Eaten_Left": { "frames": [115] },
                "GhostShadow_Eaten_FrontBack": { "frames": [119] },
                /*
                    Works with GhostMan
                */
                "GhostShadow_Explode": {
                    "frames": [126, 128, 27, 71],
                    "speed": 0.1
                },
                "GhostTeeth_Attack_Right": {
                    "frames": [11, 12],
                    "speed": 0.1
                },
                "GhostTeeth_Attack_Front": {
                    "frames": [13, 17],
                    "speed": 0.1
                },
                "GhostTeeth_Attack_Back": {
                    "frames": [19, 28],
                    "speed": 0.1
                },
                "GhostTeeth_Idle": {
                    "frames": [29, 31],
                    "speed": 0.05
                },
                "GhostTeeth_Stun": {
                    "frames": [39, 40],
                    "speed": 0.1
                },
                "GhostTeeth_Eaten_Front": { "frames": [60] },
                "GhostTeeth_Eaten_Left": { "frames": [14] },
                "GhostTeeth_Eaten_Back": { "frames": [120] },
                "GhostSlime_Explosion": { "frames": [15] },
                "SlimePuddle_2": { "frames": [35] },
                "SlimePuddle_1": { "frames": [48] },
                "GhostSlime_Idle": { "frames": [56] },
                "SlimePuddle_3": { "frames": [86] },
                "GhostSlime_Form2": { "frames": [87] },
                "GhostSlime_Eaten_Left": { "frames": [93] },
                "GhostSlime_Form1": { "frames": [104] },
                "GhostSlime_Stun": {
                    "frames": [113, 104],
                    "speed": 0.1
                },
                "GhostSlime_Eaten_Front": { "frames": [124] },
                "GhostSlime_Eaten_Back": { "frames": [125] },
                "SlimePuddle_4": { "frames": [129] },
                "GhostSlime_Travel": { "frames": [140] },
                "GhostSlime_Emerge": {
                    "frames": [104, 87, 56],
                    "speed": 0.05
                },
                "GhostSlime_Hide": {
                    "frames": [56, 87, 104, 140],
                    "speed": 0.05
                },
                "SlimeBall": { "frames": [143] },
                "Maggot_Walk_Side": {
                    "frames": [26, 63],
                    "speed": 0.05
                },
                "Maggot_Walk_FrontBack": {
                    "frames": [117, 100],
                    "speed": 0.05
                },
                "Maggot_SmallWalk_Side": { "frames": [103] },
                "Maggot_SmallWalk_FrontBack": { "frames": [139] },
                "Maggot_Explode": {
                    "frames": [146, 132, 107, 108],
                    "speed": 0.1
                },
                "Zombie_Attack_Front": {
                    "frames": [53, 54],
                    "speed": 0.08
                },
                "Zombie_Attack_Left": {
                    "frames": [64, 41],
                    "speed": 0.08
                },
                "Zombie_Attack_Back": {
                    "frames": [65, 66],
                    "speed": 0.08
                },
                "Zombie_Explode": {
                    "frames": [152, 138, 111, 112],
                    "speed": 0.1
                },
                "Zombie_Stun": {
                    "frames": [67, 47],
                    "speed": 0.1
                },
                "Zombie_Walk_Front": {
                    "frames": [73, 82],
                    "speed": 0.05
                },
                "Zombie_Walk_Back": {
                    "frames": [83, 68],
                    "speed": 0.05
                },
                "Zombie_Walk_Left": {
                    "frames": [94, 72],
                    "speed": 0.05
                },
                "Ghost_Idle": {
                    "frames": [42, 46],
                    "speed": 0.05
                },
                "Ghost_Stun": {
                    "frames": [55, 69],
                    "speed": 0.1
                },
                /*
                    Works with GhostTeeth, GhostThin, TestEnemy
                */
                "Ghost_Explode": {
                    "frames": [145, 131, 96, 106],
                    "speed": 0.1
                },
                "Ghost_Eaten_Left": { "frames": [123] },
                "Ghost_Eaten_Front": { "frames": [135] },
                "Ghost_Eaten_Back": { "frames": [137] },
                "RedSkeleton_Dead": { "frames": [61] },
                "RedSkeleton_Stun": {
                    "frames": [78, 50],
                    "speed": 0.1
                },
                "RedSkeleton_Walk_Front": {
                    "frames": [80, 81],
                    "speed": 0.1
                },
                "RedSkeleton_Walk_Back": {
                    "frames": [84, 91],
                    "speed": 0.1
                },
                "RedSkeleton_Walk_Right": {
                    "frames": [85, 77],
                    "speed": 0.1
                },
                "RedBone": {
                    "frames": [149, 142, 141, 134],
                    "speed": 0.1
                },
                "GhostThin_Eaten_Front": { "frames": [62] },
                "GhostThin_Stun": {
                    "frames": [70, 105],
                    "speed": 0.1
                },
                "GhostThin_Idle": {
                    "frames": [75, 74],
                    "speed": 0.05
                },
                "GhostThin_Eaten_Back": { "frames": [121] },
                "GhostThin_Eaten_Left": { "frames": [133] },
                "TestEnemy": { "frames": [88] },
                "Skeleton_Stun1": {
                    "frames": [79, 51],
                    "speed": 0.1
                },
                "Skeleton_Walk_Back": {
                    "frames": [98, 101],
                    "speed": 0.1
                },
                "Skeleton_Walk_Right": {
                    "frames": [99, 102],
                    "speed": 0.1
                },
                "Skeleton_Walk_Front": {
                    "frames": [92, 97],
                    "speed": 0.1
                },
                "Skeleton_Explode": {
                    "frames": [147, 136, 109, 110],
                    "speed": 0.1
                },
                "Bone": {
                    "frames": [150, 153, 151, 148],
                    "speed": 0.1
                }
            }
        };
        return Assets;
    }());
    config.Assets = Assets;
})(config || (config = {}));
//# sourceMappingURL=asset.js.map