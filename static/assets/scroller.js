let scroler = setInterval(function () {
    let menu=document.querySelector(".small_menu")
    if (menu){
        clearInterval(scroler)
        window.addEventListener("scroll", (event) => {
   
            var limit = document.body.offsetHeight - window.innerHeight;
            let scrol_pos=15/100*limit
        
            if (window.scrollY>scrol_pos){
                menu.style.display='block';
            }else{
                menu.style.display='none';
            }
            
        })
    }
}, 1);