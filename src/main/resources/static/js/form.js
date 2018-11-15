/*
 * jquery 初始化form插件，传入一个json对象，为form赋值 
 * version: 1.0.0-2013.06.24
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013
 * note:  1、此方法能赋值一般所有表单，但考虑到checkbox的赋值难度，以及表单中很少用checkbox，这里不对checkbox赋值
 *		  2、此插件现在只接收json赋值，不考虑到其他的来源数据
 *		  3、对于特殊的textarea，比如CKEditor,kindeditor...，他们的赋值有提供不同的自带方法，这里不做统一，如果项目中有用到，不能正确赋值，请单独赋值
 */
(function ($) {
    $.fn.extend({
        initForm: function (options) {
            //默认参数
            var defaults = {
                jsonValue: options,
                isDebug: false	//是否需要调试，这个用于开发阶段，发布阶段请将设置为false，默认为false,true将会把name value打印出来
            }
            //设置参数
//			var setting = $.extend({}, defaults, options);
            var setting = $.extend({}, defaults);
            var form = this;
            jsonValue = setting.jsonValue;

            //如果传入的json字符串，将转为json对象
            if ($.type(setting.jsonValue) === "string") {
                jsonValue = $.parseJSON(jsonValue);
            }
            //如果传入的json对象为空，则不做任何操作
            if (!$.isEmptyObject(jsonValue)) {
                //var debugInfo = "";
                $.each(jsonValue, function (key, value) {
                    //是否开启调试，开启将会把name value打印出来
//					if(setting.isDebug){
//						alert("name:"+key+"; value:"+value);
//						debugInfo += "name:"+key+"; value:"+value+" || ";
//					}
                    var formField = form.find("[name='" + key + "']");
                    if ($.type(formField[0]) === "undefined") {
                        if (setting.isDebug) {
                            alert("can not find name:[" + key + "] in form!!!");	//没找到指定name的表单
                        }
                    } else {
                        var fieldTagName = formField[0].tagName.toLowerCase();
                        if (fieldTagName == "input") {
                            if (formField.attr("type") == "radio") {
                                $("input:radio[name='" + key + "'][value='" + value + "']").attr("checked", "checked");
                            } else {
                                formField.val(value);
                            }
                        } else if (fieldTagName == "select") {
//							$(".selector").find("option[value='"+value+"']").attr("selected",true);
                            formField.find("option[value='" + value + "']").attr("selected", true);
//							formField.val(value);
                        } else if (fieldTagName == "textarea") {
                            //do something special
                            formField.val(value);
                        } else if (fieldTagName == "checkbox") {
                            //do something special
                            formField.val(value);
                        } else {
                            formField.val(value);
                        }
                    }
                })
                if (setting.isDebug) {
                    alert(debugInfo);
                }
            }
            return form;	//返回对象，提供链式操作
        }
        , clearForm: function () {
            var form = this;

            $(':input', form).each(function () {
                var type = this.type;
                var tag = this.tagName.toLowerCase(); // normalize case
                // it's ok to reset the value attr of text inputs,
                // password inputs, and textareas\tag == 'textarea'
                if (type == 'text' || type == 'password' || tag == 'textarea' || tag == 'email')
                    this.value = "";
                // checkboxes and radios need to have their checked state
                // cleared

                // but should *not* have their 'value' changed

                else if (type == 'checkbox' || type == 'radio')
                    this.checked = false;
                // select elements need to have their 'selectedIndex' property
                // set to -1
                // (this works for both single and multiple select elements)
                else if (tag == 'select')
                    this.selectedIndex = 0;
                //this.selectedIndex = -1;

            });

//			};
        }
        , addCssForReadOnly: function () {
            var form = this;
//		$('input').attr("readonly",true)//将input元素设置为readonly
//		$('input').attr("readonly",false)//去除input元素的readonly属性
//		$('input').attr("disabled",true)//将input元素设置为disabled
//		$('input').attr("disabled",false)//去除input元素的disabled属性
            $(':input', form).each(function () {
                var type = this.type;
                var tag = this.tagName.toLowerCase(); // normalize case
                var name = this.name;
                if ('' != name && name.length > 0) {
                    if ('input' == tag) {
                        $("input[name='" + name + "']").css("background", "#FFFFFF");
                        $("input[name='" + name + "']").css("border-color", "#FFFFFF");
                        $("input[name='" + name + "']").css("border", "0px");
                    } else if ('textarea' == tag) {
                        $("textarea[name='" + name + "']").css("background", "#FFFFFF");
                        $("textarea[name='" + name + "']").css("border-color", "#FFFFFF");
                        $("textarea[name='" + name + "']").css("border", "0px");
                    }
                }
            });
        }
        , removeCssForReadOnly: function (options) {//移除属性
            var form = this;
//		$('input').attr("readonly",true)//将input元素设置为readonly
//		$('input').attr("readonly",false)//去除input元素的readonly属性
//		$('input').attr("disabled",true)//将input元素设置为disabled
//		$('input').attr("disabled",false)//去除input元素的disabled属性
            $(':input', form).each(function () {
                var type = this.type;
                var tag = this.tagName.toLowerCase(); // normalize case
                var name = this.name;
                if ('' != name && name.length > 0) {
                    if ('input' == tag) {
                        $("input[name='" + name + "']").css("background", null);
                        $("input[name='" + name + "']").css("border-color", null);
                        $("input[name='" + name + "']").css("border", "0px");
                    } else if ('textarea' == tag) {
                        $("textarea[name='" + name + "']").css("background", null);
                        $("textarea[name='" + name + "']").css("border-color", null);
                        $("textarea[name='" + name + "']").css("border", "0px");
                    }
                }
            });
        }
        //此函数只为需求详情提供[主要是为了资料文档做处理]
        , loadFormForRequestFile: function (options) {
            //默认参数
            var defaults = {
                jsonValue: options,
                isDebug: false	//是否需要调试，这个用于开发阶段，发布阶段请将设置为false，默认为false,true将会把name value打印出来
            }
            //设置参数
            var setting = $.extend({}, defaults);
            var form = this;
            jsonValue = setting.jsonValue;
            //如果传入的json字符串，将转为json对象
            if ($.type(setting.jsonValue) === "string") {
                jsonValue = $.parseJSON(jsonValue);
            }
            //如果传入的json对象为空，则不做任何操作
            if (!$.isEmptyObject(jsonValue)) {
                $.each(jsonValue, function (key, value) {
                    var formField = form.find("[name='" + key + "']");
                    if ($.type(formField[0]) === "undefined") {
                        if (setting.isDebug) {
                            alert("can not find name:[" + key + "] in form!!!");	//没找到指定name的表单
                        }
                    } else {
                        var fieldTagName = formField[0].tagName.toLowerCase();

                        if (fieldTagName == "input") {
                            if (formField.attr("type") == "radio") {
                                $("input:radio[name='" + key + "'][value='" + value + "']").attr("checked", "checked");
                            } else {

                                if ('projectName' == key) {
//								$("#divShowProjectName").empty();
                                    $("#divShowProjectName").append(value);
                                } else if ('projectNumber' == key) {
                                    $("#divShowProjectNumber").empty();
                                    $("#divShowProjectNumber").append(value);
                                } else if ('applyName' == key) {
                                    $("#divShowApplyName").empty();
                                    $("#divShowApplyName").append(value);
                                } else if ('applyEmail' == key) {
                                    $("#divShowApplyEmail").empty();
                                    $("#divShowApplyEmail").append(value);
                                } else if ('applyPhone' == key) {
                                    $("#divShowApplyPhone").empty();
                                    $("#divShowApplyPhone").append(value);

                                    $("#divShowApplyPhone").attr("contenteditable", "true");
                                } else if ('reviewStatus' == key) {
                                    $("#divShowReviewStatus").empty();
                                    $("#updateButton").empty();
                                    if ('00' == value) {
                                        $("#divShowReviewStatus").append('未审核');
//									updateButton
                                        $("#updateButton").append('修改');
                                    } else if ('01' == value) {
                                        $("#divShowReviewStatus").append('已审核');
                                        $("#updateButton").append('无法修改');
                                    }
                                } else {
                                    formField.val(value);
                                }
                            }
                        } else if (fieldTagName == "select") {
                            formField.find("option[value='" + value + "']").attr("selected", true);
                        } else if (fieldTagName == "textarea") {
                            if ('filePath' == key) {
                                $("#divShowFilePath").empty();
                                var temp = value.split(";");
                                var show = "";
                                $.each(temp, function (index, data) {
                                    show += index + 1 + ". " + data + "<br>";
                                });
                                $("#divShowFilePath").append(show);
//							formField.val(show);
                            } else if ('taskRequire' == key) {
//							$("#divShowTaskRequire").empty();
//							$("#divShowTaskRequire").append("<code>"+value+"</code>");
                                $("#divShowTaskRequire").append(value);
//							formField.val(value);
                            } else if ('projectDescribe' == key) {
                                $("#divShowProjectDescribe").empty();
                                $("#divShowProjectDescribe").append(value);
                            }
                        } else if (fieldTagName == "checkbox") {
                            //do something special
                            formField.val(value);
                        } else {
                            formField.val(value);
                        }
                    }
                })
                if (setting.isDebug) {
                    alert(debugInfo);
                }
            }
            return form;	//返回对象，提供链式操作
        }


    });
})(jQuery)