//RESEARCH ON THE QUERY-SELECTOR
const menuIcon = document.querySelector("#menu-icons");
const navbar = document.querySelector(".navbar");

// RESEARCH ON THE ONCLICK EVENT
menuIcon.onclick = () => {
  // RESEARCH ON THE TOGGLE METHOD
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//BELOW IS THE WEB3 SMTP

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.innerHTML = "Please Wait...";

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
       'Accept': 'application/json'
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something Went Wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
    console.log(json);
});