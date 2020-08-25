const submit = document.querySelector('#submit-button')
const totalCost = document.querySelector('#total')

submit.addEventListener('click', function (event) {
  event.preventDefault()
  const cost = price()
  totalCost.innerHTML = 'Total cost is: $ ' + cost
}
)
// new prices //

const today = new Date()

function price () {
  const dayHolder = document.querySelector('#start-date').value
  starting = new Date(dayHolder + 'T00:00')
  const weekDay = starting.getDay()
  const numOfDays = document.querySelector('#days').value
  let priceAdjust = 0
  for (x = 0; x < numOfDays; x++) {
    const check = weekDay + x + 1
    if ((check % 7) > 1) {
      priceAdjust += 5
    } else {
      priceAdjust += 7
    }
  }
  return priceAdjust
}

// validate cc //

function validateCardNumber (number) {
  var regex = new RegExp('^[0-9]{16}$')
  if (!regex.test(number))
    return false

  return luhnCheck(number)
}

function luhnCheck (val) {
  var sum = 0
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1))
    if (i % 2 === 0) {
      intVal *= 2
      if (intVal > 9) {
        intVal = 1 + (intVal % 10)
      }
    }
    sum += intVal
  }
  return (sum % 10) === 0
}

const creditCardNum = document.querySelector('#credit-card')
creditCardNum.addEventListener('change', function () {
  if (validateCardNumber(document.querySelector('#credit-card').value)) {
    creditCardNum.setCustomValidity('')
  } else {
    creditCardNum.setCustomValidity('Please enter a valid credit card number!')
  }
})

//

// parking date in future//
