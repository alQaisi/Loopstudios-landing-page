const menu=document.querySelector(".menuOverlay");

function changeMenuView(){
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        menu.classList.add("visible");
    }else{
        menu.classList.remove("visible");
        setTimeout(() => {
            menu.classList.add("hidden");
        },500);
    }
}

function checkViewSize(query){
    if (query.matches){ 
        console.log("aefaef")
        menu.classList.remove("visible");
        setTimeout(() => {
            menu.classList.add("hidden");
        },500);
    }
}
const query=window.matchMedia("(min-width:775px)");
query.addListener(checkViewSize);