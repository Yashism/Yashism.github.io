/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header');
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    // modalBtns2 = document.querySelectorAll('.services__button2'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i)=>{
  mb.addEventListener('click', ()=>{
    modal(i)
  })
})


modalClose.forEach((mc)=>{
  mc.addEventListener('click', ()=>{
    modalViews.forEach((mv)=>{
      mv.classList.remove('active-modal')
    })
  })
})


// Make the modal for btn2

const modalViews2 = document.querySelectorAll('.services__modal2'),
    modalBtns2 = document.querySelectorAll('.services__button2'),
    modalClose2 = document.querySelectorAll('.services__modal-close2')

let modal2 = function(modalClick2){
  modalViews2[modalClick2].classList.add('active-modal')
}

modalBtns2.forEach((mb2, i2)=>{
  mb2.addEventListener('click', ()=>{
    modal2(i2)
  })
})

modalClose2.forEach((mc2)=>{
  mc2.addEventListener('click', ()=>{
    modalViews2.forEach((mv2)=>{
      mv2.classList.remove('active-modal')
    })
  })
})



/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */ 

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork)) 


/*=============== Dark Mode ===============*/
// const chk = document.getElementById("chk");

// chk.addEventListener("change", () => {
//   document.body.classList.toggle("dark");
// });


const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  // document.body.classList.toggle(lightTheme);
  // themeButton.classList.toggle(iconTheme);
  // // We save the theme and the current icon that the user chose
  // localStorage.setItem("selected-theme", getCurrentTheme());
  // localStorage.setItem("selected-icon", getCurrentIcon());
  //Add an alert to let the user know that the theme has been changed
  alert("Please don't hurt your eyes!");
});


/*=============== SWIPER TESTIMONIAL ===============*/
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

