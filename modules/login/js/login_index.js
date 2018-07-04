class login_index extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(){
		var self=this;
		$(self.position_id).html(`
			<div class="row">
				<div class="col-md-4 offset-md-4 text-center mt-5">
					<img src="./include/img/logo.png" class="img-fluid">	
					<form class="form">
						<input type="text" name="account" class="form-control" placeholder="帳號"><br>
						<input type="password" name="password" class="form-control" placeholder="密碼"><br>
						<button id="login" type="button" class="btn btn-primary theme-style">登入</button>
					</form>
				</div>
			</div>
		`);
		// 加入登入背景圖
		$("body").addClass("login-bg");
		// 登入事件
		$("#login").on("click",function(){
			self.loadModuleScript("login","do_login");
			(new login_do_login(self.position_id)).run();
		});
		//密碼方框Enter登入
		$("[name=password]").on("keyup",function(e){
			if(e.key=="Enter"){
				$("#login").click();
			}
		});
	}
}