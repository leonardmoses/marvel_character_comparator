
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
// let option;
// let selectedOption;
// let select;
// let theInput;

function handleGetNames(event) {
    event.preventDefault();

    leftInput = $leftInput.val();
    
    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + leftInput

    }).then(
        // data parameter
        (data) => {
            apiData = data;
            render();
            // console.log(apiData);
            console.log(apiData.results);

            // forEach loop to append to <select>
            apiData.results.forEach(element => {
                let option = $('<option>');
                option.addClass("option");
                $leftCharList.append(option.text(element.name));
            });

        },
        // error parameter
        (error) => {
            console.log("Character not found", error);
            
        }
    );
 
    

    
}

/*
function handleGetData(event) {
    event.preventDefault();

    select = document.getElementById("select");
    select.onchange = function(){
        selectedOption = this.value; //returns the selected value
        alert(this.innerHTML); //returns the entire select with all the options
        let options = this.getElementsByTagName("option");
        let optionHTML = options[this.selectedIndex].innerHTML;  
        alert(optionHTML); //this is what I want, but it works now
    
    }

    $.ajax({
        url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + leftInput

    }).then(
        (data) => {
            render();
            console.log(apiData.results);
        },
        (error) => {console.log("Could not get Chacter or Stats");}

    );

    console.log(selectedOption);
}
*/


// render function. Renders/returns apiData.results 
function render() {
    $charName1.text(apiData.results[0].name);
    $intelligence.text(apiData.results[0].powerstats.intelligence);
    $strength.text(apiData.results[0].powerstats.strength);
    // $speed.text(apiData.results[0].powerstats.speed);
    // $durability.text(apiData.results[0].powerstats.durability);
    // $power.text(apiData.results[0].powerstats.power)
}



$('#leftForm').on('submit' , handleGetNames);


let A = document.getElementById('leftCharList');

A.addEventListener('input', handleSelect);

function handleSelect(event) {
    select = event.target;
    console.log(select.value);
}

function handleText(event) {
    theInput = event.target;
}

