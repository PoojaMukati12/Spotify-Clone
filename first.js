var arr=[
    {songName:"Nai lagda (Lofi) song ",url:"./Nai_Lagda_(Lofi).mp3",image:"./Nai_lagda.jpg",duration:"4:35"},
    {songName:"Kesariya tera ",url:"./kesariya.mp3",image:"./kesariya.jpg",duration:"2:52"},
    {songName:"Shirt da button",url:"./chand_se.mp3",image:"shirt_da.jpg",duration:"4:05"},
    {songName:"Thodi jagah" ,url:"./Thodi jagah.mp3",image:"./maxresdefault.jpg",duration:"3:57"}
];

var allsongs=document.querySelector("#all-songs");
var left=document.querySelector("#left");
var play=document.querySelector("#play");
var back=document.querySelector("#back");
var forward=document.querySelector("#forward");


var audio=new Audio();
var selectedsong=0;

function mainfunction(){
    var clutter="";
    arr.forEach(function(elem,indx){
        clutter+=` <div class="song-card" id=${indx}>
        <div id="part-1">
            <img src="${elem.image}" alt="">
            <h2>${elem.songName}</h2>
        </div>
        <h6>${elem.duration}</h6>
    </div>`;
    });
    audio.src=arr[selectedsong].url;
    allsongs.innerHTML=clutter;
    
    left.style.backgroundImage=`url(${arr[selectedsong].image})`
}
mainfunction();
//event bubling
allsongs.addEventListener("click",function(dets){
    play.innerHTML=`<i class="ri-pause-mini-fill"></i>`;
    selectedsong=dets.target.id;
    mainfunction();
   // console.log(selectedsong);
    audio.play();
})

var flag=0;
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-mini-fill"></i>`;
        mainfunction();
        audio.play();
        flag=1;
    }
    else{
        play.innerHTML=`<i class="ri-play-fill">`
        mainfunction();
        audio.pause();
        flag=0;
    }
})

forward.addEventListener("click",function(){
       if(selectedsong<arr.length-1)
        {
            selectedsong++;
            mainfunction();
            audio.play();
        }
        else{
            selectedsong=0;
            mainfunction();
            audio.play();
           // forward.style.opacity=0.3;
        }
})

back.addEventListener("click",function(){
    if(selectedsong>=0){
        selectedsong--;
        mainfunction();
        audio.play();
    }
    else{
        selectedsong=arr.length-1;
        mainfunction();
        audio.play();
       // back.style.opacity=0.3;
    }
})
