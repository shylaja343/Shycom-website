




// Landing SliderShow:
const list = document.querySelector('.slider .list');
const item = document.querySelectorAll('.slider .list .item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let active = 0;
let lengthItem = item.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItem){
        active = 0;
    }else{
        active = active + 1;
    }
    
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItem;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    let checkLeft = item[active].offsetLeft;
    list.style.left = -checkLeft + 'px'

    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000);

}

// ------------------------------------------------------------
// Scroll Up Button:

const scrollUpButton = document.getElementById('scroll-up');

window.onscroll = function(){
    scrollFunc();
};

function scrollFunc(){
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollUpButton.style.display = "block";
    }else{
        scrollUpButton.style.display = "none";
    }
};

function topScroll(){
    document.documentElement.scrollTop = 0;
};

// ------------------------------------------------------------
// Event Countdown:

const eventTime = new Date("Jan 1, 2025 15:30:00").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const duration = eventTime - now;

    // If the countdown is finished
    if(duration < 0){
        clearInterval(interval);
        updateDuration(0);
        return;
    }

    updateDuration(duration);

}, 1000);

function updateDuration(duration){

    //imp:
    // 1000 milliseconds = 1 second
    // 60 * 1000 milliseconds = 1 minute
    // 60 * 60 * 1000 milliseconds = 1 hour
    // 24 * 60 * 60 * 1000 milliseconds = 1 day

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

// ------------------------------------------------------------
// FAQs:

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});


function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
  
    let valid = true;
  
    // Validate Name
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    }
  
    // Validate Email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      valid = false;
    }
  
    // Validate Message
    if (message === "") {
      document.getElementById("messageError").textContent = "Message cannot be empty.";
      valid = false;
    }
  
    // If validation fails, prevent form submission
    if (!valid) {
      return false;
    }
  
    // Form is valid, show a success message (you can replace this with actual form submission)
    alert("Form submitted successfully!");
    return false; // Prevent actual form submission for demo purposes
  }
  
  function openChatbot() {
    let chatWindow = window.open(
        "https://chat.cxgenie.ai?aid=7e4bcba6-56fc-415e-9145-ec52b5dda440",
        "_blank", // Open in a new window
        "width=400,height=600"
    );
}



