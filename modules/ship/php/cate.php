<?php
    require_once __ROOT__."/modules/ship/ship_model.php";
    class cate implements actionListener{
		function ActionPerFormed($post){
			$ship_model = new ship_model();
			$cate=$post->getPost();
			
			switch ($cate['cate']) {
			    case 'our_ship':
			     $sql='SELECT Customer.CustomerID,CustomerName,ShipID,ShipName,ShipBrandsName,ShipLength,ShipWidth,ShipHeight,ShipCategoryName,ShipKindName,Draught,Volt,Hz,ShipWeight FROM `Ship` JOIN ShipBrands ON Ship.ShipBrandsID = ShipBrands.ShipBrandsID JOIN ShipCategory ON Ship.ShipCategoryID = ShipCategory.ShipCategoryID JOIN ShipKind ON Ship.ShipKindID = ShipKind.ShipKindID JOIN Customer ON Customer.CustomerID = Ship.CustomerID';
			        break;
			    case 'berth_ship':

			        break;
			    case 'rent_ship':

			        break;
			    case 'repair_ship':

			        break;	
			    case 'port_ship':

			        break;
			}
			
			
			$result=$ship_model->sql($sql);
			return $result;
		}
	}

?>