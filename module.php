<?php
	define('__ROOT__', dirname(__FILE__));
	require_once  __ROOT__."/include/php/event_Message.php";
	require_once  __ROOT__."/include/php/mySQL.php";
	require_once __ROOT__."/include/php/model.php";
	session_start();
	echo json_encode((new Main())->run());
	class Main{
		function __construct(){
			$DB=json_decode({
				"db_host":"",
				"db_name":"",
				"db_user":"",
				"db_password":""
			},true);
			mySQL::$db_host=$DB["db"]["db_host"];
			mySQL::$db_name=$DB["db"]["db_name"];
			mySQL::$db_user=$DB["db"]["db_user"];
			mySQL::$db_password=$DB["db"]["db_password"];
		}
		function run(){
			if($_POST['module']=="login"||isset($_SESSION['employeeID'])){
				if(isset($_POST['module'])){
					$module=$_POST['module'];
				}else{
					$module="login";
				}
				require_once __ROOT__."/modules/".$module."/action_Dispatcher.php";
				$event_message= new event_Message($_GET,$_POST);
				$module_object=new action_Dispatcher();
				return $module_object->doAction($event_message);
			}else{
				$return_value['status_code']=-1;
				$return_value['status_message']="Not Logged_In";
				return $return_value;
			}
		}
	}
?>