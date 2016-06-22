(function(){
	var apiML = "https://api.mercadolibre.com/sites/MLA/search?q=";
	var searchML = "";
	var themeProducts = "";
	function hide(element){
		$(element).hide('fast');
	}
	function insertLoading(element){
		var itemLoading = "<div class='itemLoadingML'>"+
						  "<div class='uil-pacman-css' style='-webkit-transform:scale(0.6)'><div><div></div></div><div><div></div></div><div><div></div></div></div>"+
						  "</div>";
		$(itemLoading).insertAfter(element);
	}
	function loadingHide(element) {
		$(element).fadeOut();
	}
	

	function formSubmit(input){
		$(input).submit(function(e){
			e.preventDefault();
			searchML = $(".form__Search input[type='text']").val();
			$.getJSON(apiML + searchML, data, false);
			hide($(".ml__Cover"));
			insertLoading($("header"));
			
			function data(data){
				console.log(data);
				loadingHide($(".itemLoadingML"));

				var arrProducts = data.results;

				arrProducts.map(function(data, indice, n){
					console.log(indice);
					themeProducts += "<article class='Products'>"+
							"<figure class='Products--Figure'>"+
								"<img src='"+data.thumbnail+"' alt='>"+
							"</figure>"+
							"<header class='Products--Header'>"+
								"<h2 class='title'>"+
									data.title +
								"</h2>"+
							"</header>"+
							"<div class='Products--Price'>"+
								"<h2 class='Price'>"+
									"$" + data.price+
								"</h2>"+
							"</div>"+
						"</article>";


				});
				
				$(".ml__Products").html(themeProducts).show();
			}

		});



	}

	formSubmit($(".form__Search"));

	
	

	



})();