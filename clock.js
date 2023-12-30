const body=document.querySelector('body');
body.style.backgroundColor="grey";
const clock=document.querySelector('#clock');
setInterval(function(){
    const time=new Date();
    clock.innerHTML=time.toLocaleTimeString();
    
},1000)