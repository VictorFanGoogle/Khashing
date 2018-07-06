class ship_showPage extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		var self=this;
		self.loadModuleScript("ship","cate");
		var html = `
					<div class="content_header">&nbsp;船 體 基 本 資 料</div>
					<div class="content_choose">
						<button class="btn btn-primary theme-style content_choose info_ship" id="our_ship">&nbsp;公 司 遊 艇&nbsp;</button>
						<button class="btn btn-outline-secondary content_choose info_ship" id="berth_ship">&nbsp;停 泊 遊 艇&nbsp;</button>
						<button class="btn btn-outline-secondary content_choose info_ship" id="rent_ship">&nbsp;租 賃 遊 艇&nbsp;</button>
						<button class="btn btn-outline-secondary content_choose info_ship" id="repair_ship">&nbsp;維 修 遊 艇&nbsp;</button>
					    <button class="btn btn-outline-secondary content_choose info_ship" id="port_ship">下水碼頭遊艇</button>
					</div>
					<div class="content_content">
						<table class="table info-table">
							
						</table>
					</div>
		`
		$(this.position_id).html(html);
		$(document).on("click",".info_ship",()=>{
					var info = new ship_cate(".info-table");
					info.addArg('cate',event.target.id);
					info.cate = event.target.id;
					info.run();
				});
	}
}