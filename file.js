const inputSearch=document.querySelector('#input')
const inputSpan=document.querySelector('#inputspan')
const searchicon=document.querySelector('#serch')
const harmburger=document.querySelector('#burgercon')
const burger=document.querySelector('#hiddenNav')
const logoburger=document.querySelector('#logoBuger')
const suggestionbox=document.querySelector('#suggestion-box')
const  nonetwork=document.querySelector('.nonetwork') 
const   moviecon=document.querySelector('#moviecon')
const   vidoecon=document.querySelectorAll('.videocon')
const   butt=document.querySelectorAll('.ii')
const   vidoe=document.querySelectorAll('#vidoe')
const vid=document.querySelector('#shows-click-vid');
const   body=document.querySelector('body')
 
const   playPause=document.querySelector('#playbutton-pausebutton')
const   playbtt=document.querySelector('.playbtt')
const   pausebtt=document.querySelector('.pausebtt')
const   showing=document.querySelector('#showingcon')
const riangle=document.querySelector ('.fa-angle-right');
const leftangle=document.querySelector('.fa-angle-left');
const listoption=document.querySelector('#gpd');
const listclass=document.querySelector('#listclass');
const video=document.querySelectorAll('.videocon');
//const   fastfwd=document.querySelector('#fastfwd')
harmburger.addEventListener('click',(e)=>{
   console.log('shooooting');
   burger.classList.add('left')
 document.querySelector('.moviecon').style.width='80%';
})


logoburger.addEventListener('click',(e)=>{

   burger.classList.remove('left')
   document.querySelector('.moviecon').style.width='93%';

   console.log('move');
})
console.log(harmburger   );
 
 
 
function connnection() {
   if(navigator.onLine) {
      moviecon.style.display='block'
      nonetwork.style.display='none'
      
   }
   else{
   console.log('u are offline');
   moviecon.style.display='none'
   nonetwork.style.display='flex'
   
   }
}
connnection()

 

window.onload= function (){
   vid.play()
   
 }

 

 
 //FORWARD THE VIDEO
 function fastfwd(value) {
   vid.currentTime+=value
 }
 function backfwd(value) {
   vid.currentTime-=value
 }
 document.addEventListener('keydown',e=>{
   switch(e.key.toLocaleLowerCase()){
      case'':
      case'k':
      particularSVG()
      break
   }
 })
 
   //PLAY AND PAUSE THE VIDEO
  
playPause.addEventListener('click',particularSVG)
vid.addEventListener('click',particularSVG)
function particularSVG() {
      
     vid.paused ? vid.play() :vid.pause();
   }
   vid.addEventListener('play',function() {
      showing.classList.remove('pause')
    })
    vid.addEventListener('pause',function() {
      showing.classList.add('pause')
    })


  

    //REFRESH THE VIDEO
 

 
 
 
 
for (let index = 0; index < vidoe.length; index++) {
   vidoe[index].addEventListener('mouseover',function() {
      console.log('yes it is');
     this.play();
   })
   vidoe[index].addEventListener('mouseleave',function() {
      this.pause()
      this.load()
    })
    vidoe[index].addEventListener('mouseenter',function() {
      this.play()
    })
} 
 

for (let index = 0; index < vidoecon.length; index++) {
   vidoecon[index].addEventListener('mouseover',function () {
      setTimeout((e) => {
         butt.forEach(e=>e.classList.add('show')) 
      }, 3000);
      
   })
}
 
let suggestion=[
   'affiliate marketing',
   'affiliate marketing',
   'affiliate marketing',
   'basics of python',
   'basics  programing language',
   'bags for sale',
   'enrol on admision',
   'event planning',
   'gas stations',
   'online vendors',
   'oil and gas',
 ]
let suggee=[]
inputSearch.addEventListener('input',function() {
   let inputValue=inputSearch.value
   suggestionbox.innerHTML=''

   if (inputValue.length) {
      suggee= suggestion.filter((items)=>{
         return items.toLowerCase().match(inputValue)
      })
      console.log(suggee);
   }

   renderResult(suggee)


   if (!inputValue.length) {
      suggestionbox.innerHTML=''
   }
})

function renderResult(item) {
   return  sug =suggee.map((item)=>{
      let creatediv=document.createElement('li')
      creatediv.innerHTML=item
      suggestionbox.append(creatediv)
   }) 
}

 
inputSearch.addEventListener('click',function() {
   console.log('red');
   if(inputSearch.focus()){   
    searchicon.style.display='none';
    
    inputSpan.classList.add('slide-slow')

    

   }
     
   else{
    searchicon.style.display='flex';
 
   }  
});
 


/*nonetwork.addEventListener('click',function() {
    

    
     searchicon.style.display='none'
     inputSearch.style.border='none'

})*/
  
body.addEventListener('click',function() {
    

    
   searchicon.style.display='none'
 

})
 

 
 









 /////ljjjj
  
 
 
for (let index = 0; index < vidoe.length; index++) {
   vid.setAttribute('src', 'vidoe[index]')
   console.log(vid);
   
}
let arr= [...video].forEach((e,index)=>{
   e.addEventListener('click',function (e) {
      
   })
})
 
console.log(arr);

 console.log(listclass.offsetLeft);      
 console.log(listoption.offsetLeft - listclass.offsetLeft );      

let count=0;
riangle.addEventListener('click',Carosel)
 function Carosel(rr) {
 if (rr.target===riangle) {
   count=(count < 15)? count +1:15;
   listoption.style.transform=`translateX(${count*-50}px )`
   showornt()
  }   
 
 }

 leftangle.addEventListener('click',Carosels)
 function Carosels(rr) {
 if (rr.target===leftangle) {
   count=(count > 0)? count - 1:0;
   listoption.style.transform=`translateX(${count*-50}px )`
   showornt()
 
  }    
  
   

 }

  
 

 
 

 
 

 


 