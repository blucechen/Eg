﻿$(function(){
	var MODEFY="修改";
	var SAVE="保存";
	var ITEM_TEMPLATE='<div class="panel-row"><span class="item-text">未命名</span><input type="text" value="未命名"  class="item-editor"/> <a href="javascript:;" data-editor="false">'
	+MODEFY+'</a></div>';

	$("[data-additem]").click(function(){
		$(this).parent().before(ITEM_TEMPLATE);
		
	})
	$(".panel-row").on('click',"[data-editor='false']",function(){
		
		$(this).siblings(".item-text").hide();
		$(this).siblings(".item-editor").show();
		$(this).html(SAVE);
		$(this).attr('data-editor','true');
		
	});
	$(".panel-row").on('click',"[data-editor='true']",function(){
		
		var text=$(this).siblings(".item-text");
		var editor=$(this).siblings(".item-editor");
		text.html(editor.val());
		text.show();
		editor.hide();
		$(this).attr('data-editor','false');
		$(this).html(MODEFY);
		
	});
})