//RESEARCH ON THE QUERY-SELECTOR
const menuIcon = document.querySelector("#menu-icons");
const navbar = document.querySelector(".navbar");

// RESEARCH ON THE ONCLICK EVENT
menuIcon.onclick = () => {
  // RESEARCH ON THE TOGGLE METHOD
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//BELOW IS THE WEB3 SMTP CODE FOR SENDING A GMAIL MESSAGE
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

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
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

const emailIcon = document.querySelector('.email-icon');
const emailIconA = document.getElementById('email-icon-a');

emailIconA.addEventListener('click', (e)=>{
  e.preventDefault();

  emailIconA.classList.toggle("bx-x")
  emailIcon.classList.toggle('show');
});

/*
/ START OF THE JAVASCRIPT hire() function CODE
const hire = document.querySelector("#hire");

hire.addEventListener("click", (e)=>{
  e.preventDefault();
  alert("Praise Allah for all of this neema");
  const hireBox = document.querySelector(".hire");
  prompt("Are you an Employer?");
  hireBox.classList.toggle("popup");
});
//END OF THE JAVASCRIPT hire() FUNCTION

//START OF THE CODE FOR CLOSING THE HIRE POP UP DIV
const closeDetails = document.getElementById("closeDetails");

closeDetails.addEventListener("click", ()=>{
  const hireMe = document.querySelector(".hire");
  hireMe.style.display = 'none';
  window.location.href = "index.html";
});
//END OF THE CODE
*/

let hireBox = document.querySelector(".hire");

function openHireBox(){
    hireBox.classList.add("popup");
}
function closeHireBox(){
  hireBox.classList.remove("popup");
}
