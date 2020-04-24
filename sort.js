var inputs = [];

function saveInput(){
  var userInput = document.getElementById('userInput').value;
  inputs.push(userInput);
  console.log(inputs);
  document.getElementById('userInput').value=" ";
}

function sortArray() {
 sortedArray = inputs.sort(function (a, b) {
    return a - b;
  })
  document.getElementById("demo").innerHTML = sortedArray; 

}