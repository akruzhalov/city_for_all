// Календарь
"use strict";
var selected_dates=[];
const clickCell = (event) => {
    let target = event.target;
    let input = document.getElementById('record-date');
    if(target.className=='cell active'){
    target.classList.remove('active');
    selected_dates.forEach(function(element){
        if(element==','+target.getAttribute('data-date')){
            selected_dates.splice(selected_dates.indexOf(element), 1)
        }
    });
    }else{
        target.classList.add('active');
        selected_dates.push(','+target.getAttribute('data-date'));
    }
    console.log(selected_dates);
    input.value=null;
    selected_dates.forEach(function(element){
        input.value+=element; 
    })
};

let cells = document.getElementsByClassName('cell');

for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', clickCell);
}

// Согласие на обработку персональных данных
function check() {
    var cb = document.getElementsByTagName('input'),
        L = cb.length - 1,
        f = true;
    for (; L >= 0; L--) {
        if (cb[L]['type'] == 'checkbox' && cb[L]['checked'] == true) {
            f = !f;
            break;
        }
    }
    document.getElementById('delButton').disabled = f;
}