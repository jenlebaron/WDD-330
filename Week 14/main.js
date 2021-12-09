
function getAPI(zipCode) {
    key = "a4fd3186f6d97b75024c22a19bc10f91";
    var lat = "";
    var lon = "";
    const xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            const myObj = JSON.parse(this.responseText);
            lat = myObj.coord.lat;
            lon = myObj.coord.lon;
            xmlhttp2.open("GET", "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key, true);
            console.log("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + key)
            xmlhttp2.send();
        }
    };
    const xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            const myObj = JSON.parse(this.responseText);
            document.getElementById("apiData").innerHTML = myObj.current.uvi;
            document.getElementById("temp").innerHTML = myObj.current.temp;
        }
    };
    xmlhttp1.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=" + key, true);
    xmlhttp1.send();
}

function getUvIndex(){
    getAPI(document.getElementById("zipcode").value);
}