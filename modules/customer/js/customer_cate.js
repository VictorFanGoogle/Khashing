class customer_cate extends ActionHandler{
	constructor(position_id){
		super();
		this.php=false;
		this.position_id=position_id;
	}
	showResult(data){
		var self=this;
		var lastid = "#"+$('.btn-primary').attr('id');
		console.log(lastid)
		console.log(self.cate)
		$(lastid).removeClass('btn-primary');
		$(lastid).removeClass('theme-style'); 
		$(lastid).addClass('btn-outline-secondary');
		$("#"+self.cate).removeClass('btn-outline-secondary');
		$("#"+self.cate).addClass('btn-primary');
		$("#"+self.cate).addClass('theme-style');
		var html = self.args;
		$(this.position_id).html(html);
	}
}