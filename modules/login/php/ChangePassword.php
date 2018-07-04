	<?php
	require_once("./modules/login/loginModel.php");
	class ChangePassword implements Action{
		function ActionPerFormed($post){
			$mod=(new loginModel());
			$tmp['account']=$_SESSION['login'];
			$results=$mod->getPassword_ByAccount($tmp);
			if($results['status_code']==0){
				if($results['data']['password']===$post['oldPassword']){
					$result['status_code']=0;
					$result['status_message']="原密碼正確";
					$results=$mod->changePassword($post);
					if($results['status_code']==0){
						$result['status_message']="修改密碼成功";		
					}else{
						$result['status_code']=-1;
						$result['status_message']="修改密碼失敗";
					}
				}else{
					$result['status_code']=-1;
					$result['status_message']="原密碼錯誤";
				}
			}
			return $result;
		}
	}
?>