var mainmenu = function(game) {
}

mainmenu.prototype = {
	preload: function() 
	{
		console.log("starting mainmenu state");
		game.load.image('mainmenu_background', 'img/background.png');
	},

	create: function() 
	{
		game.add.sprite(0,0, 'mainmenu_background');
	}
}