<?php  
	require_once 'mySQL.php';
    abstract class model{
        protected $conn = null;
        public function __construct(){
            $this->conn = mySQL::getConnection();
        }
    }

?>
