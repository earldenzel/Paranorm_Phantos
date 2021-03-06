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
    var Stairs = /** @class */ (function (_super) {
        __extends(Stairs, _super);
        // Constructor
        function Stairs(nextScene, design, up) {
            var _this = this;
            switch (design) {
                case config.Design.GRAVEYARD:
                    if (up) {
                        _this = _super.call(this, managers.Game.graveyard_TextureAtlas, "Upstairs") || this;
                    }
                    else {
                        _this = _super.call(this, managers.Game.graveyard_TextureAtlas, "Downstairs") || this;
                    }
                    break;
                case config.Design.HOTEL:
                    if (up) {
                        _this = _super.call(this, managers.Game.hotel_TextureAtlas, "Upstairs") || this;
                    }
                    else {
                        _this = _super.call(this, managers.Game.hotel_TextureAtlas, "Downstairs") || this;
                    }
                    break;
                case config.Design.MANSION:
                    if (up) {
                        _this = _super.call(this, managers.Game.mansion_TextureAtlas, "Upstairs") || this;
                    }
                    else {
                        _this = _super.call(this, managers.Game.mansion_TextureAtlas, "Downstairs") || this;
                    }
                    break;
            }
            _this.nextScene = nextScene;
            _this.Start();
            return _this;
        }
        Stairs.prototype.Start = function () {
        };
        Stairs.prototype.Update = function () {
        };
        Stairs.prototype.Reset = function () { };
        Stairs.prototype.Move = function () { };
        Stairs.prototype.CheckBound = function () { };
        return Stairs;
    }(objects.GameObject));
    objects.Stairs = Stairs;
})(objects || (objects = {}));
//# sourceMappingURL=stairs.js.map