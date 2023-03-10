const gnavToggle = document.querySelector(".gnav_toggle")
const gnavWapper = document.querySelector(".global-nav > ul")
const headerSearchToggle = document.querySelector(".search-icon_toggle")
const headerSearch = document.querySelector(".search_form dd")

gnavToggle.addEventListener("click", function () {
  console.log(gnavToggle)
  console.log(gnavWapper)
  gnavWapper.classList.toggle("active")
})

headerSearchToggle.addEventListener("click", () => {
  console.log(headerSearchToggle)
  console.log(headerSearch)
  headerSearch.classList.toggle("active")
})