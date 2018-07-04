class login_do_logged extends ActionHandler{
	constructor(position_id){
		super();
		this.position_id=position_id;
		//test
		this.php=false
		//test
	}
	showResult(){
		//test
		var data=[];
		data['status_code']=0;
		//test
		if(data['status_code']!=0){
			this.loadModuleScript("login","index");
			(new login_index(this.position_id)).run();
		}else{
			this.loadModuleScript("home","index");
			(new home_index("body")).run();
			$("body").removeClass("login-bg")
		}
		
	}
}