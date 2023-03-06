const toggleBtn = document.querySelector(".toggle-btn")
const navWrapper = document.querySelector(".nav-wapper")
const toggleSearch = document.querySelector(".header-form dt")
const headerSearch = document.querySelector(".header-form dd")
console.log(toggleSearch)
toggleBtn.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.textContent = "menu"
    navWrapper.classList.remove("active")
  } else {
    this.textContent = "close"
    navWrapper.classList.add("active")
  }
})

toggleSearch.addEventListener("click", () => {
  if (headerSearch.classList.contains("active")) {
    headerSearch.classList.remove("active")
  } else {
    headerSearch.classList.add("active")
  }
})

// 意味を調べる
// this.setAttribute("aria-expanded", "true or false");
// this.setAttribute("aria-label", "menu or close menu");
