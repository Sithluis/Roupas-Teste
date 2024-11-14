document.getElementById("checkPoloLacoste").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColor = document.getElementById("colorSelectPolo").value;
    const selectedSize = document.getElementById("sizeSelectPolo").value;
    const selectedItem = document.getElementById("itemSelectPolo").value;
    const userEmail = document.getElementById("emailPolo").value;
    const city = document.getElementById("city").value;
    const street = document.getElementById("street").value;
    const number = document.getElementById("number").value;
    const neighborhood = document.getElementById("neighborhood").value;
    const postalCode = document.getElementById("postalCode").value;
    const residenceType = document.getElementById("residenceType").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/aiSbkFy?utm_content=cor:${encodeURIComponent(selectedColor)}_tamanho:${encodeURIComponent(selectedSize)}`;

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmail,
            item: selectedItem,
            cor: selectedColor,
            tamanho: selectedSize,
            cidade: city,
            rua: street,
            numero: number,
            bairro: neighborhood,
            cep: postalCode,
            residencia: residenceType
        })
    })
    .then(response => {
        if (response.ok) {
            // Redireciona para o checkout do Kiwify
            window.location.href = kiwifyCheckoutUrl;
        } else {
            console.error("Erro ao enviar os dados:", response.statusText);
            alert("Houve um problema ao enviar as informações. Tente novamente.");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao enviar os dados. Por favor, verifique sua conexão e tente novamente.");
    });
});
