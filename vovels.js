const dizi = document.getElementById("text")
const button = document.querySelector("button")
const sonuc = document.querySelector(".sonuc")
let sum = 0
const unluler = "aeıioöuü"


button.addEventListener("click", () => {
    for(let i = 0; i < dizi.value.length; i++){
        if(unluler.includes(dizi.value[i])){
            sum++
        }
    }
    sonuc.textContent = `Girdiğiniz dizide ${sum} adet ünlü harf vardır`
})



