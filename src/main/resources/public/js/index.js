let trackingId = document.getElementById("tracking-id");
let trackingIdNav = document.getElementById("tracking-id-nav");

let isCounterStarted;
let valueDisplays = document.querySelectorAll(".num");
let interval = 0.1;

function startCounter1() {
  let startValue = 0;
  let endValue = parseInt(valueDisplays[0].getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 234;
    valueDisplays[0].textContent = numberWithCommas(startValue) + "+";
    if (startValue > endValue) {
      valueDisplays[0].textContent = numberWithCommas(endValue) + "+";
      clearInterval(counter);
    }
  }, duration);
}

function startCounter2() {
  let startValue = 0;
  let endValue = parseInt(valueDisplays[1].getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 138;
    valueDisplays[1].textContent = numberWithCommas(startValue) + "+";
    if (startValue > endValue) {
      valueDisplays[1].textContent = numberWithCommas(endValue) + "+";
      clearInterval(counter);
    }
  }, duration);
}

function startCounter3() {
  let startValue = 0;
  let endValue = parseInt(valueDisplays[2].getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 123;
    valueDisplays[2].textContent = numberWithCommas(startValue) + "+";
    if (startValue > endValue) {
      valueDisplays[2].textContent = numberWithCommas(endValue) + "+";
      clearInterval(counter);
    }
  }, duration);
}

function startCounter4() {
  let startValue = 0;
  let endValue = parseInt(valueDisplays[3].getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 330;
    valueDisplays[3].textContent = numberWithCommas(startValue) + "+";
    if (startValue > endValue) {
      valueDisplays[3].textContent = numberWithCommas(endValue) + "+";
      clearInterval(counter);
    }
  }, duration);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 921) {
    if (!isCounterStarted) {
      isCounterStarted = true;
      startCounter1();
      startCounter2();
      startCounter3();
      startCounter4();
    }
  }
};

const swiper = new Swiper(".swiper-1", {
  // Optional parameters
  direction: "horizontal",
  speed: 3000,
  loop: true,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

const swiper2 = new Swiper(".swiper-2", {
  // Optional parameters
  direction: "horizontal",
  speed: 3000,
  loop: true,


  // If we need pagination
  pagination: {
    el: ".swiper-pagination-2",
  },

  //Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

const swiper3 = new Swiper(".swiper-3", {
  // Optional parameters
  direction: "horizontal",
  speed: 500,
  loop: true,

  autoplay: {
    delay: 2000,
  },


  // If we need pagination
  pagination: {
    el: ".swiper-pagination-2",
  },

  //Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "track-shipment") {
    track(trackingId);
  } else if (targetId == "track-shipment-nav") {
    track(trackingIdNav);
  }
});

function track(trackingNumber) {
  if (trackingNumber.value != "") {
    trackingNumber.parentElement.nextElementSibling.style.display = "none";
    location.href = `/tracker.html?tracking-id=${trackingNumber.value}`;
  } else {
    trackingNumber.parentElement.nextElementSibling.style.display = "block";
  }
}
