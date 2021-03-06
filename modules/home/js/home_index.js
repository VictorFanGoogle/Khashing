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
				<a class="navbar-brand mb-1" href="#">
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
		self.loadModuleScript("home","loadMenu");
		new home_loadMenu("#accordion").run();
		// 讀取右側內容
		self.loadModuleScript("home","loadCalendar");
		new home_loadCalendar("#content").run();
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
			self.loadModuleScript("logout","doLogout");
			(new logout_doLogout("body")).run();
		});
	}
	bindEvent(){
		var self = this;
		var $menu=$("#accordion");
		var $content=$("#content");
		var $icon=$("#hamburger-icon");
		// 清單顯示/消失動畫
		$icon.on("click",()=>{
			if($menu.hasClass("d-none")){
				$icon.removeClass("is-active");
				$menu.removeClass("d-none");
				$content.removeClass("col-md-12");
			}else{
				$icon.addClass("is-active");
				$menu.addClass("d-none");
				$content.addClass("col-md-12");
			}
		});
		//首頁
		$(document).on("click",".navbar-brand",function(){
			self.loadModuleScript("home","loadMenu");
			new home_loadMenu("#accordion").run();
			// 讀取右側內容
			self.loadModuleScript("home","loadCalendar");
			new home_loadCalendar("#content").run();
		});
		//停泊管理
		$(document).on("click","#berth_info",function(){
			self.loadModuleScript("berth","doInfo");
			(new berth_doInfo("#content")).run();
		});
		
		//場地租借
		$(document).on("click","#place_manage",()=>{
			self.loadModuleScript("ckeditor","getckeditor");
			(new ckeditor_getckeditor("#content","ckeid").run());
		});
		
		//基本資料
		$(document).on("click","#customerinfo",()=>{
			self.loadModuleScript("customer","showPage");
			(new customer_showPage("#content").run());
		});
		$(document).on("click","#shipinfo",()=>{
			self.loadModuleScript("ship","showPage");
			(new ship_showPage("#content").run());
		});
		$("#crewinfo").on("click",()=>{
		//	self.loadModuleScript("customer","show_page");
		});
		$("#landinfo").on("click",()=>{
		//	self.loadModuleScript("customer","show_page");
		});
		$(document).on("keyup",".info_search",()=>{
            var input, filter, table, tr, td, i;
            input = document.getElementById("info_search");
            filter = input.value.toUpperCase();
            table = document.getElementById("info_tbody");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                for(var j = 0;j<tr[i].getElementsByTagName('td').length;j++){
                    var check = 0;
                    td = tr[i].getElementsByTagName("td")[j];
                    if (td) {
                        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                            check = 1;
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                    if(check==1){
                        break;
                    }
                }
            }
        });
	}
}