// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

links.forEach(item => {
  const url = window.location.href
  const href = item.href

  if(url.includes(href)){
    item.classList.add('ativo')
  }
});

// Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search) 

if (parametros) {
  parametros.forEach(item => {
    const elemento = document.getElementById(item)
  
    if (elemento) {
      elemento.checked = true
    }
  })  
}

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button")

perguntas.forEach(item => {
  item.addEventListener('click', (e) => {
    item = e.currentTarget
    const controls = item.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)

    resposta.classList.toggle("ativa")
    const respostaAtiva = resposta.classList.contains("ativa")
    item.setAttribute('aria-expanded', respostaAtiva)
  })
})

//Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")

galeria.forEach(item => {
  item.addEventListener('click', e => {
    const img = e.currentTarget
    const media = matchMedia("(min-width: 920px)").matches
    if (media) {
      galeriaContainer.prepend(img)
    }
  })
})


//Animação
if (window.SimpleAnime) {
  new SimpleAnime()
}