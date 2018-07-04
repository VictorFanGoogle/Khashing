class login_DoLogin extends ActionHandler{
	constructor(position_id){
		super();
		this.position_id=position_id;
		this.args=$("form").serialize();
	}
	ajaxSuccess(data){
		if(data['status_code']!=0){
			this.showModal("登入",data["status_message"]);
		}else{
			this.loadModuleScript("home","index");
			(new home_index(this.position_id)).run();
		}
		
	}
}