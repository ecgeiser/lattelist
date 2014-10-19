$(document).ready(function(){

	$("#search").on('submit', function(event){
		event.preventDefault();
		alert("submitted");
		searchTerm = $('#location').val();

		$.post('/search', { loc: searchTerm }, function(data){
			inactive = true;
			console.log(data);
		});
	});
});
