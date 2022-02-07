let interval = setInterval(function () {
    
    let wideo = document.querySelector('#bgvid')
    let play = document.querySelector('#play')
    let mute = document.querySelector('#mute')
    let range = document.querySelector('#range')
    let curtimetext = document.getElementById("curtimetext");
	let durtimetext = document.getElementById("durtimetext");

    if (wideo && play && mute && fullScreen && range){
        
        clearInterval(interval)
        range.addEventListener("input", function(){
            wideo.currentTime=range.value
            range.max=Math.floor(wideo.duration)
        });

        wideo.addEventListener("timeupdate",function(){
            range.value = wideo.currentTime
            var curmins = Math.floor(wideo.currentTime / 60);
            var cursecs = Math.floor(wideo.currentTime - curmins * 60);
            var durmins = Math.floor(wideo.duration / 60);
            var dursecs = Math.floor(wideo.duration - durmins * 60);
            if(cursecs < 10){ cursecs = "0"+cursecs; }
            if(dursecs < 10){ dursecs = "0"+dursecs; }
            if(curmins < 10){ curmins = "0"+curmins; }
            if(durmins < 10){ durmins = "0"+durmins; }
            curtimetext.innerHTML = curmins+":"+cursecs;
            durtimetext.innerHTML = durmins+":"+dursecs;
        },false);

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

        let timeinterval = setInterval(function () {
            if (!isNaN(wideo.duration)){
                clearInterval(timeinterval)
                var curmins = Math.floor(wideo.currentTime / 60);
                var cursecs = Math.floor(wideo.currentTime - curmins * 60);
                var durmins = Math.floor(wideo.duration / 60);
                var dursecs = Math.floor(wideo.duration - durmins * 60);
                if(cursecs < 10){ cursecs = "0"+cursecs; }
                if(dursecs < 10){ dursecs = "0"+dursecs; }
                if(curmins < 10){ curmins = "0"+curmins; }
                if(durmins < 10){ durmins = "0"+durmins; }
                curtimetext.innerHTML = curmins+":"+cursecs;
                durtimetext.innerHTML = durmins+":"+dursecs;
            }
        }, 1);
    }
  }, 1);