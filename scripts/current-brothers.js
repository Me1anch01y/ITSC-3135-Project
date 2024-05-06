$(document).ready(function () {
  fetch("https://me1anch01y.github.io/ITSC-3135-Project/officers.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const officers = document.getElementById("officers-grid");

      json.officers.forEach((officer) => {
        const officerDiv = document.createElement("div");
        officerDiv.classList = "grid-item slick-slide";

        const img = document.createElement("img");
        img.src = officer.image;
        img.alt = officer.img_alt;
        img.classList = "headshot";
        officerDiv.appendChild(img);

        const name = document.createElement("p");
        name.textContent = officer.name;
        officerDiv.appendChild(name);

        const role = document.createElement("p");
        role.textContent = officer.role;
        role.classList = "role";
        officerDiv.appendChild(role);

        officers.appendChild(officerDiv);
      });

      $("#officers-grid").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
      });
    });
});
