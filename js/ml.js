$(document).ready(function(){

	 var carousel = $(".myCarousel").carousel({"pagination": true});

	 

	 function nativeTab(tab1, tab2, clickItem, clickItem2) {

	 	function hide(hiddenTab){
	 		return $(hiddenTab).hide();
	 	}
	 	hide(tab2);

	 	function show(showTab){
	 		return $(showTab).show(0);
	 	}

	 	$(clickItem).click(function(){
	 		hide(tab1);
	 		$(this).parent().addClass('select');
	 		$("ul > li:first-child").removeClass('select');

	 		//ML SHOW QUESTIONS

	 		show(tab2);
	 	});

	 	$(clickItem2).click(function(){
	 		hide(tab2);
	 		$(this).parent().addClass('select');
	 		$("ul > li:last-child").removeClass('select');

	 		//ML SHOW DESCRIPTION

	 		show(tab1);
	 	});

	 }

	 nativeTab($("#description"), $("#questions"), $("a[href='#questions']"), $("a[href='#description']"));



});