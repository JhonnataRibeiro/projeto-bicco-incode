/* -------------------- PREVIEW ONE -------------------- */
const barraBuscador = document.querySelector('input#buscador');
const buttonLupa = document.querySelector('button#lupa');

barraBuscador.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        barraBuscador.value = '';
    }
});

buttonLupa.addEventListener('click', function() {
    barraBuscador.value = '';
});

const divParaVerificarPreOne = document.querySelector('div.preview-one');

/* -------- FUNCTION PARA PREVIEW TWO, THREE, FOUR ------- */
function carrosselSaindo(list) {
    const divIlustracao = list[0];
    const divTitle = list[1];
    const divAbout = list[2];
    const divButtons = list[3];

    let position = 0;
    let percentage = 100;

    let positionTitle = 0;
    let percentageTitle = 100;

    let positionAbout = 0;
    let percentageAbout = 100;

    let positionButtons = 0;
    let percentageButtons = 100;

    const carrosselSaindo = setInterval(function() {
        divIlustracao.style.marginLeft = `${position}px`;
        divIlustracao.style.opacity = `${percentage}%`;
        
        divTitle.style.marginLeft = `${positionTitle}px`;
        divTitle.style.opacity = `${percentageTitle}%`;
    
        divAbout.style.marginLeft = `${positionAbout}px`;
        divAbout.style.opacity = `${percentageAbout}%`;
    
        divButtons.style.marginLeft = `${positionButtons}px`;
        divButtons.style.opacity = `${percentageButtons}%`;
    
        position -= 3;
        percentage -= 0.8;

        positionTitle -= 7;
        percentageTitle -= 0.9;

        positionAbout -= 10;
        percentageAbout -= 2.5;

        positionButtons -= 4;
        percentageButtons -= 0.8;

        if (position === -420) {
            clearInterval(carrosselSaindo);
        }

        setaVoltarPreTwo.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselSaindo);
        });

        setaAvancarPreTwo.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselSaindo);
        });

        setaVoltarPreThree.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselSaindo);
        });

        setaAvancarPreThree.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselSaindo);
        });

        setaVoltarPreFour.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselSaindo);
        });

        setaAvancarPreFour.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselSaindo);
        });
    }, 1);
};

function carrosselVoltando(list) {
    const divIlustracao = list[0];
    const divTitle = list[1];
    const divAbout = list[2];
    const divButtons = list[3];

    let position = -420;
    let percentage = 0;

    let positionTitle = -420;
    let percentageTitle = 100;

    let positionAbout = -420;
    let percentageAbout = 0;

    let positionButtons = -420;
    let percentageButtons = 0;

    const carrosselVoltando = setInterval(function() {
        divIlustracao.style.marginLeft = `${position}px`;
        divIlustracao.style.opacity = `${percentage}%`;
        
        divTitle.style.marginLeft = `${positionTitle}px`;
        divTitle.style.opacity = `${percentageTitle}%`;
    
        divAbout.style.marginLeft = `${positionAbout}px`;
        divAbout.style.opacity = `${percentageAbout}%`;
    
        divButtons.style.marginLeft = `${positionButtons}px`;
        divButtons.style.opacity = `${percentageButtons}%`;
    
        position += 3;
        percentage += 0.8;
        
        if (positionTitle < 0) {
            positionTitle += 7;
            percentageTitle += 1.7;
        }

        if (positionAbout < 0) {
            positionAbout += 10;
            percentageAbout += 2.4;
        }

        if (positionButtons < 0) {
            positionButtons += 4;
            percentageButtons += 1;
        }

        if (position === 0) {
            clearInterval(carrosselVoltando);
        }
    }, 1);
};

function carrosselAvancando(list) {
    const divIlustracao = list[0];
    const divTitle = list[1];
    const divAbout = list[2];
    const divButtons = list[3];

    let position = 420;
    let percentage = 0;

    let positionTitle = 420;
    let percentageTitle = 0;

    let positionAbout = 420;
    let percentageAbout = 0;

    let positionButtons = 420;
    let percentageButtons = 0;

    const carrosselAvancando = setInterval(function() {
        divIlustracao.style.marginLeft = `${position}px`;
        divIlustracao.style.opacity = `${percentage}%`;
        
        divTitle.style.marginLeft = `${positionTitle}px`;
        divTitle.style.opacity = `${percentageTitle}%`;
    
        divAbout.style.marginLeft = `${positionAbout}px`;
        divAbout.style.opacity = `${percentageAbout}%`;
    
        divButtons.style.marginLeft = `${positionButtons}px`;
        divButtons.style.opacity = `${percentageButtons}%`;
    
        position -= 3;
        percentage += 0.8;
        
        if (positionTitle > 0) {
            positionTitle -= 7;
            percentageTitle += 1.7;
        }

        if (positionAbout > 0) {
            positionAbout -= 10;
            percentageAbout += 2.4;
        }

        if (positionButtons > 0) {
            positionButtons -= 4;
            percentageButtons += 1;
        }

        if (position === 0) {
            clearInterval(carrosselAvancando);
        }

        setaVoltarPreTwo.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselAvancando);
        });

        setaAvancarPreTwo.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselAvancando);
        });

        setaVoltarPreThree.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselAvancando);
        });

        setaAvancarPreThree.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselAvancando);
        });

        setaVoltarPreFour.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselAvancando);
        });

        setaAvancarPreFour.addEventListener('click', function() {
            percentage = 0;
            percentageTitle = 0;
            percentageAbout = 0;
            percentageButtons = 0;
            clearInterval(carrosselAvancando);
        });
    }, 1);
};

/* -------------------- PREVIEW TWO -------------------- */
const divIlustracaoPreTwo = document.querySelector('div#pretwo-ilustracao-animation');
const divTitlePreTwo = document.querySelector('div#pretwo-title-animation');
const divAboutPreTwo = document.querySelector('div#pretwo-about-animation');
const divButtonsPreTwo = document.querySelector('div#pretwo-buttons-animation');

const changeIlustracaoPreTwo = document.querySelector('img#ilustracao-pretwo-change');
const changeTitlePreTwo = document.querySelector('h3#title-pretwo-change');
const changeAboutPreTwo = document.querySelector('p#about-pretwo-change');
const changeButton1PreTwo = document.querySelector('a#button1-pretwo-change');
const changeButton2PreTwo = document.querySelector('a#button2-pretwo-change');

let indexChangePreTwo = 0;

const listIlustracaoPreTwo = [
    [0, './images/preview-two/ilustracao-diarista.png'],
    [1, './images/preview-two/ilustracao-mudanca.png'],
    [2, './images/preview-two/ilustracao-azulejista.png'],
    [3, './images/preview-two/ilustracao-cuidadora-animais.png'],
    [4, './images/preview-two/ilustracao-encanador.png'],
    [5, './images/preview-two/ilustracao-montador-moveis.png']
];

const listTitlePreTwo = [
    [0, 'Limpeza de casa?'],
    [1, 'Vai mudar?'],
    [2, 'Azulejo novo?'],
    [3, 'Pet sozinho?'],
    [4, 'Casa virando dilúvio?'],
    [5, 'Imóvel novo sem montador?']
];

const listAboutPreTwo = [
    [0, 'Está em busca de alguém para realizar essa diária? Na Bicco, você encontra profissionais disponíveis mais próximos de você, prontos para negociar as condições do serviço. Vai alugar seu apartamento? Chame um profissional para deixar seu apartamento impecável.'],
    [1, 'Com a Bicco, você tem acesso aos melhores fretistas do seu bairro. Ajuste a distância, o dia e o preço do frete. Além disso, agende sua mudança com antecedência para evitar imprevistos. É possível solicitar mais de um dia de serviço.'],
    [2, 'Cansou do visual da sua casa ou seus azulejos estão desgastados e quebrados pelo tempo? Venha para a Bicco! Aqui você recebe recomendações de azulejos, levando em conta beleza e custo-benefício. E o melhor: agende o serviço!'],
    [3, 'Chegou a tão esperada viagem de Ano Novo, mas você não sabe onde deixar seu animal de estimação? Na Bicco, encontre profissionais especializados em cuidar do seu pet. Escolha entre opções como cuidados e babá para o seu amiguinho nas subcategorias.'],
    [4, 'Ih, a goteira virou uma cachoeira? Na Bicco, encontre os melhores encanadores do seu bairro. Infelizmente, não temos o Mario Bros, mas os profissionais disponíveis são altamente competentes. Se precisa de reparos, conte conosco.'],
    [5, 'Comprando um imóvel pela internet e sem um montador disponível? Sem problemas! A Bicco oferece uma lista dos melhores montadores de imóveis com base na sua localização. E se for um condomínio, também temos opções para você. Não se preocupe!']
];

const listButtonsPreTwo = [
    [0, 'Ver profissionais', 'Tire dúvidas'],
    [1, 'Simular frete', 'Tipo de transporte'],
    [2, 'Recomendações', 'Lojas'],
    [3, 'Subcategorias Pet', 'Saiba mais'],
    [4, 'Encanadores', 'Comunidade'],
    [5, 'Condomínios', 'Detalhes']
];

const listDivsPreTwo = [divIlustracaoPreTwo, divTitlePreTwo, divAboutPreTwo, divButtonsPreTwo];

const setaVoltarPreTwo = document.querySelector('img#seta-pretwo-one');
const setaAvancarPreTwo = document.querySelector('img#seta-pretwo-two');

const divParaVerificarPreTwo = document.querySelector('div.preview-two');

function verificarDivVisivelPreTwo() {
  const distanciaTopo = divParaVerificarPreTwo.getBoundingClientRect().top;
  const alturaJanela = window.innerHeight;

  if (distanciaTopo < alturaJanela) {
    clearInterval(escutaVisualizouPreTwo);
    
    this.automaticoCarrosselPreTwo = setInterval(function() {
    carrosselSaindo(listDivsPreTwo);

    setaVoltarPreTwo.addEventListener('click', function() {
        clearTimeout(automaticoCarrosselAvancandoPreTwo);
    });

    setaAvancarPreTwo.addEventListener('click', function() {
        clearTimeout(automaticoCarrosselAvancandoPreTwo);
    });
    
    const automaticoCarrosselAvancandoPreTwo = setTimeout(function() {
        carrosselAvancando(listDivsPreTwo);

        indexChangePreTwo++;
        changeIlustracaoPreTwo.setAttribute('src', `${listIlustracaoPreTwo[indexChangePreTwo][1]}`);
        changeTitlePreTwo.textContent = `${listTitlePreTwo[indexChangePreTwo][1]}`;
        changeAboutPreTwo.textContent = `${listAboutPreTwo[indexChangePreTwo][1]}`;
        changeButton1PreTwo.textContent = `${listButtonsPreTwo[indexChangePreTwo][1]}`;
        changeButton2PreTwo.textContent = `${listButtonsPreTwo[indexChangePreTwo][2]}`;
    }, 900);
    
    if (indexChangePreTwo > 4) {
        indexChangePreTwo = -1;
    }
    
    }, 8000);
    
    setaVoltarPreTwo.addEventListener('click', function() {
        clearInterval(automaticoCarrosselPreTwo);
        carrosselVoltando(listDivsPreTwo);
    
        if (indexChangePreTwo === 0) {
            indexChangePreTwo = 6;
        }
    
        indexChangePreTwo--;
        changeIlustracaoPreTwo.setAttribute('src', `${listIlustracaoPreTwo[indexChangePreTwo][1]}`);
        changeTitlePreTwo.textContent = `${listTitlePreTwo[indexChangePreTwo][1]}`;
        changeAboutPreTwo.textContent = `${listAboutPreTwo[indexChangePreTwo][1]}`;
        changeButton1PreTwo.textContent = `${listButtonsPreTwo[indexChangePreTwo][1]}`;
        changeButton2PreTwo.textContent = `${listButtonsPreTwo[indexChangePreTwo][2]}`;
    });
    
    setaAvancarPreTwo.addEventListener('click', function() {
        clearInterval(automaticoCarrosselPreTwo);
        carrosselAvancando(listDivsPreTwo);
    
        indexChangePreTwo++;
        changeIlustracaoPreTwo.setAttribute('src', `${listIlustracaoPreTwo[indexChangePreTwo][1]}`);
        changeTitlePreTwo.textContent = `${listTitlePreTwo[indexChangePreTwo][1]}`;
        changeAboutPreTwo.textContent = `${listAboutPreTwo[indexChangePreTwo][1]}`;
        changeButton1PreTwo.textContent = `${listButtonsPreTwo[indexChangePreTwo][1]}`;
        changeButton2PreTwo.textContent = `${listButtonsPreTwo[indexChangePreTwo][2]}`;
    
        if (indexChangePreTwo > 4) {
            indexChangePreTwo = -1;
        }
    });
  }
}

const escutaVisualizouPreTwo = setInterval(function() {
    verificarDivVisivelPreTwo();
}, 100);

/* -------------------- PREVIEW THREE -------------------- */
const divIlustracaoPreThree = document.querySelector('div#prethree-ilustracao-animation');
const divTitlePreThree = document.querySelector('div#prethree-title-animation');
const divAboutPreThree = document.querySelector('div#prethree-about-animation');
const divButtonsPreThree = document.querySelector('div#prethree-buttons-animation');

const changeIlustracaoPreThree = document.querySelector('img#ilustracao-prethree-change');
const changeTitlePreThree = document.querySelector('h3#title-prethree-change');
const changeAboutPreThree = document.querySelector('p#about-prethree-change');
const changeButton1PreThree = document.querySelector('a#button1-prethree-change');
const changeButton2PreThree = document.querySelector('a#button2-prethree-change');

let indexChangePreThree = 0;

const listIlustracaoPreThree = [
    [0, './images/preview-three/ilustracao-tecnico-informatica.png'],
    [1, './images/preview-three/ilustracao-tecnico-eletronica.png'],
    [2, './images/preview-three/ilustracao-advogado.png'],
    [3, './images/preview-three/ilustracao-tecnico-ar-condicionado.png'],
    [4, './images/preview-three/ilustracao-desenvolvedor.png'],
    [5, './images/preview-three/ilustracao-professor.png'],
    [6, './images/preview-three/ilustracao-designer.png']
];

const listTitlePreThree = [
    [0, 'Problema no PC?'],
    [1, 'TV queimou?'],
    [2, 'Problema na justiça?'],
    [3, 'Não está gelando?'],
    [4, 'Precisa de um site ou app?'],
    [5, 'Não entendeu um assunto?'],
    [6, 'Precisa de design?']
];

const listAboutPreThree = [
    [0, 'Quer fazer um upgrade em sua máquina, mas tem receio de mexer sem ter a experiência certa? Solicite um técnico de informática para um vídeo chat e receba orientações passo a passo sobre o problema, em vez de precisar que o profissional se desloque até sua casa.'],
    [1, 'Chegar o final de semana e ver seu time golear o adversário não tem preço, certo? Mas na hora do gol, a TV queima. Na Bicco, encontre os melhores técnicos de eletrônica para reviver sua TV e evitar contratempos futuros.'],
    [2, 'Se está enfrentando um processo do vizinho, chame um profissional jurídico para te defender. Na Bicco, encontre uma variedade completa de serviços jurídicos para auxiliar, defender e oferecer suporte. Se precisa de uma consultoria, estamos aqui.'],
    [3, 'Seu ar-condicionado está agindo de forma diferente? Não está resfriando como antes ou demora mais para climatizar? Não se preocupe! Venha para a Bicco, onde encontra os melhores técnicos para resolver o problema.'],
    [4, 'Na Bicco, encontre os melhores desenvolvedores para atender às suas necessidades. Se precisa de um site para seu novo negócio, ou até mesmo um aplicativo, conte conosco. Basta colocar sua proposta em andamento.'],
    [5, 'Chame um professor particular via chat de vídeo para esclarecer assuntos complexos do ensino médio ou acadêmico. Na Bicco, é possível formar turmas de alunos em um determinado assunto, com prazos definidos de ingresso, início e término.'],
    [6, 'Precisando de ilustrações para seu negócio, uma apresentação em palestra, uma reunião ou para promover um projeto independente nas redes sociais? Na Bicco, encontre uma ampla seleção de designers experientes prontos para atender às suas necessidades.']
];

const listButtonsPreThree = [
    [0, 'Solicite uma emergência', 'Saiba mais'],
    [1, 'Aparelho', 'Suporte'],
    [2, 'Chat privado', 'Anonimos'],
    [3, 'Categoria', 'Parceria'],
    [4, 'Projeto', 'Setor'],
    [5, 'Assunto', 'Turma'],
    [6, 'Amostras', 'Aprender']
];

const listDivsPreThree = [divIlustracaoPreThree, divTitlePreThree, divAboutPreThree, divButtonsPreThree];

const setaVoltarPreThree = document.querySelector('img#seta-prethree-one');
const setaAvancarPreThree = document.querySelector('img#seta-prethree-two');

const divParaVerificarPreThree = document.querySelector('div.preview-three');

function verificarDivVisivelThree() {
  const distanciaTopo = divParaVerificarPreThree.getBoundingClientRect().top + 400;
  const alturaJanela = window.innerHeight;

  if (distanciaTopo < alturaJanela) {
    clearInterval(escutaVisualizouPreThree);

    clearInterval(automaticoCarrosselPreTwo);

    this.automaticoCarrosselPreThree = setInterval(function() {
    carrosselSaindo(listDivsPreThree);

    setaVoltarPreThree.addEventListener('click', function() {
        clearTimeout(automaticoCarrosselAvancandoPreThree);
    });

    setaAvancarPreThree.addEventListener('click', function() {
        clearTimeout(automaticoCarrosselAvancandoPreThree);
    });
    
    const automaticoCarrosselAvancandoPreThree = setTimeout(function() {
        carrosselAvancando(listDivsPreThree);

        indexChangePreThree++;
        changeIlustracaoPreThree.setAttribute('src', `${listIlustracaoPreThree[indexChangePreThree][1]}`);
        changeTitlePreThree.textContent = `${listTitlePreThree[indexChangePreThree][1]}`;
        changeAboutPreThree.textContent = `${listAboutPreThree[indexChangePreThree][1]}`;
        changeButton1PreThree.textContent = `${listButtonsPreThree[indexChangePreThree][1]}`;
        changeButton2PreThree.textContent = `${listButtonsPreThree[indexChangePreThree][2]}`;
    }, 900);

    if (indexChangePreThree > 5) {
        indexChangePreThree = -1;
    }
    
    }, 8000);
    
    setaVoltarPreThree.addEventListener('click', function() {
        clearInterval(automaticoCarrosselPreThree);
        carrosselVoltando(listDivsPreThree);
    
        if (indexChangePreThree === 0) {
            indexChangePreThree = 7;
        }
    
        indexChangePreThree--;
        changeIlustracaoPreThree.setAttribute('src', `${listIlustracaoPreThree[indexChangePreThree][1]}`);
        changeTitlePreThree.textContent = `${listTitlePreThree[indexChangePreThree][1]}`;
        changeAboutPreThree.textContent = `${listAboutPreThree[indexChangePreThree][1]}`;
        changeButton1PreThree.textContent = `${listButtonsPreThree[indexChangePreThree][1]}`;
        changeButton2PreThree.textContent = `${listButtonsPreThree[indexChangePreThree][2]}`;
    });
    
    setaAvancarPreThree.addEventListener('click', function() {
        clearInterval(automaticoCarrosselPreThree);
        carrosselAvancando(listDivsPreThree);
    
        indexChangePreThree++;
        changeIlustracaoPreThree.setAttribute('src', `${listIlustracaoPreThree[indexChangePreThree][1]}`);
        changeTitlePreThree.textContent = `${listTitlePreThree[indexChangePreThree][1]}`;
        changeAboutPreThree.textContent = `${listAboutPreThree[indexChangePreThree][1]}`;
        changeButton1PreThree.textContent = `${listButtonsPreThree[indexChangePreThree][1]}`;
        changeButton2PreThree.textContent = `${listButtonsPreThree[indexChangePreThree][2]}`;
    
        if (indexChangePreThree > 5) {
            indexChangePreThree = -1;
        }
    });
  }
}

const escutaVisualizouPreThree = setInterval(function() {
    verificarDivVisivelThree();
}, 100);

/* -------------------- PREVIEW FOUR -------------------- */
const divIlustracaoPreFour = document.querySelector('div#prefour-ilustracao-animation');
const divTitlePreFour = document.querySelector('div#prefour-title-animation');
const divAboutPreFour = document.querySelector('div#prefour-about-animation');
const divButtonsPreFour = document.querySelector('div#prefour-buttons-animation');

const changeIlustracaoPreFour = document.querySelector('img#ilustracao-prefour-change');
const changeTitlePreFour = document.querySelector('h3#title-prefour-change');
const changeAboutPreFour = document.querySelector('p#about-prefour-change');
const changeButton1PreFour = document.querySelector('a#button1-prefour-change');
const changeButton2PreFour = document.querySelector('a#button2-prefour-change');

let indexChangePreFour = 0;

const listIlustracaoPreFour = [
    [0, './images/preview-four/ilustracao-pedreiro.png',],
    [1, './images/preview-four/ilustracao-pintor.png',],
    [2, './images/preview-four/ilustracao-eletricista.png',],
    [3, './images/preview-four/ilustracao-mecanico.png',],
    [4, './images/preview-four/ilustracao-limpador-vidro.png',]
];

const listTitlePreFour = [
    [0, 'Parede rachada?'],
    [1, 'Tinta sumiu?'],
    [2, 'Faltou energia?'],
    [3, 'Carro ficou no prego?'],
    [4, 'Janelas embaçadas?']
];

const listAboutPreFour = [
    [0, 'A casa está quase caindo? Haha! Vá para a Bicco! Temos excelentes profissionais prontos para realizar aquela reforma em sua casa. Na Bicco, você pode solicitar uma visita do profissional para avaliar o orçamento necessário para a obra.'],
    [1, 'Na Bicco, encontre uma diversidade de pintores com estilos e gostos diversos. Explore suas amostras de trabalho, veja fotos do antes e depois de cada serviço, avalie e escolha o pintor perfeito para transformar sua casa.'],
    [2, 'Você estava jogando tranquilamente quando ocorreu um curto-circuito inesperado. O que fazer? Corra para a Bicco! Temos uma seção especializada em emergências, onde seu pedido é tratado como prioridade na busca por profissionais. Eles entrarão em contato.'],
    [3, 'Estava prestes a sair de casa para o trabalho e o carro não quer ligar? Na Bicco, encontre o mecânico mais recomendado e experiente para te ajudar em situações de última hora. Escolha o tipo de serviço e a prioridade, e nunca mais fique na mão. Conte conosco!'],
    [4, 'Seu escritório na empresa ou o seu escritório residencial está com aquelas janelas que dão desgosto? Não se preocupe! Chame um profissional especializado e veja suas janelas ganharem vida novamente. Além disso, você também pode montar uma equipe desses.']
];

const listButtonsPreFour = [
    [0, 'Solicitar visita', 'Recomendações'],
    [1, 'Amostras', 'Estilos'],
    [2, 'Emergencia', 'Atendimento'],
    [3, 'Serviços', 'Regulamentos'],
    [4, 'Equipe', 'Avisos']
];

const listDivsPreFour = [divIlustracaoPreFour, divTitlePreFour, divAboutPreFour, divButtonsPreFour];

const setaVoltarPreFour = document.querySelector('img#seta-prefour-one');
const setaAvancarPreFour = document.querySelector('img#seta-prefour-two');

const divParaVerificarPreFour = document.querySelector('div.preview-four');

function verificarDivVisivelFour() {
  const distanciaTopo = divParaVerificarPreFour.getBoundingClientRect().top + 400;
  const alturaJanela = window.innerHeight;

  if (distanciaTopo < alturaJanela) {
    clearInterval(escutaVisualizouPreFour);

    clearInterval(automaticoCarrosselPreThree);

    this.automaticoCarrosselPreFour = setInterval(function() {
    carrosselSaindo(listDivsPreFour);

    setaVoltarPreFour.addEventListener('click', function() {
        clearTimeout(automaticoCarrosselAvancandoPreFour);
    });

    setaAvancarPreFour.addEventListener('click', function() {
        clearTimeout(automaticoCarrosselAvancandoPreFour);
    });
    
    const automaticoCarrosselAvancandoPreFour = setTimeout(function() {
        carrosselAvancando(listDivsPreFour);

        indexChangePreFour++;
        changeIlustracaoPreFour.setAttribute('src', `${listIlustracaoPreFour[indexChangePreFour][1]}`);
        changeTitlePreFour.textContent = `${listTitlePreFour[indexChangePreFour][1]}`;
        changeAboutPreFour.textContent = `${listAboutPreFour[indexChangePreFour][1]}`;
        changeButton1PreFour.textContent = `${listButtonsPreFour[indexChangePreFour][1]}`;
        changeButton2PreFour.textContent = `${listButtonsPreFour[indexChangePreFour][2]}`;
    }, 900);

    if (indexChangePreFour > 3) {
        indexChangePreFour = -1;
    }
    
    }, 8000);
    
    setaVoltarPreFour.addEventListener('click', function() {
        clearInterval(automaticoCarrosselPreFour);
        carrosselVoltando(listDivsPreFour);
    
        if (indexChangePreFour === 0) {
            indexChangePreFour = 5;
        }
    
        indexChangePreFour--;
        changeIlustracaoPreFour.setAttribute('src', `${listIlustracaoPreFour[indexChangePreFour][1]}`);
        changeTitlePreFour.textContent = `${listTitlePreFour[indexChangePreFour][1]}`;
        changeAboutPreFour.textContent = `${listAboutPreFour[indexChangePreFour][1]}`;
        changeButton1PreFour.textContent = `${listButtonsPreFour[indexChangePreFour][1]}`;
        changeButton2PreFour.textContent = `${listButtonsPreFour[indexChangePreFour][2]}`;
    });
    
    setaAvancarPreFour.addEventListener('click', function() {
        clearInterval(automaticoCarrosselPreFour);
        carrosselAvancando(listDivsPreFour);
    
        indexChangePreFour++;
        changeIlustracaoPreFour.setAttribute('src', `${listIlustracaoPreFour[indexChangePreFour][1]}`);
        changeTitlePreFour.textContent = `${listTitlePreFour[indexChangePreFour][1]}`;
        changeAboutPreFour.textContent = `${listAboutPreFour[indexChangePreFour][1]}`;
        changeButton1PreFour.textContent = `${listButtonsPreFour[indexChangePreFour][1]}`;
        changeButton2PreFour.textContent = `${listButtonsPreFour[indexChangePreFour][2]}`;
    
        if (indexChangePreFour > 3) {
            indexChangePreFour = -1;
        }
    });
  }
}

const escutaVisualizouPreFour = setInterval(function() {
    verificarDivVisivelFour();
}, 100);

/* -------------- FUNCTION PARA PREVIEW FIVE -------------- */
function animationCelular(divTitleCelularLocal, divAboutCelularLocal, divButtonCelularLocal) {
    const divTitleCelular = divTitleCelularLocal;
    const divAboutCelular = divAboutCelularLocal;
    const divButtonCelular = divButtonCelularLocal;

    let positionDivTitleCelular = 200;
    let opacityDivTitleCelular = 0;

    let positionDivAboutCelular = 32;
    let opacityDivAboutCelular = 100;

    let positionDivButtonCelular = 100;
    let opacityDivButtonCelular = 100;

    const animationCelular = setInterval(function() {
        divTitleCelular.style.marginLeft = `${positionDivTitleCelular}px`;
        divTitleCelular.style.opacity = `${opacityDivTitleCelular}%`;

        divAboutCelular.style.marginLeft = `${positionDivAboutCelular}px`;
        divAboutCelular.style.opacity = `${opacityDivAboutCelular}%`;

        divButtonCelular.style.marginLeft = `${positionDivButtonCelular}px`;
        divButtonCelular.style.opacity = `${opacityDivButtonCelular}%`;

        if (positionDivTitleCelular > 0) {
            positionDivTitleCelular -= 3;
            opacityDivTitleCelular += 1.6;
        }

        if (positionDivAboutCelular > 0) {
            positionDivAboutCelular -= 0.5;
            opacityDivAboutCelular += 0.7;
        }

        if (positionDivButtonCelular > 0) {
            positionDivButtonCelular -= 2;
            opacityDivButtonCelular += 0.5;
        }

        if (positionDivTitleCelular === 0 && positionDivAboutCelular === 0 && positionDivButtonCelular === 0) {
            clearInterval(animationCelular);
        }
    }, 1);
}

/* -------------------- PREVIEW FIVE -------------------- */
const divTitleCelularOne = document.querySelector('div#animation-title-celular-one');
const divAboutCelularOne = document.querySelector('div#animation-about-celular-one');
const divButtonCelularOne = document.querySelector('div#animation-button-celular-one');

const divTitleCelularTwo = document.querySelector('div#animation-title-celular-two');
const divAboutCelularTwo = document.querySelector('div#animation-about-celular-two');
const divButtonCelularTwo = document.querySelector('div#animation-button-celular-two');

const divTitleCelularThree = document.querySelector('div#animation-title-celular-three');
const divAboutCelularThree = document.querySelector('div#animation-about-celular-three');
const divButtonCelularThree = document.querySelector('div#animation-button-celular-three');

const divTitleCelularFour = document.querySelector('div#animation-title-celular-four');
const divAboutCelularFour = document.querySelector('div#animation-about-celular-four');
const divButtonCelularFour = document.querySelector('div#animation-button-celular-four');

const divParaVerificarPreFive = document.querySelector('div.preview-five');

function verificarDivVisivelFive() {
    const distanciaTopo = divParaVerificarPreFive.getBoundingClientRect().top + 400;
    const alturaJanela = window.innerHeight;

    if (distanciaTopo < alturaJanela) {
        clearInterval(escutaVisualizouPreFive);

        clearInterval(automaticoCarrosselPreFour);

        animationCelular(divTitleCelularOne, divAboutCelularOne, divButtonCelularOne);

        const anima2 = setInterval(function() {
            clearInterval(anima2);
            animationCelular(divTitleCelularTwo, divAboutCelularTwo, divButtonCelularTwo);
        }, 1000);

        const anima3 = setInterval(function() {
            clearInterval(anima3);
            animationCelular(divTitleCelularThree, divAboutCelularThree, divButtonCelularThree);
        }, 2000);

        const anima4 = setInterval(function() {
            clearInterval(anima4);
            animationCelular(divTitleCelularFour, divAboutCelularFour, divButtonCelularFour);
        }, 3000);
    }
}

const escutaVisualizouPreFive = setInterval(function() {
    verificarDivVisivelFive();
}, 100);

/* -------------------- PREVIEW SIX -------------------- */
const divParaVerificarPreSix = document.querySelector('div.preview-six');

/* ------------- ICONS ANIMATION BACKGROUND ------------ */
const indexIconsAnimation = [
    [0, 100, 30],
    [1, 150, 450],
    [2, 100, 900],
    [3, 150, 1300],
    [4, 450, 200],
    [5, 400, 700],
    [6, 450, 1150],
    [7, 850, 15],
    [8, 800, 360],
    [9, 850, 800],
    [10, 800, 1315],
    [11, 1200, 160],
    [12, 1250, 600],
    [13, 1200, 1100],
    [14, 1650, 80],
    [15, 1600, 300],
    [16, 1650, 900],
    [17, 1600, 1250],
    [18, 2050, 10],
    [19, 2000, 300],
    [20, 2050, 700],
    [21, 2050, 1100],
    [22, 2450, 150],
    [23, 2400, 450],
    [24, 2450, 950],
    [25, 2400, 1300],
    [26, 2800, 30],
    [27, 2850, 450],
    [28, 2800, 900],
    [29, 2850, 1300],
    [30, 3250, 200],
    [31, 3200, 700],
    [32, 3250, 1150],
    [33, 3650, 15],
    [34, 3600, 360],
    [35, 3650, 800],
    [36, 3600, 1315],
    [37, 4000, 160],
    [38, 4050, 600],
    [39, 4000, 1100],
    [40, 4450, 80],
    [41, 4400, 300],
    [42, 4450, 900],
    [43, 4400, 1250],
    [44, 4850, 10],
    [45, 4800, 300],
    [46, 4850, 700],
    [47, 4850, 1100],
    [48, 5250, 150],
    [49, 5200, 450],
    [50, 5250, 950],
    [51, 5200, 1300],
    [26, 5600, 30],
    [27, 5650, 450],
    [28, 5600, 900],
    [29, 5650, 1300],
    [30, 6050, 200],
    [31, 6000, 700],
    [32, 6050, 1150],
    [33, 6250, 15],
    [34, 6200, 360],
    [35, 6250, 800],
    [36, 6200, 1315],
    [37, 6400, 160],
    [38, 6450, 600],
    [39, 6400, 1100],
    [40, 6850, 80],
    [41, 6800, 300],
    [42, 6850, 900]
];

const speedIconsAnimation = [
    [0, 'speed0'],
    [1, 'speed1'],
    [2, 'speed2'],
    [3, 'speed3'],
];

let indiceIconesAnimacao = 0;
let velocidadeIconesAnimacao = 0;

const divBody = document.body;
const divFilho = document.querySelector('div.preview-one');

for (let i = 0; i <= 42; i++) {
    const newElementImg = document.createElement('img');
    newElementImg.setAttribute('src', `./images/images-gerais/icons-animation/icon${indiceIconesAnimacao + 1}.png`);
    newElementImg.setAttribute('class', `icons ${speedIconsAnimation[velocidadeIconesAnimacao][1]}`);
    ++velocidadeIconesAnimacao;
    if (velocidadeIconesAnimacao > 3) {
        velocidadeIconesAnimacao = 0;
    }
    if (indiceIconesAnimacao === 33) {
        newElementImg.setAttribute('id', 'icon-surpresa');
    }
    newElementImg.style.top = `${indexIconsAnimation[indiceIconesAnimacao][1]}px`;
    newElementImg.style.left = `${indexIconsAnimation[indiceIconesAnimacao][2]}px`;
    ++indiceIconesAnimacao;

    divBody.insertBefore(newElementImg, divFilho);
}

const AllImagesIcons0 = document.querySelectorAll('img.icons.speed0');
AllImagesIcons0.forEach(function(img) {
    let refereciaTopImage = img.offsetTop;
    setInterval(function() {
        img.style.top = `${refereciaTopImage - (window.pageYOffset / 2)}px`;
    }, 1);
});

const AllImagesIcons1 = document.querySelectorAll('img.icons.speed1');
AllImagesIcons1.forEach(function(img) {
    let refereciaTopImage = img.offsetTop;
    setInterval(function() {
        img.style.top = `${refereciaTopImage - (window.pageYOffset / 3)}px`;
    }, 1);
});

const AllImagesIcons2 = document.querySelectorAll('img.icons.speed2');
AllImagesIcons2.forEach(function(img) {
    let refereciaTopImage = img.offsetTop;
    setInterval(function() {
        img.style.top = `${refereciaTopImage - (window.pageYOffset / 4)}px`;
    }, 1);
});

const AllImagesIcons3 = document.querySelectorAll('img.icons.speed3');
AllImagesIcons3.forEach(function(img) {
    let refereciaTopImage = img.offsetTop;
    setInterval(function() {
        img.style.top = `${refereciaTopImage - (window.pageYOffset / 5)}px`;
    }, 1);
});
