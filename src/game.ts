/// <reference path='phaser/phaser.d.ts' />

import * as Phaser from 'phaser'


module RandomExplo {
	class Game extends Phaser.Game {
		constructor() {
			super(800, 600, Phaser.AUTO, 'game', null);

			this.state.add('boot', Boot, false);
		}
	}
}
