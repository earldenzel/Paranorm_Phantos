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
    var Weapon = /** @class */ (function (_super) {
        __extends(Weapon, _super);
        // Constructor
        function Weapon() {
            var _this = _super.call(this, managers.Game.phoebe_TextureAtlas, "Phoebe_Attack_Back") || this;
            _this.images = ["Phoebe_Attack_Back", "Phoebe_Attack_Front", "Phoebe_Attack_Left", "Phoebe_Attack_Right"];
            _this.soulImages = ["PhoebeSoul_Attack_Back", "PhoebeSoul_Attack_Front", "PhoebeSoul_Attack_Left", "PhoebeSoul_Attack_Right"];
            //this.animationEnd = [15, 12, 18, 28];
            _this.animationEnd = [8, 20, 9, 27];
            _this.Start();
            return _this;
        }
        // Methods
        // Initializing our variables with default values
        Weapon.prototype.Start = function () {
            this.visible = false;
        };
        // Updated 60 times per second (60FPS)
        Weapon.prototype.Update = function () {
            this.x = managers.Game.player.x;
            this.y = managers.Game.player.y;
            if (!managers.Game.player.activateSoul) {
                if (this.currentAnimationFrame > 2.8) {
                    this.visible = false;
                    managers.Game.player.attackSequence = 0;
                    managers.Game.player.alpha = 1;
                    //console.log("Attack ended");
                }
            }
            else {
                if (this.currentAnimationFrame > 1.4) {
                    this.visible = false;
                    managers.Game.player.attackSequence = 0;
                    managers.Game.player.alpha = 1;
                    //console.log("Attack ended");
                }
            }
        };
        // Resets the position of the object
        Weapon.prototype.Reset = function () {
        };
        // Collision Detection 
        Weapon.prototype.CheckBound = function () {
        };
        Weapon.prototype.Attack = function () {
            this.visible = true;
            this.direction = managers.Game.player.direction;
            this.currentAnimationFrame = 0;
            managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
            managers.Game.SFX.volume = 0.2;
            if (this.currentAnimation != this.images[managers.Game.player.direction]) {
                this.gotoAndPlay(this.images[managers.Game.player.direction]);
            }
            this.Delay();
        };
        Weapon.prototype.SoulAttack = function () {
            console.log("Soul Attack initiated");
            this.visible = true;
            this.currentAnimationFrame = 0;
            managers.Game.SFX = createjs.Sound.play("phoebeDash-Swing");
            managers.Game.SFX.volume = 0.2;
            if (this.currentAnimation != this.soulImages[managers.Game.player.direction]) {
                this.gotoAndPlay(this.soulImages[managers.Game.player.direction]);
            }
            this.Delay();
        };
        Weapon.prototype.Delay = function () {
            //console.log("Delay initiated");
            if (!managers.Game.player.activateSoul) {
                setTimeout(function () {
                    managers.Game.player.delaySequence = 0;
                    //console.log("Delay ended");
                }, managers.Game.player.playerAttackDelay);
            }
            else {
                setTimeout(function () {
                    managers.Game.player.delaySequence = 0;
                    //console.log("Delay ended");
                }, managers.Game.player.soulAttackDelay);
            }
        };
        return Weapon;
    }(objects.GameObject));
    objects.Weapon = Weapon;
})(objects || (objects = {}));
//# sourceMappingURL=weapon.js.map