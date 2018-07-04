class home_index extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		var self=this;
		$(self.position_id).html(`
			<nav id="header" class="navbar justify-content-between">
				<div id="hamburger-icon" class="hamburger hamburger--emphatic is-active mt2" type="button">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</div>
				<a class="navbar-brand mb-1" href="./">
					<img class="img" src="./include/img/logo.png" alt="brand">
				</a>
				<div class="navbar-text mt-2">
					<div id="user-icon" class="h1"><i class="fas fa-user-circle"></i></div>
				</div>
			</nav>

			<div class="container-fluid">
				<div class="row">
					<div id="accordion" class="col-md-2"></div>
					<div id="content" class="col-md-10"></div>
				</div>
			</div>
			<div id="footer">
				
			</div>
			<div id="modal"></div>
		`);
		// 讀取左側清單
		self.loadModuleScript("home","load_menu");
		new home_load_menu("#accordion").run();
		// 讀取右側內容
		self.loadModuleScript("home","load_calendar");
		new home_load_calendar("#content").run();
		self.bindEvent();
		self.userIconEvent();
	}
	userIconEvent(){
		var self=this;
		// 使用者圖案彈跳
		$("#user-icon").popover({
			title:"<div class='text-center h5'>林哲廣，你好</div>",
			content:"<div class='text-center'><button id='profile' class='btn btn-primary theme-style'>基本資料</button>　<button id='logout' class='btn btn-default'>登出</button></div>",
			html:true,
			placement:"bottom",
			container:"body",
			trigger:"click"
		});
		$(document).on("click","#profile",function(){
			/*self.loadModuleScript("employee","Show_Profile");
			(new employee_Show_Profile("employee","Show_Profile","#content")).run();*/
		});
		$(document).off("click","#logout").on("click","#logout",function(){
			self.loadModuleScript("logout","do_logout");
			(new logout_do_logout("body")).run();
		});
	}
	bindEvent(){
		var self = this;
		var $menu=$("#accordion");
		var $icon=$("#hamburger-icon");
		// 清單顯示/消失動畫
		$icon.on("click",()=>{
			if($menu.css("display")=="block"){
				$icon.removeClass("is-active");
				$menu.css("display","none");
			}else{
				$icon.addClass("is-active");
				$menu.css("display","block");
			}
		});
		$(document).on("click","#berth_info",function(){
			self.loadModuleScript("berth","doInfo");
			(new berth_do_info("#content")).run();
		});
		$(document).on("click","#customerinfo",()=>{
			self.loadModuleScript("customer","show_page");
			(new customer_show_page("#content").run());
		});
		$("#shipinfo").on("click",()=>{
		//	self.loadModuleScript("customer","show_page");
		});
		$("#crewinfo").on("click",()=>{
		//	self.loadModuleScript("customer","show_page");
		});
		$("#landinfo").on("click",()=>{
		//	self.loadModuleScript("customer","show_page");
		});
	}
}