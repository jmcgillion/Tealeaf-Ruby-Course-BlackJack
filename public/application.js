$(document).ready(function(){
	player_hit();
	player_stay();
	dealer_hit();
});

function player_hit() {
	$(document).on("click", "form#hit_form_input", function(){
    alert('My girl hits.');
    $.ajax({
    	type: "POST",
    	url: '/game/player/hit'
		}).done(function(msg){
			$("div#game").replaceWith(msg);
		});
		return false;
	});
}

function player_stay() {
	$(document).on("click", "form#stay_form_input", function(){ alert('The lady has elected to stay.');
    $.ajax({
    	type: "POST",
    	url: '/game/player/stay'
		}).done(function(msg){
			$("div#game").replaceWith(msg);
		});
		return false;
	});
}

function dealer_hit() {
	$(document).on("click", "form#dealer_hit_input", function(){alert("The 'big man' hits hard.");
    $.ajax({
    	type: "POST",
    	url: '/game/dealer/hit'
		}).done(function(msg){
			$("div#game").replaceWith(msg);
		});
		return false;
	});
}
