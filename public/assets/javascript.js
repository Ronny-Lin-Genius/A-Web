let menu = ()=>{
    const nn= document.querySelector(".menu");
    nn.addEventListener("click",()=>{
        const nav = document.querySelector("header nav")
        const main = document.querySelector("main");
        nav.classList.toggle("active");
        main.classList.toggle("no-active")
    });
}

menu();