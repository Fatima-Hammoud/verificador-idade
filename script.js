function verificar() {
    data = new Date()
    ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (fano.value.length == 0 || Number (fano.value) > ano) 
        {
        window.alert('[ERRO] Verifique os dados e tente novamente!')}

else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if (fsex[0].checked) {genero = 'Homem'
    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe-menino.jpg')
    } else if (idade < 21) {
        img.setAttribute('src', 'homem-jovem.jpg')
    } else if (idade < 50) {
        img.setAttribute('src', 'homem-adulto.jpg')
    } else {
        img.setAttribute('src', 'homem-idoso.jpg')}
    
  
    }else if (fsex[1].checked) {
        genero = 'Mulher'
    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe-menina.jpg')
    } else if (idade < 21) {
        img.setAttribute('src', 'mulher-jovem.jpg')
    } else if (idade < 50) {
        img.setAttribute('src', 'mulher-adulta.jpg')
    } else {
        img.setAttribute('src', 'mulher-idosa.jpg')
    }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}