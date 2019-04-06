"use strict";

var navbar = document.querySelector(".navigation-nav-nav"),
  navbarItem = document.querySelectorAll(".navigation-nav-items"),
  button = document.querySelector(".navigation-nav > button"),
  ulList = document.querySelector(".navigation-nav-nav"),
  navInfo = document.querySelector(".nav-information"),
  navContact = document.querySelector(".nav-contact"),
  navigation = document.querySelector(".navigation"),
  header = document.querySelector(".header"),
  navCategory = document.querySelectorAll(".section-our-project-control-item"),
  category = document.querySelector(".section-our-project-control-category"),
  categoryBox = document.querySelectorAll(
    ".section-our-project-category > div"
  ),
  footerYear = document.getElementById("year"); // HEIGHT HEADER

function heightVH() {
  var totalAllNav =
      navInfo.clientHeight + navContact.clientHeight + navigation.clientHeight,
    total = document.documentElement.clientHeight - totalAllNav; // HEIGHT

  header.style.height = "".concat(total, "px");
};

// RESIZE HEIGHT IN WINDOW
window.onresize = heightVH; // CLICK BUTTON TOGGLE CLASS

button.onclick = function() {
  var toggleActive = "navigation-nav-toggle--active",
    navNav = "navigation-nav-nav--active";
  button.classList.toggle(toggleActive);
  ulList.classList.toggle(navNav);
}; // TOGGLE CLASS ACTIVE AND REMOVE CLASS ACTIVE FORM SIBLINGS

function test(array, parent) {
  var _loop = function _loop() {
    var cur = _Array$from[_i];

    // CLICK
    cur.onclick = function() {
      // LOOP IN CHILDERN
      for (var i = 0; i < parent.children.length; i++) {
        parent.children[i].classList.remove("active");
      } // ADD CLASS ACTIVE

      cur.classList.add("active");
    };
  };

  for (
    var _i = 0, _Array$from = Array.from(array);
    _i < _Array$from.length;
    _i++
  ) {
    _loop();
  }
} // RUNNING FUNCTION

var clickCategoryItem = test(navCategory, category),
  clickNavItem = test(navbarItem, navbar); // SHIFFEL IN CATEGORY

var _loop2 = function _loop2() {
  var cur = _Array$from2[_i2];
  // ADD EVENT LISTENER ON EVENT CLICK
  cur.addEventListener("click", function() {
    // GET ATTRIBUTES FORM CONTROL ITEMS
    var dataAttr = cur.getAttribute("data-category"); // LOOP VISIBLE DATA ATRIBUTES AND HIDDEN SIBLINGS

    for (
      var _i3 = 0, _Array$from3 = Array.from(categoryBox);
      _i3 < _Array$from3.length;
      _i3++
    ) {
      var current = _Array$from3[_i3];
      current.classList.contains(dataAttr)
        ? (current.style.opacity = 1)
        : (current.style.opacity = 0.3);
    }
  });
};

for (
  var _i2 = 0, _Array$from2 = Array.from(navCategory);
  _i2 < _Array$from2.length;
  _i2++
) {
  _loop2();
} // INCLUDE YEAR IN FOOTER

footerYear.textContent = new Date().getFullYear(); // VALIDATION FORM

var formFooter = document.forms["formFooter"],
  inputFooter = document.forms["formFooter"]["inputFooter"],
  submitFooter = document.forms["formFooter"]["submitFooter"],
  message = document.querySelector(".footer-message"); // EVENTS SUBMIT AND KEYUP

formFooter.onsubmit = validationForm;
formFooter.onkeyup = validationForm; // FUNCTION VALIDATION FORM

function validationForm(e) {
  var inputValue = inputFooter.value,
    pattern = new RegExp(/^[a-zA-Z]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,6}$/);

  if (inputValue == "") {
    // PREVENT DEFAULT
    e.preventDefault();
    message.textContent = "sorry must be write email";
  } else if (!pattern.test(inputValue)) {
    // PREVENT DEFAULT
    e.preventDefault();
    message.textContent =
      "sorry must be at lest 1 caracter and at less than 3 letter";
  } else {
    // CORRECT
    message.textContent = "correct";
  }
}
