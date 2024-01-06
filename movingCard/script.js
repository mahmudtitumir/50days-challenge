const rectangle = document.querySelector("#rectangle");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

rectangle.addEventListener(
  "mousemove",
  throttleFunction((position) => {
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imageDiv");

    imgDiv.style.left = position.clientX + "px";
    imgDiv.style.top = position.clientY + "px";
    let createImg = document.createElement("img");
    createImg.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1703364342344-135b38cedcac"
    );

    imgDiv.appendChild(createImg);
    document.body.appendChild(imgDiv);

    setTimeout(function () {
      imgDiv.remove();
    }, 2000);
  }, 400)
);
