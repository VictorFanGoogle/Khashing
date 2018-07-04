	<?php
	require_once("./modules/login/loginModel.php");
	class DoLogin implements Action{
		function ActionPerFormed($post){
			$mod=(new loginModel());
			$results=$mod->getPassword_ByAccount($post);
			if($results['status_code']==0){
				if($results['data']['password']===$post['password']){
					$result['status_code']=0;
					$result['status_message']="密碼正確";
					$_SESSION['login']=addslashes($post['account']);
				}else{
					$result['status_code']=-1;
					$result['status_message']="密碼錯誤";
				}
			}
			return $result;
		}
	}
?>