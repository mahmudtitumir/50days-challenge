let rectangle = document.getElementById("rectangle");
function moving(event) {
  if (event.x > innerWidth / 2)
    rectangle.style.left = `${
      window.innerWidth / 2 + (event.x - window.innerWidth / 2)
    }px`;
  else {
    rectangle.style.left = `${
      window.innerWidth / 2 - (window.innerWidth / 2 - event.x)
    }px`;
  }
}
window.addEventListener("mousemove", moving);
