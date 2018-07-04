<?php  
	class event_Message{
		private $get=null;
		private $post=null;
		function __construct($get,$post){
			$this->get=$get;
			$this->post=$post;
		}
		function getGet(){
			return $this->get;
		}
		function getPost(){
			return $this->post;
		}
	}
?>