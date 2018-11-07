$(document).ready(function() {

var menu = "close";
$(".menu-toggle").click(function() {
    
    if (menu === "close") {
      	$(".mobile-nav").css("transform", "translate(0, 0)");
     	 menu = "open";
    } else {
      	$(".mobile-nav").css("transform", "translate(-100%, 0)");
      	menu = "close";
    }
});


});