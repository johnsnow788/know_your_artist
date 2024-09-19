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



function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_8a8d18x";
    const templateID = "template_jr83hfp";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
  
      })
      .catch(err=>console.log(err));
  
  }
