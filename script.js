function displayValue(num) {
  input.value += num;
}

function allClear() {
  input.value = "";
}

function calculation() {
  input.value = eval(input.value);
}

function backSpace() {
  input.value = input.value.slice(0, -1);
}
