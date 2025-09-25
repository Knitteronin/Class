document.addEventListener("DOMContentLoaded", function () {
  const x = document.querySelectorAll("#notice a");
  const y = document.querySelector("#popup");
  const z = document.querySelector("#popup button");

  x.forEach((i) => {
    i.addEventListener("click", function () {
      y.style.display = "block";
    });
  });

  z.addEventListener("click", function () {
    y.style.display = "none";
  });

  const h2 = this.querySelectorAll("main h2");
  h2.forEach((i) => {
    i.addEventListener("click", () => {
      h2.forEach((j) => (j.style.background = "none"));
      i.style.background = "yellow";
    });
  });

  const img = document.querySelectorAll("main img");
  img.forEach((i) => {
    i.addEventListener("click", () => {
      img.forEach((j) => (j.style.borderRadius = 0));
      i.style.borderRadius = "50px";
    });
  });
});
