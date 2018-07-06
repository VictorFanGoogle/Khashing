class home_loadCalendar extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(){

		this.loadModuleScript("calendar","getCalendar");
		var calendar=(new calendar_getCalendar("#content","calendar"));
		var data=[
			{
				title: 'All Day Event',
				start: '2018-07-05',
				color:"#FF8C00"

			},
			{
				title: 'Long Event',
				start: '2018-07-07',
				end: '2018-07-10'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2018-07-05T16:00:00',
				test:"123"
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2018-07-05T16:00:00'
			},
			{
				title: 'Conference',
				start: '2018-07-11',
				end: '2018-07-13'
			},
			{
				title: 'Meeting',
				start: '2018-07-12T10:30:00',
				end: '2018-07-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2018-07-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2018-07-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2018-07-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2018-07-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2018-07-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2018-07-28'
			}
		];
		var list=`
			<div class="text-center">
				<button id="calendar-create" class="btn fc-create">建立行程</button>
			</div>
		`;
		calendar.addArgs(data,list);
		calendar.run();
	}
}