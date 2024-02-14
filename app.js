const wrapper =document.querySelector(".container_pai"),
qrInput = wrapper.querySelector(".conteudo input"),
generateBtn =wrapper.querySelector(".conteudo button"),
qrImg = wrapper.querySelector(".qr-code img")

//função para gerar o QR Code clicando no botão
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue)
    return;
    generateBtn.innerText = "Gerando seu Qr Code.."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar"
        wrapper.classList.add("active");
    });
   
});

//função para gerar o QR Code teclando Enter
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let qrValue = qrInput.value;
        if(!qrValue) return;
        generateBtn.innerText = "Gerando seu Qr Code.."
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
        qrImg.addEventListener("load", () => {
            generateBtn.innerText = "Gerar"
            wrapper.classList.add("active");
        });
    }
  });

//voltar à forma anterior, 'escondendo' o QR Code
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});
