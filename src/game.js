import Main from 'states/main';
import Boot from 'states/boot';

class Game extends Phaser.Game {
	assets_loaded: boolean;

	constructor() {
		super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

		this.state.add('boot', Boot, false);
		this.state.add('main', Main, false);
		this.state.start('boot');
	}
}