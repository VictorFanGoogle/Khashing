<?php
	class DoLogout implements Action{
		function ActionPerFormed($post){
			session_unset();
			if(!isset($_SESSION['login'])){
				$result['status_code']=0;
				$result['status_message']="登出成功";
			}else{
				$result['status_code']=-1;
				$result['status_message']="登出失敗";
			}
			return $result;
		}
	}
?>