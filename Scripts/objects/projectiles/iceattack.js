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
    var IceAttack = /** @class */ (function (_super) {
        __extends(IceAttack, _super);
        // Constructor
        function IceAttack() {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "IceAttackStart", 2) || this;
            _this.Start();
            return _this;
        }
        // Methods
        IceAttack.prototype.Start = function () {
            this.Reset();
        };
        IceAttack.prototype.Update = function () {
            if (this.isActivated) {
                if (this.currentAnimation != "IceAttackStart") {
                    this.visible = true;
                    this.SwitchAnimation("IceAttackStart");
                }
                if (this.currentAnimation == "IceAttackStart" && this.currentAnimationFrame > 7) {
                    this.SwitchAnimation("IceAttackIdle");
                }
            }
            else {
                if (this.currentAnimation != "IceAttackFinish") {
                    this.SwitchAnimation("IceAttackFinish");
                }
                if (this.currentAnimation == "IceAttackFinish" && this.currentAnimationFrame > 7) {
                    this.visible = false;
                    this.Reset();
                }
            }
            _super.prototype.Update.call(this);
        };
        IceAttack.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        IceAttack.prototype.SwitchAnimation = function (newAnimation) {
            if (this.currentAnimation != newAnimation) {
                this.gotoAndPlay(newAnimation);
            }
        };
        IceAttack.prototype.Main = function () { };
        IceAttack.prototype.CheckBounds = function () { };
        return IceAttack;
    }(objects.Bullet));
    objects.IceAttack = IceAttack;
})(objects || (objects = {}));
//# sourceMappingURL=iceattack.js.map