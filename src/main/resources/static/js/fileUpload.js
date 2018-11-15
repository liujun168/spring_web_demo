$(function () {
    initFileInput();
//	initTable();
});

//初始化fileinput控件（第一次初始化）
function initFileInput() {
    var control = $('#showFilePath');
    control.fileinput({
        language: 'zh', //设置语言
        //uploadUrl: uploadUrl, //上传的地址
        //allowedFileExtensions : ['jpg', 'png','gif'],//接收的文件后缀
        showUpload: false, //是否显示上传按钮
        showCaption: true,//是否显示标题
        showPreview: false,//预览显示
        minFileCount: 1,
        browseClass: "btn btn-primary", //按钮样式             
        previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
        //msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
        browseClass: "btn btn-primary", //按钮样式     
        dropZoneEnabled: false,//是否显示拖拽区域
        //slugCallback: function(filename) {
        // return filename.replace('(', '_').replace(']', '_');
        //    },
        callBack: function (data) {
        }
    }).on("filebatchselected", function (event, files) {
        $('#divShowFileName').empty();
        $.each(files, function (index, data) {
            //alert(data.name);
            $('#divShowFileName').append(index + 1 + ".  " + data.name + "<br/>");
        });
    });
}

function showFileModel() {
    $('#importFileModal').modal('show');
}

function closeFileModal() {
    $('#importFileModal').modal('hide');
}

function fileFormatter(value, row, index) {
    //<img src="${ctx}/images/home/u599.png" alt="" />dd
//	return "<img src='"+ctx+"/images/file/u97.png' width='20' heigth='20'/>&nbsp;"+value;
    return value;
}

//表单提交[注意：必须引入文件：jquery-form.js]
function subimtForUploadFile() {
    var form = $("form[name=dataForm]");
    var options = {
        url: ctx + '/fileInfo/upload.do',
        type: 'post',
        success: function (data) {
            $("form")[0].reset();
            closeFileModal();
            $('#dataTable').bootstrapTable('refresh');
//           getRequsetManagePage();
            //toastr.error('Error');
        }
    };
    form.ajaxSubmit(options);
    //$("#dataForm").submit();  
}

function downLoadFile() {
    var selectRow = $('#dataTable').bootstrapTable('getSelections');
    if (selectRow.length < 1) {
        alert('请至少选择一行');
        return null;
    } else {
        var ids = [];
        $.each(selectRow, function (index, item) {
            ids.push(item.id);
        });
        var url = ctx + '/project/summary/down/downFile.do';
        window.open(url + "?ids=" + ids);
    }
}