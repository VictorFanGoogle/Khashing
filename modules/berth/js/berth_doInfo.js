class berth_doInfo extends ActionHandler{
	constructor(position_id){
	    super();
		this.position_id=position_id;
		this.php=true;
	}
	ajaxSuccess(data){
	    console.log(data);
	    let F_initLeft = 1;
	    let F_width = 2;
	    let F_height = 7;
	    let F_initTop = 3;
	    let G_width = 2.5;
	    let G_height = 5;
	    let view = `
	    	<div style='position:relative;width:100%;height:80%;background-color:BLACK;margin-top:1%;'>
	    		<div id="F3">
		    		<div id="f1" style='position:absolute;top:${F_initTop + F_height * 0}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f1</p>
		    		</div>
		    		<div id="f2" style='position:absolute;top:${F_initTop + F_height * 0}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f2</p>
		    		</div>
		    		<div id="f3" style='position:absolute;top:${F_initTop + F_height * 1}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f3</p>
		    		</div>
		    		<div id="f4" style='position:absolute;top:${F_initTop + F_height * 1}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f4</p>
		    		</div>
		    		<div id="f5" style='position:absolute;top:${F_initTop + F_height * 2}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f5</p>
		    		</div>
		    		<div id="f6" style='position:absolute;top:${F_initTop + F_height * 2}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f6</p>
		    		</div>
		    		<div id="f7" style='position:absolute;top:${F_initTop + F_height * 3}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f7</p>
		    		</div>
		    		<div id="f8" style='position:absolute;top:${F_initTop + F_height * 3}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f8</p>
		    		</div>
	    		</div>
	    		<div id="F2">
	    			<div id="f1" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f1</p>
		    		</div>
		    		<div id="f2" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f2</p>
		    		</div>
		    		<div id="f3" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f3</p>
		    		</div>
		    		<div id="f4" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f4</p>
		    		</div>
		    		<div id="f5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f5</p>
		    		</div>
		    		<div id="f6" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f6</p>
		    		</div>
		    		<div id="f7" style='position:absolute;top:${F_initTop + F_height * 7}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f7</p>
		    		</div>
		    		<div id="f8" style='position:absolute;top:${F_initTop + F_height * 7}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f8</p>
		    		</div>
	    		</div>
	    		<div id="F1">
	    			<div id="f1" style='position:absolute;top:${F_initTop + F_height * 8}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f1</p>
		    		</div>
		    		<div id="f2" style='position:absolute;top:${F_initTop + F_height * 8}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f2</p>
		    		</div>
		    		<div id="f3" style='position:absolute;top:${F_initTop + F_height * 9}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f3</p>
		    		</div>
		    		<div id="f4" style='position:absolute;top:${F_initTop + F_height * 9}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f4</p>
		    		</div>
		    		<div id="f5" style='position:absolute;top:${F_initTop + F_height * 10}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f5</p>
		    		</div>
		    		<div id="f6" style='position:absolute;top:${F_initTop + F_height * 10}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f6</p>
		    		</div>
		    		<div id="f7" style='position:absolute;top:${F_initTop + F_height * 11}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f7</p>
		    		</div>
		    		<div id="f8" style='position:absolute;top:${F_initTop + F_height * 11}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f8</p>
		    		</div>
	    		</div>
	    		<div id="G2">
	    			<div id="g1" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 0}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>g1</p>
		    		</div>
		    		<div id="g2" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 1}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>g2</p>
		    		</div>
		    		<div id="g3" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 2}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>g3</p>
		    		</div>
		    		<div id="g4" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 3}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>g4</p>
		    		</div>
	    		</div>
	    		<div id="G1">
	    			<div id="g5" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 4}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>g5</p>
		    		</div>
		    		<div id="g6" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 5}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>g6</p>
		    		</div>
		    		<div id="g7" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 6}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>g7</p>
		    		</div>
		    		<div id="g8" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 7}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>g8</p>
		    		</div>
	    		</div>
	    		<div id="D1">
	    			<div id="d1" style='position:absolute;top:${F_initTop + F_height * 9}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:RED;'>
		    			<p>d1</p>
		    		</div>
		    		<div id="d2" style='position:absolute;top:${F_initTop + F_height * 10}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:white;'>
		    			<p>d2</p>
		    		</div>
		    		<div id="d3" style='position:absolute;top:${F_initTop + F_height * 11}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:RED;'>
		    			<p>d3</p>
		    		</div>
		    		<div id="d4" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:white;'>
		    			<p>d4</p>
		    		</div>
	    		</div>
	    		<div id="D2">
	    			<div id="d1" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d1</p>
		    		</div>
		    		<div id="d2" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d2</p>
		    		</div>
		    		<div id="d3" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d3</p>
		    		</div>
		    		<div id="d4" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d4</p>
		    		</div>
		    		<div id="d5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:RED;'>
		    			<p>d5</p>
		    		</div>
		    		<div id="d6" style='position:absolute;top:${F_initTop + F_height * 7}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height * 2}%;background-color:white;'>
		    			<p>d6</p>
		    		</div>
	    		</div>
	    		<div id="D3">
		    		<div id="d1" style='position:absolute;top:${F_initTop + F_height * 0}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d1</p>
		    		</div>
		    		<div id="d2" style='position:absolute;top:${F_initTop + F_height * 0}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d2</p>
		    		</div>
		    		<div id="d3" style='position:absolute;top:${F_initTop + F_height * 1}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d3</p>
		    		</div>
		    		<div id="d4" style='position:absolute;top:${F_initTop + F_height * 1}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d4</p>
		    		</div>
		    		<div id="d5" style='position:absolute;top:${F_initTop + F_height * 2}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d5</p>
		    		</div>
		    		<div id="d6" style='position:absolute;top:${F_initTop + F_height * 2}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d6</p>
		    		</div>
		    		<div id="d7" style='position:absolute;top:${F_initTop + F_height * 3}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d7</p>
		    		</div>
		    		<div id="d8" style='position:absolute;top:${F_initTop + F_height * 3}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d8</p>
		    		</div>
	    		</div>
	    		<div id="H3">
	    			<div id="e1" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 10 - 1}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e1</p>
		    		</div>
		    		<div id="e2" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 11 - 1}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e2</p>
		    		</div>
		    		<div id="e3" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 12 - 1}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e3</p>
		    		</div>
		    		<div id="e4" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 13 - 1}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e4</p>
		    		</div>
		    		<div id="e5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 14 - 1}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e5</p>
		    		</div>
	    		</div>
	    		<div id="C1">
	    			<div id="c1" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>c1</p>
		    		</div>
		    		<div id="c2" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>c2</p>
		    		</div>
		    		<div id="c3" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>c3</p>
		    		</div>
		    		<div id="c4" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>c4</p>
		    		</div>
		    		<div id="c5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:RED;'>
		    			<p>c5</p>
		    		</div>
		    		<div id="c6" style='position:absolute;top:${F_initTop + F_height * 7}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height * 2}%;background-color:white;'>
		    			<p>d6</p>
		    		</div>
		    		<div id="f7" style='position:absolute;top:${F_initTop + F_height * 11}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f7</p>
		    		</div>
		    		<div id="f8" style='position:absolute;top:${F_initTop + F_height * 11}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f8</p>
		    		</div>
	    		</div>
	    	</div>
	    `;
	    console.log(this.position_id)
	    $(this.position_id).html(view);
	    return data;
	}
	showResult(){}
}