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
        public function getAllBerthInfo(){
            $sql = "SELECT
                    Berth.BerthID , Berth.ShipID , Berth.BerthCategory , Berth.Note ,
                    Berth.ManagerMan , Berth.ManagerCompanyName , Berth.ManagerCompanyPhone , 
                    Berth.StartBerthIndex , Berth.EndBerthIndex , Berth.StartPowIndex , Berth.EndPowIndex ,
                    Ship.ShipName , Ship.ShipLength , Ship.ShipWidth , Ship.ShipHeight , Ship.Draught , Ship.Volt , Ship.Hz , Ship.SocketLocation ,
                    Crew.CrewName , Crew.CrewPhone , 
                    ShipCategory.ShipCategoryName , ShipKind.ShipKindName , Country.CountryName , ShipBrands.ShipBrandsName , Job.JobTitle ,
                    Customer.CustomerName , Customer.CompanyName , Customer.GUINumID , Customer.Email
                    FROM Berth 
                    JOIN Ship ON  Berth.ShipID = Ship.ShipID
                    JOIN Customer ON Ship.CustomerID = Customer.CustomerID
                    JOIN ShipCategory ON Ship.ShipCategoryID = ShipCategory.ShipCategoryID
                    JOIN ShipKind ON Ship.ShipKindID = ShipKind.ShipKindID
                    JOIN ShipBrands ON Ship.ShipBrandsID = ShipBrands.ShipBrandsID
                    JOIN Country ON Ship.ShipCountryID = Country.CountryID
                    JOIN BerthReserveCrew ON BerthReserveCrew.BerthID = Berth.BerthID
                    JOIN Job ON BerthReserveCrew.JobID = Job.JobID
                    JOIN Crew ON BerthReserveCrew.CrewID = Crew.CrewID
                    WHERE Berth.BerthStatusID = 1";
            return $this->Allresults($sql);
        }
        public function test(){
            $sql = "SELECT `CountryName` From Country Where `CountryID` = 1";
            return $this->result($sql);
        }
    }

?>