class berth_doInfo extends ActionHandler{
	constructor(position_id){
	    super();
		this.position_id=position_id;
		this.php=true;
	}
	ajaxSuccess(data){
	    console.log(data);
	    let view = `
	    	<div style='position:relative;width:100%;height:80%;background-color:BLACK;margin-top:1%;'>
	    		<div id="F3" style='position:absolute;top:3%;left:1%;width:5%;height:25%;background-color:RED;'>
	    			<p>F3</p>
	    		</div>
	    		<div id="F2" style='position:absolute;top:28%;left:1%;width:5%;height:25%;background-color:GREEN;'>
	    			<p>F2</p>
	    		</div>
	    		<div id="F1" style='position:absolute;top:53%;left:1%;width:5%;height:25%;background-color:ORANGE;'>
	    			<p>F1</p>
	    		</div>
	    		<div id="F1" style='position:absolute;top:53%;left:1%;width:5%;height:25%;background-color:ORANGE;'>
	    			<p>F1</p>
	    		</div>
	    	</div>
	    `;
	    console.log(this.position_id)
	    $(this.position_id).html(view);
	    return data;
	}
	showResult(){}
}