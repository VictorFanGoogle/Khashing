class calendar_getCalendar extends ActionHandler{
	constructor(position_id,calendar_id,data){
		super();
		this.php=false;
		this.position_id=position_id;
		this.data=data;
		this.calendar_id=calendar_id;
	}
	showResult(){
		var html=`
			<div class="row mt-2>
				<div id="`+this.calendar_id+`list" class="mt-2 col-sm-2"></div>
				<div id="`+this.calendar_id+`view" class="mt-2 col-sm-10" style="height:98vh">
					<div id="`+this.calendar_id+`"></div>
				</div>
				
			</div
			
		`;
		$(this.position_id).html(html);
		this.createCalendar();
	}
	//建立行事曆
	createCalendar(){
		$("#"+this.calendar_id).fullCalendar({
			locale:"zh-tw",
			height:"parent",
			themeSystem: 'bootstrap4',
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listMonth'
			},
		    eventLimit:true, // allow "more" link when too many events
		    events:[
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
		          start: '2018-07-05T16:00:00'
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
		    ],
		    eventColor: 'rgb(20,36,64)'
		});
	}
}