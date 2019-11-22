var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        // Constructor
        function Keyboard() {
            this.attackEnabled = true;
            this.enabled = true;
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Methods
        Keyboard.prototype.onKeyDown = function (event) {
            if (this.enabled) {
                if (this.playMode) {
                    switch (event.keyCode) {
                        case config.Keys.W:
                        case config.Keys.UP_ARROW:
                            this.moveUp = true;
                            break;
                        case config.Keys.A:
                        case config.Keys.LEFT_ARROW:
                            this.moveLeft = true;
                            break;
                        case config.Keys.S:
                        case config.Keys.DOWN_ARROW:
                            this.moveDown = true;
                            break;
                        case config.Keys.D:
                        case config.Keys.RIGHT_ARROW:
                            this.moveRight = true;
                            break;
                        case config.Keys.J:
                        case config.Keys.Z:
                            if (this.attackEnabled) {
                                this.attacking = true;
                            }
                            break;
                        case config.Keys.X:
                        case config.Keys.K:
                            this.biting = true;
                            break;
                        case config.Keys.L:
                        case config.Keys.C:
                            this.running = true;
                            break;
                        case config.Keys.V:
                        case config.Keys.SEMICOLON:
                            this.powers = true;
                            break;
                        case config.Keys.ENTER:
                            this.pause = !this.pause;
                            break;
                        case config.Keys.ESCAPE:
                            break;
                    }
                }
                else {
                    switch (event.keyCode) {
                        case config.Keys.J:
                        case config.Keys.Z:
                        case config.Keys.ENTER:
                            if (this.attackEnabled) {
                                this.attacking = true;
                            }
                            break;
                        case config.Keys.X:
                        case config.Keys.K:
                        case config.Keys.ESCAPE:
                            this.biting = true;
                            break;
                    }
                }
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            if (this.enabled) {
                if (this.playMode) {
                    switch (event.keyCode) {
                        case config.Keys.W:
                        case config.Keys.UP_ARROW:
                            this.moveUp = false;
                            break;
                        case config.Keys.A:
                        case config.Keys.LEFT_ARROW:
                            this.moveLeft = false;
                            break;
                        case config.Keys.S:
                        case config.Keys.DOWN_ARROW:
                            this.moveDown = false;
                            break;
                        case config.Keys.D:
                        case config.Keys.RIGHT_ARROW:
                            this.moveRight = false;
                            break;
                        case config.Keys.J:
                        case config.Keys.Z:
                            if (this.attackEnabled) {
                                this.attacking = false;
                            }
                            break;
                        case config.Keys.X:
                        case config.Keys.K:
                            this.biting = false;
                            break;
                        case config.Keys.L:
                        case config.Keys.C:
                            this.running = false;
                            break;
                        case config.Keys.V:
                        case config.Keys.SEMICOLON:
                            this.powers = false;
                            break;
                        case config.Keys.ENTER:
                            this.pause = !this.pause;
                            break;
                        case config.Keys.ESCAPE:
                            break;
                    }
                }
                else {
                    switch (event.keyCode) {
                        case config.Keys.J:
                        case config.Keys.Z:
                        case config.Keys.ENTER:
                            if (this.attackEnabled) {
                                this.attacking = false;
                            }
                            break;
                        case config.Keys.X:
                        case config.Keys.K:
                        case config.Keys.ESCAPE:
                            this.biting = false;
                            break;
                    }
                }
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map