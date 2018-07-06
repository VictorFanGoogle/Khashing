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
				<div id="`+this.calendar_id+`-list" class="mt-2 col-sm-2">
				`+this.showList()+`
				</div>
				<div id="`+this.calendar_id+`-view" class="mt-2 col-sm-10" style="height:98vh">
					<div id="`+this.calendar_id+`"></div>
				</div>
				
			</div
			
		`;
		$(this.position_id).html(html);
		this.createCalendar();
	}
	showList(){
		var html=`
				<div id="`+this.calendar_id+`-create" class="btn btn-primary theme-style">建立行程</div>
		`
		return html;
	}
	//建立行事曆
	createCalendar(){
		var self=this;
		$("#"+this.calendar_id).fullCalendar({
			locale:"zh-tw",
			height:"parent",
			themeSystem: 'bootstrap4',
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listMonth'
			},
			//資料
			events:self.data,
		    eventLimit:true,
		    eventColor: 'rgb(20,36,64)',
		    //日期事件
		    selectable:true,
		    dayClick: (date,jsEvent, view)=>{
		    	console.log(date.format());
			},
			select: (startDate, endDate)=>{
				endDate=moment(endDate).add(-1, 'days');
				alert('selected ' + startDate.format() + ' to ' + endDate.format());
			},
			//資料事件
			eventClick: (eventObj)=>{
				console.log(eventObj)
			},
			eventMouseover:(event, jsEvent, view)=>{

			}
		});
	}
}