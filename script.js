document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const price = document.querySelector(".price");
  const views = document.querySelector(".views");
  const monthlybill = document.querySelector(".monthlybill");
  const yearlybill = document.querySelector(".yearlybill");
  const toggle = document.getElementById("toggle");

  function updatePrice() {
    const sliderValue = parseInt(slider.value);

    if (!toggle.checked) {
      if (sliderValue === 0) {
        price.innerHTML = "$8.00 <span class='time'>/ month</span>";
        views.innerHTML = "10K PAGEVIEWS";
      } else if (sliderValue === 25) {
        price.innerHTML = "$12.00 <span class='time'>/ month</span>";
        views.innerHTML = "50K PAGEVIEWS";
      } else if (sliderValue === 50) {
        price.innerHTML = "$16.00 <span class='time'>/ month</span>";
        views.innerHTML = "100K PAGEVIEWS";
      } else if (sliderValue === 75) {
        price.innerHTML = "$24.00 <span class='time'>/ month</span>";
        views.innerHTML = "500K PAGEVIEWS";
        price.style.marginLeft = "130px";
      } else if (sliderValue === 100) {
        price.innerHTML = "$36.00 <span class='time'>/ month</span>";
        views.innerHTML = "1M PAGEVIEWS";
      }
    } else {
      if (sliderValue === 0) {
        price.innerHTML = "$6.00 <span class='time'>/ month</span>";
        views.innerHTML = "10K PAGEVIEWS";
      } else if (sliderValue === 25) {
        price.innerHTML = "$9.00 <span class='time'>/ month</span>";
        views.innerHTML = "50K PAGEVIEWS";
      } else if (sliderValue === 50) {
        price.innerHTML = "$12.00 <span class='time'>/ month</span>";
        views.innerHTML = "100K PAGEVIEWS";
      } else if (sliderValue === 75) {
        price.innerHTML = "$18.00 <span class='time'>/ month</span>";
        views.innerHTML = "500K PAGEVIEWS";
        price.style.marginLeft = "130px";
      } else if (sliderValue === 100) {
        price.innerHTML = "$27.00 <span class='time'>/ month</span>";
        views.innerHTML = "1M PAGEVIEWS";
      }
    }
  }

  function billLength() {
    if (toggle.checked) {
      monthlybill.style.color = "#888c96";
      yearlybill.style.color = "#10d5c2";
    } else {
      monthlybill.style.color = "#10d5c2";
      yearlybill.style.color = "#888c96";
    }
  }

  slider.addEventListener("input", updatePrice);
  toggle.addEventListener("change", () => {
    updatePrice();
    billLength();
  });
});
