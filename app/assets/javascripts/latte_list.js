$(document).ready(function(){

var consumerKey = ENV['yelp_consumer_key'];
var consumerSecret = ENV['yelp_consumer_secret'];
var token = ENV['yelp_token'];
var tokenSecret = ENV['yelp_token_secret'];

$("#form").on('submit', function(event){
	event.preventDefault();
	location = $('#location').val();
	getList(location);
});

function getList(location){
	$.ajax({
		url: 'http://api.yelp.com/v2/search?term=coffee&location=' + location,
		method: 'GET',
		dataType: 'jsonp',
		success: function(data){

		}
	})
};

});
