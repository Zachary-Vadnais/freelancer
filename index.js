/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


function rdmFreelancer (){
    const freeLancerNames = Math.floor(Math.random()*5);
    const freeLancerOcc = Math.floor(math.random()*5);
    const freeLancerRate = math.floor(math.random()* 180) +20
    const soloFreeLancer = {
    name: NAMES [freeLancerNames],
    occupation: OCCUPATIONS [freeLancerOcc],
    price: freeLancerRate,
}
    return soloFreeLancer;
}
let allLancers = Array.from ({length: NUM_FREELANCERS},rdmFreelancer);

let sum = 0;
for (const lancer of allLancers) { 
    sum = sum + lancer.price;
}
const meanRate = sum / NUM_FREELANCERS;

function soloFL(flStats) {
    const {name,occupation,price} = flStats;

    const $soloFreeLancer = document.createElement("figure");
    $soloFreeLancer.classList.add("single");
    $soloFreeLancer.innerhtml = `
        <p>Name: ${name}</p>
        <p>occupation: ${occupation}</p>
        <p>Price: ${price}</p>`;
return $soloFreeLancer;
}

function FLArray() {
  const $FLArray = document.createElement("article");
  $FLArray.classList.add("lancers");
  const $contents = allLancers.map(OneFL);
  $FLArray.replaceChildren(...$contents);
  return $FLArray;
}
function avgRate(){
    const $avgDisplay = document.createElement("section");
    $avgDisplay.replaceChildren(...meanRate);
    return $avgDisplay;
}

function render(){
    const $app = document.querySelector("#app");
    $app.innerHTML = `
    <h1>FreeLancers<h1>
    <FLArray></FLArray>
    <avgRate></avgRate>
    `;
    $app.querySelector("FLArray").replaceWith(FLArray());
    $app.querySelector("avgRate").replaceWith(avgRate());
}
render();