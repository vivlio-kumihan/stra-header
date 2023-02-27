const toggleBtn = document.querySelector(".toggle-btn")
const navWrapper = document.querySelector(".nav-wapper")
console.log(toggleBtn, navWrapper)

toggleBtn.addEventListener("click", () => {
  if (navWrapper.classList.contains("active")) {
    this.textContent = "menu"
    navWrapper.classList.remove("active")
  } else {
    this.textContent = "close"
    navWrapper.classList.add("active")
  }
})

// 意味を調べる
// this.setAttribute("aria-expanded", "true or false");
// this.setAttribute("aria-label", "menu or close menu");
