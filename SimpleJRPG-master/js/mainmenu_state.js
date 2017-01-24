var mainmenu = function(game) {
}

var button;

mainmenu.prototype = {
	preload: function() 
	{
		console.log("starting mainmenu state");
		game.load.image('mainmenu_background', 'img/background.png');
		game.load.spritesheet('mainmenu_buttons', 'img/mainmenu_buttons.png', 220, 76);
	},

	create: function() 
	{
		game.add.sprite(0,0, 'mainmenu_background');
		button = game.add.button(game.world.centerX , game.world.centerY + 100, 'mainmenu_buttons', this.startgame, this, 1, 0, 1);
		button = game.add.button(game.world.centerX , game.world.centerY + 200, 'mainmenu_buttons', this.startgame, this, 3, 2, 3);
	},

	startgame: function()
	{
		// start game
		//this.game.state.start("LevelOne");
	},

	startcredits : function()
	{
		// starts credit
		//this.game.state.start("Credits");
	}
}