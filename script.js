const convertBtn = document.getElementById('convertBtn');
const primeiroValor = document.querySelector('.primeiroValor');
const segundoValor = document.querySelector('.segundoValor');
const currencySelect1 = document.querySelector('.select1');
const currencySelect2 = document.querySelector('.select2');
const InvertValues = document.querySelector('.arrow');
const coinImage1 = document.querySelector('.coinImage1');
const coinImage2 = document.querySelector('.coinImage');
const coinName1 = document.querySelector('.coin');
const coinName2 = document.querySelector('.coinConverted');

async function currencyValue() {

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CHF-BRL,JPY-BRL,ARS-BRL,BTC-BRL,ETH-BRL,LTC-BRL,XRP-BRL,DOGE-BRL").then( result => result.json())

    console.log(data)

    const currencyInput = document.getElementById('currencyValue');

    const USD = data.USDBRL.high
    const EUR = data.EURBRL.high
    const GBP = data.GBPBRL.high
    const JPY = data.JPYBRL.high
    const CHF = data.CHFBRL.high
    const ARS = data.ARSBRL.high
    const BRL = 1
    // const BTC = data.BTCBRL.high
    // const LTC = data.LTCBRL.high
    // const ETH = data.ETHBRL.high
    // const XRP = data.XRPBRL.high
    // const XDG = data.XDGBRL.high

    //identificando a moeda 1

    let coin1 = 0
    switch (currencySelect1.value) {
        case 'dolar':
            coin1 = USD
            break
        case 'real':
            coin1 = BRL
            break
        case 'euro':
            coin1 = EUR
            break
        case 'libra':
            coin1 = GBP
            break
        case 'iene':
            coin1 = JPY
            break
        case 'peso':
            coin1 = ARS
            break
        case 'franco':
            coin1 = CHF
            break
    }

    // identificando a segunda moeda

    let coin2 = 0
    switch (currencySelect2.value) {
        case 'dolar':
            coin2 = USD
            break
        case 'real':
            coin2 = BRL
            break
        case 'euro':
            coin2 = EUR
            break
        case 'libra':
            coin2 = GBP
            break
        case 'iene':
            coin2 = JPY
            break
        case 'peso':
            coin2 = ARS
            break
        case 'franco':
            coin2 = CHF
            break
    }

    //realizar o calculo

    const result = (currencyInput.value * coin1) / coin2

    // formatação das moedas

    const USDformat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const BRLformat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    const EURformat = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'EUR',
    })

    const GBPformat = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP',
    })

    const JPYformat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'JPY',
    })

    const ARSformat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'ARS',
    })

    const CHFformat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CHF',
    })

    coinImage1.src = `./assets/${currencySelect1.value}.svg`
    coinImage2.src = `./assets/${currencySelect2.value}.svg`

    // mudando nomes o valores

    switch (currencySelect1.value) {
        case 'dolar':
            coinName1.innerHTML = 'Dólar Americano'
            primeiroValor.innerHTML = USDformat.format(currencyInput.value)
            segundoValor.innerHTML = `USD ${((currencyInput.value * coin1) / coin2).toFixed(2)}`
            break
        case 'real':
            coinName1.innerHTML = 'Real Brasileiro'
            primeiroValor.innerHTML = BRLformat.format(currencyInput.value)
            segundoValor.innerHTML = `R$ ${((currencyInput.value * coin1) / coin2).toFixed(2)}`
            break
        case 'euro':
            coinName1.innerHTML = 'Euro'
            primeiroValor.innerHTML = EURformat.format(currencyInput.value)
            segundoValor.innerHTML = `EUR ${((currencyInput.value * coin1) / coin2).toFixed(2)}`
            
            break
        case 'libra':
            coinName1.innerHTML = 'Libra Esterlina'
            primeiroValor.innerHTML = GBPformat.format(currencyInput.value)
            segundoValor.innerHTML = `GBP ${((currencyInput.value * coin1) / coin2).toFixed(2)}`
            
            break
        case 'iene':
            coinName1.innerHTML = 'Iene Japonês'
            primeiroValor.innerHTML = JPYformat.format(currencyInput.value)
            segundoValor.innerHTML = `JPY ${((currencyInput.value * coin1) / coin2).toFixed(2)}`
            
            break
        case 'peso':
            coinName1.innerHTML = 'Peso Argentino'
            primeiroValor.innerHTML = ARSformat.format(currencyInput.value)
            segundoValor.innerHTML = `ARS ${((currencyInput.value * coin1) / coin2).toFixed(2)}`

            break
        case 'franco':
            coinName1.innerHTML = 'Franco Suíço'
            primeiroValor.innerHTML = CHFformat.format(currencyInput.value)
            segundoValor.innerHTML = `CHF ${((currencyInput.value * coin1) / coin2).toFixed(2)}`
            
            break
    }
    
    switch (currencySelect2.value) {
        case 'dolar':
            coinName2.innerHTML = 'Dólar Americano'
            segundoValor.innerHTML = USDformat.format(result)
            break
        case 'real':
            coinName2.innerHTML = 'Real Brasileiro'
            segundoValor.innerHTML = BRLformat.format(result)

            break
        case 'euro':
            coinName2.innerHTML = 'Euro'
            segundoValor.innerHTML = EURformat.format(result)
            
            break
        case 'libra':
            coinName2.innerHTML = 'Libra Esterlina'
            segundoValor.innerHTML = GBPformat.format(result)
            
            break
        case 'iene':
            coinName2.innerHTML = 'Iene Japonês'
            segundoValor.innerHTML = JPYformat.format(result)
            
            break
        case 'peso':
            coinName2.innerHTML = 'Peso Argentino'
            segundoValor.innerHTML = ARSformat.format(result)

            break
        case 'franco':
            coinName2.innerHTML = 'Franco Suíço'
            segundoValor.innerHTML = CHFformat.format(result)
            
            break
    }

}

currencyValue()



convertBtn.addEventListener('click', currencyValue)
currencySelect1.addEventListener("change", currencyValue)
currencySelect2.addEventListener("change", currencyValue)