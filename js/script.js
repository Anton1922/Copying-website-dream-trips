$(document).ready(function(){

	var angle = 0;
	setInterval(function(){
		angle+=3;
		$(".rotate-endlessly").rotate(angle);
	},50);

	$(".rotate-360").rotate({
		bind: 
		{
			mouseover: function() {
				$(this).rotate({animateTo: 360})
			},
			mouseout: function() {
				$(this).rotate({animateTo: 0})
			}
		}
	});

	var rotation= function () {
		$(".rotate-quick").rotate({
			angle: 0,
			animateTo: 360,
			callback: rotation,
			easing: function (x,t,b,c,d) { 
				return c*(t/d)+b; 
			}
		});
	}
	rotation ();

});


//Telegram hidden block
$(document).ready(function(){
  var $btnTel = $(".button--telegram");
  var $btnTelOtTxt = $("#telegram--other-text");

  $btnTel.click(function() {
    $btnTelOtTxt.toggleClass("other");
    if ($btnTelOtTxt.hasClass("other")) {
      $btnTelOtTxt.html("Скрыть каналы");
    } else {
      $btnTelOtTxt.html("Показать все каналы");
    }
  });
});

$(document).ready(function(){
  var $btnTel = $(".button--telegram");
  var $telHid = $(".telegram--hidden");

  $btnTel.click(function() {
    $telHid.fadeToggle(1);
    $telHid.css("display", "flex");
  });
});

// Team hidden block
$(document).ready(function(){
  var $btnTeam = $(".button--team");
  var $teamOtTxt = $("#team--other-text");

  $btnTeam.click(function() {
    $teamOtTxt.toggleClass("other");
    if ($teamOtTxt.hasClass("other")) {
      $teamOtTxt.html("Скрыть профили");
    } else {
      $teamOtTxt.html("Показать все профили");
    }
  });
});

$(document).ready(function(){
  var $btnTeam = $(".button--team");
  var $teamHid = $(".team--hidden");

  $btnTeam.click(function() {
    $teamHid.fadeToggle(1);
    $teamHid.css("display", "flex");
  });
});

// Network Marketing hidden block
$(document).ready(function(){

  var $btnNetMark = $(".button--network-marketing");
  var $netMarkOtTxt = $("#network-marketing--other-text");

  $btnNetMark.click(function() {
    $netMarkOtTxt.toggleClass("other");
    if ($netMarkOtTxt.hasClass("other")) {
      $netMarkOtTxt.html("Скрыть видео");
    } else {
      $netMarkOtTxt.html("Показать все видео по сетевому маркетингу");
    }
  });
});

$(document).ready(function(){
  var $btnNetMark = $(".button--network-marketing");
  var $netMarkHid = $(".network-marketing--hidden");

  $btnNetMark.click(function() {
    $netMarkHid.fadeToggle(1);
    $netMarkHid.css("display", "flex");
  });
});
