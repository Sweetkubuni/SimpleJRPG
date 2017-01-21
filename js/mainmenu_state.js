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
		button = game.add.button(game.world.centerX - 20, game.world.centerY - 50, 'mainmenu_buttons', this.startgame, this, 1, 0, 1);
	},

	startgame: function()
	{
		// start game
	},

	startcredits : function()
	{
		// starts credit
	}
}