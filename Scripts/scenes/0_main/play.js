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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(hasDoorTop, hasDoorBot, hasDoorLeft, hasDoorRight, design) {
            var _this = _super.call(this) || this;
            _this.enemies = new Array();
            _this.obstacles = new Array();
            _this.cosmetics = new Array();
            _this.hasProjectileShooters = false;
            _this.hasShop = false;
            _this.hasDoorTop = hasDoorTop;
            _this.hasDoorBot = hasDoorBot;
            _this.hasDoorLeft = hasDoorLeft;
            _this.hasDoorRight = hasDoorRight;
            _this.design = design;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            // Initialize our variables
            this.player = managers.Game.player;
            managers.Game.bulletManager.Reset();
            switch (this.design) {
                case config.Design.GRAVEYARD:
                    this.spriteSheet = managers.Game.graveyard_TextureAtlas;
                    break;
                case config.Design.HOTEL:
                    this.spriteSheet = managers.Game.hotel_TextureAtlas;
                    break;
                case config.Design.MANSION:
                    this.spriteSheet = managers.Game.mansion_TextureAtlas;
                    break;
            }
            this.ceilingAndWall = new createjs.Sprite(this.spriteSheet, "CeilingAndWall");
            this.ceilingAndWall.y = 110;
            //this.ceilingHorizontal =new objects.Background(this.assetManager,"background_c_hori");
            //this.ceilingVertical =new objects.Background(this.assetManager,"background_c_vert");
            this.floor = new createjs.Sprite(this.spriteSheet, "Floor");
            if (this.design != config.Design.GRAVEYARD) {
                this.floor.x = 90;
                this.floor.y = 198;
            }
            else {
                this.floor.y = 110;
            }
            //this.wallHorizontal = new objects.Background(this.assetManager,"background_w_hori");
            //this.wallVertical = new objects.Background(this.assetManager, "background_w_vert");
            this.player.canTraverseTop = false;
            this.player.canTraverseBot = false;
            this.player.canTraverseLeft = false;
            this.player.canTraverseRight = false;
            if (this.hasDoorTop) {
                if (this.isDoorTopLocked) {
                    this.doorTop = new createjs.Sprite(this.spriteSheet, "DoorTopLocked");
                    this.doorTop.name = "DoorTopLocked";
                }
                else {
                    this.doorTop = new createjs.Sprite(this.spriteSheet, "DoorTop");
                    this.doorTop.name = "DoorTop";
                }
                if (this.design != config.Design.GRAVEYARD) {
                    this.doorTopFrame = new createjs.Sprite(this.spriteSheet, "DoorTopCeiling");
                    this.doorTopFrame.y = 110;
                    this.doorTopFrame.x = 182;
                }
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorTop.x = 238;
                }
                else {
                    this.doorTop.x = 224;
                }
                this.doorTop.y = 126;
                this.player.canTraverseTop = !this.isDoorTopLocked;
            }
            if (this.hasDoorBot) {
                if (this.isDoorBotLocked) {
                    this.doorBot = new createjs.Sprite(this.spriteSheet, "DoorBottomLocked");
                    this.doorBot.name = "DoorBottomLocked";
                }
                else {
                    this.doorBot = new createjs.Sprite(this.spriteSheet, "DoorBottom");
                    this.doorBot.name = "DoorBottom";
                }
                if (this.design != config.Design.GRAVEYARD) {
                    this.doorBotFrame = new createjs.Sprite(this.spriteSheet, "DoorBottomCeiling");
                    this.doorBotFrame.x = 183;
                    this.doorBotFrame.y = 745;
                }
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorBot.x = 238;
                }
                else {
                    this.doorBot.x = 224;
                }
                this.doorBot.y = 674;
                //this.doorBot.Flip();
                //this.doorBotFrame.Flip();
                this.player.canTraverseBot = !this.isDoorBotLocked;
            }
            if (this.hasDoorLeft) {
                if (this.isDoorLeftLocked) {
                    this.doorLeft = new createjs.Sprite(this.spriteSheet, "DoorLeftLocked");
                    this.doorLeft.name = "DoorLeftLocked";
                }
                else {
                    this.doorLeft = new createjs.Sprite(this.spriteSheet, "DoorLeft");
                    this.doorLeft.name = "DoorLeft";
                }
                if (this.design != config.Design.GRAVEYARD) {
                    this.doorLeftFrame = new createjs.Sprite(this.spriteSheet, "DoorLeftCeiling");
                    this.doorLeftFrame.y = 322;
                }
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorLeft.y = 384;
                }
                else {
                    this.doorLeft.y = 370;
                }
                this.doorLeft.x = 18;
                this.player.canTraverseLeft = !this.isDoorLeftLocked;
            }
            if (this.hasDoorRight) {
                if (this.isDoorRightLocked) {
                    this.doorRight = new createjs.Sprite(this.spriteSheet, "DoorRightLocked");
                    this.doorRight.name = "DoorRightLocked";
                }
                else {
                    this.doorRight = new createjs.Sprite(this.spriteSheet, "DoorRight");
                    this.doorRight.name = "DoorRight";
                }
                if (this.design != config.Design.GRAVEYARD) {
                    this.doorRightFrame = new createjs.Sprite(this.spriteSheet, "DoorRightCeiling");
                    this.doorRightFrame.y = 322;
                    this.doorRightFrame.x = 545;
                }
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorRight.y = 384;
                }
                else {
                    this.doorRight.y = 370;
                }
                this.doorRight.x = 476;
                //this.doorRight.Flip();
                //this.doorRightFrame.Flip();
                this.player.canTraverseRight = !this.isDoorRightLocked;
            }
            if (this.hasShop) {
                this.shopManager = managers.Game.shopManager;
            }
            this.chestManager = managers.Game.chestManager;
            this.chestManager.chestsNotSpawned = true;
            //this.playerStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            //this.messageStatus.shadow = new createjs.Shadow("#000000",0,0,10);
            //this.controllerHelp.shadow = new createjs.Shadow("#000000",0,0,10);
            //managers.Game.messageStatus = this.messageStatus;
            this.playerInfo = new managers.PlayerInfo_UI();
            this.playerInfo.PlayerLocation = new math.Vec2(30, 12);
            //this.playerInfo.x = 38;
            this.player.playerStatus.visible = false;
            if (!managers.Game.keyboardManager.playMode) {
                managers.Game.keyboardManager.ControlReset();
                managers.Game.keyboardManager.enabled = true;
                managers.Game.keyboardManager.playMode = true;
            }
            // Initialize bulletManager
            if (this.hasProjectileShooters) {
                this.bulletManager = managers.Game.bulletManager;
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            // Music Check
            switch (managers.Game.currentScene) {
                case config.Scene.GRAVEYARD_1:
                    if (!managers.Music.graveyardMusicPlaying) {
                        managers.Game.music = createjs.Sound.play("music_graveyard");
                        managers.Music.graveyardMusicPlaying = true;
                        managers.Music.hotelMusicPlaying = false;
                        managers.Music.mansionMusicPlaying = false;
                    }
                    break;
                case config.Scene.HOTEL_1:
                    if (!managers.Music.hotelMusicPlaying) {
                        managers.Game.music = createjs.Sound.play("music_hotel");
                        managers.Music.hotelMusicPlaying = true;
                        managers.Music.graveyardMusicPlaying = false;
                        managers.Music.mansionMusicPlaying = false;
                    }
                    break;
                case config.Scene.MANSION_1:
                    if (!managers.Music.mansionMusicPlaying) {
                        managers.Game.music = createjs.Sound.play("music_mansion");
                        managers.Music.mansionMusicPlaying = true;
                        managers.Music.graveyardMusicPlaying = false;
                        managers.Music.hotelMusicPlaying = false;
                    }
                    break;
            }
            managers.Game.music.loop = -1;
            managers.Game.music.volume = 0.1;
            this.player.Update();
            var collectiveCollision = false;
            this.enemies.forEach(function (e) {
                e.Update();
                //collectiveCollision = collectiveCollision || managers.Collision.Check(managers.Game.player,e);
                collectiveCollision = collectiveCollision ||
                    managers.Collision.CheckWithOffset(managers.Game.player, e, 0, -config.Bounds.ENEMY_COLLISION_OFFSET, -config.Bounds.ENEMY_COLLISION_OFFSET, -config.Bounds.ENEMY_COLLISION_OFFSET);
            });
            if (managers.Game.player.isTakingDamage && !collectiveCollision) {
                managers.Game.player.isTakingDamage = false;
            }
            this.obstacles.forEach(function (e) {
                e.CheckBound();
                _this.enemies.forEach(function (f) {
                    //if enemy is a zombie
                    if (f instanceof objects.Zombie && e instanceof objects.Barriers) {
                        e.ZombieCheckBarrierCollision(f);
                    }
                    if (e instanceof objects.Gap && managers.Collision.Check(e, f)) {
                        if (!f.isStunned && f.isFlying) {
                            return;
                        }
                        e.CheckGapDamage(f);
                    }
                    if (e instanceof objects.IceShield) {
                        e.CheckShieldDamage(f);
                    }
                    //if(!f.isFlying && e instanceof objects.SlimePuddle){
                    //    e.CheckSlowMovement(f);
                    //}
                });
                if (e instanceof objects.Gap && !_this.player.isFlying) {
                    e.CheckGapDamage(_this.player);
                }
                //if(e instanceof objects.SlimePuddle){
                //    e.CheckSlowMovement(this.player);
                //}
                if (e instanceof objects.IceShield) {
                    e.CheckShieldDamage(_this.player);
                }
            });
            this.cosmetics.forEach(function (e) {
                if (e instanceof objects.Stairs && managers.Collision.Check(managers.Game.player, e) && _this.player.victorySequence == 0) {
                    _this.player.SetTransit(_this.player.GetPosition(), e.nextScene, true);
                }
            });
            if (this.hasProjectileShooters) {
                this.bulletManager.Update();
                this.bulletManager.slimeBalls.forEach(function (bullet) {
                    _this.enemies.forEach(function (e) {
                        if (managers.Collision.Check(bullet, e) && bullet.staticNotPositional) {
                            e.GetDamage(bullet);
                        }
                    });
                });
                this.bulletManager.fireBalls.forEach(function (bullet) {
                    _this.enemies.forEach(function (e) {
                        if (managers.Collision.Check(bullet, e) && bullet.staticNotPositional) {
                            e.GetDamage(bullet);
                        }
                    });
                });
            }
            if (this.hasShop) {
                this.shopManager.Update();
            }
            this.chestManager.Update();
            if (this.AllEnemiesAreDead()) {
                this.chestManager.ShowHiddenChests(managers.Game.currentScene);
            }
            // KEY AND LOCKED DOORS
            if (this.key != undefined) {
                if (this.getChildByName("Items_Key") && managers.Collision.Check(this.player, this.key) && this.key.visible) {
                    this.player.key += 1;
                    this.key.RemoveFromPlay();
                }
            }
            // TO BE FIXED AND OPTIMIZED.
            //  The position of Phoebe is accordance to the door is off. 
            //  Thus in the beta version there should be a platform that Phoebe collides when a door is locked.
            //  One pressed with a key, it unlocks.
            //  - Kris Campbell
            if (this.player.y < config.Bounds.DOOR_EASING_TOP || this.player.y > config.Bounds.DOOR_EASING_BOTTOM) {
                if (this.player.x == config.Bounds.LEFT_BOUND + this.player.halfW) {
                    if (this.hasDoorLeft && this.isDoorLeftLocked && this.player.key > 0) {
                        this.isDoorLeftLocked = false;
                        this.player.key -= 1;
                    }
                }
                if (this.player.x == config.Bounds.RIGHT_BOUND - this.player.halfW) {
                    if (this.hasDoorRight && this.isDoorRightLocked && this.player.key > 0) {
                        this.isDoorRightLocked = false;
                        this.player.key -= 1;
                    }
                }
            }
            if (this.player.x < config.Bounds.DOOR_EASING_LEFT || this.player.x > config.Bounds.DOOR_EASING_RIGHT) {
                if (this.player.y == config.Bounds.BOTTOM_BOUND - this.player.halfH) {
                    if (this.hasDoorBot && this.isDoorBotLocked && this.player.key > 0) {
                        this.isDoorBotLocked = false;
                        this.player.key -= 1;
                    }
                }
                if (this.player.y == this.player.halfH + config.Bounds.TOP_BOUND) {
                    if (this.hasDoorTop && this.isDoorTopLocked && this.player.key > 0) {
                        this.isDoorTopLocked = false;
                        this.player.key -= 1;
                    }
                }
            }
            if (this.hasDoorLeft && !this.isDoorLeftLocked && this.doorLeft.name == "DoorLeftLocked") {
                this.removeChild(this.doorLeft);
                this.doorLeft = new createjs.Sprite(this.spriteSheet, "DoorLeft");
                this.doorLeft.name = "DoorLeft";
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorLeft.y = 384;
                }
                else {
                    this.doorLeft.y = 370;
                }
                this.doorLeft.x = 18;
                this.player.canTraverseLeft = !this.isDoorLeftLocked;
                this.addChild(this.doorLeft);
                this.setChildIndex(this.doorLeft, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorRight && !this.isDoorRightLocked && this.doorRight.name == "DoorRightLocked") {
                this.removeChild(this.doorRight);
                this.doorRight = new createjs.Sprite(this.spriteSheet, "DoorRight");
                this.doorRight.name = "DoorRight";
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorRight.y = 384;
                }
                else {
                    this.doorRight.y = 370;
                }
                this.doorRight.x = 476;
                //this.doorRight.Flip();
                this.player.canTraverseRight = !this.isDoorRightLocked;
                this.addChild(this.doorRight);
                this.setChildIndex(this.doorRight, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorTop && !this.isDoorTopLocked && this.doorTop.name == "DoorTopLocked") {
                this.removeChild(this.doorTop);
                this.doorTop = new createjs.Sprite(this.spriteSheet, "DoorTop");
                this.doorTop.name = "DoorTop";
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorTop.x = 238;
                }
                else {
                    this.doorTop.x = 224;
                }
                this.doorTop.y = 126;
                this.player.canTraverseTop = !this.isDoorTopLocked;
                this.addChild(this.doorTop);
                this.setChildIndex(this.doorTop, this.getChildIndex(this.player) - 1);
            }
            if (this.hasDoorBot && !this.isDoorBotLocked && this.doorBot.name == "DoorBottomLocked") {
                this.removeChild(this.doorBot);
                this.doorBot = new createjs.Sprite(this.spriteSheet, "DoorBottom");
                this.doorBot.name = "DoorBottom";
                if (this.design == config.Design.GRAVEYARD) {
                    this.doorBot.x = 238;
                }
                else {
                    this.doorBot.x = 224;
                }
                this.doorBot.y = 674;
                //this.doorBot.Flip();
                this.player.canTraverseBot = !this.isDoorBotLocked;
                this.addChild(this.doorBot);
                this.setChildIndex(this.doorBot, this.getChildIndex(this.player) - 1);
            }
            //this.playerStatus.text = "PLAYER HP" + this.player.hp + "/5";
            // Sets the Player Health
            this.playerInfo.PlayerHealth = this.player.hp;
            this.playerInfo.PlayerMaxHealth = this.player.maxHp;
            this.playerInfo.Money = this.player.money;
            this.playerInfo.Key = this.player.key;
            this.playerInfo.PlayerEcto = this.player.ecto;
            this.playerInfo.PlayerPower = this.player.powerUp;
            this.playerInfo.PlayerLevel = this.player.level;
        };
        PlayScene.prototype.Main = function () {
            // BACKGROUND PLACEMENT
            var _this = this;
            //floor and walls
            this.addChild(this.floor);
            this.addChild(this.ceilingAndWall);
            //this.addChild(this.wallHorizontal);
            //this.addChild(this.wallVertical);
            //door holes
            if (this.hasDoorTop) {
                this.addChild(this.doorTop);
            }
            if (this.hasDoorBot) {
                this.addChild(this.doorBot);
            }
            if (this.hasDoorLeft) {
                this.addChild(this.doorLeft);
            }
            if (this.hasDoorRight) {
                this.addChild(this.doorRight);
            }
            //ceiling
            //this.addChild(this.ceilingHorizontal);
            //this.addChild(this.ceilingVertical);
            // ITEM PLACEMENT - barriers
            this.obstacles.forEach(function (e) {
                _this.addChild(e);
            });
            // COSMETICS PLACEMENT
            this.cosmetics.forEach(function (e) {
                _this.addChild(e);
            });
            if (this.hasShop) {
                this.addChild(this.shopManager.shopKeeper);
                this.addChild(this.shopManager.shopKeeper.dialog);
                this.addChild(this.shopManager.chooseYes);
                this.addChild(this.shopManager.chooseNo);
                this.addChild(this.shopManager.indicatorYes);
                this.addChild(this.shopManager.indicatorNo);
                this.shopManager.shopItems.forEach(function (e) {
                    if (managers.Game.currentScene == e.appearingScene) {
                        _this.addChild(e);
                        e.Reset();
                        _this.addChild(e.priceTag);
                    }
                });
            }
            this.chestManager.chestItems.forEach(function (e) {
                if (managers.Game.currentScene == e.appearingScene) {
                    _this.addChild(e);
                }
            });
            // PLAYER PLACEMENT
            this.addChild(this.player.swing);
            this.addChild(this.player);
            this.addChild(this.player.weapon);
            this.player.deadPlayer.forEach(function (e) {
                _this.addChild(e);
            });
            this.chestManager.chestItems.forEach(function (e) {
                if (managers.Game.currentScene == e.appearingScene) {
                    _this.addChild(e.showItem);
                }
            });
            // ENEMY PLACEMENT
            this.enemies.forEach(function (e) {
                _this.addChild(e);
                if (e.canBeEaten) {
                    _this.addChild(e.stunIndicator);
                }
            });
            //door frames
            if (this.hasDoorTop) {
                this.addChild(this.doorTopFrame);
            }
            if (this.hasDoorBot) {
                this.addChild(this.doorBotFrame);
            }
            if (this.hasDoorLeft) {
                this.addChild(this.doorLeftFrame);
            }
            if (this.hasDoorRight) {
                this.addChild(this.doorRightFrame);
            }
            //UI PLACEMENT
            this.addChild(this.player.playerStatus);
            //this.addChild(this.messageStatus);
            //this.addChild(this.controllerHelp);
            this.addChild(this.playerInfo);
            if (this.hasProjectileShooters) {
                this.bulletManager.spiderBullets.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.spiderBulletsLeft.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.spiderBulletsRight.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.shootingFLowerBullets.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.bones.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.redBones.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.slimeBalls.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.fireBalls.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.giantWormBullets.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
                this.bulletManager.quakeEffects.forEach(function (bullet) {
                    _this.addChild(bullet);
                });
            }
        };
        PlayScene.prototype.AllEnemiesAreDead = function () {
            if (this.enemies.length > 0) {
                return this.enemies.every(function (e) {
                    return e.isDead;
                });
            }
        };
        PlayScene.prototype.AddIceShieldToScene = function (shield) {
            var length = this.obstacles.length;
            this.obstacles[length] = shield;
            this.addChild(shield);
            this.setChildIndex(shield, this.getChildIndex(shield.Host()) + 2);
        };
        PlayScene.prototype.AddEnemyToScene = function (enemyToAdd) {
            var length = this.enemies.length;
            this.enemies[length] = enemyToAdd;
            this.addChild(enemyToAdd);
            this.setChildIndex(enemyToAdd, this.getChildIndex(this.player) + 1);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map