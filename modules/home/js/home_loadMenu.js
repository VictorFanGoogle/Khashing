class home_loadMenu extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		var self=this;
		var data=[
			{
				header:"停泊管理",
				item:[
					{id:"berth_info",name:"船舶資訊"},
					{id:"",name:"預約管理"},
					{id:"",name:"船隻停泊收費紀錄"},
				]
			},
			{
				header:"遊艇租賃",
				item:[
					{id:"",name:"行程預約"},
					{id:"",name:"已租/未租遊艇"},
					{id:"",name:"行程規劃"},
					{id:"",name:"出海評價查詢紀錄"},
					{id:"",name:"評價查詢"},
					{id:"",name:"遊艇租賃收費紀錄"},
				]
			},
			{
				header:"下水碼頭",
				item:[
					{id:"",name:"碼頭預約"},
					{id:"",name:"作業管理"},
					{id:"",name:"下水碼頭收費紀錄"},
				]
			},
			{
				header:"維修管理",
				item:[
					{id:"",name:"維修預約"},
					{id:"",name:"維修狀況"},
					{id:"",name:"各船隻保養紀錄"},
					{id:"",name:"維修收費紀錄"},
				]
			},
			{
				header:"租戶管理",
				item:[
					{id:"",name:"店面租賃"},
					{id:"",name:"租賃資訊管理"},
					{id:"",name:"租金收費紀錄"},
				]
			},
			{
				header:"場地租借",
				item:[
					{id:"",name:"場地租借"},
					{id:"",name:"場地資訊管理"},
					{id:"",name:"場地租借收費紀錄"},
				]
			},
			{
				header:"員工管理",
				item:[
					{id:"",name:"行事曆"},
					{id:"",name:"派工"},
					{id:"",name:"個人工時查詢"},
				]
			},
			{
				header:"帳務管理",
				item:[
					{id:"",name:"船隻停泊收費紀錄"},
					{id:"",name:"遊艇租賃收費紀錄"},
					{id:"",name:"下水碼頭收費紀錄"},
					{id:"",name:"租金收費紀錄"},
					{id:"",name:"場地租借收費紀錄"},
					{id:"",name:"維修收費紀錄"},
					{id:"",name:"所有員工工時查詢"},
				]
			},
			{
				header:"基本資料",
				item:[
					{id:"shipinfo",name:"船隻"},
					{id:"customerinfo",name:"客戶"},
					{id:"crewinfo",name:"員工"},
					{id:"landinfo",name:"陸域"},
				]
			},
		];
		var html="";
		for (var i in data) {
			html+=`
			<div class="card">
				<div class="card-header" id="heading`+i+`">
					<h5 class="mb-0">
						<div href="#" data-toggle="collapse" data-target="#collapse`+i+`" aria-expanded="false" aria-controls="collapse`+i+`">`+data[i]["header"]+`　　<i class="fas fa-`+((i==0)?"anchor":"angle-down")+`"></i>
						</div>
					</h5>
				</div>
				<div id="collapse`+i+`" class="collapse `+((i==0)?"show":"")+`" aria-labelledby="heading`+i+`" data-parent="#accordion">
					<div class="card-body">
			`;
			for(var j in data[i]['item']){
				html+=`<div id="`+data[i]["item"][j]["id"]+`" style="cursor:pointer;"><a>　　`+data[i]["item"][j]["name"]+`</a></div>`;
			}
			html+=`
						</div>
					</div>
				</div>
			`;
		}
		$(this.position_id).html(html);
		$("#accordion").on("shown.bs.collapse",()=>{
			$(".collapse.show").parent().find("i").attr("class","fas fa-anchor");
		});
		$("#accordion").on("hidden.bs.collapse",()=>{
			$("[data-toggle=collapse] i").attr("class","fas fa-angle-down");
		});
		

	}
}