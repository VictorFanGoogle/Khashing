<?php
	class loginModel extends Model{
		function __construct(){
			parent::__construct();
		}
		function runSQL($sql,$condition){
			$stmt=$this->conn->prepare($sql);
			$results=$stmt->execute();
			if($condition){
				$dataset=$stmt->fetchAll(PDO::FETCH_ASSOC);
			}else{
				$dataset=$stmt->fetch(PDO::FETCH_ASSOC);
			}
			if($results){
				$result['status_code']=0;
				$result['status_message']="Success";
				$result['data']=$dataset;
			}else{
				$result['status_code']=-1;
				$result['status_message']="Error";
				$result['SQL']=$sql;
			}
			return $result;
		}
		function getPassword_ByAccount($post){
			$sql="select password from login where ID='".addslashes($post['account'])."'";
			return $this->runSQL($sql,false);
		}
		function changePassword($post){
			$sql="update login set password='".addslashes($post['newPassword'])."' where password='".addslashes($post['oldPassword'])."'";
			return $this->runSQL($sql,false);
		}
	}
?>