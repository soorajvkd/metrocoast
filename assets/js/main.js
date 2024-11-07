$(document).ready(function () {
  let scrollTimeout;
  
  // Show scroll state and set click behavior
  $(".scrollState").click(function () {
    $(window).scrollTop(0);
  });

  document.addEventListener("scroll", () => {
    const scrollState = document.querySelector(".scrollState");

    // Show the scrollState element
    scrollState.classList.add("visible");

    // Clear the previous timeout if it's set
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set a timeout to hide the scrollState after scrolling stops
    scrollTimeout = setTimeout(() => {
      scrollState.classList.remove("visible");
    }, 1000); // Adjust the time in milliseconds as needed

    // Update the progress circle
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const progressCircle = document.querySelector(".progress");
    const circleCircumference = 126; // Should match the `stroke-dasharray` value
    progressCircle.style.strokeDashoffset = circleCircumference * (1 - scrollPercent);
  });
});


// Script to toggle menu
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu");
  const mobileHeader = document.querySelector(".mobileHeader");

  menuIcon.addEventListener("click", function () {
    mobileHeader.classList.toggle("active");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 980) {
      mobileHeader.classList.remove("active");
    }
  });
});

// product list expand script
const productList = document.getElementById("productList");
const productDropdown = document.getElementById("productDropdown");
const mobileProductHead = document.getElementById("mobileProductHead");
const mobileProductDropdown = document.getElementById("mobileProductDropdown");

// Toggle active class on click
productList.addEventListener("click", (e) => {
  e.stopPropagation();
  productDropdown.classList.toggle("active");
  productList.classList.toggle("active");
});

mobileProductHead.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileProductDropdown.classList.toggle("active");
  mobileProductHead.classList.toggle("active");
});

// Remove active class if clicked outside
document.addEventListener("click", (e) => {
  // Check if the click is outside the product and mobile dropdowns
  if (!productList.contains(e.target) && !productDropdown.contains(e.target)) {
    productDropdown.classList.remove("active");
    productList.classList.remove("active");
  }

  if (
    !mobileProductHead.contains(e.target) &&
    !mobileProductDropdown.contains(e.target)
  ) {
    mobileProductDropdown.classList.remove("active");
    mobileProductHead.classList.remove("active");
  }
});

// counter increase script
// Select all elements with the 'value' class
const counters = document.querySelectorAll(".count-box .value");

counters.forEach((counter) => {
  // Set target from the data-target attribute and ensure innerText starts at 0
  const target = +counter.getAttribute("data-target");
  counter.innerText = "0";

  // Function to animate the counter
  const updateCount = () => {
    const count = +counter.innerText; // Current count
    const increment = target / 100; // Increment per tick

    // Update the count if it is below the target
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20); // Adjust delay as needed
    } else {
      counter.innerText = target; // Set exact target to end the animation
    }
  };

  updateCount();
});

// Normal slider script
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true, // Enable auto-scroll
  autoplaySpeed: 2000, // Interval of 2 seconds between scrolls
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//partner slider script
$(".partnerSlider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  autoplay: true, // Enable auto-scroll
  autoplaySpeed: 2000, // Interval of 2 seconds between scrolls
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
