class customer_show_page extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		var self=this;
		var html = `
					<span class="content_header"> 客戶資料</span>
					</br>
					<button class="btn btn-primary theme-style" id="berth_customer">停泊客戶</button>
					<button class="btn btn-outline-secondary" id="berth_customer">租賃客戶</a>
					<button class="btn btn-outline-secondary" id="berth_customer">陸域租戶</a>
					<button class="btn btn-outline-secondary" id="berth_customer">維修客戶</a>
				    <button class="btn btn-outline-secondary" id="berth_customer">下水碼頭客戶</a>
		`
		$(this.position_id).html(html);

	}
}