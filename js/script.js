
const $leftInput = $('#leftInput');
const $rightInput = $('#rightInput');
const $leftImage = $('#char1Img');
const $rightImage = $('#char2Img');
const $charName1 = $('#charName1')
const $charName2 = $('#charName2')
const $fullName = $('#full-name');
const $intelligence = $('#intelligence');
const $strength = $('#strength');
const $speed = $('#speed');
const $durability = $('#durability');
const $power = $('#power');
const $combat = $('#combat');
const $alignment = $('#alignment');
const $gender = $('#gender');
const $race = $('#race');
const $height = $('#height');
const $weight = $('#weight');
const $eyeColor = $('#eye-color');
const $hairColor = $('#hair-color');
const $birthPlace = $('#birthplace');
const $occupation = $('#occupation');
const $base = $('#base');
const $affiliation = $('#affiliation');
const $relatives = $('#relatives');

let apiData;
const $leftCharList = $('#leftCharList');
const leftCharList = document.getElementById('leftCharList');
let selectText;

function handleGetNames(event) {
    event.preventDefault();

    leftInput = $leftInput.val();
    
    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + leftInput
    }).then((data) => {
                apiData = data;
                render();
                console.log(apiData.results);
                // forEach loop to append to <select>
                apiData.results.forEach(element => {
                    let option = $('<option>');
                    option.addClass("option");
                    $leftCharList.append(option.text(element.name));
                });
            },(error) => {
                console.log("Character not found", error);
            }
        );
}

function handleSelect(event) {
    select = event.target;
    selectText = select.value;
    console.log(selectText);


    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + selectText
    }).then((data) => {
                apiData = data;
                render();
                console.log(apiData);
                console.log(apiData.results);

            },(error) => {
                console.log("Character not found", error);
            }
        );
}



// render function. Renders/returns apiData.results 
function render() {

    $leftImage.attr('src', apiData.results[0].image["url"]);
    $charName1.text("Alias: " + apiData.results[0].name);
    $fullName.text("Full Name:    " + apiData.results[0].biography['full-name']);
    $intelligence.text("Intelligence:    " + apiData.results[0].powerstats.intelligence);
    $strength.text("Strength:    " + apiData.results[0].powerstats.strength);
    $speed.text("Speed:    " + apiData.results[0].powerstats.speed);
    $durability.text("Durability:    " + apiData.results[0].powerstats.durability);
    $power.text("Power:    " + apiData.results[0].powerstats.power)
    $combat.text("Combat:    " + apiData.results[0].powerstats.combat)
    $alignment.text("Alignment:    " + apiData.results[0].biography.alignment)
    $gender.text("Gender:    " + apiData.results[0].appearance.gender)
    $race.text("Race:    " + apiData.results[0].appearance.race)
    $height.text("Height:    " + apiData.results[0].appearance.height)
    $weight.text("Weight:    " + apiData.results[0].appearance.weight)
    $eyeColor.text("Eye Color:    " + apiData.results[0].appearance['eye-color'])
    $hairColor.text("Hair Color:    " + apiData.results[0].appearance['hair-color'])
    $birthPlace.text("Birthplace:    " + apiData.results[0].biography['place-of-birth'])
    $occupation.text("Occupation:    " + apiData.results[0].work['occupation']);
    $base.text("Base:    " + apiData.results[0].work.base);
    $affiliation.text("Affiliation:    " + apiData.results[0].connections['group-affiliation']);
    $relatives.text("Relatives:    " + apiData.results[0].connections.relatives);
}



$('#leftForm').on('submit' , handleGetNames);

leftCharList.addEventListener('input', handleSelect);