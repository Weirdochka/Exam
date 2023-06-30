function ANI() {
    document.getElementById('reost').style.display='';
    document.getElementById('reostat').style.display='';
    document.getElementById('voltm').style.display='';
    document.getElementById('amperm').style.display='';
    document.getElementById('voltm_img').style.display='';
    document.getElementById('amperm_img').style.display='';
    document.getElementById('cluch_img').style.display='';
    document.getElementById('bat').style.display='';

    document.getElementById('pr1').style.display='';
    document.getElementById('pr2').style.display='';
    document.getElementById('pr3').style.display='';
    document.getElementById('pr4').style.display='';
    document.getElementById('pr5').style.display='';
    document.getElementById('pr6').style.display='';
    document.getElementById('pr7').style.display='';
    document.getElementById('pr8').style.display='';
    document.getElementById('pr9').style.display='';
}

function ANI2() {
   
    document.getElementById('reost').style.display='none';
    document.getElementById('reostat').style.display='none';
    document.getElementById('voltm').style.display='none';
    document.getElementById('amperm').style.display='none';
    document.getElementById('voltm_img').style.display='none';
    document.getElementById('amperm_img').style.display='none';
    document.getElementById('cluch_img').style.display='none';
    document.getElementById('bat').style.display='none';

    document.getElementById('pr1').style.display='none';
    document.getElementById('pr2').style.display='none';
    document.getElementById('pr3').style.display='none';
    document.getElementById('pr4').style.display='none';
    document.getElementById('pr5').style.display='none';
    document.getElementById('pr6').style.display='none';
    document.getElementById('pr7').style.display='none';
    document.getElementById('pr8').style.display='none';
    document.getElementById('pr9').style.display='none';

}

function ANI3() {
    var amper = 2;
    var E= document.getElementById("Eds").value;
    var r = document.getElementById("resist").value;
    if (r == "" || null) {
        r=0;
    }
    
    if (r >2500 ) {
        r=2500;
    }
    var volt = r/1000 * amper;
let start = Date.now(); // запомнить время начала

let timer = setInterval(function() {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // закончить анимацию через 2 секунды
    return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);

}, 20);
// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function draw(timePassed) {
  reost.style.left = (timePassed / 300) * r/100  - 265 + 'px';
  voltm.textContent = volt + " вольт";
  amperm.textContent = amper + " ампер";
  vrisist.textContent = (E - volt)/amper + " Ом";
  
}


}

