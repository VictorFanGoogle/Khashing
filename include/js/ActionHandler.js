class ActionHandler{
	constructor(module,action){
		this.php=true;
		this.module=this.constructor.name.split("_",2)[0];
		this.action=this.constructor.name.split("_",2)[1];
		this.args=null;
	}
	run(){
		let self=this;
		$(document).ready(function(){
			$(window).keydown(function(event){
			    if(event.keyCode == 13) {
			      	event.preventDefault();
			      	return false;
			    }
			  });
			if(self.php){
				self.addArg("module",self.module);
				self.addArg("action",self.action);
				$.ajax({
					type:"post",
					url:"./module.php",
					data:self.args,
					dataType:"json",
					success:function(json){
						self.ajaxSuccess(json);
					},
					error:function(json){
						self.showModal("錯誤","伺服器錯誤!");
					}
				});
			}else{
				self.showResult();
			}
		});
		
	}
	addArg(key,value){
		if(this.args==null){
			this.args=key+"="+value;
		}else{
			this.args+="&"+key+"="+value;
		}
	}
	loadCSS(id,src){
		var script=$("#"+id);
		if(script.length==0){
			$("head").append("<link rel='stylesheet' type='text/css' id='"+id+"' href='./include/"+src+"' />");
		}
	}
	loadScript(id,src){
		var script=$("#"+id);
		if(script.length==0){
			$("head").append("<script id='"+id+"' src='./include/"+src+"'></script>");
		}
	}
	loadModuleScript(module,action){
		let src="./modules/"+module+"/js/"+module+"_"+action+".js";
		let id=module+"_"+action;
		if ($("#"+id).length==0){
			$("head").append(`<script id="`+id+`" src="`+src+`"></script>`);
		}
	}
	showModal(title,body){
		$("#alert").remove();
		$("body").append(`
			<div id="alert" class="modal" tabindex="-1" role="dialog">
				<div class="modal-dialog modal-lg" role="document">
				    <div class="modal-content">
				      	<div class="modal-header">
				        	<h5 class="modal-title"></h5>
				        	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          	<span aria-hidden="true">&times;</span>
				        </button>
				      	</div>
				      	<div class="modal-body">
				        	
				      	</div>
				      	<div class="modal-footer">
				        	<button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
				      	</div>
				    </div>
				</div>
			</div>
		`);
		$(".modal-title").html(title);
		$(".modal-body").html(body);
		$('#alert').modal('show');
	}
}