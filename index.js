import 'whatwg-fetch';

export default function main() {
  var bloggerEl = document.getElementById('bloggerSubmit')
  bloggerEl.onclick = function() { sendMail('blogger'); }
  var companyEl = document.getElementById('companySubmit')
  companyEl.onclick = function() { sendMail('company'); }
  console.log('this has loaded.')
  return
}

function sendMail(submitType) {
  console.log('clicked' + submitType)
  var body = {}
  if (submitType === 'blogger') {
    body = {
            to: 'blogs@inkanalytics.com',
            from: 'new-blogger@email.com',
            subject: document.getElementById('bloggerEmailField').value,
            text: document.getElementById('bloggerEmailField').value
          }
  } else if (submitType === 'company') {
    body = {
            to: 'companies@inkanalytics.com',
            from: 'new-company@email.com',
            subject: document.getElementById('companyEmailField').value,
            text: document.getElementById('companyCommentField').value
          }
  }
  fetch('https://9e8wpx5vg9.execute-api.us-east-1.amazonaws.com/v1/mail', {
          method: 'POST',
          mode: 'cors',
          headers: {  
            "Content-Type": "application/json",
          },
          body: JSON.stringify({body})
        })
}

main()