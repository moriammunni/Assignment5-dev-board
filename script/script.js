
function changeBackgroundColor() {
  const colors = ["#F0F8FF", "#FAEBD7", "#E6E6FA", "#FFD700", "#98FB98", "#FFB6C1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);

document.getElementById('new-today')
  .addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='./main.html'
  })
