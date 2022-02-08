let songIndex=0;
let audioElement=new Audio('music/0.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songname:"Excuses",filePath:"music/0.mp3",coverPath:"cover/cover1.jpg"},
    {songname:"BornToShine",filePath:"music/1.mp3",coverPath:"cover/cover2.jpg"},
    {songname:"Bijlee",filePath:"music/2.mp3",coverPath:"cover/cover3.jpg"},
    {songname:"Vibe",filePath:"music/3.mp3",coverPath:"cover/cover4.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songname;  
})
//Handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;
})

//Handle progress bar
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})

//song item event listener

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`music/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>2){
        songIndex=0;
    }
    else{
        songIndex++;
    }
    audioElement.src=`music/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex>0){
        songIndex--;
    }
    else{
        songIndex=0;
    }
    audioElement.src=`music/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})