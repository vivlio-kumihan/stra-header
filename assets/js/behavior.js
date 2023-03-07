const gnavToggle = document.querySelector(".gnav_toggle")
const gnavWapper = document.querySelector(".gnav_wapper")
const toggleSearch = document.querySelector(".form_search dt")
const headerSearch = document.querySelector("#header_search")

gnavToggle.addEventListener("click", function () {
  if (gnavWapper.classList.contains("active")) {
    this.textContent = "menu"
  } else {
    this.textContent = "close"
  }
  gnavWapper.classList.toggle("active")
})

toggleSearch.addEventListener("click", () => {
  headerSearch.classList.toggle("active")
  headerSearch.setAttribute("placeholder", "サイト内検索")
})