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
    var ShowItem = /** @class */ (function (_super) {
        __extends(ShowItem, _super);
        // Constructor
        function ShowItem(imageString) {
            var _this = _super.call(this, managers.Game.item_TextureAtlas, imageString) || this;
            _this.name = imageString;
            _this.Init();
            return _this;
        }
        // Methods 
        ShowItem.prototype.Init = function () {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;
        };
        ShowItem.prototype.Start = function () {
            this.visible = false;
        };
        ShowItem.prototype.Update = function () {
            var _this = this;
            if (this.visible) {
                this.x = managers.Game.player.x + managers.Game.player.halfW;
                this.y = managers.Game.player.y - managers.Game.player.halfH;
                setTimeout(function () {
                    _this.visible = false;
                    managers.Game.currentStage.removeChild(_this);
                }, 650);
            }
        };
        ShowItem.prototype.Reset = function () { };
        ShowItem.prototype.Move = function () { };
        ShowItem.prototype.CheckBound = function () { };
        return ShowItem;
    }(createjs.Sprite));
    objects.ShowItem = ShowItem;
})(objects || (objects = {}));
//# sourceMappingURL=showitem.js.map