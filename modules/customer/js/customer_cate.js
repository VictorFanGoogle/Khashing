class customer_cate extends ActionHandler {
    constructor(position_id) {
        super();
        this.php = true;
        this.position_id = position_id;
    }
    ajaxSuccess(data) {
        var self = this;
        data = data['table'];
        var html = `<thead>
            <tr><th colspan="10" id="search_info"><input type="text" class="info_search" id="info_search" placeholder="Search"></th></tr>
            <tr>
                <th scope="col">姓名</th>
                <th scope="col">電話</th>
                <th scope="col">船名</th>
                <th scope="col">公司</th>
                <th scope="col">公司電話</th>
                <th scope="col">統編  </th>
                <th scope="col">Email</th>
                <th scope="col">地址</th>
                <th scope="col">負責人</th>
                <th scope="col">負責人電話</th>
            </tr></thead><tbody id="info_tbody"><tr>`;
        for (var i = 0; i < data.length; i++) {
            html += '<td id="' + data[i]['CustomerID'] + '">' + data[i]['CustomerName'] + '</td>';
            html += '<td>' + data[i]['CustomerPhoneNum'] + '</td>';
            html += '<td id="' + data[i]['ShipID'] + '">' + data[i]['ShipName'] + '</td>';
            html += '<td>' + data[i]['CompanyName'] + '</td>';
            html += '<td>' + data[i]['CompanyPhone'] + '</td>';
            html += '<td>' + data[i]['GUINumID'] + '</td>';
            html += '<td>' + data[i]['Email'] + '</td>';
            html += '<td>' + data[i]['Addres'] + '</td>';
            html += '<td>' + data[i]['ContactName'] + '</td>';
            html += '<td>' + data[i]['ContactPhone'] + '</td></tr>';
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

        //
    }
}
