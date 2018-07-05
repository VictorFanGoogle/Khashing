<?php
    require_once __ROOT__."/modules/customer/customer_model.php";
    class cate implements actionListener{
		function ActionPerFormed($post){
			$customer_model = new customer_model();
			$cate=$post->getPost();
			
			switch ($cate['cate']) {
			    case 'berth_customer':
			     $sql='SELECT Customer.CustomerID,`CustomerName`,`CustomerPhoneNum`,`CompanyName`,`CompanyPhone`,`ContactName`,`ContactPhone`,`Email`,`Addres`,`GUINumID`, Ship.ShipName, Ship.ShipID FROM `Customer` JOIN `Ship` ON Customer.CustomerID = Ship.CustomerID JOIN `Berth` ON Berth.ShipID = Ship.ShipID';
			        break;
			    case 'rent_customer':

			        break;
			    case 'rentland_customer':

			        break;
			    case 'port_customer':

			        break;
			    case 'repair_customer':

			        break;
			}
			
			
			$result=$customer_model->sql($sql);
			return $result;
		}
	}

?>