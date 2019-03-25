
function GetInfo(){
    $.ajax({
        url: "/",
        type: "post",
        dataType: "json",
        success:function(data){
            // 内存数据更新
            $("#memfree").html(data.MemFree + "MB");
            $("#memtotal").html(data.MemTotal + "MB");
            $("#memused").html(data.MemUsed + "MB");
            var memused = (data.MemUsed / data.MemTotal) * 100;
            memused = memused.toFixed(2);
            $("#mempro").css("width", memused).html(memused + "%");
            $("#memsize").html(data.MemTotal + "MB")
            // 交换分区数据更新
            $("#swapfree").html(data.SwapFree + "MB");
            $("#swaptotal").html(data.SwapTotal + "MB");
            $("#swapused").html(data.SwapUsed + "MB");
            var swapused = (data.SwapUsed / data.SwapTotal) * 100;
            swapused = swapused.toFixed(2);
            $("#swappro").css("width", swapused).html(swapused + "%");
            $("#swapsize").html(data.SwapTotal + "MB")
            // CPU数据更新
            var cpu =  100 - data.CpuFree;
            cpu = cpu.toFixed(2);
            $("#cpupro").css("width", cpu).html(cpu + "%");
            // console.log(data);
            // IO 信息更新
            var items = "";
            $("#ioinfo").html("items");
            for (i in data.Io){
                io = data.Io[i];
                
                items += "<tr><td>" + io.Name + "</td>"
                items += "<td>" + io.Time + "</td>"
                if (io.IOReading > 1024){
                    io.IOReading = io.IOReading / 1024;
                    io.IOReading = io.IOReading.toFixed(2);
                    if (io.IOReading > 1024){
                        io.IOReading = io.IOReading / 1024;
                        io.IOReading = io.IOReading.toFixed(2);
                        items += "<td>" + io.IOReading + "GB</td>"
                    }else{
                        items += "<td>" + io.IOReading + "MB</td>"
                    }
                    
                }else{
                    items += "<td>" + io.IOReading + "KB</td>"
                }

                if (io.IOWriting > 1024){
                    io.IOWriting = io.IOWriting / 1024;
                    io.IOWriting = io.IOWriting.toFixed(2);
                    if (io.IOWriting > 1024){
                        io.IOWriting = io.IOWriting / 1024;
                        io.IOWriting = io.IOWriting.toFixed(2);
                        items += "<td>" + io.IOWriting + "GB</td>"
                    }else{
                        items += "<td>" + io.IOWriting + "MB</td>"
                    }
                    
                }else{
                    items += "<td>" + io.IOWriting + "KB</td>"
                }

                if (io.ReadAll > 1024){
                    io.ReadAll = io.ReadAll / 1024;
                    io.ReadAll = io.ReadAll.toFixed(2);
                    if (io.ReadAll > 1024){
                        io.ReadAll = io.ReadAll / 1024;
                        io.ReadAll = io.ReadAll.toFixed(2);
                        items += "<td>" + io.ReadAll + "GB</td>"
                    }else{
                        items += "<td>" + io.ReadAll + "MB</td>"
                    }
                    
                }else{
                    items += "<td>" + io.ReadAll + "KB</td>"
                }
                
                if (io.WriteAll > 1024){
                    io.WriteAll = io.WriteAll / 1024;
                    io.WriteAll = io.WriteAll.toFixed(2);
                    if (io.WriteAll > 1024){
                        io.WriteAll = io.WriteAll / 1024;
                    io.WriteAll = io.WriteAll.toFixed(2);
                        items += "<td>" + io.WriteAll + "GB</td>"
                    }else{
                        items += "<td>" + io.WriteAll + "MB</td>"
                    }
                    
                }else{
                    items += "<td>" + io.WriteAll + "KB</td>"
                }
            }
            $("#ioinfo").html(items);
        }
    });
 }


 function GetDiskInfo() {
    $.ajax({
        url: "/disk",
        type: "post",
        success: function (data) {
            // 硬盘信息更新
            $("#diskinfo").html("");
            var items = "";
            for (i in data) {
                var disk = data[i];
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
                if ("/" == disk.MountOn) {
                    $('#index').each(function() {
                        var meminfo = disk.IsUsed
                        meminfo = meminfo.replace("%", "");
                        var num = meminfo * 3.6;
                        num = num.toFixed(2)
                        $("#index").find('span').html(meminfo)
                        if (num<=180) {
                            $("#index").find('.right').css('transform', "rotate(" + num + "deg)");
                        } else {
                            $("#index").find('.right').css('transform', "rotate(180deg)");
                            $("#index").find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
                            };
                        });
                } 

                if ("/boot" == disk.MountOn) {
                    $('#boot').each(function() {
                        var meminfo = disk.IsUsed
                        meminfo = meminfo.replace("%", "");
                        var num = meminfo * 3.6;
                        num = num.toFixed(2)
                        $("#boot").find('span').html(meminfo)
                        if (num<=180) {
                            $("#boot").find('.right').css('transform', "rotate(" + num + "deg)");
                        } else {
                            $("#boot").find('.right').css('transform', "rotate(180deg)");
                            $("#boot").find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
                            };
                        });
                }
            }
        },
    });
}

function getCpuInfo(){
    $.ajax({
        url:"/",
        type: "post",
        success: function (data) {
            $('#cpu').each(function() {
                var cpu =  100 - data.CpuFree;
                cpu = cpu.toFixed(2);
                var num = cpu * 3.6;
                num = num.toFixed(1)
                $("#cpu").find('span').html(cpu)
                if (num<=180) {
                    $("#cpu").find('.right').css('transform', "rotate(" + num + "deg)");
                } else {
                    $("#cpu").find('.right').css('transform', "rotate(180deg)");
                    $("#cpu").find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
                    };
                });

        },
    });
}
function getMemInfo(){
    $.ajax({
        url:"/",
        type: "post",
        success: function (data) {
            $('#mem').each(function() {
                var memused = (data.MemUsed / data.MemTotal) * 100;
                memused = memused.toFixed(2);
                var num = memused * 3.6;
                num = num.toFixed(2)
                $("#mem").find('span').html(memused)
                if (num<=180) {
                    $("#mem").find('.right').css('transform', "rotate(" + num + "deg)");
                } else {
                    $("#mem").find('.right').css('transform', "rotate(180deg)");
                    $("#mem").find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
                    };
                });

        },
    });
}
$(
    function(){
        GetDiskInfo()
        getMemInfo()
    }
)
window.setInterval(GetInfo,1000)
window.setInterval(getCpuInfo,1000)
window.setInterval(getMemInfo,2000)
window.setInterval(GetDiskInfo,1000*60)