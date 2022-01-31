
function convert_ends(houer_left){
    if (houer_left<10){
        return '0'+houer_left
    }     
    return houer_left
}
function convert_time(time){
    let minuts = Math.floor(time/60)
    let houer  =  Math.floor(minuts/60)
    let houer_left  =  Math.floor(minuts % 60)
    let str_time=houer+":"+convert_ends(houer_left) 
    return str_time
}
let interval = setInterval(function () {
    
    let wideo = document.querySelector('#bgvid')
    let wideo_time = document.querySelector('#wideoTime')
    let play = document.querySelector('#play')
    let mute = document.querySelector('#mute')
    let range = document.querySelector('#range')
    if (wideo && wideo_time && play && mute && fullScreen && range){
        clearInterval(interval)

        play.addEventListener("click", function(){
            if (wideo.paused){
                    wideo.play() 
                    document.querySelector('#playbtm').classList.replace('fa-play','fa-pause')
            }else{
                    wideo.pause() 
                    document.querySelector('#playbtm').classList.replace('fa-pause','fa-play',)
            }
        });

        mute.addEventListener("click", function(){
            if (wideo.muted){
                wideo.muted=false 
                document.querySelector('#mutebtm').classList.replace('fa-volume-mute','fa-volume-up')
            }else{
                wideo.muted=true 
                document.querySelector('#mutebtm').classList.replace('fa-volume-up','fa-volume-mute')
                
            }
        });

        fullScreen.addEventListener("click", function(){
            wideo.requestFullscreen();
        });

        range.addEventListener("input", function(){
            wideo.currentTime=wideo.currentTime
            range.max=Math.floor(wideo.duration)
            console.log(range.value)
        });

        wideo.addEventListener("timeupdate", function(){
            wideoTime.innerHTML= convert_time(Math.floor(wideo.currentTime))
            range.value = wideo.currentTime
            range.max = Math.floor(wideo.duration)
            wideoDuration.innerHTML=convert_time(Math.floor(wideo.duration))
        });

        setTimeout(function(){
            wideoTime.innerHTML=wideo.currentTime
            wideoDuration.innerHTML=convert_time(Math.floor(wideo.duration))
        }, 2500);
    }

  }, 1);