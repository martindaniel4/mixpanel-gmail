
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

// Variables Mixpanel

var api_key = '**';
var api_secret = '**';
var where = 'properties["$email"] == "martindaniel4@gmail.com"';
var expire = new Date('2014', '12', '24').getTime() / 1000 + 3600;
var sig = calcMD5("api_key=" + api_key + "expire=" + expire + "where=" + where + api_secret);
var path = 'https://mixpanel.com/api/2.0/engage?api_key=' + api_key + "&expire=" + expire + "&where=" + where;
path = path + "&sig=" + sig;


// HTTP request to mixpanel URL

function callMixpanelAPI(callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        callback(null);
      }
    }
  }
  // Note that any URL fetched here must be matched by a permission in
  // the manifest.json file!
  var url = path;
  xhr.open('GET', url, true);
  xhr.send();
};

function onText(data) {
  // Only render the bar if the data is parsed into a format we recognize.

  console.log(data);

};