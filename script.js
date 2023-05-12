const botaoLinkedin = document.getElementById('botaoLinkedin')
const botaoGithub = document.getElementById('botaoGithub')
const botaoContatos = document.getElementById('botaoContatos')
const botaoProjetos = document.getElementById('botaoProjetos')
const botaoSobre = document.getElementById('botaoSobre')
const botaoInicio = document.getElementById('botaoInicio')
const setaDireita = document.getElementById('setaDireita')
const setaEsquerda = document.getElementById('setaEsquerda')
const iniciais = document.getElementById('iniciais')
const texto1 = document.getElementById('texto1')
const texto2 = document.getElementById('texto2')
const texto3 = document.getElementById('texto3')
const texto4 = document.getElementById('texto4')
const texto5 = document.getElementById('texto5')
const texto6 = document.getElementById('texto6')
const navegacao = document.getElementById('navegacao')
const ref = document.getElementById('ref')
const ref2 = document.getElementById('ref2')
const ref3 = document.getElementById('ref3')
const he = document.getElementById('he')
botaoLinkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/gustavo-dutra-247b79236/')
})

botaoGithub.addEventListener('click', function(){
    window.open('https://github.com/dutra118')
})

botaoContatos.addEventListener('click', function(){
    ref3.scrollIntoView()
})

botaoProjetos.addEventListener('click', function(){
    ref2.scrollIntoView()
})

botaoInicio.addEventListener('click', function(){
    he.scrollIntoView()
})

botaoSobre.addEventListener('click', function(){
    ref.scrollIntoView()
})

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 10) {
        navegacao.style.backgroundColor = 'black'
        navegacao.style.opacity = '1'
        navegacao.style.boxshadow = '0 1px 10px #333'
        navegacao.style.transitionDuration = '0.8s'
        navegacao.style.height = '60px'
        botaoContatos.style.marginTop = '8px'
        botaoContatos.style.backgroundColor = 'black'
        botaoSobre.style.backgroundColor = 'black'
        botaoProjetos.style.backgroundColor = 'black'
        botaoInicio.style.backgroundColor = 'black'
        botaoProjetos.style.marginTop = '8px'
        botaoInicio.style.marginTop = '8px'
        botaoSobre.style.marginTop = '8px'
        iniciais.style.marginTop = '10px'
      }
    if(scrollTop<10){
        navegacao.style.backgroundColor = '#191919'
        navegacao.style.opacity = '1'
        navegacao.style.height = '80px'
        botaoContatos.style.backgroundColor = '#191919'
        botaoSobre.style.backgroundColor = '#191919'
        botaoProjetos.style.backgroundColor = '#191919'
        botaoInicio.style.backgroundColor = '#191919'
        botaoContatos.style.marginTop = '30px'
        botaoProjetos.style.marginTop = '30px'
        botaoInicio.style.marginTop = '30px'
        botaoSobre.style.marginTop = '30px'
        iniciais.style.marginTop = '30px'
    }
  })

window.addEventListener('scroll', function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop<100){
        document.getElementById('meuTitulo').style.marginTop = '250px'
    }

    if(scrollTop>100){
        document.getElementById('meuTitulo').style.marginTop = '35px'
        document.getElementById('meuTitulo').style.transitionDuration = '1s'
    }

    if(scrollTop<850){
        document.getElementById('projetos').style.marginTop = '250px'
    }

    if(scrollTop>800){
        document.getElementById('projetos').style.marginTop = '15px'
        document.getElementById('projetos').style.transitionDuration = '1s'
    }

    if(scrollTop<1600){
        document.getElementById('Habilidades').style.marginTop = '250px'
    }

    if(scrollTop>1550){
        document.getElementById('Habilidades').style.marginTop = '35px'
        document.getElementById('Habilidades').style.transitionDuration = '1s'
    }
})


