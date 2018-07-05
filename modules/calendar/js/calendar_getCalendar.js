class calendar_getCalendar extends ActionHandler{
	constructor(position_id,calendar_id,data){
		super();
		this.php=false;
		this.position_id=position_id;
		this.data=data;
		this.calendar_id=calendar_id;
		this.yyyymm=null;
	}
	showResult(){
		var html=`
			<div class="row">
				<div id="`+this.calendar_id+`-list" class="mt-1 col-sm-2">
						
				</div>
				<div id="`+this.calendar_id+`-header" class="mt-1 col-sm-10">

					
					<span id="`+this.calendar_id+`-menu">

						<div id="`+this.calendar_id+`-today" class="btn btn-primary theme-style">今天</div>
						<div id="`+this.calendar_id+`-prev" class="btn btn-primary theme-style">
							<i class="fas fa-arrow-circle-left"></i>
						</div>
						<div id="`+this.calendar_id+`-next" class="btn btn-primary theme-style">
							<i class="fas fa-arrow-circle-right"></i>
						</div>
						<span id="`+this.calendar_id+`-yyyymm" class="h5 align-middle"></span>
					</span>
					<div id="`+this.calendar_id+`" class="mt-2" style="height:80vh;"></div>
				</div>
			</div>
			
		`;
		$(this.position_id).html(html);
		this.createCalendar();
		this.createSchedules(this.data);
	}
	//建立行事曆
	createCalendar(){
		var self=this;
		this.calendar = new tui.Calendar(document.getElementById(this.calendar_id), {
			defaultView: 'month',
		    taskView: true,
		    scheduleView: true,
		    useCreationPopup:true,
		    useDetailPopup:true,
		    template:{
		    	alldayTitle:(e)=>{
		    	},
		    	allday:(e)=>{
		    		return `<i class="fas fa-ship"></i>`+e.title;
		    	},
		    	time:(e)=>{
					return `<i class="fas fa-ship"></i>`+e.title;
		    	},
		    	//設定日期顯示方式
		    	monthGridHeader:(e)=>{
		    		var date=new Date(e.date);
		    		if(e.isToday){
		    			return `<span class="rounded btn-primary theme-style">　`+(date.getMonth()+1)+"/"+date.getDate()+`　</span>`;
		    		}else{
		    			return `<span class="">`+(date.getMonth()+1)+"/"+date.getDate()+`　</span>`;
		    		}
		    	},
		    	//設定更多項目樣式
		    	monthGridHeaderExceed:(e)=>{
		    		return `查看更多`;
		    	},
		    	//設定星期樣式
		    	monthDayname:(e)=>{
		    		return `<div class="h5 text-center">`+e.label+`</div>`;
		    	}
		    },
		    month: {
		    	daynames: ['日', '一', '二', '三', '四', '五', '六'],
		    	startDayOfWeek: 0,
		    },
		});
		this.updateYYYYMM();
		$("#"+this.calendar_id+"-yyyymm").html(this.yyyymm);
		$("#"+this.calendar_id+"-menu").on("click",(e)=>{
			self.bindEvent(e);
		});
		self.calendar.on('clickSchedule', function(event) {
			
		});
			}
	//加入行程
	createSchedules(data){
		this.calendar.createSchedules(data);
	}
	bindEvent(e){
		switch(e.target.id){
			//今天按鈕
			case ""+this.calendar_id+"-today":
				this.calendar.today();
				break;
			//往前按鈕
			case ""+this.calendar_id+"-prev":
				this.calendar.prev();
				break;
			//往後按鈕
			case ""+this.calendar_id+"-next":
				this.calendar.next();
				break;
			default:
				break
		}
		switch(e.target.className){
			//往前按鈕
			case "fas fa-arrow-circle-left":
				this.calendar.prev();
				break;
			//往後按鈕
			case "fas fa-arrow-circle-right":
				this.calendar.next();
				break;
			default:
				break
		}
		this.updateYYYYMM();
		$("#"+this.calendar_id+"-yyyymm").html(this.yyyymm);
	}
	//更新日期
	updateYYYYMM(){
		this.yyyymm=moment(this.calendar.getDate().getTime()).format('YYYY.MM');
	}
}