<?php
	class Logged implements Action{
		function ActionPerFormed($post){
			if(isset($_SESSION['login'])){
				$result['status_code']=0;
				$result['status_message']="已登入";
			}else{
				$result['status_code']=-1;
				$result['status_message']="尚未登入";
			}
			return $result;
		}
	}
?>