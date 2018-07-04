class customer_show_page extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		var self=this;
		var html = `
					<div class="content_header">&nbsp;客戶資料</div>
					<div class="content_choose">
						<button class="btn btn-primary theme-style content_choose" id="berth_customer">停泊客戶</button>
						<button class="btn btn-outline-secondary content_choose" id="berth_customer">租賃客戶</a>
						<button class="btn btn-outline-secondary content_choose" id="berth_customer">陸域租戶</a>
						<button class="btn btn-outline-secondary content_choose" id="berth_customer">維修客戶</a>
					    <button class="btn btn-outline-secondary content_choose" id="berth_customer">下水碼頭客戶</a>
					</div>
					<div class="content_content">
						<table class="table">
							<thead>
								<tr>
									<th>姓名</th>
									<th>電話</th>
									<th>公司</th>
									<th>公司電話</th>
									<th>統編</th>
									<th>Email</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>閜閜閜</td>
									<td>0912345678</td>
									<td>高雄科技大學</td>
									<td>07-22222222</td>
									<td>12345678</td>
									<td>abc@gmail.com</td>
								</tr>
								<tr>
									<td>閜閜閜</td>
									<td>0912345678</td>
									<td>高雄科技大學</td>
									<td>07-22222222</td>
									<td>12345678</td>
									<td>abc@gmail.com</td>
								</tr>
								<tr>
									<td>閜閜閜</td>
									<td>0912345678</td>
									<td>高雄科技大學</td>
									<td>07-22222222</td>
									<td>12345678</td>
									<td>abc@gmail.com</td>
								</tr>
								<tr>
									<td>閜閜閜</td>
									<td>0912345678</td>
									<td>高雄科技大學</td>
									<td>07-22222222</td>
									<td>12345678</td>
									<td>abc@gmail.com</td>
								</tr>
								<tr>
									<td>閜閜閜</td>
									<td>0912345678</td>
									<td>高雄科技大學</td>
									<td>07-22222222</td>
									<td>12345678</td>
									<td>abc@gmail.com</td>
								</tr>
								<tr>
									<td>閜閜閜</td>
									<td>0912345678</td>
									<td>高雄科技大學</td>
									<td>07-22222222</td>
									<td>12345678</td>
									<td>abc@gmail.com</td>
								</tr>
								<tr>
									<td>閜閜閜</td>
									<td>0912345678</td>
									<td>高雄科技大學</td>
									<td>07-22222222</td>
									<td>12345678</td>
									<td>abc@gmail.com</td>
								</tr>
								<tr>
									<td>閜閜閜</td>
									<td>0912345678</td>
									<td>高雄科技大學</td>
									<td>07-22222222</td>
									<td>12345678</td>
									<td>abc@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</div>
		`
		$(this.position_id).html(html);

	}
}