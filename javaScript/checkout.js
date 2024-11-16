//CHECKOUT POLO

document.getElementById("checkPoloLacoste").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColorPl = document.getElementById("colorSelectPolo").value;
    const selectedSizePl = document.getElementById("sizeSelectPolo").value;
    const selectedItemPl = document.getElementById("itemPoloL").value;
    const userEmailPl = document.getElementById("emailPoloL").value;
    const cityPl = document.getElementById("cityPoloL").value;
    const streetPl = document.getElementById("streetPoloL").value;
    const numberPl = document.getElementById("numberPoloL").value;
    const neighborhoodPl = document.getElementById("neighborhoodPoloL").value;
    const postalCodePl = document.getElementById("postalCodePoloL").value;
    const residenceTypePl = document.getElementById("residenceTypePoloL").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/mDZC8SU?utm_content=cor:${encodeURIComponent(selectedColorPl)}_tamanho:${encodeURIComponent(selectedSizePl)}`;

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmailPl,
            item: selectedItemPl,
            cor: selectedColorPl,
            tamanho: selectedSizePl,
            cidade: cityPl,
            rua: streetPl,
            numero: numberPl,
            bairro: neighborhoodPl,
            cep: postalCodePl,
            residencia: residenceTypePl
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


document.getElementById("checkPoloKelvin").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColorPk = document.getElementById("colorPoloK").value;
    const selectedSizePk = document.getElementById("sizePoloK").value;
    const selectedItemPk = document.getElementById("itemPoloK").value;
    const userEmailPk = document.getElementById("emailPoloK").value;
    const cityPk = document.getElementById("cityPoloK").value;
    const streetPk = document.getElementById("streetPoloK").value;
    const numberPk = document.getElementById("numberPoloK").value;
    const neighborhoodPk = document.getElementById("neighborhoodPoloK").value;
    const postalCodePk = document.getElementById("postalCodePoloK").value;
    const residenceTypePk = document.getElementById("residenceTypePoloK").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/mDZC8SU?utm_content=cor:${encodeURIComponent(selectedColorPk)}_tamanho:${encodeURIComponent(selectedSizePk)}`;

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmailPk,
            item: selectedItemPk,
            cor: selectedColorPk,
            tamanho: selectedSizePk,
            cidade: cityPk,
            rua: streetPk,
            numero: numberPk,
            bairro: neighborhoodPk,
            cep: postalCodePk,
            residencia: residenceTypePk
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

document.getElementById("checkPoloRalph").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColorPr = document.getElementById("colorPoloR").value;
    const selectedSizePr = document.getElementById("sizePoloR").value;
    const selectedItemPr = document.getElementById("itemPoloR").value;
    const userEmailPr = document.getElementById("emailPoloR").value;
    const cityPr = document.getElementById("cityPoloR").value;
    const streetPr = document.getElementById("streetPoloR").value;
    const numberPr = document.getElementById("numberPoloR").value;
    const neighborhoodPr = document.getElementById("neighborhoodPoloR").value;
    const postalCodePr = document.getElementById("postalCodePoloR").value;
    const residenceTypePr = document.getElementById("residenceTypePoloR").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/mDZC8SU?utm_content=cor:${encodeURIComponent(selectedColorPr)}_tamanho:${encodeURIComponent(selectedSizePr)}`;

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmailPr,
            item: selectedItemPr,
            cor: selectedColorPr,
            tamanho: selectedSizePr,
            cidade: cityPr,
            rua: streetPr,
            numero: numberPr,
            bairro: neighborhoodPr,
            cep: postalCodePr,
            residencia: residenceTypePr
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

document.getElementById("checkPoloDiesel").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColorPd = document.getElementById("colorPoloD").value;
    const selectedSizePd = document.getElementById("sizePoloD").value;
    const selectedItemPd = document.getElementById("itemPoloD").value;
    const userEmailPd = document.getElementById("emailPoloD").value;
    const cityPd = document.getElementById("cityPoloD").value;
    const streetPd = document.getElementById("streetPoloD").value;
    const numberPd = document.getElementById("numberPoloD").value;
    const neighborhoodPd = document.getElementById("neighborhoodPoloD").value;
    const postalCodePd = document.getElementById("postalCodePoloD").value;
    const residenceTypePd = document.getElementById("residenceTypePoloD").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/mDZC8SU?utm_content=cor:${encodeURIComponent(selectedColorPd)}_tamanho:${encodeURIComponent(selectedSizePd)}`;

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmailPd,
            item: selectedItemPd,
            cor: selectedColorPd,
            tamanho: selectedSizePd,
            cidade: cityPd,
            rua: streetPd,
            numero: numberPd,
            bairro: neighborhoodPd,
            cep: postalCodePd,
            residencia: residenceTypePd
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

document.getElementById("checkBasicaLacoste").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColorBl = document.getElementById("colorbasicaL").value;
    const selectedSizeBl = document.getElementById("sizebasicaL").value;
    const selectedItemBl = document.getElementById("itembasicaL").value;
    const userEmailBl = document.getElementById("emailbasicaL").value;
    const cityBl = document.getElementById("citybasicaL").value;
    const streetBl = document.getElementById("streetbasicaL").value;
    const numberBl = document.getElementById("numberbasicaL").value;
    const neighborhoodBl = document.getElementById("neighborhoodbasicaL").value;
    const postalCodeBl = document.getElementById("postalCodebasicaL").value;
    const residenceTypeBl = document.getElementById("residenceTypebasicaL").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/ViGdzTK?utm_content=cor:${encodeURIComponent(selectedColorBl)}_tamanho:${encodeURIComponent(selectedSizeBl)}`;

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmailBl,
            item: selectedItemBl,
            cor: selectedColorBl,
            tamanho: selectedSizeBl,
            cidade: cityBl,
            rua: streetBl,
            numero: numberBl,
            bairro: neighborhoodBl,
            cep: postalCodeBl,
            residencia: residenceTypeBl
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

document.getElementById("checkSocialLauren").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColorSl = document.getElementById("colorSocialL").value;
    const selectedSizeSl = document.getElementById("sizeSocialL").value;
    const selectedItemSl = document.getElementById("itemSocialL").value;
    const userEmailSl = document.getElementById("emailSocialL").value;
    const citySl = document.getElementById("citySocialL").value;
    const streetSl = document.getElementById("streetSocialL").value;
    const numberSl = document.getElementById("numberSocialL").value;
    const neighborhoodSl = document.getElementById("neighborhoodSocialL").value;
    const postalCodeSl = document.getElementById("postalCodeSocialL").value;
    const residenceTypeSl = document.getElementById("residenceTypeSocialL").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const infinitePayCheckoutUrl = "https://loja.infinitepay.io/jnbneirton/vmg8865-social-ralph-lauren";

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmailSl,
            item: selectedItemSl,
            cor: selectedColorSl,
            tamanho: selectedSizeSl,
            cidade: citySl,
            rua: streetSl,
            numero: numberSl,
            bairro: neighborhoodSl,
            cep: postalCodeSl,
            residencia: residenceTypeSl
        })
    })
    .then(response => {
        if (response.ok) {
            // Redireciona para o checkout do Kiwify
            window.location.href = infinitePayCheckoutUrl;
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

document.getElementById("checkbSarja").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColorBs = document.getElementById("colorbSarja").value;
    const selectedSizeBs = document.getElementById("sizebSarja").value;
    const selectedItemBs = document.getElementById("itembSarja").value;
    const userEmailBs = document.getElementById("emailbSarja").value;
    const cityBs = document.getElementById("citybSarja").value;
    const streetBs = document.getElementById("streetbSarja").value;
    const numberBs = document.getElementById("numberbSarja").value;
    const neighborhoodBs = document.getElementById("neighborhoodbSarja").value;
    const postalCodeBs = document.getElementById("postalCodebSarja").value;
    const residenceTypeBs = document.getElementById("residenceTypebSarja").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/Na2IuMQ?utm_content=cor:${encodeURIComponent(selectedColorBs)}_tamanho:${encodeURIComponent(selectedSizeBs)}`;

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmailBs,
            item: selectedItemBs,
            cor: selectedColorBs,
            tamanho: selectedSizeBs,
            cidade: cityBs,
            rua: streetBs,
            numero: numberBs,
            bairro: neighborhoodBs,
            cep: postalCodeBs,
            residencia: residenceTypeBs
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

document.getElementById("checkteste").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const selectedColorTt = document.getElementById("colorteste").value;
    const selectedSizeTt = document.getElementById("sizeteste").value;
    const selectedItemTt = document.getElementById("itemteste").value;
    const userEmailTt = document.getElementById("emailteste").value;
    const cityTt = document.getElementById("cityteste").value;
    const streetTt = document.getElementById("streetteste").value;
    const numberTt = document.getElementById("numberteste").value;
    const neighborhoodTt = document.getElementById("neighborhoodteste").value;
    const postalCodeTt = document.getElementById("postalCodeteste").value;
    const residenceTypeTt = document.getElementById("residenceTypeteste").value;

    // Constrói a URL do checkout do Kiwify com parâmetros UTM para rastreamento
    const kiwifyCheckoutUrl = `https://pay.kiwify.com.br/0pBYVxs?utm_content=cor:${encodeURIComponent(selectedColorTt)}_tamanho:${encodeURIComponent(selectedSizeTt)}`;

    // Envia o formulário para o Formspree
    fetch("https://formspree.io/f/xgveyzdl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmailTt,
            item: selectedItemTt,
            cor: selectedColorTt,
            tamanho: selectedSizeTt,
            cidade: cityTt,
            rua: streetTt,
            numero: numberTt,
            bairro: neighborhoodTt,
            cep: postalCodeTt,
            residencia: residenceTypeTt
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