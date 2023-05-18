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
const mode = document.getElementById('botaoMudar')
const all = document.getElementById('tudo')
const footer = document.getElementById('creditos')

botaoLinkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/gustavo-dutra-247b79236/')
})

botaoGithub.addEventListener('click', function(){
    window.open('https://github.com/dutra118')
})

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 10) {
        if(mode.innerHTML == '<i class="bi bi-moon-fill"></i>'){
            navegacao.style.backgroundColor = 'whitesmoke'
        }
        else{
            navegacao.style.backgroundColor = '#141414'
            navegacao.style.opacity = '1'
            navegacao.style.boxshadow = '0 1px 10px #333'
            navegacao.style.transitionDuration = '0.8s'
            navegacao.style.height = '62px'
            botaoContatos.style.marginTop = '-1px'
            botaoContatos.style.backgroundColor = '#141414'
            botaoSobre.style.backgroundColor = '#141414'
            botaoProjetos.style.backgroundColor = '#141414'
            botaoInicio.style.backgroundColor = '#141414'
            mode.style.backgroundColor = '#141414'
            botaoProjetos.style.marginTop = '-1px'
            botaoInicio.style.marginTop = '-1px'
            botaoSobre.style.marginTop = '-1px'
            iniciais.style.marginTop = '-1px'
            mode.style.marginTop = '-1px'
        }
      }
    if(scrollTop<10){
        if(mode.innerHTML == '<i class="bi bi-moon-fill"></i>'){
            navegacao.style.backgroundColor = 'whitesmoke'
        }
        else{
            navegacao.style.backgroundColor = 'black'
            navegacao.style.opacity = '1'
            navegacao.style.height = '93px'
            botaoContatos.style.backgroundColor = 'black'
            botaoSobre.style.backgroundColor = 'black'
            botaoProjetos.style.backgroundColor = 'black'
            botaoInicio.style.backgroundColor = 'black'
            mode.style.backgroundColor = 'black'
            botaoContatos.style.marginTop = '30px'
            botaoProjetos.style.marginTop = '30px'
            botaoInicio.style.marginTop = '30px'
            botaoSobre.style.marginTop = '30px'
            iniciais.style.marginTop = '30px'
            mode.style.marginTop = '30px'
        }
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

mode.addEventListener('click', function(){
    if(mode.innerHTML== '<i class="bi bi-brightness-high"></i>'){
        he.classList.add('chan')
        mode.innerHTML = '<i class="bi bi-moon-fill"></i>'
        all.style.backgroundColor = 'whitesmoke'
        footer.style.backgroundColor = 'whitesmoke'
        footer.style.color = 'black'
        document.getElementById('sobre').style.color = 'black'
        document.getElementById('habil').style.color = 'black'
        document.getElementById('projetos').style.color = 'black'
        document.getElementById('meuTexto').style.color = 'black'
        document.getElementById('primeira').style.color = 'black'
        document.getElementById('terceira').style.color = 'black'
        document.getElementById('iniciais').style.color = 'black'
        navegacao.style.backgroundColor = 'whitesmoke'
        ref.style.color = 'black'
        ref2.style.color = 'black'
        ref3.style.color = 'black'
        he.style.color = 'black'
        document.getElementById('hrFooter').style.color = 'black'
    }
    else{
        location.reload()
    }
})