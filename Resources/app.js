var data = [

	{title: 'Immortal', view: 'v/immortal.js'},
	{title: 'Stalker', view: 'v/stalker.js'},
	{title: 'Zealot', view: 'v/zealot.js'},

];



var window = Titanium.UI.createWindow({

	title: 'Query7 SC2 Soundboard',
	backgroundColor:'#000',
	exitOnClose: true,

});


var tableView = Titanium.UI.createTableView({
	data: data,
	headerTitle: 'Query7 SC2 SoundBoard',
	});

window.add(tableView);

	
tableView.addEventListener('click', function(e)
{

	var win = Titanium.UI.createWindow({
		url: e.rowData.view,
		title: e.rowData.title,
		navBarHidden: true,
		exitOnClose: false,
	});
	
	win.open();
	
	
});
	

window.open();
