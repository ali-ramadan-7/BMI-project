let weight = document.getElementById('weight');
let height = document.getElementById('height');
let poutresult = document.getElementById('p-out-res');
let textresult = document.getElementById('p-out-t');
let hint = document.getElementById('hint');
let underWeight
let perfict
let overweight
let obesity
let obese

function use() {
    let result = (+(+weight.value / (+height.value /100)**2) .toFixed(2));
    
        if (result < 18) {
            textresult.innerHTML= ("You are underweight")
            hint.innerHTML= underWeight
        } else if (result < 25) {
            textresult.innerHTML= ("Your weight is perfect")
            hint.innerHTML= perfict
        } else if (result < 30) {
            textresult.innerHTML= ("You are overweight")
            hint.innerHTML= overweight
        } else if (result < 35) {
            textresult.innerHTML= ("You suffer from obesity of the first degree")
            hint.innerHTML= obesity
        } else if (result < 40) {
            textresult.innerHTML= ("You suffer from obesity of the second degree")
            hint.innerHTML= obesity
        } else if (result <= 65) {
            textresult.innerHTML= ("You are obese")
            hint.innerHTML= obese
        }

        if (isNaN(result) || result == Infinity || result < 10 || result > 65) {
            poutresult.innerHTML= "00.00"
            textresult.innerHTML= ("Please Valid Number")
            hint.innerHTML= ("Please enter a valid number")
        } else {
            poutresult.innerHTML= result            
        }
}


axios.get('/hint.json')
.then(function (response){
    underWeight = response.data.underWeight[Math.floor(Math.random()*response.data.underWeight.length)];
    perfict = response.data.perfict[Math.floor(Math.random()*response.data.perfict.length)];
    overweight = response.data.overweight[Math.floor(Math.random()*response.data.overweight.length)];
    obesity = response.data.obesity[Math.floor(Math.random()*response.data.obesity.length)];
    obese = response.data.obese[Math.floor(Math.random()*response.data.obese.length)];
    })
    .catch(function (error) {
        hint.innerHTML= "Error getting advice";
    })
