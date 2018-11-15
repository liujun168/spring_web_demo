var Common = {
    //EasyUI用DataGrid用日期格式化
    TimeFormatter: function (value, rec, index) {
        if (value == undefined || value == "") {
            return "";
        }
        //var v = new Date(value.time);  
        //return unixTimestamp.toLocaleString();  
        //var y = v.getFullYear();
        //var m = v.getMonth() + 1;if(m<10){m="0"+m;}
        //var d = v.getDate();if(d<10){d="0"+d;}
        //var h = v.getHours();if(h<10){h="0"+h;}
        //var i = v.getMinutes();if(i<10){i="0"+i;}
        //var s = v.getSeconds();if(s<10){s="0"+s;}

        var y = value.year + 1900;
        var m = value.month + 1;
        if (m < 10) {
            m = "0" + m;
        }
        var d = value.date;
        if (d < 10) {
            d = "0" + d;
        }
        var h = value.hours;
        if (h < 10) {
            h = "0" + h;
        }
        var i = value.minutes;
        if (i < 10) {
            i = "0" + i;
        }
        var s = value.seconds;
        if (s < 10) {
            s = "0" + s;
        }
        return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
    },
    progressbar: function (value, row, index) {
        //将后台的进度条的value进行拼接  *****
        var htmlstr = '<div class="progressbar-text" style="width:100px;">' + value + '</div><div class="progressbar-value" style="width:' + value + ';"> </div>';
        return htmlstr;
    }
    , DateFormatter: function (value, rec, index) {
        if (value == undefined || value == "") {
            return "";
        }
        //var v = new Date(value.time);  
        //return unixTimestamp.toLocaleString();  
        //var y = v.getFullYear();
        //var m = v.getMonth() + 1;if(m<10){m="0"+m;}
        //var d = v.getDate();if(d<10){d="0"+d;}
        //var h = v.getHours();if(h<10){h="0"+h;}
        //var i = v.getMinutes();if(i<10){i="0"+i;}
        //var s = v.getSeconds();if(s<10){s="0"+s;}

        var y = value.year + 1900;
        var m = value.month + 1;
        if (m < 10) {
            m = "0" + m;
        }
        var d = value.date;
        if (d < 10) {
            d = "0" + d;
        }
        var h = value.hours;
        if (h < 10) {
            h = "0" + h;
        }
        var i = value.minutes;
        if (i < 10) {
            i = "0" + i;
        }
        var s = value.seconds;
        if (s < 10) {
            s = "0" + s;
        }
        return y + '-' + m + '-' + d;
    },
    progressbar: function (value, row, index) {
        //将后台的进度条的value进行拼接  *****
        var htmlstr = '<div class="progressbar-text" style="width:100px;">' + value + '</div><div class="progressbar-value" style="width:' + value + ';"> </div>';
        return htmlstr;
    }
};