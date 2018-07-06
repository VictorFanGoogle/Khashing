class customer_showPage extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		var self=this;
		self.loadModuleScript("customer","cate");
		var html = `
					<div class="content_header">&nbsp;客 戶 資 料</div>
					<div class="content_choose">
						<button class="btn btn-primary theme-style content_choose info" id="berth_customer">&nbsp;停 泊 客 戶&nbsp;</button>
						<button class="btn btn-outline-secondary content_choose info" id="rent_customer">&nbsp;租 賃 客 戶&nbsp;</button>
						<button class="btn btn-outline-secondary content_choose info" id="rentland_customer">&nbsp;陸 域 租 戶&nbsp;</button>
						<button class="btn btn-outline-secondary content_choose info" id="repair_customer">&nbsp;維 修 客 戶&nbsp;</button>
					    <button class="btn btn-outline-secondary content_choose info" id="port_customer">下水碼頭客戶</button>
					</div>
					<div class="content_content">
						<table class="table info-table">
							
						</table>
					</div>
		`
		$(this.position_id).html(html);
		$(document).on("click",".info",()=>{
					var info = new customer_cate(".info-table");
					info.addArg('cate',event.target.id);
					info.cate = event.target.id;
					info.run();
				});
	}
}