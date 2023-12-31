let cursor = document.querySelector("body");
let rectangle = document.getElementById("#rectangle");
/*
cursor.addEventListener("mousemove", function (position) {
  if (position.x > this.innerWidth / 2) {
    rectangle.style.left = ` ${
      window.innerWidth / 2 + Math.pow(positionx - window.innerWidth / 2, 0.9)
    }px`;
  } else {
    rectangle.style.right = `${
      window.innerWidth / 2 - Math.pow(window.innerWidth / 2 - event.x, 0.9)
    }px`;
  }
  // } else {
  //   rectangle.style.right = `${
  //     window.innerWidth / 2 - Math.pow(position.x - window.innerWidth / 2, 0.9)
  //   }px`;
  // }
});
*/
cursor.addEventListener("mousemove", (event) => {
  console.log(event.x);
  if (event.x > innerWidth / 2)
    rectangle.style.left = `${
      window.innerWidth / 2 + Math.pow(event.x - window.innerWidth / 2, 0.9)
    }px`;
  else {
    rectangle.style.left = `${
      window.innerWidth / 2 - Math.pow(window.innerWidth / 2 - event.x, 0.9)
    }px`;
  }
});
