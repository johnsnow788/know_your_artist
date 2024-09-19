var Mabarre= document.querySelector('.barre')

barrevalue=0

function showbarre(){
  if(barrevalue==0){
    Mabarre.style.width = '30%'; 
    barrevalue = 1;
    Mabarre.classList.add('horizontal'); 
  }
}

function hidebarre(){
  if(barrevalue==1){
    Mabarre.style.width = '5%'; // modifié
    barrevalue = 0;
    Mabarre.classList.remove('horizontal'); // modifié
  }
}


