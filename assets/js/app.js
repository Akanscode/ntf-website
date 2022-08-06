document.addEventListener("alpine:init", () => {
  Alpine.data("imageSlider", () => ({
    currentIndex: 1,
    images: [
      "https://media.istockphoto.com/vectors/nonfungible-token-pixel-portrait-vector-id1370501536?k=20&m=1370501536&s=612x612&w=0&h=KXLbqFpm_Xk2eMjykZjSYqB9QYDesKBMqjhNeo42064=",
      "https://cdn.pixabay.com/photo/2022/02/25/04/36/earth-7033554__340.jpg",
      "https://media.istockphoto.com/vectors/auction-people-at-the-art-exhibition-in-the-museum-buying-and-selling-vector-id1403625384?k=20&m=1403625384&s=612x612&w=0&h=AqyRsyfVJKlLgZQlsaOGvstOs2Nuc3ON5ZJk0d7urG0=",
      "https://cdn.pixabay.com/photo/2022/01/30/13/05/earth-6980848__340.jpg",
    ],
    previous() {
      if (this.currentIndex > 1) {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    forward() {
      if (this.currentIndex < this.images.length) {
        this.currentIndex = this.currentIndex + 1;
      }
    },
  }));
});

// counter
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  // setting the counter to zero
  counter.innerText = "0";
  // updating to get the initail value
  const updateCounter = () => {
    const targer = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = targer / 200;

    if (c < targer) {
      counter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = targer;
    }
  };
  updateCounter();
});

//login and register manuipulatiin

var main = document.querySelectorAll(".main");
var signup_page = document.querySelector(".signup");
var signin_page = document.querySelector(".signin");
var forgot_pass = document.querySelector(".forgot");
var forgot_slide = document.querySelector(".forgot_slide");
var login_main = document.querySelector(".login_main");
var close_forgot = document.querySelector(".close");
var login_click = document.querySelector(".login_click");
var all_inputs = document.querySelectorAll(".sign_input");
var log_eye = document.querySelector(".fa-eye-slash");
var log_in_pass = document.querySelector(".log_in_pass");
var logch_eye = document.querySelector(".log_eye");
var login_check = document.querySelector(".login_check");
var signup_main = document.querySelectorAll(".signup_page input");
var up_eye = document.querySelector(".up_eye");
var up_pass = document.querySelector(".up_pass");
var upch_eye = document.querySelector(".up_eye");

//adding function to toggle the hidden sign_up page whrn user cllick
signup_page.addEventListener("click", function () {
  main.forEach(function (pages) {
    pages.classList.toggle("hidden");
  });
});

// adding function to toggle the hidden sigin page anytime user click

signin_page.addEventListener("click", function () {
  main.forEach(function (pages) {
    pages.classList.toggle("hidden");
  });
});

// adding function to toggle the hidden forgot password
forgot_pass.addEventListener("click", function () {
  forgot_slide.classList.toggle("hidden");
  login_main.classList.add("hidden");
});

close_forgot.addEventListener("click", function () {
  forgot_slide.classList.toggle("hidden");
  login_main.classList.remove("hidden");
});

login_click.onclick = function () {
  all_inputs.forEach((e) => {
    e.classList.remove("warning");
    if (e.value.length < 1) {
      e.classList.add("warning");
    } else {
      e.classList.remove("warning");
    }
  });
};
all_inputs.forEach((e) => {
  e.addEventListener("keyup", function () {
    if (e.value.length < 1) {
      e.classList.add("warning");
    } else {
      e.classList.remove("warning");
    }
  });
});

//adding function to fa-eye-slash when user click to veiw hidden password
log_eye.onclick = function () {
  if (log_in_pass.type == "password") {
    log_in_pass.type = "text";
    log_eye.classList.remove("fa-eye-slash");
    logch_eye.classList.add("fa-eye");
  } else {
    log_in_pass.type = "password";
    log_eye.classList.add("fa-eye-slash");
    logch_eye.classList.remove("fa-eye");
  }
};
login_check.onclick = function () {
  login_check.classList.toggle("green");
};
member_btn.onclick = function () {
  signup_main.forEach((i) => {
    i.classList.remove("warning");
    if (i.value.length < 1) {
      i.classList.add("warning");
    }
  });
};
signup_main.forEach((i) => {
  i.addEventListener("keyup", function () {
    if (i.value.length > 0) {
      i.classList.remove("warning");
    }
  });
});

up_eye.onclick = function () {
  if (up_pass.type == "password") {
    up_pass.type = "text";
    up_eye.classList.remove("fa-eye-slash");
    upch_eye.classList.add("fa-eye");
  } else {
    up_pass.type = "password";
    up_eye.classList.add("fa-eye-slash");
    upch_eye.classList.remove("fa-eye");
  }
};
// function to check the strength of a password

function app() {
  return {
    passwordStrengthText: "",
    togglePassword: false,
    password: "",

    checkPassWordStrength() {
      var strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      var mediumRegex = new RegExp(
        "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      );
      let value = this.password;
      if (strongRegex.test(value)) {
        this.passwordStrengthText = "Strong password";
      } else if (mediumRegex.test(value)) {
        this.passwordStrengthText = "Could be stronger";
      } else {
        this.passwordStrengthText = "Too week";
      }
    },
  };
}
