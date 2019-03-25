function GetDiskInfo() {
    $.ajax({
        url: "/disk",
        type: "post",
        success: function () {
            // 硬盘信息更新
            $("#diskinfo").html("");
            var items = "";
            for (i in data.DiskInfo) {
                var disk = data.DiskInfo[i];
                items += ("<tr>" +
                    "<td>" + disk.FileSystem + "</td>" +
                    "<td>" + disk.DiskSize + "</td>" +
                    "<td>" + disk.Used + "</td>" +
                    "<td>" + disk.Free + "</td>" +
                    "<td>" + '<div class = "progress">' +
                    '<div class ="progress-bar" role="progressbar" aria-valuenow="60" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ' + disk.IsUsed + ';" id="cpupro">' + disk.IsUsed +
                    "</div></div></td>" +
                    "<td>" + disk.MountOn + "</td></tr>");
                // console.log(items);
                $("#diskinfo").html(items);
            }
        }
    });
}
