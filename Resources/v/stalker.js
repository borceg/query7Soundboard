// this sets the background color of the master UIView (when there are no windows/tab groups on it)

var win = Titanium.UI.currentWindow;

var data = [

	{title: 'We are the darkness', file: 'sound_stalker_atkg_2.mp3'},
	{title: 'We shall obliterate them', file: 'sound_stalker_atkg_1.mp3'},
	{title: 'From the shadows I come', file: 'sound_stalker_ready_1.mp3'},
	{title: 'We cannot be stopped', file: 'sound_stalker_victory_2.mp3'},
	{title: 'Fear is an illusion', file: 'sound_stalker_what_2.mp3'},
	{title: 'I will comply', file: 'sound_stalker_yes_1.mp3'},
	{title: 'Clever', file: 'sound_stalker_yes_3.mp3'},
	

];


var tableView = Titanium.UI.createTableView({

	data: data,
	headerTitle: 'Stalker',

});


tableView.addEventListener('click', function (e){


	var sound = Titanium.Media.createSound();
	
	sound.url = '../mp3/' + e.rowData.file;
	
	Titanium.API.info('mp3/3' + e.rowData.file);
	sound.play();


});


win.add(tableView);

