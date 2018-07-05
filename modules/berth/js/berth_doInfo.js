class berth_doInfo extends ActionHandler{
	constructor(position_id){
	    super();
		this.position_id=position_id;
		this.php=true;
	}
	ajaxSuccess(data){
	    console.log(data)
	    let view = `
	    	<div style='position:relative;width:100%;background-color:BLACK;'>
	    		<div style='position:absolute;top:20%;left:20%;width:10%;background-color:RED;'>
	    		</div>
	    	</div>
	    `;
	    console.log(this.position_id)
	    $("#"+this.position_id).html(view);
	    return data;
	}
	showResult(){}
}