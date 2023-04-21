//your JS code here. If required.
// Get the button element
var button = document.querySelector("input[type='button']");

// Get the select element
var select = document.getElementById("colorSelect");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the selected option
  var selectedOption = select.options[select.selectedIndex];

  // Remove the selected option from the list
  select.removeChild(selectedOption);
});
