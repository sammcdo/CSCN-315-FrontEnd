let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
    let codeValue = postalCode.value;
    let countryValue = country.value;

    place.value = "";
    region.value = "";

    fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => response.json())
    .then(json => {
        place.value = json.places[0]["place name"];
        region.value = json.places[0]["state abbreviation"];
    })
    .catch(error => console.log(error));
}