// Create a random number
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";

  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();

  document.getElementById("display-pin").value = pin;
}

// Num-pad function
document.getElementById("keypad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("input-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

// Match pin with submit
function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const submitted = document.getElementById("input-numbers").value;
  const successMsg = document.getElementById("very-success");
  const failMsg = document.getElementById("very-fail");
  if (pin == submitted) {
    successMsg.style.display = "block";
    failMsg.style.display = "none";
  } else {
    successMsg.style.display = "none";
    failMsg.style.display = "block";
  }
}
