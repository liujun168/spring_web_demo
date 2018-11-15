$(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        $(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);
    });
});
//通过javascript来启用标签页：
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

function activeProjectTab(num) {
    $('#myTab a[href="#tabs-' + num + '"]').tab('show') // Select tab by name
    if (num == 1) {

    } else if (num == 2) {
        loadTabs2();
    } else if (num == 3) {
        loadTabs3();
    } else if (num == 4) {
        loadTabs4();
    } else if (num == 5) {
        loadTabs5();
    } else if (num == 6) {
        loadTabs6();
    } else if (num == 7) {
        loadTabs7();
    } else if (num == 8) {
        loadTabs8();
    } else if (num == 9) {
        loadTabs9();
    }
}