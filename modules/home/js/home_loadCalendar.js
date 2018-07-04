class home_loadCalendar extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		this.loadModuleScript("calendar","getCalendar");
		var calendar=(new calendar_getCalendar("#content","calendar"));
		calendar.data=[
			{
				id: '1',
				calendarId: '1',
				title: '波克77號',
				category: 'allday',
				dueDateClass: '',
				color:"white",
				bgColor:"#f55066",
				location:"日本",
				attendees:["anyone"],
				start: '2018-07-18T22:30:00',
				end: '2018-07-19T02:30:00',
				state:"123",
				raw:{
					creator:{
						name:"林哲廣",
						state:"Free"
					}
				}
			},
			{
				id: '2',
				calendarId: '1',
				title: 'second schedule',
				category: 'time',
				dueDateClass: '',
				start: '2018-07-18T17:30:00',
				end: '2018-07-19T17:31:00'
			}
		];
		calendar.run();
	}
}