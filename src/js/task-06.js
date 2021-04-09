const input = document.querySelector("#validation-input");

input.addEventListener("change", onInputCheck);


function onInputCheck(inputText) {
  if (inputText.currentTarget.value.length == input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid")
  } else { 
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}