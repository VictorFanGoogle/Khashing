$(document).on("click",".info",()=>{
	console.log(event.target.id);
	var info = new customer_cate(".info-table");
	info.args = event.target.id;
	info.run();
});
class customer_cate extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		var self=this;
		var html = self.args;
		$(this.position_id).html(html);
	}
}