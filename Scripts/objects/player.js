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
    ;
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            _this.Start();
            _this.Move();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            // set the initial position
            this.y = 700;
            this.x = 320;
            this.playerController = { "W": false, "A": false, "S": false, "D": false };
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // We reference the stage object and get mouse position
            // this.x = objects.Game.stage.mouseX;
            // this.y = objects.Game.stage.mouseY;
            // this is evetually replaced with keyboard input
            this.AddEventListeners();
            // Maybe xbox controller
        };
        Player.prototype.CheckBound = function () {
            // right bound
            if (this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }
            // left bound
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
        };
        Player.prototype.AddEventListeners = function () {
            var _this = this;
            document.addEventListener('keydown', function (e) {
                if (e.key === "w" || e.key === "ArrowUp") {
                    if (!_this.playerController.W) {
                        //console.log('UpKeys: Hold');
                        _this.playerController.W = true;
                        _this.goingUpInterval = setInterval(function () {
                            _this.y -= 1;
                        }, 10);
                    }
                }
                if (e.key === "a" || e.key === "ArrowLeft") {
                    if (!_this.playerController.A) {
                        // console.log('LeftKeys: Hold');
                        _this.playerController.A = true;
                        _this.goingLeftInterval = setInterval(function () {
                            _this.x -= 1;
                        }, 10);
                    }
                }
                if (e.key === "s" || e.key === "ArrowDown") {
                    if (!_this.playerController.S) {
                        // console.log('DownKeys: Hold');
                        _this.playerController.S = true;
                        _this.goingDownInterval = setInterval(function () {
                            _this.y += 1;
                        }, 10);
                    }
                }
                if (e.key === "d" || e.key === "ArrowRight") {
                    if (!_this.playerController.D) {
                        // console.log('RightKeys: Hold');
                        _this.playerController.D = true;
                        _this.goingRightInterval = setInterval(function () {
                            _this.x += 1;
                        }, 10);
                    }
                }
            });
            // when keyup
            document.addEventListener('keyup', function (e) {
                if (e.key === "w" || e.key === "ArrowUp") {
                    if (_this.playerController.W) {
                        // console.log('UpKeys: Released');
                        _this.playerController.W = false;
                        clearInterval(_this.goingUpInterval);
                    }
                }
                if (e.key === "a" || e.key === "ArrowLeft") {
                    if (_this.playerController.A) {
                        // console.log('LeftKeys: Released');
                        _this.playerController.A = false;
                        clearInterval(_this.goingLeftInterval);
                    }
                }
                if (e.key === "s" || e.key === "ArrowDown") {
                    if (_this.playerController.S) {
                        // console.log('DownKeys: Released');
                        _this.playerController.S = false;
                        clearInterval(_this.goingDownInterval);
                    }
                }
                if (e.key === "d" || e.key === "ArrowRight") {
                    if (_this.playerController.D) {
                        // console.log('RightKeys: Released');
                        _this.playerController.D = false;
                        clearInterval(_this.goingRightInterval);
                    }
                }
            });
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map