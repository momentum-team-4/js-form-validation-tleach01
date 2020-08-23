
let submit = document.querySelector('#submit-button');
let totalCost = document.querySelector('#total')



submit.addEventListener('click', function(){
let numOfDays = document.querySelector('#days').value
let cost = (numOfDays * 5)
totalCost.innerHTML = 'Total cost is: ' + '$ ' + cost;
}
)


//


