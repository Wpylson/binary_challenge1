function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;

    // Defina as taxas de conversão
    const taxas = {
        metro: {
            quilometro: 0.001,
            milha: 0.000621371,
        },
        quilometro: {
            metro: 1000,
            milha: 0.621371,
        },
        milha: {
            metro: 1609.34,
            quilometro: 1.60934,
        },
    };

    // Realize a conversão
    const resultado = valor * taxas[de][para];

    document.getElementById("resultado").innerHTML = `${valor} ${de} é igual a ${resultado} ${para}`;
}
