console.log('welcome');
let audioElement=new Audio("des.mp3");
let gif=document.getElementById('gif');

let masterplay=document.getElementById("masterPlay");
let myProgressbar=document.getElementById("myProgressbar");

masterplay.addEventListener("click" ,()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
         gif.style.opacity=1;
     }
     else{
         audioElement.pause();
         
         masterplay.classList.remove('fa-pause-circle');
         masterplay.classList.add('fa-play-circle');
         gif.style.opacity=0;
     }
     

})




//listen to events

audioElement.addEventListener('timeupdate',()=>{
      console.log('timeupdate');
      progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
      myProgressbar.value=progress;
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressbar.value*audioElement.duration)/100;
})