// SOCIAL NAVIGATION
const socialLinks = document.querySelectorAll('.social-nav a');

const onSocialLinkFocus = (focusedLink) => {
  socialLinks.forEach((link) => {
    link.style.opacity = 0.25;
  });
  focusedLink.style.opacity = 1;
};

socialLinks.forEach((link) => {
  ['focus', 'mouseover'].forEach((event) => {
    link.addEventListener(event, () => onSocialLinkFocus(link));
  });
});

const onSocialLinkBlur = () => {
  socialLinks.forEach((link) => {
    link.style.opacity = 1;
  });
};

socialLinks.forEach((link) => {
  ['blur', 'mouseout'].forEach((event) => {
    link.addEventListener(event, () => onSocialLinkBlur());
  });
});

// HAMBURGER MENU
const hamburgerMenu = document.querySelector('.site-nav');

const trapHamburgerMenuFocus = (e) => {
  const tabIsPressed = e.key === 'Tab' || e.keyCode === 9;
  const focusableElements = hamburgerMenu.querySelectorAll('a[href], button');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  if (tabIsPressed) {
    // shift + tab
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  }
};

const openHamburgerMenu = () => {
  const hamburgerMenuCloseButton = document.getElementById(
    'hamburgerNavCloseButton'
  );

  hamburgerMenu.classList.add('-open');
  hamburgerMenuCloseButton.focus();
  hamburgerMenu.addEventListener('keydown', (e) => trapHamburgerMenuFocus(e));
};

const closeHamburgerMenu = () => {
  hamburgerMenu.classList.remove('-open');
  hamburgerMenu.removeEventListener('keydown', (e) =>
    trapHamburgerMenuFocus(e)
  );
};

// SITE NAVIGATION
const siteNavLinks = document.querySelectorAll('.site-nav-links a');
const clearActiveLinkStyles = () => {
  siteNavLinks.forEach((link) => link.classList.remove('-active'));
};
const addActiveLinkStyles = (activeLink) => {
  activeLink.classList.add('-active');
};

siteNavLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();

    clearActiveLinkStyles();
    addActiveLinkStyles(link);

    if (hamburgerMenu.classList.contains('-open')) {
      closeHamburgerMenu();
    }

    window.location.href = link.getAttribute('href');
  })
);

// COPYRIGHT YEAR
const copyrightYearElement = document.getElementById('copyrightYear');
const currentYear = new Date().getFullYear();

copyrightYearElement.innerHTML = currentYear;

// FAQ ACCORDION
const faqContent1 = document.getElementById('faq-1');
const faqContent2 = document.getElementById('faq-2');
const faqContent3 = document.getElementById('faq-3');
const faqContent4 = document.getElementById('faq-4');
const faqContent5 = document.getElementById('faq-5');
const faqContent6 = document.getElementById('faq-6');
const faqContent7 = document.getElementById('faq-7');
const faqContent8 = document.getElementById('faq-8');
const faqContent9 = document.getElementById('faq-9');
const faqContent10 = document.getElementById('faq-10');
const faqContent11 = document.getElementById('faq-11');
const faqContent12 = document.getElementById('faq-12');
const faqContent13 = document.getElementById('faq-13');
const faqContent14 = document.getElementById('faq-14');
const faqContent15 = document.getElementById('faq-15');
const faqContent16 = document.getElementById('faq-16');
const faqDetailsArray = document.getElementsByClassName('faq-details');

// const isOpen = document
// click event toggle on summary element that changes the "+" to a "-" and vice versa
// faqDetailsArray.forEach((li) => {
// // check if faqContent has open attribute
// li.addEventListener('click', () => {
//   // if so, show - button
//   // else, show + button
// });

// const onFaqContentClick = (button) => {
//   socialLinks.forEach((link) => {
//     link.style.opacity = 0.25;
//   });
//   button.style.opacity = 1;
// };

// socialLinks.forEach((link) => {
//   ['focus', 'mouseover'].forEach((event) => {
//     link.addEventListener(event, () => onSocialLinkFocus(link));
//   });
// });
