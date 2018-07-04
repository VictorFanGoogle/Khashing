class logout_doLogout extends ActionHandler{
	constructor(position_id){
		super();
		this.position_id=position_id;
	}
	ajaxSuccess(data){
		if(data['status_code']==0){
			this.loadModuleScript("login","index");
			(new login_index(this.position_id)).run();
			$("#menu").remove();
		}
		this.showModal("登出",data["status_message"]);
	}
}