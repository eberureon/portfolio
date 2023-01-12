import Vue from 'vue'

Vue.mixin({
  methods: {
    submitContactForm () {
      const form = document.querySelector('form')
      const url = 'https://ynm902zoa2.execute-api.eu-west-1.amazonaws.com/dev/static-site-mailer'
      const submit = document.querySelector('.contact-form__submit')

      const success = () => {
        submit.insertAdjacentHTML('beforebegin', '<p class="formResponse" style="color:#2E7D32;background-color:#E6F4EA;border:1px solid #2E7D32;font-size:1.2rem">Danke für Ihre Nachricht</p>')
        submit.blur()
        setTimeout(function () {
          document.querySelector('.formResponse').remove()
          submit.disabled = false
        }, 5000)
        form.reset()
      }

      const error = () => {
        submit.insertAdjacentHTML('beforebegin', '<p class="formResponse" style="color:#E21A11;background-color:#ffefef;border:1px solid #E21A11;font-size:1.2rem;">Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</p>')
        setTimeout(function () {
          document.querySelector('.formResponse').remove()
          submit.disabled = false
        }, 5000)
        console.error('an error occured while submitting');
      }

      form.onsubmit = (e) => {
        e.preventDefault()

        const req = new XMLHttpRequest()
        req.open('POST', url, true)
        req.setRequestHeader('Accept', 'application/json; charset=utf-8')
        req.setRequestHeader('Content-Type', 'application/json; charset=utf-8')

        const payload = {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value
        }

        submit.disabled = true
        if (document.getElementById('honeypot').value || req.status >= 400) {
          error()
        } else if (form.name.value && form.email.value && form.message.value) {
          success()
          req.send(JSON.stringify(payload))
        }
      }
    }
  }
})
