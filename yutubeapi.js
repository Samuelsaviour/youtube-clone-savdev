    let Api_key="AIzaSyCtlb5sEQ-cXbSXUwcZqFKSh4ifgVfvwJY"
        let videohttp=" https://www.googleapis.com/youtube/v3/videos?"
        let videochannel="https://www.googleapis.com/youtube/v3/channels?"
        
        const videiocon=document.getElementById('mainmoviecon')
        fetch(videohttp + new URLSearchParams({
            key:Api_key,
            part:'snippet',
            chart:'mostPopular',
            maxResults:70,
            regionCode:'NI'
        })).then(res=>res.json())
        .then(data=>data.items.forEach(item => {
            getchannelicon(item)
        }))


        const getchannelicon=(itemi)=>{
            fetch(videochannel + new URLSearchParams({
                key:Api_key,
                part:'snippet',
                id:itemi.snippet.channelId
            })).then(res=>res.json())
            .then(data=>{
                itemi.channelThumbnail=data.items[0].snippet.thumbnails.default.url
                 makevideo(itemi)
            })

            const makevideo=(video)=>{
                videiocon.innerHTML+=`
                  
                <div class="videocon" id="videocon" data-dott="..." onclick='location.href="https://youtube.com/watch?v=${video.id}"'>
           <img  src=" ${video.snippet.thumbnails.high.url}" alt="" class="thumbnail">
         <div class="channelImgcon">
        <img src="${video.channelThumbnail}" alt="" class="chanelimg">
        <div class="text">
            <p class="tt">${video.snippet.title}</p>
        </div>
    </div>
</div>

		 `
                
				
            }
         
        }
const inputt=document.getElementById('input');
const proceed=document.getElementById('proceed')

proceed.addEventListener('click',function() {
    if (inputt.value.length) {
        location.href=` https://www.youtube.com/results?search_query=${inputt.value}`
    }
    inputt.value=''
})
/*
const harmburger=document.querySelector('#burgercon')
const burger=document.querySelector('.hiddenNav')
const logoburger=document.querySelector('#logoBuger')

harmburger.addEventListener('click',(e)=>{
    console.log('shoooot');
    burger.classList.add('left')
  document.querySelector('.moviecon').style.width='80%';
 })



 burger.addEventListener('click',(e)=>{

    burger.classList.remove('left')
    console.log('move');
 })


 logoburger.addEventListener('click',(e)=>{

    burger.classList.remove('left')
    document.querySelector('.moviecon').style.width='93%';

    console.log('move');
 })

/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '483aa16007msh90c5ed0a5c8ff82p1714ebjsnf23a79de85d5',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

proceed.addEventListener('click',function() {}


fetch('https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Bbieber', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/