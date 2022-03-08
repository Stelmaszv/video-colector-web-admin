window.addEventListener("scroll", (event) => {
   
    var limit = document.body.offsetHeight - window.innerHeight;
    let scrol_pos=15/100*limit
    let menu=document.querySelector(".small_menu")
    
    if (menu =! null){
        if (window.scrollY>scrol_pos){
            menu.style.display='block';
        }else{
            menu.style.display='none';
        }
    }
    
})