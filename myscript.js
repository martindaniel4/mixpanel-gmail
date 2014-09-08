
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


// Insert widget in Gmail

function injectProfileWidget(){

	var exp = $(".acZ").find(".gD"),
		email_exp = exp.attr("email");

  waitForElement(exp, function(el) {

    //addCustomSidebarElement(el);
  
  	exp.on("mouseover",function() {console.log("mixpanel-gmail hovered on : "+email_exp);})


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
