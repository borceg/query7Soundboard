// this sets the background color of the master UIView (when there are no windows/tab groups on it)

var win = Titanium.UI.currentWindow;

var data = [

	{title: 'For the ancients', file: 'sound_immortal_atk_1.mp3'},
	{title: 'The cycle is unchanging', file: 'sound_immortal_death_1.mp3'},
	{title: 'The enemy closes', file: 'sound_immortal_help_1.mp3'},
	{title: 'I return to serve', file: 'sound_immortal_ready_1.mp3'},
	{title: 'The battle is ours', file: 'sound_immortal_victory_2.mp3'},
	{title: 'Our cannons shall sing', file: 'sound_immortal_yesg1.mp3'},

];


var tableView = Titanium.UI.createTableView({

	data: data,
	headerTitle: 'Immortal',

});


tableView.addEventListener('click', function (e){


	var sound = Titanium.Media.createSound();
	
	sound.url = '../mp3/' + e.rowData.file;
	
	Titanium.API.info('mp3/3' + e.rowData.file);
	sound.play();


});


win.add(tableView);

