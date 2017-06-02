/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />

class SimpleGame {

    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content',
            {preload: this.preload, create: this.create});
    }

    preload() {
        console.log("Preloading content here oh god");
        let testM = new TestManager();
        console.log(testM.whatever());
    }

    create() {

    }
}

window.onload = () => {
    console.log("Document load called");
    let game = new SimpleGame();
}