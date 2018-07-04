<?php

    class berth_model extends model{
        public function __construct() {
            parent::__construct();
        }
        private function result($sql){
            $stmt = $this->conn->prepare($sql);
            $result = $stmt->execute();
            if($result){
                $ds = $stmt->fetch(PDO::FETCH_ASSOC);
                $return['status_code'] = 0;
                $return['status_message'] = 'Execute Success';
                $return['table'] = $ds;
            }
            else{
                $return['status_code'] = -1;
                $return['status_message'] = 'SQL Execute Error';
                $return['sql'] = $sql;
            }
            return $return;
        }
        private function Allresults($sql){
            $stmt = $this->conn->prepare($sql);
            $result = $stmt->execute();
            if($result){
                $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $return['status_code'] = 0;
                $return['status_message'] = 'Execute Success';
                $return['table'] = $ds;
            }
            else{
                $return['status_code'] = -1;
                $return['status_message'] = 'SQL Execute Error';
                $return['sql'] = $sql;
            }
            return $return;
        }
        public function test(){
            $sql = "SELECT `CountryName` From Country Where `CountryID` = 1";
            return $this->result($sql);
        }
    }

?>