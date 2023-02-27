# Header sample --FlexBox #1

date: 220228

__html__
```
<header class="site-header">
  <div class="container site-header-wapper">
    <a href="#" class="brand">kumihan.com</a>
    <nav class="global-nav">
      <button class="toggle-btn" aria-expanded="false" type="button">menu</button>
      <ul class="nav-wapper">
        <li class="nav-item"><a href="#">home</a></li>
        <li class="nav-item"><a href="#">about</a></li>
        <li class="nav-item"><a href="#">services</a></li>
        <li class="nav-item"><a href="#">works</a></li>
        <li class="nav-item"><a href="#">contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

__css__
```
@charset "UTF-8";

html {
  font-size: 15px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.site-header {
  position: relative;

  background-color: rgb(120, 255, 200);
}

.site-header-wapper,
.nav-wapper {
  display: flex;
  align-items: center;
}

.site-header-wapper {
  justify-content: space-between;
}

.site-header > .container {
  max-width: 1050px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
}

.brand {
  font-family: 'Anton', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
}

.global-nav a {
  font-size: .9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #555;
}

.nav-item:not(:first-of-type) {
  margin-left: 1rem;
}

@media screen and (max-width: 600px) {
  .nav-wapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    position: absolute;
    top: 100%;
    transform: translateY(-100%);
    left: 0;
    right: 0;

    background-color: rgb(90, 190, 150); 
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    transition: .2s;
  }

  .nav-wapper.active {
    padding-top: 2rem;
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-wapper > .nav-item {
    margin: 0 0 2rem 2rem;
  }
}

.toggle-btn {
  display: none;

  padding: .5rem .75rem;
  font-size: .75rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  background-color: rgb(70, 70, 255);
  border-radius: .3rem;
}

@media screen and (max-width: 600px) {
  .toggle-btn {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
  }
}
```

__js__
```
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
```