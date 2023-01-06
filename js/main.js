//* DOM Beginners
// * Select an Element
// var titleAnimalOne = document.getElementById('animalName3');
// titleAnimalOne.innerHTML = "Burung Badak";
// var buttonPrimary = document.getElementsByTagName('a');
// buttonPrimary[2].innerHTML = "Sold Out";
// var buttonPrimary = document.querySelectorAll('a.btn-view-details');
// var stocks = false;
// for (let i = 0; i < buttonPrimary.length; i++) {
//     if (!stocks) {
//         buttonPrimary[i].innerHTML = "Sold Out";
//         buttonPrimary[i].classList.add('btn-danger');
//         buttonPrimary[i].classList.remove('btn-primary');
//         buttonPrimary[i].classList.add('disabled');
//     }
// }

var setAnimals = document.getElementById("animals");
var i = 0;

function saveAnimals() {
  animalName = document.getElementById("name").value;
  animalPrice = document.getElementById("price").value;
  animalPict = document.getElementById("picture").value;

  i++;
  setAnimals.innerHTML +=
    `<div class="col-lg-3 col-md-6 col-sm-6 col-12">
    <img src="` +
    animalPict +
    `"
        alt="" class="img-fluid h-50">
    <h3 class="mt-3">` +
    animalName +
    `</h3>
    <p>Rp` +
    animalPrice +
    `</p>
    <p>
        <a href="#" class="btn-view-details btn btn-primary w-100">
            View Details
        </a>
        <a href="#" class="mt-2 btn btn-secondary w-100">
            Buy Now
        </a>
    </p>
</div>
`;
  animalName = document.getElementById("name").value = "";
  animalPrice = document.getElementById("price").value = "";
  animalPict = document.getElementById("picture").value = "";
}
