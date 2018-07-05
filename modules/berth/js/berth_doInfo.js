class berth_doInfo extends ActionHandler{
	constructor(position_id){
	    super();
		this.position_id=position_id;
		this.php=true;
	}
	ajaxSuccess(data){
	    console.log(data)
	    return data;
	}
	showResult(){}
}