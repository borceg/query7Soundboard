// this sets the background color of the master UIView (when there are no windows/tab groups on it)

var win = Titanium.UI.currentWindow;

var data = [

	{title: 'Blades of justice', file: 'sound_zealot_atk_1.mp3'},
	{title: 'It must be done', file: 'sound_zealot_atk_2.mp3'},
	{title: 'None shall stand', file: 'sound_zealot_atk_3.mp3'},
	{title: 'My life for Aiur', file: 'sound_zealot_ready_1.mp3'},
	{title: 'Command me', file: 'sound_zealot_what_2.mp3'},
	{title: 'For Artanis', file: 'sound_zealot_yesg_2.mp3'},
	
	


];


var tableView = Titanium.UI.createTableView({

	data: data,
	headerTitle: 'Zealot',

});


tableView.addEventListener('click', function (e){


	var sound = Titanium.Media.createSound();
	
	sound.url = '../mp3/' + e.rowData.file;
	
	Titanium.API.info('mp3/3' + e.rowData.file);
	sound.play();


});


win.add(tableView);

