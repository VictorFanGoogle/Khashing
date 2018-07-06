class home_loadCalendar extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		this.loadModuleScript("calendar","getCalendar");
		var calendar=(new calendar_getCalendar("#content","calendar",data));
		calendar.run();
	}
}