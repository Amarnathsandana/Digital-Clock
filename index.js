const hour=document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const ampm=document.getElementById("ampm");




function updateClock(){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm="AM";

    m= m<10 ? "0" + m : m;
    h= h<10 ? "0" + h : h;
    s= s<10 ? "0" + s : s;


    if (h>12)
        {
            h=h-12;
            ampm="PM";

        }
    hour.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    ampm.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock();