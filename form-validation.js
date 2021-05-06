// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
       // if (!form.checkValidity()) { //因為不送出資料就不刷新畫面，不管有沒有填寫必要欄位都要停在原畫面，使用preventDefault
          event.preventDefault()
          event.stopPropagation()
       // }

        form.classList.add('was-validated')
      }, false)
    })
})()
