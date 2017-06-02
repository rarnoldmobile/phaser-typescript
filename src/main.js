/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    SimpleGame.prototype.preload = function () {
        console.log("Preloading content here again");
        var testM = new TestManager();
        console.log(testM.whatever());
    };
    SimpleGame.prototype.create = function () {
    };
    return SimpleGame;
}());
window.onload = function () {
    console.log("Document load called");
    var game = new SimpleGame();
};
