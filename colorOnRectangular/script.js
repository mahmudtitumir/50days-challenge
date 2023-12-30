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
