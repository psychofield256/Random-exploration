/// <reference path='../phaser/phaser.d.ts' />

import * as Phaser from 'phaser'

class Boot extends Phaser.State {
	preload() {
		this.load.image("logo", "assets/logo.png");
	}

	create() {
		// multitouch support desactivated
		this.input.maxPointers = 1;
		// auto-pause
		this.stage.disableVisibilityChange = true;
		if (this.game.device.desktop) {
			this.scale.pageAlignHorizontally = true;
		} else {
			// mobile specific
		}

		this.game.state.start('preload', )
	}
}