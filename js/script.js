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

//Enviando formulário com Javascript
const formulario = document.querySelector('form')

formulario.addEventListener('submit', e => {
  e.preventDefault()

  const botao = document.querySelector('form button')
  botao.disabled = true
  botao.innerHTML = 'Enviando...'

  const data = new FormData(formulario)

  fetch('./enviar.js', {
    method: 'POST',
    body: data
  }).then((res) => {
    if (res.ok) {
      formulario.innerHTML = 
        `<p class="font-2-l" style="grid-column: 1/-1; padding: 1rem; border-radius 4px; background: #f7f7f7">
         <span style="color: #317a00">Mensagem enviada</span>, em breve entraremos em contato
        </p>`
    } else {
      formulario.innerHTML = 
        `<p class="font-2-l" style="grid-column: 1/-1; padding: 1rem; border-radius 4px; background: #f7f7f7">
        <span style="color: #e00000">Erro ao enviar</span>, você pode enviar diretamante 
          para o nosso email em: contato@contato.com
        </p>`
    }
  })

})