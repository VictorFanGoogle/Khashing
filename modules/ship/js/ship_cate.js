class ship_cate extends ActionHandler {
    constructor(position_id) {
        super();
        this.php = true;
        this.position_id = position_id;
    }
    ajaxSuccess(data) {
        var self = this;
        data = data['table'];
        var html = `<thead><tr>
			<th scope="col">船體名稱(船號)</th>
			<th scope="col">船型</th>
			<th scope="col">種類</th>
			<th scope="col">船主</th>
			<th scope="col">船長</th>
			<th scope="col">船寬	</th>
			<th scope="col">船重</th>
			<th scope="col">吃水</th>
			<th scope="col">電壓</th>
			<th scope="col">Hz</th>
			</tr></thead><tbody><tr>`;
        console.log(data['0'])
        for (var i = 0; i < data.length; i++) {
            html += '<td id="'+data[i]['ShipID']+'">'+data[i]['ShipName']+'</td>';
            html += '<td>'+data[i]['ShipBrandsName']+'</td>';
            html += '<td>'+data[i]['ShipKindName']+'</td>';
            html += '<td id="'+data[i]['CustomerID']+'">'+data[i]['CustomerName']+'</td>';
            html += '<td>'+data[i]['ShipLength']+'</td>';
            html += '<td>'+data[i]['ShipWidth']+'</td>';
            html += '<td>'+data[i]['ShipWeight']+'</td>';
            html += '<td>'+data[i]['Draught']+'</td>';
            html += '<td>'+data[i]['Volt']+'</td>';
            html += '<td>'+data[i]['Hz']+'</td></tr>';
        }
        html += '</tbody>';
        var lastid = "#" + $('.btn-primary').attr('id');
        $(lastid).removeClass('btn-primary');
        $(lastid).removeClass('theme-style');
        $(lastid).addClass('btn-outline-secondary');
        $("#" + self.cate).removeClass('btn-outline-secondary');
        $("#" + self.cate).addClass('btn-primary');
        $("#" + self.cate).addClass('theme-style');
        $(this.position_id).html(html);
    }
}