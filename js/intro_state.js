var intro = function(game) {
}

intro.prototype = {
	preload: function() 
	{
		console.log("starting intro state");
		game.load.image('logo', 'img/logo.png');
	},

	create: function() 
	{
		var intro_screen = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		intro_screen.anchor.setTo(0.5, 0.5);
		intro_screen.alpha = 0;

		// this function does a fade tween to show and disappear the game studio logo
		game.add.tween(intro_screen).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true, 0, 0, true);

		// this is a delay function to toggle the nextstate function; so, we go to the mainment state
		game.time.events.add(Phaser.Timer.SECOND * 9, this.nextstate, this);
	},

	nextstate : function () {
		this.game.state.start("MainMenu");
	}
}