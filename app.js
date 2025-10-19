// template id: template_c5lxgqk
// service id: service_rcrs500worldwide
// user id: Weg1xuw2LnYP_gJTQ

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(`.modal__overlay--loading`);
  const success = document.querySelector(`.modal__overylay--success`);
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
