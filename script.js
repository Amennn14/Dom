const buttonsPlus = document.getElementsByClassName("fa-plus-square");
const buttonsMinus = document.getElementsByClassName("fa-minus-square");

for (let button of buttonsPlus) {
  button.addEventListener("click", function () {
    button.nextElementSibling.innerHTML++;
    somme();
  });
}

for (let button of buttonsMinus) {
  button.addEventListener("click", function () {
    if (button.previousElementSibling.innerHTML > 0) {
      button.previousElementSibling.innerHTML--;
      somme();
    }
  });
}

const trashs = document.getElementsByClassName("fa-trash-alt");
for (let trash of trashs) {
  trash.addEventListener("click", function () {
    trash.parentNode.remove();

    somme();
  });
}

function somme() {
  const quantity = document.getElementsByClassName("qte");
  const prices = document.getElementsByClassName("price");
  var sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    sum += quantity[i].innerHTML * prices[i].innerHTML;
  }
  return (document.getElementById("totalp").innerHTML =
    "Shopping Bag total : $" + sum);
}
const hearts = document.getElementsByClassName("fa-heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color === "red") {
      heart.style.color = "grey";
    } else {
      heart.style.color = "red";
    }
  });
}
