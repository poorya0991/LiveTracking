
var request = new XMLHttpRequest()
var ssid = 'ssid'
var userID = 44
var orderiD = 968892
var typeID = 0
var lastID = 0


var url = 'https://www.service.darukade.com/API/Daruxi_GetDeliveryLocation'
url+='/'+ssid
url+='/'+userID
url+='/'+orderiD
url+='/'+typeID
url+='/'+lastID
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url, true)
// request.setRequestHeader('Access-Control-Allow-Origin','*');

// request.setRequestHeader('Content-type','application/json');
// request.setRequestHeader('Access-Control-Allow-Methods','GET');

request.send()
request.onload = function () {
    var data = JSON.parse(this.response)
    console.log(data)

    data.forEach((movie) => {
      // Log each movie's title
      console.log(movie.title)
    })
}

console.log(url)

// Send request
