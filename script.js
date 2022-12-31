const wrapper = document.querySelector(".wrapper"),
generateBtn = document.querySelector(".form button"),
qrInput = document.querySelector(".form input"),
qrImagem = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Gerando QR...";
    qrImagem.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImagem.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Qr code gerado!";
    })
    
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active")
    }
})