//const currentdate = new Date(); 
//let today = currentdate.getDay();
//let container = document.getElementById('test');

//container.style.backgroundColor = 'hsl(10, 79%, 65%)';
let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');
let sun = document.getElementById('sun');
switch (new Date().getDay()) {
    case 1:
        mon.style.backgroundColor='hsl(186, 34%, 60%)';
        break;
    case 2:
        tue.style.backgroundColor='hsl(186, 34%, 60%)';
        break;
    case 3:
        wed.style.backgroundColor='hsl(186, 34%, 60%)';
        break;
    case 4:
        thu.style.backgroundColor='hsl(186, 34%, 60%)';
        break;
    case 5:
        fri.style.backgroundColor='hsl(186, 34%, 60%)';
        break;
    case 6:
        sat.style.backgroundColor='hsl(186, 34%, 60%)';
        break;
    case 0:
        sun.style.backgroundColor='hsl(186, 34%, 60%)';
}
