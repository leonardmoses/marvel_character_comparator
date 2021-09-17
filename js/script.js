// Global Variables

//#region Left Variables
const $leftInput = $('#leftInput');
const $leftImage = $('#char1Img');
const $charName1 = $('#charName1')
const $fullName_left = $('#full-name_left');
const $intelligence_left = $('#intelligence_left');
const $strength_left = $('#strength_left');
const $speed_left = $('#speed_left');
const $durability_left = $('#durability_left');
const $power_left = $('#power_left');
const $combat_left = $('#combat_left');
const $alignment_left = $('#alignment_left');
const $gender_left = $('#gender_left');
const $race_left = $('#race_left');
const $height_left = $('#height_left');
const $weight_left = $('#weight_left');
const $eyeColor_left = $('#eye-color_left');
const $hairColor_left = $('#hair-color_left');
const $birthPlace_left = $('#birthplace_left');
const $occupation_left = $('#occupation_left');
const $base_left = $('#base_left');
const $affiliation_left = $('#affiliation_left');
const $relatives_left = $('#relatives_left');
const $leftCharList = $('#leftCharList');
const leftCharList = document.getElementById('leftCharList');
//#endregion

//#region right variables
const $rightInput = $('#rightInput');
const $rightImage = $('#char2Img');
const $charName2 = $('#charName2')
const $fullName_right = $('#full-name_right');
const $intelligence_right = $('#intelligence_right');
const $strength_right = $('#strength_right');
const $speed_right = $('#speed_right');
const $durability_right = $('#durability_right');
const $power_right = $('#power_right');
const $combat_right = $('#combat_right');
const $alignment_right = $('#alignment_right');
const $gender_right = $('#gender_right');
const $race_right = $('#race_right');
const $height_right = $('#height_right');
const $weight_right = $('#weight_right');
const $eyeColor_right = $('#eye-color_right');
const $hairColor_right = $('#hair-color_right');
const $birthPlace_right = $('#birthplace_right');
const $occupation_right = $('#occupation_right');
const $base_right = $('#base_right');
const $affiliation_right = $('#affiliation_right');
const $relatives_right = $('#relatives_right');
const $rightCharList = $('#rightCharList');
const rightCharList = document.getElementById('rightCharList');
//#endregion

let selectText; 

//#region AJAX functions for left side
// function for search input/submit and ajax data for name population
function handleGetNamesLeft(event) {
    event.preventDefault();

    leftInput = $leftInput.val();
    
    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + leftInput
    }).then((data) => {
                apiData = data;
                renderLeft();
                // $leftCharList.empty();
                // console.log(apiData.results);
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

// function for dropdown select and ajax data for stats
function handleSelectLeft(event) {
    select = event.target;
    selectText = select.value;
    console.log(selectText);


    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + selectText
    }).then((data) => {
                apiData = data;
                renderLeft();
                console.log(apiData);
                console.log(apiData.results);

            },(error) => {
                console.log("Character not found", error);
            }
        );
}

//#endregion

//#region AJAX functions for right side
// function for search input/submit and ajax data for name population
function handleGetNamesRight(event) {
    event.preventDefault();

    rightInput = $rightInput.val();
    
    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + rightInput
    }).then((data) => {
                apiData = data;
                renderRight();
                // $leftCharList.empty();
                // console.log(apiData.results);
                // forEach loop to append to <select>
                apiData.results.forEach(element => {
                    let option = $('<option>');
                    option.addClass("option");
                    $rightCharList.append(option.text(element.name));

                });
            },(error) => {
                console.log("Character not found", error);
            }
        );
}

// function for dropdown select and ajax data for stats
function handleSelectRight(event) {
    select = event.target;
    selectText = select.value;
    console.log(selectText);


    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + selectText
    }).then((data) => {
                apiData = data;
                renderRight();
                console.log(apiData);
                console.log(apiData.results);

            },(error) => {
                console.log("Character not found", error);
            }
        );
}
//#endregion

//#region left side render function. Renders/returns apiData.results 
function renderLeft() {
    $leftImage.attr('src', apiData.results[0].image["url"]);
    $charName1.text(apiData.results[0].name);
    $fullName_left.text("Full Name:    " + apiData.results[0].biography['full-name']);
    $intelligence_left.text("Intelligence:    " + apiData.results[0].powerstats.intelligence);
    $strength_left.text("Strength:    " + apiData.results[0].powerstats.strength);
    $speed_left.text("Speed:    " + apiData.results[0].powerstats.speed);
    $durability_left.text("Durability:    " + apiData.results[0].powerstats.durability);
    $power_left.text("Power:    " + apiData.results[0].powerstats.power)
    $combat_left.text("Combat:    " + apiData.results[0].powerstats.combat)
    $alignment_left.text("Alignment:    " + apiData.results[0].biography.alignment)
    $gender_left.text("Gender:    " + apiData.results[0].appearance.gender)
    $race_left.text("Race:    " + apiData.results[0].appearance.race)
    $height_left.text("Height:    " + apiData.results[0].appearance.height)
    $weight_left.text("Weight:    " + apiData.results[0].appearance.weight)
    $eyeColor_left.text("Eye Color:    " + apiData.results[0].appearance['eye-color'])
    $hairColor_left.text("Hair Color:    " + apiData.results[0].appearance['hair-color'])
    $birthPlace_left.text("Birthplace:    " + apiData.results[0].biography['place-of-birth'])
    $occupation_left.text("Occupation:    " + apiData.results[0].work['occupation']);
    $base_left.text("Base:    " + apiData.results[0].work.base);
    $affiliation_left.text("Affiliation:    " + apiData.results[0].connections['group-affiliation']);
    $relatives_left.text("Relatives:    " + apiData.results[0].connections.relatives);
}
//#endregion

//#region right side render function. Renders/returns apiData.results
function renderRight() {
    $rightImage.attr('src', apiData.results[0].image["url"]);
    $charName2.text(apiData.results[0].name);
    $fullName_right.text("Full Name:    " + apiData.results[0].biography['full-name']);
    $intelligence_right.text("Intelligence:    " + apiData.results[0].powerstats.intelligence);
    $strength_right.text("Strength:    " + apiData.results[0].powerstats.strength);
    $speed_right.text("Speed:    " + apiData.results[0].powerstats.speed);
    $durability_right.text("Durability:    " + apiData.results[0].powerstats.durability);
    $power_right.text("Power:    " + apiData.results[0].powerstats.power)
    $combat_right.text("Combat:    " + apiData.results[0].powerstats.combat)
    $alignment_right.text("Alignment:    " + apiData.results[0].biography.alignment)
    $gender_right.text("Gender:    " + apiData.results[0].appearance.gender)
    $race_right.text("Race:    " + apiData.results[0].appearance.race)
    $height_right.text("Height:    " + apiData.results[0].appearance.height)
    $weight_right.text("Weight:    " + apiData.results[0].appearance.weight)
    $eyeColor_right.text("Eye Color:    " + apiData.results[0].appearance['eye-color'])
    $hairColor_right.text("Hair Color:    " + apiData.results[0].appearance['hair-color'])
    $birthPlace_right.text("Birthplace:    " + apiData.results[0].biography['place-of-birth'])
    $occupation_right.text("Occupation:    " + apiData.results[0].work['occupation']);
    $base_right.text("Base:    " + apiData.results[0].work.base);
    $affiliation_right.text("Affiliation:    " + apiData.results[0].connections['group-affiliation']);
    $relatives_right.text("Relatives:    " + apiData.results[0].connections.relatives);
}
//#endregion


$('#leftForm').on('submit' , handleGetNamesLeft);
leftCharList.addEventListener('input', handleSelectLeft);

$('#rightForm').on('submit' , handleGetNamesRight);
rightCharList.addEventListener('input', handleSelectRight);