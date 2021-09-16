
const $leftInput = $('#leftInput');
const $rightInput = $('#rightInput');
const $charName1 = $('#charName1')
const $charName2 = $('#charName2')
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
let apiData;
const $leftCharList = $('#leftCharList');
let option;


function handleGetData(event) {
    event.preventDefault();

    leftInput = $leftInput.val();
    
    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + leftInput

    }).then(
        (data) => {
            apiData = data;
            render();
            // console.log(apiData);
            console.log(apiData.results);

            apiData.results.forEach(element => {
                let option = $('<option>');
                option.addClass("option");
                optionText = element.name;
                option.html = optionText
                $leftCharList.append(option);
                

                // console.log(option);



            });


        },
        (error) => {
            console.log("Character not found", error);
            
        }
    );
    // console.log(leftInput);
}

function render() {
    $charName1.text(apiData.results[0].name);
    $intelligence.text(apiData.results[0].powerstats.intelligence);
    $strength.text(apiData.results[0].powerstats.strength);
    // $speed.text(apiData.results[0].powerstats.speed);
    // $durability.text(apiData.results[0].powerstats.durability);
    // $power.text(apiData.results[0].powerstats.power)

}



$('#leftForm').on('submit' , handleGetData);



