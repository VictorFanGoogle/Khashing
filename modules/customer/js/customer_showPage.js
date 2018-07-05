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
					<div class="content_header">&nbsp;客戶資料</div>
					<div class="content_choose">
						<button class="btn btn-primary theme-style content_choose info" id="berth_customer">停泊客戶</button>
						<button class="btn btn-outline-secondary content_choose info" id="rent_customer">租賃客戶</a>
						<button class="btn btn-outline-secondary content_choose info" id="rentland_customer">陸域租戶</a>
						<button class="btn btn-outline-secondary content_choose info" id="repair_customer">維修客戶</a>
					    <button class="btn btn-outline-secondary content_choose info" id="port_customer">下水碼頭客戶</a>
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