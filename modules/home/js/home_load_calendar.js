class home_load_calendar extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		this.loadModuleScript("calendar","get_calendar");
		var calendar=(new calendar_get_calendar("#content","calendar"));
		calendar.data=[
			{
				id: '1',
				calendarId: '1',
				title: 'my schedule',
				category: 'time',
				dueDateClass: '',
				bgolor:"red",
				start: '2018-07-18T22:30:00+09:00',
				end: '2018-07-19T02:30:00+09:00'
			},
			{
				id: '2',
				calendarId: '1',
				title: 'second schedule',
				category: 'time',
				dueDateClass: '',
				start: '2018-07-18T17:30:00+09:00',
				end: '2018-07-19T17:31:00+09:00'
			}
		];
		calendar.run();
	}
}