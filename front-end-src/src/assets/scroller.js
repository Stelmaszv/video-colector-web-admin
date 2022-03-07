window.addEventListener("scroll", (event) => {
    
    var limit = document.body.offsetHeight - window.innerHeight;
    let scrol_pos=15/100*limit
    if (window.scrollY>scrol_pos){
        document.querySelector(".small_menu").style.display='block';
    }else{
        document.querySelector(".small_menu").style.display='none';
    }
    
})