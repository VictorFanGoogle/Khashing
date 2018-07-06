class calendar_getCalendar extends ActionHandler{
	constructor(position_id,calendar_id){
		super();
		this.php=false;
		this.position_id=position_id;
		this.calendar_id=calendar_id;
		this.data=null;
		this.list=null;
	}
	showResult(){
		if(this.data!=null){
			var html=`
				<div class="row mt-2">
					<div id="`+this.calendar_id+`-list" class="mt-2 col-md-2 fc-list">
			`;
			if(this.list!=null){
				html+=this.list;
			}
			html+=`	</div>
					<div id="`+this.calendar_id+`-view" class="mt-2 col-md-10 fc-view" style="height:98vh">
						<div id="`+this.calendar_id+`"></div>
					</div>
				</div>
				
			`;
			$(this.position_id).html(html);
			this.createCalendar();
		}else{
		//請使用addData()加入資料
			this.showModal("錯誤","資料未讀取");
		}

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
			//資料事件(點擊&滑鼠)
			eventClick: (eventObj)=>{
				console.log(eventObj)
			},
			eventMouseover:(event, jsEvent, view)=>{
				console.log(event, jsEvent, view)
			},
			eventRender:(event,element,view)=>{
				var id=event._id;
				console.log(event,element,view);
				$(element).popover({
			    	content:id
			    }); 
			},
			//日期事件(點擊&框選)
		    selectable:true,
		    dayClick: (date,jsEvent, view)=>{
		    	console.log(date.format());
			},
			select: (startDate, endDate)=>{
				endDate=moment(endDate).add(-1, 'days');
				alert('selected ' + startDate.format() + ' to ' + endDate.format());
			},
			//日期事件
			editable:true,
		});
	}
	//呼叫時加入資料
	addArgs(data,list){
		this.data=data;
		this.list=list;
	}
}
