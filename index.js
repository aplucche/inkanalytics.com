import 'whatwg-fetch';

export default function main() {
  var bloggerEl = document.getElementById('bloggerSubmit')
  bloggerEl.onclick = function() { sendMail('blogger'); }
  var companyEl = document.getElementById('companySubmit')
  companyEl.onclick = function() { sendMail('company'); }
  return
}

function sendMail(submitType) {
  var body = {}
  var submitMessage = ''
  if (submitType === 'blogger') {
    body = {
            to: 'blogs@inkanalytics.com',
            from: 'new-blogger@email.com',
            subject: document.getElementById('bloggerEmailField').value,
            text: document.getElementById('bloggerEmailField').value
          }
    submitMessage = 'Thanks! You are now signed up to the mailing list.'
  } else if (submitType === 'company') {
    body = {
            to: 'companies@inkanalytics.com',
            from: 'new-company@email.com',
            subject: document.getElementById('companyEmailField').value,
            text: document.getElementById('companyCommentField').value
          }
    submitMessage = 'Thanks for signing up! Your message will be sent out to bloggers in the next mailing.'
  }
  fetch('https://9e8wpx5vg9.execute-api.us-east-1.amazonaws.com/v1/mail', {
          method: 'POST',
          mode: 'cors',
          headers: {  
            "Content-Type": "application/json",
          },
          body: JSON.stringify({body})
        })

  document.getElementById("companyForm").reset();
  document.getElementById("bloggerForm").reset();
  document.getElementById("submitMessage").innerHTML = submitMessage
  document.getElementById("formContainer").style.visibility = "hidden";

}

main()