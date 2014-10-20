$(document).ready(function(){

	$("#search").on('submit', function(event){
		event.preventDefault();
		searchTerm = $('#location').val();

		$.post('/search', { loc: searchTerm }, function(data){
			console.log(data);
			console.log(data.businesses.length);
			$('#results').html('');
			for (var i = 0; i < data.businesses.length; i++) {
				console.log(data.businesses[i]);
				var coffeeShop = data.businesses[i];					
				var address = coffeeShop['location']['display_address'];

				if (address[2]) {
					var addressBlock = address[0] + '<br>' + address[1] + '<br>' + address[2];
				} else {
					var addressBlock = address[0] + '<br>' + address[1] + '<br> ';
				};

				$('#results').append("<div class='shop'><h3><a href='" + coffeeShop['url'] + "' target='_blank'>" + coffeeShop['name'] + "</a></h3><img src='" + coffeeShop['image_url'] + "'><p>" + addressBlock + "</p></div>");
			}
		});

		$('#location').val('');
	});
});