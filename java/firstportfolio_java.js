function fade() {
    $('.preloader').fadeOut("slow");
    }
        setTimeout(fade, 1000);

const theForm = document.querySelector('#the-form');
const emailInput = document.querySelector('.email-input'); //email-input
const messageInput = document.querySelector('.message-input'); //message-input

theForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(
    theForm, 
    emailInput.value, 
    messageInput.value
  )

  // code fragment
  var data = {
    service_id: 'service_ci033tm',
    template_id: 'template_b2qegqm',
    user_id: 'user_qLUFkcfXeTMwXAmfMYBlJ',
    template_params: {
      'to_name': 'Torrey Testing',
      'email': emailInput.value, 
      'message': messageInput.value
      // 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
  };
 
  axios('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    data: data,
  }).then(function() {
    alert('Your mail is sent!');
  }).catch(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  }) 
})
