class berth_doInfo extends ActionHandler{
	constructor(position_id){
	    super();
		this.position_id=position_id;
		this.php=true;
	}
	ajaxSuccess(data){
	    let F_initLeft = 1;
	    let F_width = 2;
	    let F_height = 7;
	    let F_initTop = 3;
	    let G_width = 3.5;
	    let G_height = 5;
		let H_width = 2.5;
	    let view = `
	    	<div style='position:relative;width:100%;height:80%;background-color:BLACK;margin-top:1%;'>
	    		<div id="F3">
		    		<div id="F3_f1" style='position:absolute;top:${F_initTop + F_height * 0}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f1</p>
		    		</div>
		    		<div id="F3_f2" style='position:absolute;top:${F_initTop + F_height * 0}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f2</p>
		    		</div>
		    		<div id="F3_f3" style='position:absolute;top:${F_initTop + F_height * 1}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f3</p>
		    		</div>
		    		<div id="F3_f4" style='position:absolute;top:${F_initTop + F_height * 1}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f4</p>
		    		</div>
		    		<div id="F3_f5" style='position:absolute;top:${F_initTop + F_height * 2}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f5</p>
		    		</div>
		    		<div id="F3_f6" style='position:absolute;top:${F_initTop + F_height * 2}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f6</p>
		    		</div>
		    		<div id="F3_f7" style='position:absolute;top:${F_initTop + F_height * 3}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f7</p>
		    		</div>
		    		<div id="F3_f8" style='position:absolute;top:${F_initTop + F_height * 3}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f8</p>
		    		</div>
	    		</div>
	    		<div id="F2">
	    			<div id="F2_f1" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f1</p>
		    		</div>
		    		<div id="F2_f2" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f2</p>
		    		</div>
		    		<div id="F2_f3" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f3</p>
		    		</div>
		    		<div id="F2_f4" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f4</p>
		    		</div>
		    		<div id="F2_f5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f5</p>
		    		</div>
		    		<div id="F2_f6" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f6</p>
		    		</div>
		    		<div id="F2_f7" style='position:absolute;top:${F_initTop + F_height * 7}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f7</p>
		    		</div>
		    		<div id="F2_f8" style='position:absolute;top:${F_initTop + F_height * 7}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f8</p>
		    		</div>
	    		</div>
	    		<div id="F1">
	    			<div id="F1_f1" style='position:absolute;top:${F_initTop + F_height * 8}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f1</p>
		    		</div>
		    		<div id="F1_f2" style='position:absolute;top:${F_initTop + F_height * 8}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f2</p>
		    		</div>
		    		<div id="F1_f3" style='position:absolute;top:${F_initTop + F_height * 9}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f3</p>
		    		</div>
		    		<div id="F1_f4" style='position:absolute;top:${F_initTop + F_height * 9}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f4</p>
		    		</div>
		    		<div id="F1_f5" style='position:absolute;top:${F_initTop + F_height * 10}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f5</p>
		    		</div>
		    		<div id="F1_f6" style='position:absolute;top:${F_initTop + F_height * 10}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f6</p>
		    		</div>
		    		<div id="F1_f7" style='position:absolute;top:${F_initTop + F_height * 11}%;left:${F_initLeft}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>f7</p>
		    		</div>
		    		<div id="F1_f8" style='position:absolute;top:${F_initTop + F_height * 11}%;left:${F_initLeft + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>f8</p>
		    		</div>
	    		</div>
	    		<div id="G2">
	    			<div id="G2_g1" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 0}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>g1</p>
		    		</div>
		    		<div id="G2_g2" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 1}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>g2</p>
		    		</div>
		    		<div id="G2_g3" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 2}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>g3</p>
		    		</div>
		    		<div id="G2_g4" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 3}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>g4</p>
		    		</div>
	    		</div>
	    		<div id="G1">
	    			<div id="G1_g5" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 4}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>g5</p>
		    		</div>
		    		<div id="G1_g6" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 5}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>g6</p>
		    		</div>
		    		<div id="G1_g7" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 6}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>g7</p>
		    		</div>
		    		<div id="G1_g8" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 7}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>g8</p>
		    		</div>
	    		</div>
	    		<div id="D1">
	    			<div id="D1_d1" style='position:absolute;top:${F_initTop + F_height * 9}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:RED;'>
		    			<p>d1</p>
		    		</div>
		    		<div id="D1_d2" style='position:absolute;top:${F_initTop + F_height * 10}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:white;'>
		    			<p>d2</p>
		    		</div>
		    		<div id="D1_d3" style='position:absolute;top:${F_initTop + F_height * 11}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:RED;'>
		    			<p>d3</p>
		    		</div>
		    		<div id="D1_d4" style='position:absolute;top:${F_initTop + F_height * 12}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:white;'>
		    			<p>d4</p>
		    		</div>
	    		</div>
	    		<div id="D2">
	    			<div id="D2_d1" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d1</p>
		    		</div>
		    		<div id="D2_d2" style='position:absolute;top:${F_initTop + F_height * 4}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d2</p>
		    		</div>
		    		<div id="D2_d3" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d3</p>
		    		</div>
		    		<div id="D2_d4" style='position:absolute;top:${F_initTop + F_height * 5}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d4</p>
		    		</div>
		    		<div id="D2_d5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height}%;background-color:RED;'>
		    			<p>d5</p>
		    		</div>
		    		<div id="D2_d6" style='position:absolute;top:${F_initTop + F_height * 7}%;left:${F_initLeft + G_width * 8}%;width:${F_width * 2}%;height:${F_height * 2}%;background-color:white;'>
		    			<p>d6</p>
		    		</div>
	    		</div>
	    		<div id="D3">
		    		<div id="D3_d1" style='position:absolute;top:${F_initTop + F_height * 0}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d1</p>
		    		</div>
		    		<div id="D3_d2" style='position:absolute;top:${F_initTop + F_height * 0}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d2</p>
		    		</div>
		    		<div id="D3_d3" style='position:absolute;top:${F_initTop + F_height * 1}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d3</p>
		    		</div>
		    		<div id="D3_d4" style='position:absolute;top:${F_initTop + F_height * 1}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d4</p>
		    		</div>
		    		<div id="D3_d5" style='position:absolute;top:${F_initTop + F_height * 2}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d5</p>
		    		</div>
		    		<div id="D3_d6" style='position:absolute;top:${F_initTop + F_height * 2}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d6</p>
		    		</div>
		    		<div id="D3_d7" style='position:absolute;top:${F_initTop + F_height * 3}%;left:${F_initLeft + G_width * 8}%;width:${F_width}%;height:${F_height}%;background-color:white;'>
		    			<p>d7</p>
		    		</div>
		    		<div id="D3_d8" style='position:absolute;top:${F_initTop + F_height * 3}%;left:${F_initLeft + G_width * 8 + F_width}%;width:${F_width}%;height:${F_height}%;background-color:RED;'>
		    			<p>d8</p>
		    		</div>
	    		</div>
	    		<div id="H3">
	    			<div id="H3_e1" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 9 + 0.5}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e1</p>
		    		</div>
		    		<div id="H3_e2" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 10 + 0.5}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e2</p>
		    		</div>
		    		<div id="H3_e3" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 11 + 0.5}%;width:${G_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e3</p>
		    		</div>
		    		<div id="H3_e4" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 12 + 0.5}%;width:${G_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e4</p>
		    		</div>
		    		<div id="H3_e5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + G_width * 13 + 0.5}%;width:${G_width + 1.5}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e5</p>
		    		</div>
	    		</div>
	    		<div id="H2">
	    			<div id="H2_e1" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 20 + 1}%;width:${H_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e1</p>
		    		</div>
		    		<div id="H2_e2" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 21 + 1}%;width:${H_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e2</p>
		    		</div>
		    		<div id="H2_e3" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 22 + 1}%;width:${H_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e3</p>
		    		</div>
		    		<div id="H2_e4" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 23 + 1}%;width:${H_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e4</p>
		    		</div>
		    		<div id="H2_e5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 24 + 1}%;width:${H_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e5</p>
		    		</div>
		    		<div id="H2_e6" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 25 + 1}%;width:${H_width * 3 - 1}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e6</p>
		    		</div>
	    		</div>
	    		<div id="H1">
	    			<div id="H1_e1" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 28}%;width:${H_width * 1.5}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e1</p>
		    		</div>
		    		<div id="H1_e2" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 29}%;width:${H_width * 1.5}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e2</p>
		    		</div>
		    		<div id="H1_e3" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 30}%;width:${H_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e3</p>
		    		</div>
		    		<div id="H1_e4" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 31}%;width:${H_width}%;height:${G_height}%;background-color:GREEN;'>
		    			<p>e4</p>
		    		</div>
		    		<div id="H1_e5" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 36 - 1}%;width:${H_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e5</p>
		    		</div>
		    		<div id="H1_e6" style='position:absolute;top:${F_initTop + F_height * 6}%;left:${F_initLeft + H_width * 37 - 1}%;width:${H_width}%;height:${G_height}%;background-color:WHITE;'>
		    			<p>e6</p>
		    		</div>
	    		</div>
	    		<div id="C1">
	    			<div id="C1_c1" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 4 +2}%;left:${F_initLeft + G_width * 14 - 2}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c1</p>
		    		</div>
		    		<div id="C1_c2" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 4 +2}%;left:${F_initLeft + G_width * 14 - 2 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>c2</p>
		    		</div>
		    		<div id="C1_c3" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 5 +2}%;left:${F_initLeft + G_width * 14 - 2}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>c3</p>
		    		</div>
		    		<div id="C1_c4" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 5 +2}%;left:${F_initLeft + G_width * 14 - 2 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c4</p>
		    		</div>
		    		<div id="C1_c5" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 6 +2}%;left:${F_initLeft + G_width * 14 - 2}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c5</p>
		    		</div>
		    		<div id="C1_c6" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 6 +2}%;left:${F_initLeft + G_width * 14 - 2 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>c6</p>
		    		</div>
		    		<div id="C1_c7" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 7 +2}%;left:${F_initLeft + G_width * 14 - 2}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>c7</p>
		    		</div>
		    		<div id="C1_c8" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 7 +2}%;left:${F_initLeft + G_width * 14 - 2 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c8</p>
		    		</div>
	    		</div>
	    		<div id="C2">
	    			<div id="C2_c1" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 0 +2}%;left:${F_initLeft + G_width * 14 - 2}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c1</p>
		    		</div>
		    		<div id="C2_c2" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 0 +2}%;left:${F_initLeft + G_width * 14 - 2 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>c2</p>
		    		</div>
		    		<div id="C2_c3" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 1 +2}%;left:${F_initLeft + G_width * 14 - 2}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>c3</p>
		    		</div>
		    		<div id="C2_c4" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 1 +2}%;left:${F_initLeft + G_width * 14 - 2 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c4</p>
		    		</div>
		    		<div id="C2_c5" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 2 +2}%;left:${F_initLeft + G_width * 14 - 2}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c5</p>
		    		</div>
		    		<div id="C2_c6" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 2 +2}%;left:${F_initLeft + G_width * 14 - 2 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>c6</p>
		    		</div>
		    		<div id="C2_c7" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 3 +2}%;left:${F_initLeft + G_width * 14 - 2}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>c7</p>
		    		</div>
		    		<div id="C2_c8" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 3 +2}%;left:${F_initLeft + G_width * 14 - 2 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c8</p>
		    		</div>
	    		</div>
	    		<div id="B1">
	    			<div id="B1_b1" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 4 +2}%;left:${F_initLeft + G_width * 20 - 4}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>c1</p>
		    		</div>
		    		<div id="B1_b2" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 4 +2}%;left:${F_initLeft + G_width * 20 - 4 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>b2</p>
		    		</div>
		    		<div id="B1_b3" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 5 +2}%;left:${F_initLeft +  G_width * 20 - 4}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>b3</p>
		    		</div>
		    		<div id="B1_b4" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 5 +2}%;left:${F_initLeft +  G_width * 20 - 4 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>b4</p>
		    		</div>
		    		<div id="B1_b5" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 6 +2}%;left:${F_initLeft +  G_width * 20 - 4}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>b5</p>
		    		</div>
		    		<div id="B1_b6" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 6 +2}%;left:${F_initLeft +  G_width * 20 - 4 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>b6</p>
		    		</div>
		    		<div id="B1_b7" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 7 +2}%;left:${F_initLeft +  G_width * 20 - 4}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>b7</p>
		    		</div>
		    		<div id="B1_b8" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 7 +2}%;left:${F_initLeft +  G_width * 20 - 4 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>b8</p>
		    		</div>
	    		</div>
	    		<div id="B2">
	    			<div id="B2_b1" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 0 +2}%;left:${F_initLeft + G_width * 20 - 4}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>b1</p>
		    		</div>
		    		<div id="B2_b2" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 0 +2}%;left:${F_initLeft + G_width * 20 - 4 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>b2</p>
		    		</div>
		    		<div id="B2_b3" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 1 +2}%;left:${F_initLeft + G_width * 20 - 4}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>b3</p>
		    		</div>
		    		<div id="B2_b4" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 1 +2}%;left:${F_initLeft + G_width * 20 - 4 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>b4</p>
		    		</div>
		    		<div id="B2_b5" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 2 +2}%;left:${F_initLeft + G_width * 20 - 4}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>b5</p>
		    		</div>
		    		<div id="B2_b6" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 2 +2}%;left:${F_initLeft + G_width * 20 - 4 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>b6</p>
		    		</div>
		    		<div id="B2_b7" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 3 +2}%;left:${F_initLeft + G_width * 20 - 4}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>b7</p>
		    		</div>
		    		<div id="B2_b8" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 3 +2}%;left:${F_initLeft + G_width * 20 - 4 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>b8</p>
		    		</div>
	    		</div>
	    		<div id="A1">
	    			<div id="A1_a1" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 4 +2}%;left:${F_initLeft + G_width * 25 - 2.5}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>a1</p>
		    		</div>
		    		<div id="A1_a2" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 4 +2}%;left:${F_initLeft + G_width * 25 - 2.5 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>a2</p>
		    		</div>
		    		<div id="A1_a3" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 5 +2}%;left:${F_initLeft +  G_width * 25 - 2.5}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>a3</p>
		    		</div>
		    		<div id="A1_a4" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 5 +2}%;left:${F_initLeft +  G_width * 25 - 2.5 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>a4</p>
		    		</div>
		    		<div id="A1_a5" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 6 +2}%;left:${F_initLeft +  G_width * 25 - 2.5}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>a5</p>
		    		</div>
		    		<div id="A1_a6" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 6 +2}%;left:${F_initLeft +  G_width * 25 - 2.5 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>a6</p>
		    		</div>
		    		<div id="A1_a7" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 7 +2}%;left:${F_initLeft +  G_width * 25 - 2.5}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>a7</p>
		    		</div>
		    		<div id="A1_a8" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 7 +2}%;left:${F_initLeft +  G_width * 25 - 2.5 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>a8</p>
		    		</div>
	    		</div>
	    		<div id="A2">
	    			<div id="A2_a1" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 0 +2}%;left:${F_initLeft +  G_width * 25 - 2.5}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>a1</p>
		    		</div>
		    		<div id="A2_a2" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 0 +2}%;left:${F_initLeft +  G_width * 25 - 2.5 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>a2</p>
		    		</div>
		    		<div id="A2_a3" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 1 +2}%;left:${F_initLeft +  G_width * 25 - 2.5}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>a3</p>
		    		</div>
		    		<div id="A2_a4" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 1 +2}%;left:${F_initLeft +  G_width * 25 - 2.5 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>a4</p>
		    		</div>
		    		<div id="A2_a5" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 2 +2}%;left:${F_initLeft +  G_width * 25 - 2.5}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>a5</p>
		    		</div>
		    		<div id="A2_a6" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 2 +2}%;left:${F_initLeft +  G_width * 25 - 2.5 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>a6</p>
		    		</div>
		    		<div id="A2_a7" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 3 +2}%;left:${F_initLeft +  G_width * 25 - 2.5}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:white;'>
		    			<p>a7</p>
		    		</div>
		    		<div id="A2_a8" style='position:absolute;top:${F_initTop + (Math.round(F_height/2)+1) * 3 +2}%;left:${F_initLeft +  G_width * 25 - 2.5 + F_width}%;width:${F_width}%;height:${Math.round(F_height/2) + 1}%;background-color:RED;'>
		    			<p>a8</p>
		    		</div>
	    		</div>
	    	</div>
	    `;
	    $(this.position_id).html(view);
	    for(let i in data.table){
	    	let StartBarIndex = data.table[i].StartBarIndex	
	    }
	    return data;
	}
	showResult(){}
}