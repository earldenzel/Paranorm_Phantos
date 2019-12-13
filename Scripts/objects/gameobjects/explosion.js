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
    var ExplodeTypes;
    (function (ExplodeTypes) {
        ExplodeTypes[ExplodeTypes["DEFAULT"] = 0] = "DEFAULT";
        ExplodeTypes[ExplodeTypes["SKELETON"] = 1] = "SKELETON";
        ExplodeTypes[ExplodeTypes["MAGGOT"] = 2] = "MAGGOT";
        ExplodeTypes[ExplodeTypes["ZOMBIE"] = 3] = "ZOMBIE";
        ExplodeTypes[ExplodeTypes["GHOST"] = 4] = "GHOST";
        ExplodeTypes[ExplodeTypes["GHOSTSHADOW"] = 5] = "GHOSTSHADOW";
        ExplodeTypes[ExplodeTypes["GHOSTSLIME"] = 6] = "GHOSTSLIME";
        ExplodeTypes[ExplodeTypes["GHOSTWOMAN"] = 7] = "GHOSTWOMAN";
        ExplodeTypes[ExplodeTypes["UNDERTAKER"] = 8] = "UNDERTAKER";
        ExplodeTypes[ExplodeTypes["FIRE"] = 9] = "FIRE";
    })(ExplodeTypes = objects.ExplodeTypes || (objects.ExplodeTypes = {}));
    var Explosion = /** @class */ (function (_super) {
        __extends(Explosion, _super);
        // Constructor
        function Explosion(type, position, repeatCount, sfx) {
            var _this = this;
            switch (type) {
                case ExplodeTypes.DEFAULT:
                    _this = _super.call(this, managers.Game.phoebe_TextureAtlas, "Phoebe_Explosion") || this;
                    break;
                case ExplodeTypes.FIRE:
                    _this = _super.call(this, managers.Game.titleUIMap_TextureAtlas, "Effects_FlameHit") || this;
                    break;
                case ExplodeTypes.SKELETON:
                    _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Skeleton_Explode") || this;
                    break;
                case ExplodeTypes.MAGGOT:
                    _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Maggot_Explode") || this;
                    break;
                case ExplodeTypes.ZOMBIE:
                    _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Zombie_Explode") || this;
                    break;
                case ExplodeTypes.GHOST:
                    _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Ghost_Explode") || this;
                    break;
                case ExplodeTypes.GHOSTSHADOW:
                    _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostShadow_Explode") || this;
                    break;
                case ExplodeTypes.GHOSTSLIME:
                    _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostSlime_Explosion") || this;
                    break;
                case ExplodeTypes.GHOSTWOMAN:
                    _this = _super.call(this, managers.Game.enemies_TextureAtlas, "GhostWoman_Explode") || this;
                    break;
                case ExplodeTypes.UNDERTAKER:
                    _this = _super.call(this, managers.Game.bosses_TextureAtlas, "Boss1_Explode") || this;
                    break;
            }
            _this.x = position.x;
            _this.y = position.y;
            _this.type = type;
            if (sfx != null) {
                _this.sfx = sfx;
            }
            else {
                _this.sfx = true;
            }
            _this.repeatCount = repeatCount;
            _this.Start();
            return _this;
        }
        // Methods
        Explosion.prototype.Start = function () {
            if (this.sfx) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.4;
            }
            this.on("animationend", this.animationEnded.bind(this), false);
        };
        Explosion.prototype.Update = function () {
        };
        Explosion.prototype.Reset = function () { };
        Explosion.prototype.Move = function () { };
        Explosion.prototype.CheckBound = function () { };
        Explosion.prototype.animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.stage.removeChild(this);
            this.visible = false;
            if (this.repeatCount > 0) {
                console.log("REPEAT");
                this.ExplosionB = new objects.Explosion(this.type, this.GetPosition(), this.repeatCount - 1);
                managers.Game.stage.addChild(this.ExplosionB);
                this.repeatCount -= 1;
            }
        };
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map