<?php  
	class action_Dispatcher{
		function doAction($event_message){
			$module=$_POST['module'];
			if(isset($_POST['action'])){
				$action=$_POST['action'];
			}else{
				$action="Do_Login";
			}
			require_once __ROOT__.'/modules/'.$module.'/php_action/'.$action.'.php';
			$action_listener = new $action();
			return $action_listener->ActionPerformed($event_message);
		}
	}
?>
