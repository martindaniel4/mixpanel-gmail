$(document).ready(function() {

        var api_key = '**';
        var api_secret = '**';
        var where = 'properties["$email"] == "martindaniel4@gmail.com"';

        var expire = new Date('2014', '12', '24').getTime() / 1000 + 3600;

        var sig = calcMD5("api_key=" + api_key + "expire=" + expire + "where=" + where + api_secret);

        var path = 'https://mixpanel.com/api/2.0/engage?api_key=' + api_key + "&expire=" + expire + "&where=" + where;
        path = path + "&sig=" + sig;
        
$.getJSON('http://mixpanel.com/api/2.0/engage/?callback=?', {
            event: event,
            api_key: api_key,
            expire: expire,
            where: where,
            sig: sig
        }, function (result) {
            console.log(result);
        });
});


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
  var url = 'https://api.twitter.com/1/trends/daily.json?exclude=hashtags';
  xhr.open('GET', url, true);
  xhr.send();
};