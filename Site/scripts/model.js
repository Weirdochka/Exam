var c = false;
var rmod = 0;

function MOD3() {
  var ampermod = 2;
  var Emod= document.getElementById("Edsmod").value;
  var deliu = 0.1;
  var delou = 0.05;
  var delu = deliu + delou;

  
  if (rmod == "" || null) {
      rmod=0;
  }
  
  if (rmod >2500 ) {
      rmod=2500;
  }
  var voltmod = rmod/1000 * ampermod;
let start = Date.now(); // запомнить время начала

let timer = setInterval(function() {
// сколько времени прошло с начала анимации?
let timePassed = Date.now() - start;

if (timePassed >= 2000) {
  clearInterval(timer); // закончить анимацию через 2 секунды
  return;
}

// отрисовать анимацию на момент timePassed, прошедший с начала анимации
drawmod(timePassed);

}, 20);
// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function drawmod(timePassed) {

if(c==true){
voltmmod.textContent = voltmod + " вольт";
};
if(c==false){
voltmmod.textContent = Emod + " вольт";
};
ampermmod.textContent = ampermod + " ампер";
vrisistmod.textContent = (Emod - voltmod)/ampermod + " Ом";
deliU.textContent = deliu + "В";
deloU.textContent = delou + "В";
delU.textContent = delu + "В";

Eu.textContent = delu/voltmod;

Ee.textContent = Emod/(Emod*2);

Edds.textContent = Emod;
}


}

function cluch(id){
  
    
    if (document.getElementById(id).src.indexOf("images/kluch_off.png")>0){
    
    document.getElementById(id).src="images/kluch_on.png";
    c=true;  
    }else{
  
    document.getElementById(id).src="images/kluch_off.png";
    c = false;
    }
    
    }


    let thumb = slider.querySelector('.thumb');

    thumb.onmousedown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)

      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      // shiftY здесь не нужен, слайдер двигается только по горизонтали
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
        resmod.textContent=newLeft/1000 + "Ом";
        
        rmod=newLeft;
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };
    
