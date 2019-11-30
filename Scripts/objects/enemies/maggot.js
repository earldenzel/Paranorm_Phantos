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
    var Maggot = /** @class */ (function (_super) {
        __extends(Maggot, _super);
        // Constructor
        function Maggot(moveSpeed, rightDirection, downDirection, spawnNumber) {
            var _this = _super.call(this, managers.Game.enemies_TextureAtlas, "Maggot_WalkForward") || this;
            _this.Start();
            _this.hp = 4;
            _this.attackPower = 1;
            _this.moveSpeed = moveSpeed;
            _this.rightDirection = rightDirection;
            _this.downDirection = downDirection;
            _this.spawnNumber = spawnNumber;
            _this.knockback = 1;
            _this.canBeEaten = false;
            _this.bounty = 20;
            _this.isFlying = false;
            _this.expGain = 8;
            _this.walk = ["Maggot_WalkForward", "Maggot_WalkForward", "Maggot_WalkSide", "Maggot_WalkSide"];
            _this.direction = config.Direction.DOWN;
            _this.SpawnCreation();
            return _this;
        }
        // Methods
        Maggot.prototype.Start = function () {
            this.y = 400;
            this.x = 320;
        };
        Maggot.prototype.Update = function () {
            if (!this.isDead) {
                this.SwitchAnimation(this.walk[this.direction]);
            }
            else {
                if (this.currentAnimation == "Maggot_Explode" && this.currentAnimationFrame > 3) {
                    if (this.visible) {
                        this.ActivateSpawns();
                    }
                    managers.Game.stage.removeChild(this);
                    this.visible = false;
                }
                this.SwitchAnimation("Maggot_Explode");
            }
            _super.prototype.Update.call(this);
        };
        Maggot.prototype.Reset = function () { };
        Maggot.prototype.Move = function () {
            var ticker = createjs.Ticker.getTicks();
            if (ticker % 300 > 150) {
                this.x += this.rightDirection ? this.moveSpeed : -this.moveSpeed;
                this.direction = config.Direction.LEFT;
            }
            else {
                this.y += this.downDirection ? this.moveSpeed : -this.moveSpeed;
                this.direction = config.Direction.DOWN;
            }
            if (this.x > managers.Game.gameWidth && this.rightDirection) {
                this.rightDirection = false;
            }
            else if (this.x < 0 && !this.rightDirection) {
                this.rightDirection = true;
            }
            if (this.y > managers.Game.gameHeight && this.downDirection) {
                this.downDirection = false;
            }
            else if (this.y < 0 && !this.downDirection) {
                this.downDirection = true;
            }
        };
        Maggot.prototype.RemoveFromPlay = function (bounty) {
            this.isDead = true;
            managers.Game.player.GainEcto();
            if (bounty > 0) {
                managers.Game.SFX = createjs.Sound.play("anyDefeated");
                managers.Game.SFX.volume = 0.2;
                managers.Game.player.GainDollars(bounty);
            }
            this.stunIndicator.visible = false;
        };
        Maggot.prototype.SpawnCreation = function () {
            this.spawns = new Array();
            for (var i = 0; i < this.spawnNumber; i++) {
                var smallMoveSpeed = this.moveSpeed + i;
                var smallRightDir = (i % 2 == 0);
                var smallDownDir = (i % 4 == 0 || i % 3 == 0);
                this.spawns[i] = new objects.MaggotSmall(smallMoveSpeed, smallRightDir, smallDownDir);
            }
            console.log(this.spawns);
        };
        Maggot.prototype.ActivateSpawns = function () {
            for (var i = 0; i < this.spawnNumber; i++) {
                this.spawns[i].x = this.x;
                this.spawns[i].y = this.y;
                managers.Game.currentStage.AddEnemyToScene(this.spawns[i]);
                //this.spawns[i].Update();
                console.log("Created Maggot ", i);
            }
        };
        return Maggot;
    }(objects.Enemy));
    objects.Maggot = Maggot;
})(objects || (objects = {}));
//# sourceMappingURL=maggot.js.map