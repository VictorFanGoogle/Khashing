<?php
    require_once __ROOT__."/modules/berth/berth_model.php";
    class cate implements actionListener{
		function ActionPerFormed($post){
			$berth_model = (new berth_model());
			$result = $berth_model->test();
			return $result;
		}
	}

?>