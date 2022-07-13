const menu=document.querySelector(".menuOverlay");

function changeMenuView(){
    if(menu.classList.contains("hidden"))
        menu.classList.remove("hidden");
    else
        menu.classList.toggle("hide");
}

function checkViewSize(query){
    if (query.matches){ 
        Array.from(menu.classList).length==1?menu.classList.add("hide"):null;
    }
}
const query=window.matchMedia("(min-width:775px)");
query.addListener(checkViewSize);