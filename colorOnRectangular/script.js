/*
// sovle using gsap libery for mapping rgb color
let rectangle = document.getElementById("rectangle");

rectangle.addEventListener("mouseover", function (position) {
  let rectangleLocation = rectangle.getBoundingClientRect();
  let insideRectangle = position.clientX - rectangleLocation.left;

  if (insideRectangle < rectangleLocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insideRectangle
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation,
      255,
      0,
      insideRectangle
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(0,0,${blueColor})`,
    });
  }
});

rectangle.addEventListener("mouseleave", function () {
  gsap.to(rectangle, {
    backgroundColor: "white",
  });
});
*/

//
let rectangle = document.querySelector("#rectangle");
const { left, right } = rectangle.getBoundingClientRect();

rectangle.addEventListener("mousemove", (position) => {
  let DistanceFromCenter = (left + right) / 2 - position.clientX;

  let distanceInPercentage =
    (DistanceFromCenter / (right - (left + right) / 2)) * 100;

  let percentageForColor = 255 * (distanceInPercentage / 100);

  if (position.clientX <= (left + right) / 2) {
    rectangle.style.backgroundColor = `rgb(${percentageForColor},0,0)`;
  } else {
    rectangle.style.backgroundColor = `rgb(0,0,${percentageForColor * -1})`;
  }
});

rectangle.addEventListener("mouseleave", function () {
  rectangle.style.backgroundColor = "white";
});
