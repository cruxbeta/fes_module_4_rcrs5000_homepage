// template id: template_c5lxgqk
// service id: service_rcrs500worldwide
// user id: Weg1xuw2LnYP_gJTQ

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20

//       BACKGROUND MOVEMENT
function moveBackground(event) {
    const shapes = document.querySelectorAll(`.shape`);
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i  = 0; i< shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const coolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`,`rotate(${x * oddInteger})`;
    }
}

// //          BUTTON MENU
// function openMenu() {
//     document.body.classList += ` menu--open`;
// }
// function closeMenu() {
//     document.body.classList.remove(`menu--open`)
// }

//        MODAL CONTACT

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += ` dark-theme`;
    }
    else {
        document.body.classList.remove(`dark-theme`);
    }
}

//        MODAL CONTACT

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(`.modal__overlay--loading`);
  const success = document.querySelector(`.modal__overlay--success`);
  loading.classList += ` modal__overlay--visible`;
  emailjs
    .sendForm(
      `service_rcrs500worldwide`,
      `template_c5lxgqk`,
      event.target,
      `Weg1xuw2LnYP_gJTQ`
    )
    .then(() => {
      loading.classList.remove(` modal__overlay--visible`);
      success.classList += ` modal__overlay--visible`;
    })
    .catch(() => {
      loading.classList.remove(` modal__overlay--visible`);
      alert(
        `The email service is temporarily unavailable. Please contact me directly at minisculebeta@gmail.com`
      );
    });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove(`modal--open`);
    }
    isModalOpen = true;
    document.body.classList += ` modal--open`;
}