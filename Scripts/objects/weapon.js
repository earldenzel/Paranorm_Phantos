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
            var _this = _super.call(this, managers.Game.phoebe_TextureAtlas, "Phoebe_Walk_Back1") || this;
            _this.images = ["Phoebe_Attack_Back", "Phoebe_Attack_Front", "Phoebe_Attack_Left", "Phoebe_Attack_Right"];
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
            if (this.currentAnimation != this.images[managers.Game.player.direction]) {
                this.gotoAndPlay(this.images[managers.Game.player.direction]);
            }
            this.rotation = 0;
            switch (managers.Game.player.direction) {
                case config.Direction.UP:
                    this.x = managers.Game.player.x;
                    this.y = managers.Game.player.y - managers.Game.player.halfH;
                    break;
                case config.Direction.DOWN:
                    this.x = managers.Game.player.x;
                    this.y = managers.Game.player.y + managers.Game.player.halfH;
                    break;
                case config.Direction.LEFT:
                    this.x = managers.Game.player.x - managers.Game.player.halfW;
                    this.y = managers.Game.player.y;
                    break;
                case config.Direction.RIGHT:
                    this.x = managers.Game.player.x + managers.Game.player.halfW;
                    this.y = managers.Game.player.y;
                    break;
            }
            this.CheckBound();
        };
        // Resets the position of the object
        Weapon.prototype.Reset = function () {
        };
        // Collision Detection 
        Weapon.prototype.CheckBound = function () {
            // top bound - TODO: directions            
            switch (managers.Game.player.direction) {
                case config.Direction.UP:
                    if (this.y <= managers.Game.player.y - managers.Game.player.height + managers.Game.player.halfH) {
                        this.y = managers.Game.player.y - managers.Game.player.height + managers.Game.player.halfH;
                    }
                    break;
                case config.Direction.DOWN:
                    if (this.y >= managers.Game.player.y + managers.Game.player.halfH) {
                        this.y = managers.Game.player.y + managers.Game.player.halfH;
                    }
                    break;
                case config.Direction.LEFT:
                    if (this.x <= managers.Game.player.x - managers.Game.player.width + managers.Game.player.halfW) {
                        this.x = managers.Game.player.x - managers.Game.player.width + managers.Game.player.halfW;
                    }
                    break;
                case config.Direction.RIGHT:
                    if (this.x <= managers.Game.player.x + managers.Game.player.halfW) {
                        this.x = managers.Game.player.x + managers.Game.player.halfW;
                    }
                    break;
            }
        };
        Weapon.prototype.Attack = function () {
            var _this = this;
            console.log("Attack initiated");
            this.visible = true;
            managers.Game.player.attackSequence = setInterval(function () {
                switch (managers.Game.player.direction) {
                    case config.Direction.UP:
                        _this.x = _this.x;
                        _this.y -= 20;
                        break;
                    case config.Direction.DOWN:
                        _this.x = _this.x;
                        _this.y += 20;
                        break;
                    case config.Direction.LEFT:
                        _this.x -= 20;
                        _this.y = _this.y;
                        break;
                    case config.Direction.RIGHT:
                        _this.x += 20;
                        _this.y = _this.y;
                        break;
                }
            }, 50);
        };
        return Weapon;
    }(objects.GameObject));
    objects.Weapon = Weapon;
})(objects || (objects = {}));
//# sourceMappingURL=weapon.js.map