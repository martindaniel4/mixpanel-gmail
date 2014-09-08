
// Checker l'ouverture d'un email

var currentUrl = document.location.href;

var POLL_INTERVAL = 1000; 

setInterval(function(){

  if (document.location.href != currentUrl) {

    console.log("email ouvert");
    injectProfileWidget();
    currentUrl = document.location.href;
  
  } 
}, POLL_INTERVAL);


// Insert widget in sidebar of Gmail

function injectProfileWidget(){

	var exp = $(".acZ").find(".gD"),
		email_exp = exp.attr("email");

  waitForElement(exp, function(el) {

  	exp.on("mouseover",function() {

  		addElementSidebar(email_exp);

  	})


  });
}

// Console log au mouse over sur l'email du destinataire

function waitForElement(selector, callback) {

  var timer = setInterval(function() {

  	var el = selector;
 
    if (el) {
 		
      clearTimeout(timer);
      
      callback(el);

    }

   }, POLL_INTERVAL);
}

function addElementSidebar(element) {

	if (!$(".mixpanel-gmail-bar")[0]) {

	$("[role=complementary].nH").append("<div class='mixpanel-gmail-bar'>"+"ce bon vieux : "+element+"</div>");

	}

}