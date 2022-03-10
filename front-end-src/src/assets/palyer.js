let stan=false
let interval = setInterval(function () {
    let time=0
    let movie_section = document.querySelector('.movie_section')
    let movie_controls= document.querySelector('.movie_controls')
    let section_movie_play = document.querySelector('.section_movie_play')
    let wideo_src = document.querySelector('.wideo_src')
    let start = document.querySelector('#startmovie')
    let wideo = document.querySelector('#bgvid')
    let play = document.querySelector('#play')
    let mute = document.querySelector('#muteVideo')
    let range = document.querySelector('#range')
    let curtimetext = document.getElementById("curtimetext");
	let durtimetext = document.getElementById("durtimetext");
    if (wideo && play && mute && fullScreen && range && start){
        clearInterval(interval)
        stan=true
        range.addEventListener("input", function(){
            wideo.currentTime=range.value
            range.max=Math.floor(wideo.duration)
        });

        start.addEventListener("click", function(){
            movie_section.style.display='none'
            section_movie_play.style.display='block'
            play.click()
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
                document.querySelector('#startmovieicon').classList.replace('fa-play','fa-pause')
                movie_section.style.display='none'
                section_movie_play.style.display='block'
            }else{
                wideo.pause()
                document.querySelector('#playbtm').classList.replace('fa-pause','fa-play',)
                document.querySelector('#startmovieicon').classList.replace('fa-pause','fa-play')
                movie_section.style.display='block'
                section_movie_play.style.display='none'
            }
        });

        wideo_src.addEventListener("click", function(){
            if (wideo.paused){
                wideo.play() 
                document.querySelector('#playbtm').classList.replace('fa-play','fa-pause')
                document.querySelector('#startmovieicon').classList.replace('fa-play','fa-pause')
                movie_section.style.display='none'
                section_movie_play.style.display='block'
            }else{
                wideo.pause()
                document.querySelector('#playbtm').classList.replace('fa-pause','fa-play',)
                document.querySelector('#startmovieicon').classList.replace('fa-pause','fa-play')
                movie_section.style.display='block'
                section_movie_play.style.display='none'
            }
        });
        wideo_src.addEventListener("mouseover",function(){
            movie_controls.style.opacity=.1
        })

        movie_controls.addEventListener("mouseover",function(){
            movie_controls.style.opacity=1
        })

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