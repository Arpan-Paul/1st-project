var div = document.getElementById('mycv');
var display=0;

function openshow(){
    if(display==1){
        div.style.display='block';
        display=0;
        btn.textContent = 'Close Here';
    }
    else{
        div.style.display='none';
        display=1;
        btn.textContent = 'Open Here'
    }
}