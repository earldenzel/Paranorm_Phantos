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
    var TitleBackground = /** @class */ (function (_super) {
        __extends(TitleBackground, _super);
        // Variables
        // Constructor
        function TitleBackground(assetManager) {
            var _this = _super.call(this, assetManager.getResult("title_background")) || this;
            _this.Start();
            return _this;
        }
        // Functions 
        // Initializing our variables with default values
        TitleBackground.prototype.Start = function () {
            this.scaleX = 2.3;
            this.scaleY = 2.3;
        };
        // Updated 60 times per second (60FPS)
        TitleBackground.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        // Resets the position of the object
        TitleBackground.prototype.Reset = function () {
        };
        // Move the object
        TitleBackground.prototype.Move = function () {
        };
        // Collision Detection 
        TitleBackground.prototype.CheckBound = function () {
        };
        return TitleBackground;
    }(createjs.Bitmap));
    objects.TitleBackground = TitleBackground;
})(objects || (objects = {}));
//# sourceMappingURL=title_background.js.map