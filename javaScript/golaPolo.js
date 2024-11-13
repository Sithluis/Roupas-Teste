// Enviar os dados para o e-mail do vendedor, e encaminha o usuario para o checkout para fazer o pagamento!

document.getElementById("checkGolaPolo").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta os dados dos campos
    const selectedColor = document.getElementById("colorSelectPolo").value;
    const selectedSize = document.getElementById("sizeSelectPolo").value;
    const selectedItem = document.getElementById("itemSelectPolo").value;
    const userEmail = document.getElementById("emailPolo").value;

    // Construa a URL do checkout do Kiwify com parâmetros UTM
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/aiSbkFy?utm_content=cor:${encodeURIComponent(selectedColor)}_tamanho:${encodeURIComponent(selectedSize)}`;

    // Envia o formulário ao Formspree(Vai receber os dados e enviar as informações) e redireciona ao Kiwify
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmail,
            item: selectedItem,
            cor: selectedColor,
            tamanho: selectedSize
        })
    })
    .then(() => {
        // Redireciona para o checkout do Kiwify
        window.location.href = kiwifyCheckoutUrl;
    })
    .catch(error => console.error("Erro:", error));
});