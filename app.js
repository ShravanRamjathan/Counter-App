// set initial count
let counter = 0;

// select value and buttons
const value = document.querySelector("#value"); // selecting the value, using # for id
const btns = document.querySelectorAll(".btn"); // this creates a notelist not an array, targeting all buttons

console.log(btns);

btns.forEach(function (btn) {
  // by saying btn, we accessing each button
  btn.addEventListener("click", function (e) {
    // this is the event listener for now the button, e refers to event object
    console.log(e.currentTarget.classList); // this says which current target we have when we click it

    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else if (styles.contains("reset")) {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = "Green";
    } else if (counter < 0) {
      value.style.color = "Red";
    } else {
      value.style.color = "Black";
    }
    value.textContent = counter;
  });
});
