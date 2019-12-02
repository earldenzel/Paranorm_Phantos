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
    var SlimePuddle = /** @class */ (function (_super) {
        __extends(SlimePuddle, _super);
        // Constructor
        function SlimePuddle(imageNumber, position) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "SlimePuddle1") || this;
            //private playerSlowdown: boolean = false;
            //private enemySlowdown: boolean = false;
            _this.types = [
                "SlimePuddle1",
                "SlimePuddle2",
                "SlimePuddle3",
                "SlimePuddle4"
            ];
            // Change the animation right away
            _this.gotoAndPlay(_this.types[imageNumber]);
            _this.position = position;
            _this.Start();
            return _this;
        }
        SlimePuddle.prototype.Start = function () {
            this.SetPosition(this.position);
        };
        SlimePuddle.prototype.Update = function () { };
        SlimePuddle.prototype.Reset = function () { };
        SlimePuddle.prototype.Move = function () { };
        SlimePuddle.prototype.CheckBound = function () {
        };
        return SlimePuddle;
    }(objects.GameObject));
    objects.SlimePuddle = SlimePuddle;
})(objects || (objects = {}));
//# sourceMappingURL=slimepuddle.js.map