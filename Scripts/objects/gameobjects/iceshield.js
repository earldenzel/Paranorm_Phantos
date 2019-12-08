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
var objects;
(function (objects) {
    var IceShield = /** @class */ (function (_super) {
        __extends(IceShield, _super);
        // Constructor
        function IceShield(host) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "IceAttackStart") || this;
            // Variables
            _this.playerNotEnemy = false;
            _this.host = host;
            _this.attackPower = 2;
            _this.Start();
            return _this;
        }
        // Getter
        IceShield.prototype.Host = function () {
            return this.host;
        };
        // Methods
        IceShield.prototype.Start = function () {
            this.Reset();
        };
        IceShield.prototype.Update = function () {
            this.x = this.host.x;
            this.y = this.host.y;
            if (this.isActivated) {
                this.visible = true;
                if (this.currentAnimation == "IceAttackFinish") {
                    this.SwitchAnimation("IceAttackStart");
                }
                if (this.currentAnimation == "IceAttackStart" && this.currentAnimationFrame > 7) {
                    this.SwitchAnimation("IceAttackIdle");
                    this.width = 128;
                    this.height = 122;
                }
            }
            else {
                if (this.currentAnimation != "IceAttackFinish") {
                    this.SwitchAnimation("IceAttackFinish");
                    this.width = -86;
                    this.height = -52;
                }
                if (this.currentAnimation == "IceAttackFinish" && this.currentAnimationFrame > 7) {
                    this.Reset();
                }
            }
        };
        IceShield.prototype.Reset = function () {
            this.visible = false;
            this.isActivated = false;
        };
        IceShield.prototype.SwitchAnimation = function (newAnimation) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        };
        IceShield.prototype.Main = function () { };
        IceShield.prototype.CheckBounds = function () { };
        IceShield.prototype.CheckShieldDamage = function (entity) {
            var _this = this;
            if (this.x >= entity.x + entity.width || this.x + this.width <= entity.x || this.y >= entity.y + entity.height || this.y + this.height <= entity.y) {
                //console.log(this.width, this.height);
            }
            else {
                if (entity.hp > 0) {
                    if (entity instanceof objects.Player && !this.playerNotEnemy) {
                        //player will be hit by ice from ghostwoman's attack every 1s
                        if (managers.Game.player.playerIceDamageSequence == 0) {
                            managers.Game.player.playerIceDamageSequence = setTimeout(function () {
                                entity.GetDamage(_this);
                                managers.Game.player.playerIceDamageSequence = 0;
                            }, 1000);
                        }
                    }
                    else if (entity instanceof objects.Enemy && this.playerNotEnemy) {
                        entity.GetDamage(this.Host());
                    }
                }
            }
        };
        return IceShield;
    }(objects.GameObject));
    objects.IceShield = IceShield;
})(objects || (objects = {}));
//# sourceMappingURL=iceshield.js.map