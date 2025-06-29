const mensagemBt = document.querySelector("#bt");
let paragrafoMsg = document.querySelector("#pMsg");

mensagemBt.addEventListener("click",exibeMsg);

function exibeMsg(){
   let tes = "Tente uma, duas, três vezes e se possível tente a quarta, a quinta e quantas vezes for necessário. Só não desista nas primeiras tentativas, a persistência é amiga da conquista. Se você quer chegar aonde a maioria não chega, faça o que a maioria não faz. ";
    paragrafoMsg.innerHTML = tes;
    paragrafoMsg.classList.remove("show"); 
    setTimeout(()=>{
        
        paragrafoMsg.innerHTML=""
    },10000)
}
