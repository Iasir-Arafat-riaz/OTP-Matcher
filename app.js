function getPin() {
  const randomNumber = Math.round(Math.random() * 99999);
  const convertString = randomNumber + "";
  if (convertString.length == 5) {
    const generetPin = document.getElementById("pinGenValue");
    generetPin.value = convertString;
  } else {
    return getPin();
  }
}
//onclick function
function pinGenerator() {
  const pin = getPin();
}
document
  .getElementById("buttons")
  .addEventListener("click", function (numbers) {
    const number = numbers.target.innerText;
    const pinNumber = document.getElementById("pin");
    if (isNaN(number)) {
      if (number == "C") {
        pinNumber.value = "";
      }
    } else {
      const previousCalValue = pinNumber.value;
      pinNumber.value = previousCalValue + number;
    }
  });

//type Match function
function matching() {
  const generatePin = document.getElementById("pinGenValue").value;
  const typePin = document.getElementById("pin").value;
  const matched = document.getElementById("matched");
  const notMatched = document.getElementById("error");
  if (generatePin == typePin && generatePin!="") {
    matched.style.backgroundColor = "green";
    matched.style.display = "block";
    notMatched.style.display="none"
  } else {
    notMatched.style.backgroundColor = "red";
    notMatched.style.display = "block";
    matched.style.display = "none";
  }
}
